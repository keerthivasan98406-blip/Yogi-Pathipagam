import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/guidelines', label: 'Manuscript Guidelines' },
  { to: '/policies', label: 'Policies' },
  { to: '/issues', label: 'Archives' },
  { to: '/about', label: 'Editorial Board' },
  { to: '/contact', label: 'Contact Us' },
]

// Only this runs as a ticker — on the very top bar only
const topTickerText =
  'Yogi Pathipagam  ·  Tamizhosai International Journal for Tamil Language and Literary Studies  ·  ISSN (Online): 2XXX-XXXX  ·  ISSN (Print): 2XXX-XXXX  ·  Peer-Reviewed  ·  Open Access  ·  Bi-Annual  ·  UGC CARE  ·  '

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50">

      {/* ── BAR 1: TOP TICKER — journal identity scrolling ── */}
      <div className="bg-[#0d2240] overflow-hidden" style={{ height: '26px' }}>
        <div className="ticker-inner h-full flex items-center text-[11px] font-medium tracking-wide">
          <span className="text-amber-300 whitespace-nowrap px-8">{topTickerText.repeat(4)}</span>
        </div>
      </div>

      {/* ── BAR 2: LOGO BAR — static, no ticker ── */}
      <div className="bg-[#1a3a6b] dark:bg-[#0d2240] py-3 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">

          {/* Logo + name */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo.png"
              alt="Yogi Pathipagam – Tamizhosai Journal"
              className="h-14 w-14 object-cover rounded-full border-2 border-amber-400 shadow-lg bg-white shrink-0"
            />
            <div className="leading-snug">
              <p className="font-black text-white text-base tracking-wide">Yogi Pathipagam</p>
              <p className="text-amber-300 font-semibold text-xs">Tamizhosai International Journal</p>
              <p className="text-blue-200 text-[10px]">for Tamil Language and Literary Studies</p>
            </div>
          </Link>

          {/* Centre: nav links */}
          <div className="hidden lg:flex items-center justify-start flex-1 gap-1 ml-28">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-150 whitespace-nowrap rounded-full border ${
                  location.pathname === l.to
                    ? 'bg-amber-500 border-amber-400 text-white shadow-md shadow-amber-900/40'
                    : 'text-blue-200 border-transparent hover:border-amber-400/50 hover:bg-white/10 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Dark mode (desktop only) + mobile menu */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggle}
              className="hidden lg:block p-2 rounded text-blue-200 hover:text-amber-300 hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen(o => !o)}
              className="lg:hidden p-2 rounded text-blue-200 hover:bg-white/10 transition-colors"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile nav ── */}
      {open && (
        <nav className="lg:hidden bg-[#0d2240] border-t border-white/10 shadow-xl">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-5 py-3 text-sm border-b border-white/10 ${
                location.pathname === l.to
                  ? 'bg-amber-500 text-white font-semibold'
                  : 'text-blue-100 hover:bg-[#1a3a6b]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-3 w-full px-5 py-3 text-sm text-blue-100 hover:bg-[#1a3a6b] border-b border-white/10"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      )}

    </header>
  )
}

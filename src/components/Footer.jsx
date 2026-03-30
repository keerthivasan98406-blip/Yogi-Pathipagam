import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0d2240] text-white mt-8">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded bg-white flex items-center justify-center shrink-0">
              <span className="tamil-text text-[#1a3a6b] font-black text-base">யோ</span>
            </div>
            <div>
              <p className="font-bold text-sm text-white">Yogi Pathipagam</p>
              <p className="text-xs text-amber-300">Tamizhosai International Journal</p>
            </div>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            A peer-reviewed, open access international journal for Tamil language and literary studies. Published bi-annually in Tamil and English.
          </p>
          <div className="mt-3 space-y-0.5 text-xs text-white/40 font-mono">
            <p>ISSN (Online): 2XXX-XXXX</p>
            <p>ISSN (Print): 2XXX-XXXX</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-amber-300 text-xs mb-3 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-1.5">
            {[
              { to: '/', label: 'Home' },
              { to: '/guidelines', label: 'Manuscript Guidelines' },
              { to: '/policies', label: 'Policies' },
              { to: '/issues', label: 'Archives' },
              { to: '/about', label: 'Editorial Board' },
              { to: '/contact', label: 'Contact Us' },
            ].map(l => (
              <li key={l.to}>
                <Link to={l.to} className="text-xs text-white/60 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-500">›</span> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-amber-300 text-xs mb-3 uppercase tracking-widest">Contact</h4>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2 text-xs text-white/60">
              <MapPin size={13} className="text-amber-400 mt-0.5 shrink-0" />
              Yogi Pathipagam, Chennai – 600 001, Tamil Nadu, India
            </li>
            <li className="flex items-center gap-2 text-xs text-white/60">
              <Mail size={13} className="text-amber-400 shrink-0" />
              <a href="mailto:editor@tamizhosai.org" className="hover:text-amber-300 transition-colors">editor@tamizhosai.org</a>
            </li>
            <li className="flex items-center gap-2 text-xs text-white/60">
              <Phone size={13} className="text-amber-400 shrink-0" />
              +91 44 1234 5678
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-3 text-center text-xs text-white/30">
        © 2026 Yogi Pathipagam. All rights reserved.
        &nbsp;|&nbsp;
        <span className="tamil-text">யோகி பதிப்பகம்</span>
      </div>
    </footer>
  )
}

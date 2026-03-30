import React from 'react'
import { Link } from 'react-router-dom'
import { Download, ExternalLink } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-full space-y-4">

      {/* Current Issue */}
      <div className="section-box">
        <div className="section-head">Current Issue</div>
        <div className="section-body space-y-1">
          <p className="font-bold text-[#1a3a6b] dark:text-amber-400 text-sm">Volume 3, Issue 1</p>
          <p className="text-xs text-gray-500">January – June 2026</p>
          <Link to="/issues" className="inline-block mt-2 btn-primary text-xs">View Issue</Link>
        </div>
      </div>

      {/* Indexing */}
      <div className="section-box">
        <div className="section-head">Indexing & Abstracting</div>
        <div className="section-body">
          <ul className="space-y-1.5 text-xs">
            {['Google Scholar', 'ResearchGate', 'Academia.edu', 'ROAD (ISSN)', 'BASE (Bielefeld)', 'WorldCat'].map(i => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Downloads */}
      <div className="section-box">
        <div className="section-head">Downloads</div>
        <div className="section-body space-y-2">
          {['Paper Format Template', 'Copyright Transfer Form', 'Author Declaration Form'].map(d => (
            <a key={d} href="#" className="flex items-center gap-2 text-xs text-[#1a3a6b] dark:text-amber-400 hover:underline">
              <Download size={12} /> {d}
            </a>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="section-box">
        <div className="section-head">Submit Paper</div>
        <div className="section-body space-y-2 text-xs">
          <p className="text-gray-600 dark:text-gray-400">Send your manuscript to:</p>
          <a href="mailto:editor@tamizhosai.org" className="text-[#1a3a6b] dark:text-amber-400 font-medium break-all hover:underline block">
            editor@tamizhosai.org
          </a>
          <Link to="/guidelines" className="block mt-2 btn-primary text-xs text-center">View Guidelines</Link>
        </div>
      </div>

      {/* Publisher */}
      <div className="section-box">
        <div className="section-head">Publisher</div>
        <div className="section-body text-xs space-y-1">
          <p className="font-bold text-[#1a3a6b] dark:text-amber-400">Yogi Pathipagam</p>
          <p className="text-gray-600 dark:text-gray-400">Chennai – 600 001</p>
          <p className="text-gray-600 dark:text-gray-400">Tamil Nadu, India</p>
          <a href="#" className="flex items-center gap-1 text-[#1a3a6b] dark:text-amber-400 hover:underline mt-1">
            <ExternalLink size={11} /> Publisher Website
          </a>
        </div>
      </div>

    </aside>
  )
}

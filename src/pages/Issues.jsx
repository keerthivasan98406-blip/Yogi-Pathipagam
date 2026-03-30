import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Download, FileText } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { volumes } from '../data/siteData'

function IssueBlock({ vol, issue }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded mb-3">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors text-left rounded"
        aria-expanded={open}
      >
        <div>
          <span className="font-semibold text-sm text-blue-900 dark:text-amber-400">
            Volume {vol}, Issue {issue.issue}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-3">{issue.month}</span>
          <span className="text-xs text-gray-400 ml-2">({issue.articles.length} articles)</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={e => e.stopPropagation()}
            className="hidden sm:flex items-center gap-1 text-xs text-blue-800 dark:text-amber-400 hover:underline"
          >
            <Download size={12} /> Full Issue PDF
          </a>
          {open ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
        </div>
      </button>

      {open && (
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {issue.articles.map((article, i) => (
            <div key={i} className="px-4 py-3 flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
              <div className="flex items-start gap-2">
                <FileText size={14} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{article.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{article.author} &nbsp;|&nbsp; pp. {article.pages}</p>
                </div>
              </div>
              <a href="#" className="flex items-center gap-1 text-xs text-blue-800 dark:text-amber-400 hover:underline shrink-0">
                <Download size={12} /> PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Issues() {
  const [search, setSearch] = useState('')

  const filtered = volumes.map(v => ({
    ...v,
    issues: v.issues.map(iss => ({
      ...iss,
      articles: iss.articles.filter(a =>
        !search ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.author.toLowerCase().includes(search.toLowerCase())
      ),
    })).filter(iss => !search || iss.articles.length > 0),
  })).filter(v => !search || v.issues.length > 0)

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1 min-w-0">

          <div className="section-box">
            <div className="section-head tamil-text">காப்பகம் | Archives</div>
            <div className="section-body">
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by article title or author..."
                className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-5"
              />

              {filtered.map(vol => (
                <div key={vol.vol} className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded">
                      Volume {vol.vol} ({vol.year})
                    </div>
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                  </div>
                  {vol.issues.map(issue => (
                    <IssueBlock key={`${vol.vol}-${issue.issue}`} vol={vol.vol} issue={issue} />
                  ))}
                </div>
              ))}

              {filtered.length === 0 && (
                <p className="text-sm text-gray-400 text-center py-8">No articles found matching your search.</p>
              )}
            </div>
          </div>

        </main>
        <div className="lg:w-56 xl:w-64 shrink-0"><Sidebar /></div>
      </div>
    </div>
  )
}


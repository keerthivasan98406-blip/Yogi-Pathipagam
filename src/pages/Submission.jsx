import React, { useState } from 'react'
import { Upload, Download, CheckCircle, FileText, AlertCircle } from 'lucide-react'

function PageHero({ title, subtitle }) {
  return (
    <div className="bg-gradient-to-br from-maroon-950 via-maroon-800 to-maroon-700 pt-32 pb-16 text-center text-white">
      <p className="tamil-text text-amber-400 text-lg mb-2">சமர்ப்பிக்கவும்</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-white/70 text-lg max-w-2xl mx-auto">{subtitle}</p>
    </div>
  )
}

export default function Submission() {
  const [form, setForm] = useState({ name: '', email: '', title: '', abstract: '', file: null })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.title.trim()) e.title = 'Paper title is required'
    if (!form.file) e.file = 'Please upload your manuscript'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const handleChange = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    setErrors(er => ({ ...er, [field]: undefined }))
  }

  const handleFile = (e) => {
    setForm(f => ({ ...f, file: e.target.files[0] }))
    setErrors(er => ({ ...er, file: undefined }))
  }

  const guidelines = [
    { step: '01', title: 'Prepare Your Manuscript', desc: 'Format your paper according to our template. Use Times New Roman 12pt, double-spaced, with 1-inch margins.' },
    { step: '02', title: 'Check Plagiarism', desc: 'Ensure your manuscript has less than 15% similarity. Include a plagiarism report with your submission.' },
    { step: '03', title: 'Prepare Supplementary Files', desc: 'Include a cover letter, author details (separate file), and any figures/tables as separate files.' },
    { step: '04', title: 'Submit Online', desc: 'Complete the submission form below and upload your manuscript in PDF or DOCX format.' },
  ]

  return (
    <div>
      <PageHero title="Submit Your Paper" subtitle="Share your research with the global Tamil studies community" />

      {/* Guidelines */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">How to Submit</span>
            <h2 className="section-title mt-2">Author Guidelines</h2>
            <p className="tamil-text text-sm text-gray-500 dark:text-gray-400 mt-1">ஆசிரியர் வழிகாட்டுதல்கள்</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {guidelines.map(g => (
              <div key={g.step} className="card p-6 border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-black text-maroon-50 dark:text-maroon-950 select-none">{g.step}</span>
                <div className="w-10 h-10 rounded-xl bg-maroon-700 text-white flex items-center justify-center font-bold mb-4 relative z-10">
                  {g.step}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 relative z-10">{g.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm relative z-10">{g.desc}</p>
              </div>
            ))}
          </div>

          {/* Formatting specs */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-blue-900 dark:text-amber-400 text-lg mb-4 flex items-center gap-2">
                <FileText size={20} /> கையெழுத்துப் பிரதி தேவைகள் | Manuscript Requirements
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {[
                  'Word limit: 4,000–8,000 words (excluding references)',
                  'Abstract: 150–250 words',
                  'Keywords: 5–8 keywords',
                  'Font: Times New Roman 12pt (English), Latha 12pt (Tamil)',
                  'Line spacing: Double-spaced',
                  'Referencing style: APA 7th Edition',
                  'File format: PDF or DOCX',
                  'Figures: Minimum 300 DPI resolution',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6 border border-gray-100 dark:border-gray-800">
              <h3 className="font-bold text-blue-900 dark:text-amber-400 text-lg mb-4 flex items-center gap-2">
                <AlertCircle size={20} /> முக்கியமான குறிப்புகள் | Important Notes
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                {[
                  'Manuscripts must be original and not under review elsewhere',
                  'Author details must be removed from the main manuscript',
                  'All co-authors must be listed with their affiliations',
                  'Ethical approval required for human/animal studies',
                  'Processing fee: ₹1,500 (waived for members)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <Download size={16} /> Download Template
              </button>
            </div>
          </div>

          {/* Submission Form */}
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-amber-400 mb-6">Online Submission Form</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Submission Received!</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Thank you for submitting to Tamizhosai Journal. You will receive a confirmation email within 24 hours. The review process typically takes 4–6 weeks.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', title: '', abstract: '', file: null }) }} className="btn-primary">
                    Submit Another Paper
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {[
                    { id: 'name', label: 'Corresponding Author Name', type: 'text', placeholder: 'Dr. [Full Name]' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: '[email@institution.edu]' },
                    { id: 'title', label: 'Paper Title', type: 'text', placeholder: 'Enter the full title of your manuscript' },
                  ].map(field => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        {field.label} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        value={form[field.id]}
                        onChange={handleChange(field.id)}
                        placeholder={field.placeholder}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-maroon-500 transition-colors ${
                          errors[field.id] ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
                        }`}
                      />
                      {errors[field.id] && <p className="text-red-500 text-xs mt-1">{errors[field.id]}</p>}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="abstract" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Abstract
                    </label>
                    <textarea
                      id="abstract"
                      rows={4}
                      value={form.abstract}
                      onChange={handleChange('abstract')}
                      placeholder="Paste your abstract here (150–250 words)..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-maroon-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Upload Manuscript <span className="text-red-500">*</span>
                    </label>
                    <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${
                      errors.file ? 'border-red-400 bg-red-50 dark:bg-red-950/20' : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 hover:border-maroon-400 hover:bg-maroon-50 dark:hover:bg-maroon-950/20'
                    }`}>
                      <Upload size={24} className="text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {form.file ? form.file.name : 'Click to upload PDF or DOCX'}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Max file size: 10MB</p>
                      <input type="file" accept=".pdf,.docx,.doc" onChange={handleFile} className="hidden" />
                    </label>
                    {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                    <Upload size={18} /> Submit Manuscript
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import Sidebar from '../components/Sidebar'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) setSent(true)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1 min-w-0">

          <div className="section-box">
            <div className="section-head tamil-text">தொடர்பு கொள்ளுங்கள் | Contact Us</div>
            <div className="section-body">
              <div className="grid sm:grid-cols-2 gap-8">
                {/* Info */}
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-blue-800 dark:text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-900 dark:text-amber-400">Yogi Pathipagam</p>
                      <p>No. 12, Anna Salai</p>
                      <p>Chennai – 600 001</p>
                      <p>Tamil Nadu, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-blue-800 dark:text-amber-400 shrink-0" />
                    <div>
                      <a href="mailto:editor@tamizhosai.org" className="text-blue-800 dark:text-amber-400 hover:underline block">editor@tamizhosai.org</a>
                      <a href="mailto:tamizhosaijournal@gmail.com" className="text-blue-800 dark:text-amber-400 hover:underline block">tamizhosaijournal@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-blue-800 dark:text-amber-400 shrink-0" />
                    <a href="tel:+914412345678" className="text-blue-800 dark:text-amber-400 hover:underline">+91 44 1234 5678</a>
                  </div>

                  {/* Map */}
                  <div className="rounded border border-gray-200 dark:border-gray-700 overflow-hidden mt-4 h-48">
                    <iframe
                      title="Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d7b8b8b8b8%3A0x0!2sAnna+Salai%2C+Chennai!5e0!3m2!1sen!2sin!4v1"
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Form */}
                <div>
                  {sent ? (
                    <div className="text-center py-8">
                      <p className="text-green-600 font-semibold text-lg mb-2">✓ Message Sent!</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">We'll get back to you within 2 business days.</p>
                      <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }} className="btn-outline text-xs">Send Another</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 text-sm">
                      {[
                        { id: 'name', label: 'Name', type: 'text', placeholder: '[Your Name]' },
                        { id: 'email', label: 'Email', type: 'email', placeholder: '[email@example.com]' },
                        { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject' },
                      ].map(f => (
                        <div key={f.id}>
                          <label htmlFor={f.id} className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">{f.label} *</label>
                          <input
                            id={f.id} type={f.type} required placeholder={f.placeholder}
                            value={form[f.id]} onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                            className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-maroon-500"
                          />
                        </div>
                      ))}
                      <div>
                        <label htmlFor="message" className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Message *</label>
                        <textarea
                          id="message" rows={5} required placeholder="Your message..."
                          value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                          className="w-full px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-maroon-500 resize-none"
                        />
                      </div>
                      <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>

        </main>
        <div className="lg:w-56 xl:w-64 shrink-0"><Sidebar /></div>
      </div>
    </div>
  )
}


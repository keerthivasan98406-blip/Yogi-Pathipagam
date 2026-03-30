import React from 'react'
import { Download } from 'lucide-react'
import Sidebar from '../components/Sidebar'

export default function Guidelines() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1 min-w-0">

          <div className="section-box">
            <div className="section-head tamil-text">கையெழுத்துப் பிரதி வழிகாட்டுதல்கள் | Manuscript Guidelines</div>
            <div className="section-body space-y-4 text-sm text-gray-700 dark:text-gray-300">
              <p className="tamil-text leading-loose">
                தமிழோசை சர்வதேச இதழில் கையெழுத்துப் பிரதிகளை சமர்ப்பிப்பதற்கு முன்பு ஆசிரியர்கள் கீழே உள்ள வழிகாட்டுதல்களை கவனமாக படித்து பின்பற்றுமாறு கேட்டுக்கொள்கிறோம்.
              </p>
              <p>
                Authors are requested to carefully read and follow the guidelines below before submitting their manuscripts to the Tamizhosai International Journal for Tamil Language and Literary Studies.
              </p>

              <div>
                <h3 className="font-semibold text-blue-900 dark:text-amber-400 mb-2">1. பொது வழிமுறைகள் | General Instructions</h3>
                <p className="tamil-text text-xs leading-loose mb-2 text-gray-600 dark:text-gray-400">
                  கையெழுத்துப் பிரதிகள் அசல் ஆக இருக்க வேண்டும், வேறு எங்கும் வெளியிடப்படவில்லை அல்லது மதிப்பாய்வில் இல்லாமல் இருக்க வேண்டும். சமர்ப்பிப்புகள் தமிழ் மற்றும்/அல்லது ஆங்கிலத்தில் ஏற்றுக்கொள்ளப்படும்.
                </p>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Manuscripts must be original and not published or under review elsewhere.</li>
                  <li>Submissions are accepted in Tamil and/or English.</li>
                  <li>The manuscript must be free from plagiarism (similarity index below 15%).</li>
                  <li>All authors must be listed with their full names, designations, and affiliations.</li>
                  <li>The corresponding author's email address must be provided.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900 dark:text-amber-400 mb-2">2. கட்டுரை வடிவம் | Paper Format</h3>
                <table className="w-full border border-gray-200 dark:border-gray-700 text-xs">
                  <tbody>
                    {[
                      ['Paper Size', 'A4'],
                      ['Font (English)', 'Times New Roman, 12pt'],
                      ['Font (Tamil)', 'Latha or Bamini, 12pt'],
                      ['Line Spacing', 'Double spaced'],
                      ['Margins', '1 inch on all sides'],
                      ['Word Limit', '4,000 – 8,000 words (excluding references)'],
                      ['Abstract', '150 – 250 words'],
                      ['Keywords', '5 – 8 keywords'],
                      ['Referencing Style', 'APA 7th Edition'],
                      ['File Format', 'MS Word (.docx) or PDF'],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="px-3 py-2 bg-blue-50 dark:bg-blue-950/40 font-medium text-blue-900 dark:text-amber-400 w-1/3">{k}</td>
                        <td className="px-3 py-2">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900 dark:text-amber-400 mb-2">3. கையெழுத்துப் பிரதியின் அமைப்பு | Structure of the Manuscript</h3>
                <ol className="space-y-1.5 list-decimal list-inside">
                  <li>Title (Tamil and/or English)</li>
                  <li>Author name(s), designation, affiliation, and email</li>
                  <li>Abstract (Tamil and/or English)</li>
                  <li>Keywords</li>
                  <li>Introduction</li>
                  <li>Main body with section headings</li>
                  <li>Conclusion</li>
                  <li>References (APA 7th Edition)</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900 dark:text-amber-400 mb-2">4. சமர்ப்பிப்பு செயல்முறை | Submission Process</h3>
                <p className="tamil-text text-xs leading-loose mb-2 text-gray-600 dark:text-gray-400">
                  உங்கள் கையெழுத்துப் பிரதியை பின்வரும் ஆவணங்களுடன் அனுப்பவும்:
                </p>
                <p className="mb-2">Send your manuscript along with the following documents to:</p>
                <p className="font-medium">
                  <a href="mailto:editor@tamizhosai.org" className="text-blue-800 dark:text-amber-400 hover:underline">editor@tamizhosai.org</a>
                  {' '}(or){' '}
                  <a href="mailto:tamizhosaijournal@gmail.com" className="text-blue-800 dark:text-amber-400 hover:underline">tamizhosaijournal@gmail.com</a>
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside">
                  <li>Main manuscript (author details removed for blind review)</li>
                  <li>Title page with author details</li>
                  <li>Copyright Transfer Agreement (signed)</li>
                  <li>Plagiarism report (Turnitin or iThenticate)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900 dark:text-amber-400 mb-2">5. கட்டுரை செயலாக்கக் கட்டணம் (APC) | Article Processing Charge (APC)</h3>
                <table className="w-full border border-gray-200 dark:border-gray-700 text-xs">
                  <tbody>
                    {[
                      ['Indian Authors', '₹1,500 per article'],
                      ['International Authors', 'USD 30 per article'],
                      ['Journal Members', 'Waived / Discounted'],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="px-3 py-2 bg-blue-50 dark:bg-blue-950/40 font-medium text-blue-900 dark:text-amber-400 w-1/2">{k}</td>
                        <td className="px-3 py-2">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#" className="flex items-center gap-2 btn-primary">
                  <Download size={14} /> Paper Format Template
                </a>
                <a href="#" className="flex items-center gap-2 btn-outline">
                  <Download size={14} /> Copyright Transfer Form
                </a>
              </div>
            </div>
          </div>

        </main>
        <div className="lg:w-56 xl:w-64 shrink-0"><Sidebar /></div>
      </div>
    </div>
  )
}


import React from 'react'
import Sidebar from '../components/Sidebar'

const advisoryBoard = [
  {
    name: 'Dr. Mohana Dass A/l Ramasamy, M.A., Ph.D.',
    role: 'Head of the Department, Indian Studies, Faculty of Arts and Social Sciences',
    affiliation: 'University of Malaya, Malaysia',
    email: 'mohana@um.edu.my',
  },
  {
    name: 'Dr. Sascha Ebeling, M.A., Ph.D.',
    role: 'Associate Professor, Department of South Asian Languages and Civilizations',
    affiliation: 'The University of Chicago, USA',
    email: 'ebeling@uchicago.edu',
  },
  {
    name: 'Dr. Sundar Balasubramanian',
    role: 'Associate Professor, Department of Radiation Medicine',
    affiliation: 'Medical University of South Carolina, USA',
    email: 'balasubr@musc.edu',
  },
  {
    name: 'Dr. Sasi Kumar, M.A. Ling., M.A. Tam., M.Phil., Ph.D.',
    role: 'Teaching Fellow, Asian Languages & Cultures Academic Group',
    affiliation: 'Nanyang Technological University, Singapore',
    email: 'sasikumar@nie.edu.sg',
  },
  {
    name: 'Dr. J. B. Prashant More, M.A., Ph.D.',
    role: 'Professor of Social Sciences',
    affiliation: 'Institute of Research in Social Sciences and Humanities, Paris, France',
    email: 'morejbp@inseec.fr',
  },
  {
    name: 'Dr. V. Ramarajapandian, M.A., Ph.D.',
    role: 'Chairperson, School of Tamil Studies; Professor & Head, Department of Modern Literature',
    affiliation: 'Madurai Kamarasar University, Madurai, Tamil Nadu, India',
    email: 'ramarajapandian@mkuniversity.org',
  },
  {
    name: 'Dr. S. Kulandhaivel, M.A., M.Phil., Ph.D.',
    role: 'Head & Assistant Professor of English',
    affiliation: 'Ganesar Arts and Science College, Melasivapuri, Tamil Nadu, India',
    email: 'english.kulandhai@gmail.com',
  },
  {
    name: 'Dr. P. M. Jayakala, M.A., M.Phil., Ph.D.',
    role: 'Associate Professor of Tamil',
    affiliation: 'S.T. Hindu College, Nagercoil, Tamil Nadu, India',
    email: 'jayasthc@gmail.com',
  },
  {
    name: 'Dr. K. Nagendran, M.A., M.Phil., M.Ed., Ph.D.',
    role: 'Assistant Professor of Tamil',
    affiliation: 'SRNM College, Sattur, Virudhunagar District, Tamil Nadu, India',
    email: 'nagendran@srnmcollege.ac.in',
  },
  {
    name: 'Dr. M. Vinoth Kumar, M.A. Eng., M.A. Ling., M.Phil., Ph.D.',
    role: 'Guest Lecturer in English',
    affiliation: 'Government College of Arts and Sciences, Nagalapuram, Thoothukudi, Tamil Nadu, India',
    email: 'vinothkumar@tamizhosai.org',
  },
]

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1 min-w-0">

          {/* Patron */}
          <div className="section-box">
            <div className="section-head tamil-text">ஆதரவாளர்கள் | Patrons</div>
            <div className="section-body">
              <p className="tamil-text text-sm leading-loose mb-2 text-gray-600 dark:text-gray-400 italic">
                செயற்பாலது ஓரும் அறனே; ஒருவற்கு உயற்பாலது ஓரும் பழி. (குறள்- 40)
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 italic">
                "The only virtue is that which is worth doing; the only disgrace is that which is worth avoiding." (Kural – 40)
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Late N. Dharmalingam – D. Pandiammal</p>
            </div>
          </div>

          {/* Editor in Chief */}
          <div className="section-box">
            <div className="section-head">Editor-in-Chief</div>
            <div className="section-body">
              <div className="flex flex-col sm:flex-row gap-4">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=maheswari&backgroundColor=b6e3f4"
                  alt="Editor-in-Chief"
                  className="w-20 h-20 rounded border border-gray-200 dark:border-gray-700 object-cover"
                />
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p className="tamil-text font-semibold text-blue-900 dark:text-amber-400">
                    முனைவர் த. மகேஸ்வரி, எம்.ஏ. (தமிழ்)., எம்.ஏ. (ஆங்கிலம்)., எம்.பில்., SET., பி.லிட்., பிஎச்.டி.
                  </p>
                  <p className="font-semibold text-blue-900 dark:text-amber-400">
                    Dr. D. Maheswari, M.A (Tamil)., M.A. (English)., M.Phil., SET., B.Litt., Ph.D.
                  </p>
                  <p>Editor-in-Chief, Tamizhosai International Journal for Tamil Language and Literary Studies</p>
                  <p>Virudhunagar, Tamil Nadu, India</p>
                  <a href="mailto:editor@tamizhosai.org" className="text-blue-800 dark:text-amber-400 hover:underline">
                    editor@tamizhosai.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Board */}
          <div className="section-box">
            <div className="section-head tamil-text">ஆலோசனை ஆசிரியர் குழு | Advisory Editorial Board</div>
            <div className="section-body p-0">
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {advisoryBoard.map((member, i) => (
                  <div key={i} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                    <p className="font-semibold text-sm text-blue-900 dark:text-amber-400">{member.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{member.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{member.affiliation}</p>
                    <a href={`mailto:${member.email}`} className="text-xs text-blue-700 dark:text-amber-500 hover:underline">
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Former Board */}
          <div className="section-box">
            <div className="section-head tamil-text">முன்னாள் ஆசிரியர் குழு | Former Editorial Board</div>
            <div className="section-body text-sm text-gray-700 dark:text-gray-300">
              <p className="tamil-text leading-loose mb-2">
                தமிழோசை இதழின் வளர்ச்சிக்கும் சர்வதேச அறிஞர்களிடையே அதன் பரவலுக்கும் பங்களித்த முதல் மற்றும் இரண்டாம் ஆசிரியர் குழு உறுப்பினர்களுக்கு நன்றி தெரிவிக்கிறோம். 2024–2025 காலகட்டத்தில் தமிழ் ஆய்வுத் துறையில் அவர்கள் ஆற்றிய சேவையை நாம் பதிவு செய்கிறோம்.
              </p>
              <p>
                We thank the first and second panels of Editorial Board members for their invaluable contribution to the Tamizhosai Journal and its reach to international academicians. We register their contribution in peer-review and editorial workflow in the service of Tamil Studies from 2024–2025.
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 mt-3 text-xs text-blue-800 dark:text-amber-400 hover:underline">
                📄 Download PDF
              </a>
            </div>
          </div>

        </main>
        <div className="lg:w-56 xl:w-64 shrink-0"><Sidebar /></div>
      </div>
    </div>
  )
}


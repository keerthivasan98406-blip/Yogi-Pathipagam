import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Policies() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1 min-w-0">

          {/* Peer Review */}
          <div className="section-box">
            <div className="section-head tamil-text">சக மதிப்பாய்வுக் கொள்கை | Peer Review Policy</div>
            <div className="section-body text-sm text-gray-700 dark:text-gray-300 space-y-3">
              <p className="tamil-text leading-loose">
                தமிழோசை இதழ் கடுமையான இரட்டை-குருட்டு சக மதிப்பாய்வு முறையைப் பின்பற்றுகிறது. சார்பற்ற மதிப்பீட்டை உறுதிப்படுத்த, மதிப்பாய்வு செயல்முறை முழுவதும் ஆசிரியர்களும் மதிப்பாய்வாளர்களும் அநாமதேயமாக இருப்பார்கள்.
              </p>
              <p>
                Tamizhosai Journal follows a rigorous <strong>double-blind peer review</strong> process. Both the authors and reviewers remain anonymous throughout the review process to ensure unbiased evaluation.
              </p>
              <table className="w-full border border-gray-200 dark:border-gray-700 text-xs">
                <tbody>
                  {[
                    ['Review Type', 'Double-blind'],
                    ['Minimum Reviewers', '2 per manuscript'],
                    ['Review Duration', '4 – 6 weeks'],
                    ['Possible Decisions', 'Accept / Minor Revision / Major Revision / Reject'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="px-3 py-2 bg-blue-50 dark:bg-blue-950/40 font-medium text-blue-900 dark:text-amber-400 w-1/3">{k}</td>
                      <td className="px-3 py-2">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="tamil-text leading-loose">
                தொடர்புடைய பொருள் துறையில் நிபுணத்துவம் கொண்டவர்களை மதிப்பாய்வாளர்களாக தேர்ந்தெடுக்கிறோம். மதிப்பாய்வாளர்களின் பரிந்துரைகளின் அடிப்படையில் ஆசிரியர் குழு இறுதி முடிவுகளை எடுக்கும். ஆசிரியர்கள் 30 நாட்களுக்குள் விரிவான மறுப்பு அளிப்பதன் மூலம் முடிவுகளை மேல்முறையீடு செய்யலாம்.
              </p>
              <p>
                Reviewers are selected based on their expertise in the relevant subject area. The editorial board makes final decisions based on reviewer recommendations. Authors may appeal decisions by providing a detailed rebuttal within 30 days.
              </p>
            </div>
          </div>

          {/* Plagiarism */}
          <div className="section-box">
            <div className="section-head tamil-text">திருட்டு எழுத்துக் கொள்கை | Plagiarism Policy</div>
            <div className="section-body text-sm text-gray-700 dark:text-gray-300 space-y-3">
              <p className="tamil-text leading-loose">
                இதழ் முழுக்க முழுக்க அசல் ஆய்வுகளை மட்டுமே வெளியிட உறுதிபூண்டுள்ளது. சக மதிப்பாய்வு தொடங்குவதற்கு முன்பு அனைத்து கையெழுத்துப் பிரதிகளும் திருட்டு கண்டறிதல் மென்பொருள் மூலம் சரிபார்க்கப்படும்.
              </p>
              <p>
                The journal is committed to publishing only original research. All manuscripts are screened using plagiarism detection software before peer review begins.
              </p>
              <table className="w-full border border-gray-200 dark:border-gray-700 text-xs">
                <tbody>
                  {[
                    ['Below 15%', 'Acceptable – proceeds to peer review'],
                    ['15% – 25%', 'Requires revision and resubmission'],
                    ['Above 25%', 'Rejected outright'],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="px-3 py-2 bg-blue-50 dark:bg-blue-950/40 font-medium text-blue-900 dark:text-amber-400 w-1/3">{k}</td>
                      <td className="px-3 py-2">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="tamil-text leading-loose">
                சுய-திருட்டு, உரை மறுசுழற்சி மற்றும் இரட்டை சமர்ப்பிப்பும் தவறான நடத்தையாகக் கருதப்படும். ஆசிரியர்கள் தொடர்புடைய முந்தைய வெளியீடுகளை வெளிப்படுத்த வேண்டும்.
              </p>
              <p>
                Self-plagiarism, text recycling, and duplicate submission are also considered forms of misconduct. Authors must disclose any prior publication of related work.
              </p>
            </div>
          </div>

          {/* Open Access */}
          <div className="section-box">
            <div className="section-head tamil-text">திறந்தநிலை அணுகல் கொள்கை | Open Access Policy</div>
            <div className="section-body text-sm text-gray-700 dark:text-gray-300 space-y-3">
              <p className="tamil-text leading-loose">
                தமிழோசை இதழ் முழுமையான திறந்தநிலை அணுகல் வெளியீடாகும். வெளியீட்டிற்கு உடனடியாக அனைத்துக் கட்டுரைகளும் சந்தா கட்டணம் அல்லது தடைகள் இல்லாமல் இலவசமாக வாசிக்கவும், பதிவிறக்கவும், பகிரவும் கிடைக்கும்.
              </p>
              <p>
                Tamizhosai Journal is a fully open access publication. All articles are freely available to read, download, and share immediately upon publication with no subscription fees or paywalls.
              </p>
              <p className="tamil-text leading-loose">
                வெளியிடப்பட்ட அனைத்துக் கட்டுரைகளும் CC BY 4.0 உரிமத்தின் கீழ் உரிமம் பெற்றுள்ளன. இது பொருத்தமான பெயர் குறிப்பு வழங்கப்படும் வரை யாரும் படைப்பை பகிரவும் தழுவலாக்கவும் அனுமதிக்கிறது.
              </p>
              <p>
                All published articles are licensed under <strong>CC BY 4.0</strong> (Creative Commons Attribution 4.0 International). This allows anyone to share and adapt the work, provided appropriate credit is given.
              </p>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700">
                <img src="https://licensebuttons.net/l/by/4.0/88x31.png" alt="CC BY 4.0" className="h-8" />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  This work is licensed under a Creative Commons Attribution 4.0 International License.
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="section-box">
            <div className="section-head tamil-text">பதிப்புரிமைக் கொள்கை | Copyright Policy</div>
            <div className="section-body text-sm text-gray-700 dark:text-gray-300 space-y-3">
              <p className="tamil-text leading-loose">
                ஆசிரியர்கள் தங்கள் வெளியிடப்பட்ட படைப்பின் முழு பதிப்புரிமையை தக்கவைத்துக்கொள்கிறார்கள். தமிழோசை இதழில் சமர்ப்பிப்பதன் மூலம், ஆசிரியர்கள் கட்டுரையை வெளியிட, விநியோகிக்க மற்றும் காப்பகப்படுத்த இதழுக்கு பிரத்தியேகமற்ற உரிமம் வழங்குகிறார்கள்.
              </p>
              <p>
                Authors retain full copyright of their published work. By submitting to Tamizhosai Journal, authors grant the journal a non-exclusive license to publish, distribute, and archive the article.
              </p>
              <ul className="space-y-1.5 list-disc list-inside">
                <li>Authors may post their articles on personal or institutional websites.</li>
                <li>Authors may include their articles in theses or dissertations.</li>
                <li>Authors may share their articles on academic networks (ResearchGate, Academia.edu).</li>
                <li>Commercial use requires explicit permission from the authors.</li>
                <li>Proper citation and attribution to the journal is required in all cases.</li>
              </ul>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs text-blue-800 dark:text-amber-400 hover:underline">
                📄 Download Copyright Transfer Agreement Template (PDF)
              </a>
            </div>
          </div>

          {/* Publication Ethics */}
          <div className="section-box">
            <div className="section-head tamil-text">வெளியீட்டு நெறிமுறைகள் | Publication Ethics</div>
            <div className="section-body text-sm text-gray-700 dark:text-gray-300 space-y-3">
              <p className="tamil-text leading-loose">
                தமிழோசை இதழ் வெளியீட்டு நெறிமுறைகள் குழுவின் (COPE) வழிகாட்டுதல்களைப் பின்பற்றுகிறது. ஆசிரியர்கள், மதிப்பாய்வாளர்கள் மற்றும் ஆசிரியர்கள் உட்பட அனைத்து தரப்பினரும் உயர்ந்த நெறிமுறை நடத்தை தரங்களை கடைப்பிடிக்க வேண்டும்.
              </p>
              <p>
                Tamizhosai Journal follows the guidelines of the <strong>Committee on Publication Ethics (COPE)</strong>. All parties — authors, reviewers, and editors — are expected to uphold the highest standards of ethical conduct.
              </p>
              <div>
                <p className="font-medium text-blue-900 dark:text-amber-400 mb-1">Authors must:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Ensure originality and accuracy of their work.</li>
                  <li>Disclose all conflicts of interest.</li>
                  <li>Obtain ethical approval for studies involving human or animal subjects.</li>
                  <li>Not submit the same manuscript to multiple journals simultaneously.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-blue-900 dark:text-amber-400 mb-1">Reviewers must:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Maintain confidentiality of the review process.</li>
                  <li>Declare any conflicts of interest.</li>
                  <li>Provide objective and constructive feedback.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* UGC 2025 */}
          <div className="section-box">
            <div className="section-head tamil-text">சக மதிப்பாய்வு இதழ்களுக்கான பரிந்துரை அளவுருக்கள் – UGC 2025 வழிகாட்டுதல்கள் | SUGGESTIVE PARAMETERS FOR PEER-REVIEWED JOURNALS – UGC 2025 GUIDELINES</div>
            <div className="section-body text-sm text-gray-700 dark:text-gray-300 space-y-3">
              <p className="tamil-text leading-loose">
                சக மதிப்பாய்வு இதழ்களை மதிப்பிடுவதற்கும் தொகுப்பதற்கும் UGC 2025 வழிகாட்டுதல்களின்படி, 11 பிப்ரவரி 2025 அன்று அறிவிக்கப்பட்ட மற்றும் 24 ஜூன் 2025 அன்று நடைபெற்ற 591வது UGC கூட்டத்தில் உறுதிப்படுத்தப்பட்ட 36 அளவுருக்களை இவ்விதழ் கண்டிப்பாக கடைப்பிடிக்கிறது.
              </p>
              <p>
                In strict accordance with the UGC 2025 Guidelines governing the assessment and curation of peer-reviewed journals, this journal maintains rigorous adherence to the 36 parameters formally promulgated on 11th February 2025 and confirmed at the 591st UGC meeting held on 24 June 2025.
              </p>
              <p className="tamil-text leading-loose">
                இந்த வழிகாட்டுதல்கள் ஆராய்ச்சி சமூகத்தில் கல்வி கடுமை, அறிவியல் வெளிப்படைத்தன்மை மற்றும் வெளியீட்டு சிறப்பின் கொள்கைகளை நிலைநிறுத்த உதவுகின்றன.
              </p>
              <p>
                These guidelines serve to uphold the principles of academic rigour, scholarly transparency, and publication excellence within the research community.
              </p>
              <div>
                <p className="font-medium text-blue-900 dark:text-amber-400 mb-1">Suggestions for HEIs:</p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li><strong>Choice of Peer-Reviewed Journals:</strong> Faculty members and students may choose peer-reviewed journals tailored to their specific disciplines using the UGC parameters.</li>
                  <li><strong>Internal Review Committees:</strong> HEIs may establish internal committees to fine-tune the suggested parameters as needed to ensure quality standards align with institutional academic and research goals.</li>
                </ol>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Ref: 584th meeting held on 3rd October 2024, circular released on 11 February 2025 | Ref: 591st meeting held on 24 June 2025, Public Notice released on 16th July 2025.
              </p>
            </div>
          </div>

        </main>
        <div className="lg:w-56 xl:w-64 shrink-0"><Sidebar /></div>
      </div>
    </div>
  )
}


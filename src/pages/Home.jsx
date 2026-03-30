import { Link } from 'react-router-dom'
import { featuredArticles } from '../data/siteData'

const callForPapers = [
  {
    label: 'Initial Submission Accepted from:',
    value: '1st – April 2026',
  },
  {
    label: 'Final Submission Accepted to:',
    value: '30th – May 2026',
  },
  {
    label: 'E-Publication:',
    value: '15th – July 2026',
  },
]

const callForPapers2 = [
  {
    label: 'Initial Submission Accepted from:',
    value: '1st – October 2026',
  },
  {
    label: 'Final Submission Accepted to:',
    value: '30th – November 2026',
  },
  {
    label: 'E-Publication:',
    value: '26th – January 2027',
  },
]

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
        <main className="w-full">

          {/* Welcome Tamil */}
          <div className="section-box">
            <div className="section-head tamil-text">வரவேற்கிறோம் | Welcome to Tamizhosai</div>
            <div className="section-body">
              <p className="tamil-text text-sm leading-loose text-gray-700 dark:text-gray-300 mb-4">
                தமிழ்மொழி செம்மொழி ஆகும். தமிழ் மொழியின் தோற்றம் இயற்கையில் பிறந்ததேயாம். அதன் அளப்பரிய தாக்கம் உலகத்தின் பல்வேறு மொழிகளிலும் காணப்படுகின்றது. உலகின் முதல் இலக்கண நூலான "தொல்காப்பியம்" தமிழில் தான் எழுதப்பட்டது. தமிழ் இலக்கியத்தில், சங்க இலக்கியம் தமிழ்மக்களின் தொன்மையான பாரம்பரியத்தைப் பிரதிப்பலிக்கின்றது. தமிழ்மொழியின் சிறப்பை உலகறியச் செய்வதற்காகவே "தமிழோசை சர்வதேச ஆய்விதழ்" உருவாக்கப்பட்டுள்ளது.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Tamil language is a classical language with its origin rooted in nature itself. Its remarkable influence spans many languages of the world. The world's first grammar book <em>Tolkāppiyam</em> was written in Tamil. Sangam literature reflects the ancient traditions of the Tamil people. The <strong>Tamizhosai International Journal for Tamil Language and Literary Studies (TIJTLLS)</strong> is established to create a global platform for academicians, researchers, and patrons to enrich Tamil language and literature through scholarly discourse.
              </p>
            </div>
          </div>

          {/* Tamil Classical Status */}
          <div className="section-box">
            <div className="section-head tamil-text">செம்மொழி தமிழ் | Tamil – A Classical Language</div>
            <div className="section-body space-y-3">
              <p className="tamil-text text-sm leading-loose text-gray-700 dark:text-gray-300">
                தமிழ் மொழி உலகின் தொன்மையான மொழிகளில் ஒன்றாகும். இரண்டாயிரம் ஆண்டுகளுக்கும் மேலான இடைவிடாத இலக்கிய மரபை உடைய தமிழ், உலகில் இன்றும் வழக்கில் உள்ள சில செம்மொழிகளில் ஒன்றாகும். 2004 ஆம் ஆண்டு இந்திய அரசு தமிழை முதல் செம்மொழியாக அறிவித்தது. தமிழின் இலக்கண அமைப்பு, சொல்வளம், மற்றும் தனித்துவமான எழுத்து முறை ஆகியவை இதனை உலகின் மிகச் சிறந்த மொழிகளில் ஒன்றாக நிலைநிறுத்துகின்றன.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Tamil is one of the world's oldest living languages, with an unbroken literary tradition spanning over two millennia. In 2004, the Government of India recognized Tamil as the first Classical Language, based on its antiquity, rich independent literary tradition, and a vast body of ancient texts. Tamil is an official language in India, Sri Lanka, and Singapore, and is spoken by over 85 million people worldwide. Its unique grammatical structure, documented as early as the <em>Tolkāppiyam</em>, sets it apart as a language of extraordinary scholarly depth.
              </p>
            </div>
          </div>

          {/* Sangam Literature */}
          <div className="section-box">
            <div className="section-head tamil-text">சங்க இலக்கியம் | Sangam Literature</div>
            <div className="section-body space-y-3">
              <p className="tamil-text text-sm leading-loose text-gray-700 dark:text-gray-300">
                சங்க இலக்கியம் என்பது கி.மு. 300 முதல் கி.பி. 300 வரையிலான காலகட்டத்தில் தமிழகத்தில் தோன்றிய தொகுப்பு இலக்கியமாகும். எட்டுத்தொகை, பத்துப்பாட்டு என வகைப்படுத்தப்பட்ட இந்நூல்கள் அகம் (காதல்), புறம் (வீரம், நீதி) என்ற இரு பெரும் பிரிவுகளில் மனித வாழ்வின் அனைத்து பரிமாணங்களையும் சித்தரிக்கின்றன. இவை தமிழ் மக்களின் வரலாறு, பண்பாடு, வாணிகம், மற்றும் சமூக அமைப்பை அறிய உதவும் முதன்மையான ஆதாரங்களாக விளங்குகின்றன.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Sangam literature, composed roughly between 300 BCE and 300 CE, represents one of the earliest and most significant bodies of poetry in world literature. Classified into the <em>Ettuttokai</em> (Eight Anthologies) and <em>Pattupattu</em> (Ten Idylls), these texts explore themes of love (<em>Akam</em>) and heroism (<em>Puram</em>), offering a vivid window into the social, political, and cultural life of ancient Tamil society. Scholars worldwide regard Sangam poetry as a unique cultural treasure that continues to inspire literary and academic inquiry.
              </p>
            </div>
          </div>

          {/* Tamil Diaspora */}
          <div className="section-box">
            <div className="section-head tamil-text">உலகளாவிய தமிழர்கள் | Tamil Diaspora</div>
            <div className="section-body space-y-3">
              <p className="tamil-text text-sm leading-loose text-gray-700 dark:text-gray-300">
                தமிழர்கள் இந்தியா, இலங்கை, மலேசியா, சிங்கப்பூர், தென்னாப்பிரிக்கா, கனடா, இங்கிலாந்து உள்ளிட்ட உலகின் பல நாடுகளில் வாழ்கின்றனர். வெளிநாடுகளில் வாழும் தமிழர்கள் தங்கள் மொழி, பண்பாடு மற்றும் இலக்கிய மரபை தலைமுறை தலைமுறையாகப் பேணி வருகின்றனர். இந்த உலகளாவிய தமிழ் சமூகத்தின் அறிவுசார் பங்களிப்பை ஒருங்கிணைக்கவும், தமிழ் ஆய்வுகளை சர்வதேச அளவில் மேம்படுத்தவும் தமிழோசை சர்வதேச ஆய்விதழ் உறுதிபூண்டுள்ளது.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                The Tamil diaspora spans continents, with significant communities in Malaysia, Singapore, South Africa, Canada, the United Kingdom, and beyond. Tamil is spoken by over 85 million people globally, making it one of the most widely spoken languages in the world. Diaspora communities have played a vital role in preserving Tamil language, literature, and cultural traditions across generations. Tamizhosai International Journal is committed to bridging these global Tamil communities through scholarly research, fostering a shared academic platform that celebrates and advances Tamil studies worldwide.
              </p>
            </div>
          </div>

          {/* Featured Articles */}
          <div className="section-box">
            <div className="section-head">Featured Articles</div>
            <div className="section-body space-y-3">
              {featuredArticles.map((article) => (
                <div key={article.id} className="p-3 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 font-medium">{article.category}</span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0.5">{article.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{article.author}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{article.abstract}</p>
                  <p className="text-xs text-blue-700 dark:text-amber-400 mt-1">DOI: {article.doi}</p>
                </div>
              ))}
              <Link to="/issues" className="inline-block text-xs text-blue-800 dark:text-amber-400 hover:underline mt-1">
                View all issues →
              </Link>
            </div>
          </div>

          {/* Scope */}
          <div className="section-box">
            <div className="section-head tamil-text">நோக்கம் | Scope</div>
            <div className="section-body">
              <p className="tamil-text text-sm leading-loose mb-3 text-gray-700 dark:text-gray-300">
                ஓராண்டிற்கு இருமுறை இருமொழிகளில் (தமிழ் மற்றும் ஆங்கிலம்) வெளிவரும் இவ்விதழ் தமிழ்மொழி மற்றும் இலக்கிய கலாச்சாரம், நாட்டுப்புறக்கலை, கோயிற்கலை, சித்த மருத்துவம், மொழியியல், திறனாய்வு, தமிழிலக்கிய படைப்புகள், உளவியல், பெண்ணியம், ஒப்பியல் நோக்கு, உலகளாவிய மொழிபெயர்ப்பு இலக்கியங்கள் போன்ற தமிழ் சார்ந்த பிற தளங்களையும் நோக்கும் விதமாய் அமைந்துள்ளது.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                The bi-yearly bilingual journal (Tamil & English) covers: History of Tamil Language and Culture, Folk Arts, Temple Studies, Siddha Medicine, Tamil Linguistics, Tamil Criticism, Tamil Literature, Creative Writing in Tamil, Tamil Literature and Psychology, Women in Tamil Literature, Eco-criticism, Comparative Literature, and World Literatures in Tamil Translation.
              </p>
            </div>
          </div>

          {/* Call for Papers */}
          <div className="section-box">
            <div className="section-head tamil-text">அழைப்பு | Call For Papers</div>
            <div className="section-body">
              <p className="tamil-text text-sm leading-loose mb-3 text-gray-700 dark:text-gray-300">
                பேராளர்கள், ஆய்வாளர்கள், எழுத்தாளர்கள் மற்றும் தமிழ் ஆர்வலர்களின் நேர்த்தியான ஆய்வுக் கட்டுரைகள் வரவேற்கப்படுகின்றன. அனைத்து ஆய்வுக் கட்டுரைகளும் ஆய்வுக்குட்படுத்தப்பட்டு இணையத்தளத்தில் வெளியிடப்படும்.
              </p>
              <p className="text-sm leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                Tamizhosai Journal invites academic researchers, scholars, and authors to submit original research articles for publication in this peer-reviewed international journal. All papers will be peer-reviewed and published online with PDF versions. We maintain open access to all published research papers.
              </p>

              {/* Schedule tables */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[callForPapers, callForPapers2].map((schedule, idx) => (
                  <table key={idx} className="w-full border border-gray-200 dark:border-gray-700 text-xs">
                    <tbody>
                      {schedule.map(row => (
                        <tr key={row.label} className="border-b border-gray-100 dark:border-gray-800">
                          <td className="px-3 py-2 bg-blue-50 dark:bg-blue-950/40 font-medium text-blue-900 dark:text-amber-400 w-1/2">{row.label}</td>
                          <td className="px-3 py-2 text-gray-700 dark:text-gray-300">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          </div>

          {/* Open Access */}
          <div className="section-box">
            <div className="section-head tamil-text">திறந்தநிலை அணுகல் | Open Access Statement</div>
            <div className="section-body">
              <p className="tamil-text text-sm leading-loose mb-2 text-gray-700 dark:text-gray-300">
                திறந்தநிலை அணுகல் முறை சார்ந்த கொள்கைகளின் படி எமது சஞ்சிகை வாசகர்கள் கட்டுரைகளை நேர்மையான முறையில் தேடவும், வாசிக்கவும், தரவிரக்கம் செய்யவும், நகல் எடுக்கவும், விநியோகிக்கவும், அச்சிடவும் மற்றும் இணைப்பு எடுக்கவும் அனுமதிக்கப்படுகிறது.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                As per the norms of the open access policy, our journal allows all readers to search, read, download, copy, distribute, print, or link articles for all ethical purposes without any subscription barrier.
              </p>
            </div>
          </div>

          {/* License */}
          <div className="section-box">
            <div className="section-head tamil-text">உரிமம் | License</div>
            <div className="section-body">
              <p className="tamil-text text-sm leading-loose mb-2 text-gray-700 dark:text-gray-300">
                எமது சஞ்சிகை CC BY கிரியேட்டிவ் காமன்ஸ் ஆட்ரிபியூசன் 4.0 இன்டர்நேசனல் உரிமம் பயன் கொண்டுள்ளது.
              </p>
              <p className="text-sm leading-relaxed mb-3 text-gray-700 dark:text-gray-300">
                Our journal adopts the <strong>CC BY Creative Commons Attribution 4.0 International License</strong>. It allows using, reusing, distributing, and reproducing the original work with proper citation.
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
            <div className="section-head tamil-text">பதிப்புரிமை | Copyright</div>
            <div className="section-body">
              <p className="tamil-text text-sm leading-loose mb-2 text-gray-700 dark:text-gray-300">
                கட்டுரையாளரிடம் உரிம மாற்று படிவம் பெற்று காப்புரிமையைச் சஞ்சிகையே பெற்றுக் கொள்ளும்.
              </p>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                Authors who publish with Tamizhosai Journal retain copyright and grant the journal non-exclusive publishing rights. Articles are simultaneously licensed under a Creative Commons CC-BY license that allows others to share the work with acknowledgment of authorship and initial publication in this journal.
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 mt-3 text-xs text-blue-800 dark:text-amber-400 hover:underline">
                📄 Download Copyright Transfer Agreement Template (PDF)
              </a>
            </div>
          </div>

          {/* UGC CARE */}
          <div className="section-box">
            <div className="section-head">UGC CARE</div>
            <div className="section-body">
              <p className="text-sm leading-relaxed mb-3 text-gray-700 dark:text-gray-300">
                The University Grants Commission of India established the "Consortium for Academic and Research Ethics" (CARE-UGC) on 28.11.2018 to standardize the quality of academic and research publications. UGC–CARE objectives:
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                {[
                  'To ensure research quality, academic writing standards, and publication ethics in Indian colleges and universities.',
                  'To promote quality publications in reputed journals to aid in ensuring global academic rank.',
                  'To identify journals of originality and scholarly credibility.',
                  'To outwit predatory or cloned journals that undermine Indian academia.',
                  'To maintain a CARE list of journals for all academic and research purposes.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-800 dark:text-amber-400 font-bold shrink-0">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* செயல்திட்டம் */}
          <div className="section-box">
            <div className="section-head tamil-text">செயல்திட்டம் | Journal Policy</div>
            <div className="section-body text-sm leading-loose text-gray-800 dark:text-gray-300 space-y-4">

              <p className="tamil-text">
                <strong>வெளியீடு / மதிப்பீட்டு கொள்கை:</strong> ஆய்வுக் கட்டுரைகள் இணையதளத்தில் மட்டுமே வெளியிடப்படும். சமர்ப்பிக்கப்பட்ட அனைத்து கட்டுரைகளும் இரட்டை மறைமுக மதிப்பீட்டு முறைக்கு உட்படுத்தப்படும். மதிப்பீட்டாளர்களின் கருத்துகளின் அடிப்படையில் திருத்தங்கள் மேற்கொள்ளப்பட்டு இறுதி ஆவணங்கள் PDF வடிவில் வெளியிடப்படும். மதிப்பீட்டு செயல்முறை இரகசியமாகவும் நம்பகமான முறையிலும் நடைபெறும்.
              </p>

              <p className="tamil-text">
                <strong>கருத்துத் திருட்டு நீக்கம்:</strong> இவ்விதழ் கருத்துத் திருட்டை ஒரு அறிஞரின் கருத்திற்கு செய்யும் அநீதியாகவே கருதுகிறது. படைப்பாளர்கள் அவர்களின் தகுதிக்கேற்ற மதிப்பை அடைய செய்வதே பதிப்புக்குழுவின் நோக்கமாகும். ஆய்வாளரின் படைப்பில் கருத்துத் திருட்டு இருந்தால் பதிப்புக்குழு அக்கட்டுரையை நிராகரித்துவிடும்.
              </p>

              <p className="tamil-text">
                <strong>கட்டுரை தேர்வு கொள்கை:</strong> ஒவ்வொரு ஆண்டும் நாங்கள் நூற்றுக்கும் மேற்பட்ட கட்டுரைகளைப் பெறுகிறோம். கட்டுரைத் தரம் கருதி ஆய்வுத் தரம் உள்ள 20–30 தமிழ்க் கட்டுரைகளை மட்டுமே வெளியிடுவோம். கட்டுரைகளைத் தேர்ந்தெடுப்பதில் ஆசிரியரின் முடிவே இறுதியானது. பணத்திற்காக மற்றும் AI மூலம் அதிக எண்ணிக்கையிலான கட்டுரைகள் ஆங்கிலத்தில் எழுதப்பட்டு தரம் குறைந்த கட்டுரைகள் அனுப்பப்படுவதால் அவை நிறுத்தப்படுகின்றன.
              </p>

              <p className="tamil-text">
                <strong>பதிப்பு நெறிமுறைகள் & மறைகேடு அறிக்கை:</strong> கட்டுரைகள் ஆய்வுநெறிமுறைகளைப் பின்பற்றாமல் அமைந்தால் பதிப்பகம் நடவடிக்கை எடுக்கும். தரமான ஆய்வு மற்றும் பதிப்பு முறைகளை உறுதி செய்ய தகுந்த முடிவெடுக்கப்படும். ஆய்வுசார் முறைகளில் ஏதேனும் குற்றம் இழைக்கப்படின் அக்கட்டுரை பதிப்பில் இருந்து நீக்கப்படும். கட்டுரைகளில் ஏதேனும் திருத்தம் மேற்கொள்ள வேண்டுமென்றால் பதிப்பாசிரியருக்கு விண்ணப்பம் செய்ய வேண்டும். கட்டுரை நீக்குதல், திருத்தங்கள் மேற்கொள்ளுதல், விளக்கங்கள் மற்றும் மன்னிப்புக்கோருதல் ஏற்றுக்கொள்ளப்பட்டு அறிவிப்பு செய்யப்படும். இதழின் முழுக்கோப்பு இன்டர்நெட் ஆர்க்கிவில் பாதுகாக்கப்படும்.
              </p>

            </div>
          </div>

          {/* Submit info */}
          <div className="section-box">
            <div className="section-head">How to Submit</div>
            <div className="section-body text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <p>To submit, send your research paper to:</p>
              <p>
                <a href="mailto:editor@tamizhosai.org" className="text-blue-800 dark:text-amber-400 font-medium hover:underline">editor@tamizhosai.org</a>
                {' '}(or){' '}
                <a href="mailto:tamizhosaijournal@gmail.com" className="text-blue-800 dark:text-amber-400 font-medium hover:underline">tamizhosaijournal@gmail.com</a>
              </p>
              <p>After completion and publication, authors will be issued:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Digital Publication Certificate</li>
                <li>Complete Journal (PDF)</li>
              </ul>
            </div>
          </div>

        </main>
    </div>
  )
}


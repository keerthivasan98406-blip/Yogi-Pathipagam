export const editorialBoard = [
  {
    name: 'Dr. Annamalai Subramaniam',
    role: 'Editor-in-Chief',
    affiliation: 'University of Madras',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=annamalai&backgroundColor=b6e3f4',
  },
  {
    name: 'Prof. Kavitha Rajan',
    role: 'Associate Editor',
    affiliation: 'Bharathidasan University',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kavitha&backgroundColor=ffdfbf',
  },
  {
    name: 'Dr. Murugan Pillai',
    role: 'Managing Editor',
    affiliation: 'Tamil University, Thanjavur',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=murugan&backgroundColor=c0aede',
  },
  {
    name: 'Prof. Selvi Natarajan',
    role: 'Editorial Board Member',
    affiliation: 'University of Jaffna, Sri Lanka',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=selvi&backgroundColor=d1f4e0',
  },
  {
    name: 'Dr. Ramesh Chandran',
    role: 'Editorial Board Member',
    affiliation: 'University of Malaysia',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ramesh&backgroundColor=ffd5dc',
  },
  {
    name: 'Prof. Lakshmi Venkat',
    role: 'Editorial Board Member',
    affiliation: 'Annamalai University',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lakshmi&backgroundColor=b6e3f4',
  },
]

export const featuredArticles = [
  {
    id: 1,
    title: 'Classical Tamil Poetry and Its Influence on Modern Literature',
    author: 'Dr. Meenakshi Sundaram',
    category: 'Literature',
    date: 'March 2026',
    abstract: 'This paper explores the profound influence of Sangam-era poetry on contemporary Tamil literary movements...',
    doi: '10.12345/tijts.2026.001',
  },
  {
    id: 2,
    title: 'Linguistic Evolution of Tamil Dialects in the Digital Age',
    author: 'Prof. Arjun Krishnamurthy',
    category: 'Linguistics',
    date: 'February 2026',
    abstract: 'An analysis of how digital communication platforms are reshaping Tamil dialectal variations...',
    doi: '10.12345/tijts.2026.002',
  },
  {
    id: 3,
    title: 'Tamil Epigraphy: New Discoveries from the Kaveri Delta Region',
    author: 'Dr. Priya Balakrishnan',
    category: 'History',
    date: 'January 2026',
    abstract: 'Recent archaeological excavations have revealed inscriptions that challenge existing timelines...',
    doi: '10.12345/tijts.2026.003',
  },
]

export const volumes = [
  {
    vol: 3,
    year: 2026,
    issues: [
      {
        issue: 1,
        month: 'January–March 2026',
        articles: [
          { title: 'Classical Tamil Poetry and Its Influence on Modern Literature', author: 'Dr. Meenakshi Sundaram', pages: '1–18' },
          { title: 'Linguistic Evolution of Tamil Dialects in the Digital Age', author: 'Prof. Arjun Krishnamurthy', pages: '19–34' },
          { title: 'Tamil Epigraphy: New Discoveries from the Kaveri Delta Region', author: 'Dr. Priya Balakrishnan', pages: '35–52' },
        ],
      },
    ],
  },
  {
    vol: 2,
    year: 2025,
    issues: [
      {
        issue: 2,
        month: 'July–December 2025',
        articles: [
          { title: 'Sociolinguistic Patterns in Tamil Nadu Urban Centers', author: 'Dr. Vijay Anand', pages: '88–105' },
          { title: 'Comparative Study of Tamil and Sanskrit Grammatical Traditions', author: 'Prof. Saranya Devi', pages: '106–122' },
        ],
      },
      {
        issue: 1,
        month: 'January–June 2025',
        articles: [
          { title: 'Digital Preservation of Palm Leaf Manuscripts', author: 'Dr. Karthik Raman', pages: '1–22' },
          { title: 'Tamil Diaspora Literature: Voices from the Global South', author: 'Prof. Nithya Krishnan', pages: '23–45' },
          { title: 'Phonological Changes in Modern Spoken Tamil', author: 'Dr. Senthil Kumar', pages: '46–67' },
        ],
      },
    ],
  },
  {
    vol: 1,
    year: 2024,
    issues: [
      {
        issue: 1,
        month: 'July–December 2024',
        articles: [
          { title: 'Inaugural Address: The Scope of Tamil Studies in the 21st Century', author: 'Editorial Board', pages: '1–5' },
          { title: 'Tolkappiyam and Modern Linguistic Theory', author: 'Dr. Annamalai Subramaniam', pages: '6–28' },
          { title: 'Tamil Folk Music: An Ethnomusicological Perspective', author: 'Prof. Kavitha Rajan', pages: '29–50' },
        ],
      },
    ],
  },
]

export const announcements = [
  {
    date: 'March 15, 2026',
    title: 'Call for Papers – Volume 3, Issue 2 (April–June 2026)',
    type: 'Call for Papers',
    color: 'gold',
  },
  {
    date: 'March 1, 2026',
    title: 'Volume 3, Issue 1 is now published online',
    type: 'Publication',
    color: 'maroon',
  },
  {
    date: 'February 10, 2026',
    title: 'Special Issue on Tamil Diaspora Studies – Submissions Open',
    type: 'Special Issue',
    color: 'gold',
  },
  {
    date: 'January 20, 2026',
    title: 'New Editorial Board Members Appointed for 2026',
    type: 'Announcement',
    color: 'maroon',
  },
]

export const scopeAreas = [
  { icon: '📜', title: 'Classical Literature', desc: 'Sangam poetry, epics, and ancient Tamil texts' },
  { icon: '🗣️', title: 'Linguistics', desc: 'Grammar, phonology, dialectology, and language evolution' },
  { icon: '🏛️', title: 'History & Culture', desc: 'Epigraphy, archaeology, and cultural heritage' },
  { icon: '🌍', title: 'Diaspora Studies', desc: 'Tamil communities across the globe' },
  { icon: '💻', title: 'Digital Humanities', desc: 'Computational linguistics and digital preservation' },
  { icon: '🎭', title: 'Arts & Performance', desc: 'Music, dance, theatre, and visual arts' },
]

export const membershipPlans = [
  {
    name: 'Individual',
    price: '₹2,000',
    period: '2 years',
    features: ['Full journal access', 'PDF downloads', 'Email alerts', 'Author discounts'],
    highlight: false,
  },
  {
    name: 'Institutional',
    price: '₹8,000',
    period: '2 years',
    features: ['Unlimited access for all staff', 'IP-based authentication', 'Usage reports', 'Priority support', 'Bulk submission discounts'],
    highlight: true,
  },
  {
    name: 'Student',
    price: '₹800',
    period: '2 years',
    features: ['Full journal access', 'PDF downloads', 'Email alerts'],
    highlight: false,
  },
]

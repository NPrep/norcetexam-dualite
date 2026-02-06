import React from 'react';
import { Link } from 'react-router-dom';
import { NPREP_LINKS, SITE_LINKS, OFFICIAL_LINKS } from './links';
import { ExternalLink, Bell, FileText, Download, TrendingUp, DollarSign, BookOpen, AlertCircle, CheckCircle } from 'lucide-react';
import { 
  TableOfContents, 
  Callout, 
  RichTable, 
  StepByStep, 
  FAQSection, 
  Glossary, 
  RelatedArticles 
} from '../components/blog/BlogComponents';

// Types
export interface PillarPageData {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  content: {
    intro: string;
    highlights: { label: string; value: string }[];
    sections: { title: string; content: React.ReactNode }[];
    faqs: { question: string; answer: string }[];
  };
}

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
  thumbnail: {
    title: string;
    subtitle: string;
  };
  content: React.ReactNode;
}

// --- Reusable CTAs ---
const NPrepCTA = ({ variant = 'general' }: { variant?: 'general' | 'test' | 'revision' | 'pyq' }) => {
  const content = {
    general: {
      title: "Crack NORCET 2026 with NPrep GOLD",
      text: "The most comprehensive course for AIIMS NORCET. 900+ Hours of Theory, Clinicals & Test Series.",
      link: NPREP_LINKS.gold,
      btn: "Explore GOLD Batch",
      color: "bg-blue-50 border-blue-200"
    },
    test: {
      title: "NORCET 2026 Test Series",
      text: "30,000+ Questions with explanations. Subject-wise tests & Daily Test Series designed for NORCET pattern.",
      link: NPREP_LINKS.testSeries,
      btn: "Start Practicing",
      color: "bg-indigo-50 border-indigo-200"
    },
    revision: {
      title: "Rapid Revision 2.0",
      text: "Revise entire NORCET syllabus in 100 Hours. Perfect for last-minute preparation.",
      link: NPREP_LINKS.rapid,
      btn: "Start Revision",
      color: "bg-purple-50 border-purple-200"
    },
    pyq: {
      title: "Solve Previous NORCET Papers",
      text: "Download and practice solved memory-based papers for NORCET 9, 8, 7 & 6.",
      link: NPREP_LINKS.pyq,
      btn: "Get PYQs",
      color: "bg-green-50 border-green-200"
    }
  }[variant];

  return (
    <div className={`my-8 p-6 md:p-8 rounded-xl border ${content.color} shadow-sm not-prose`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{content.title}</h3>
          <p className="text-slate-700">{content.text}</p>
        </div>
        <a 
          href={content.link} 
          target="_blank" 
          rel="nofollow noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
        >
          {content.btn} <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200/50 text-xs text-slate-500 font-medium flex items-center">
        <CheckCircle className="w-3 h-3 mr-1.5 text-green-600" /> Trusted by 50,000+ Nursing Officers
      </div>
    </div>
  );
};

// --- News Item ---
const NewsItem = ({ date, title, isNew = false }: { date: string; title: string; isNew?: boolean }) => (
  <div className="flex items-start p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
    <div className="flex-shrink-0 w-24 text-sm text-gray-500 font-medium pt-1">{date}</div>
    <div className="flex-grow">
      <h4 className="text-slate-800 font-medium hover:text-blue-600">
        <a href={OFFICIAL_LINKS.aiims} target="_blank" rel="noreferrer" className="flex items-center">
          {title}
          {isNew && <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold uppercase rounded-full tracking-wider">New</span>}
          <ExternalLink className="ml-1 w-3 h-3 text-gray-400" />
        </a>
      </h4>
    </div>
  </div>
);

// --- Pillar Page Placeholder ---
const createPlaceholder = (slug: string, title: string): PillarPageData => ({
  slug,
  title,
  description: `Detailed information about ${title} for AIIMS NORCET 2026.`,
  lastUpdated: "2026-03-01",
  content: {
    intro: `Content for ${title} is currently being updated with the latest official NORCET 2026 notifications.`,
    highlights: [{ label: "Exam", value: "AIIMS NORCET 2026" }, { label: "Status", value: "Updating" }],
    sections: [
      { 
        title: "Information Coming Soon", 
        content: <div className="p-4 bg-blue-50 text-blue-800 rounded">This section is being updated to reflect the latest NORCET guidelines.</div> 
      }
    ],
    faqs: []
  }
});

// --- Pillar Pages ---
export const pillarPages: Record<string, PillarPageData> = {
  "norcet-notification": {
    slug: "norcet-notification",
    title: "AIIMS NORCET 2026 Notification (Official Updates)",
    description: "Official AIIMS NORCET 2026 Notification. Confirmed exam dates for NORCET-10: Prelims on April 11, 2026 and Mains on April 30, 2026.",
    lastUpdated: "2026-02-28",
    content: {
      intro: "The All India Institute of Medical Sciences (AIIMS), New Delhi has released the official schedule for the Nursing Officer Recruitment Common Eligibility Test (NORCET) 2026. This page tracks all official announcements, vacancies, and important dates strictly for NORCET-10 and NORCET-11 cycles.",
      highlights: [
        { label: "Exam Name", value: "NORCET-10 (2026)" },
        { label: "Conducting Body", value: "AIIMS New Delhi" },
        { label: "Prelims Date", value: "11 April 2026" },
        { label: "Mains Date", value: "30 April 2026" },
        { label: "Official Portal", value: "aiimsexams.ac.in" }
      ],
      sections: [
        {
          title: "Latest Official Updates (Live Feed)",
          content: (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
              <div className="bg-slate-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <h3 className="font-bold text-slate-800 flex items-center">
                  <Bell className="w-4 h-4 mr-2 text-blue-600" /> Recent Notices
                </h3>
                <span className="text-xs text-gray-500">Source: aiimsexams.ac.in</span>
              </div>
              <div className="divide-y divide-gray-100">
                <NewsItem 
                  date="28 Feb 2026" 
                  title="Official Schedule: NORCET-10 Prelims on April 11, 2026 & Mains on April 30, 2026" 
                  isNew={true} 
                />
                <NewsItem 
                  date="15 Feb 2026" 
                  title="Result Notification No. 12/2026: Seat Allocation of NORCET-09 (2nd Round)" 
                />
                <NewsItem 
                  date="10 Feb 2026" 
                  title="Important Notice: Validity of OBC(NCL)/EWS Certificate for upcoming recruitments" 
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center border-t border-gray-200">
                <a 
                  href={OFFICIAL_LINKS.aiims} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center justify-center"
                >
                  View All Notices on Official Website <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>
          )
        },
        {
          title: "Important Dates Tracker (NORCET-10)",
          content: (
            <div className="space-y-4">
              <p className="text-slate-700">The official schedule for AIIMS NORCET-10 has been announced. Candidates must adhere to these timelines strictly.</p>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full text-sm text-left">
                  <thead className="bg-slate-100 font-bold text-slate-800">
                    <tr><th className="p-4">Event</th><th className="p-4">Date</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="p-4 font-medium">Notification Release</td><td className="p-4">March 2026 (Expected)</td></tr>
                    <tr><td className="p-4 font-medium">Online Application Start</td><td className="p-4">March 2026</td></tr>
                    <tr><td className="p-4 font-medium">Application Closing</td><td className="p-4">End of March 2026</td></tr>
                    <tr className="bg-blue-50"><td className="p-4 font-bold text-blue-900">Stage-I (Prelims) Exam</td><td className="p-4 font-bold text-blue-900">April 11, 2026</td></tr>
                    <tr className="bg-indigo-50"><td className="p-4 font-bold text-indigo-900">Stage-II (Mains) Exam</td><td className="p-4 font-bold text-indigo-900">April 30, 2026</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic mt-2">Note: Dates are subject to change by AIIMS New Delhi. Check official website regularly.</p>
              <NPrepCTA variant="general" />
            </div>
          )
        }
      ],
      faqs: [
        { question: "Where is the official NORCET notification published?", answer: "The official notification is ONLY published on www.aiimsexams.ac.in under the 'Recruitments' tab." },
        { question: "When is NORCET 2026 Prelims?", answer: "NORCET-10 Prelims is officially scheduled for April 11, 2026." },
        { question: "Is there an age limit for NORCET 2026?", answer: "Yes, generally 18-30 years for General candidates, with age relaxation for OBC/SC/ST as per Govt rules." },
        { question: "Can GNM students apply for NORCET?", answer: "Yes, GNM candidates can apply if they have 2 years of experience in a minimum 50-bedded hospital." },
        { question: "Is the exam online or offline?", answer: "NORCET is a Computer Based Test (CBT) conducted online." },
        { question: "How many times is NORCET conducted in a year?", answer: "Currently, AIIMS conducts NORCET twice a year (NORCET-10 and NORCET-11 for 2026)." },
        { question: "What is the application fee?", answer: "Typically ₹3000 for General/OBC and ₹2400 for SC/ST/EWS (subject to confirmation in notification)." },
        { question: "Is there negative marking?", answer: "Yes, 1/3rd mark is deducted for every wrong answer." }
      ]
    }
  },
  "norcet-syllabus": {
    slug: "norcet-syllabus",
    title: "AIIMS NORCET Syllabus 2026 & Exam Pattern (Detailed Subject-Wise)",
    description: "Complete and detailed syllabus for AIIMS NORCET 2026. Subject-wise breakdown for MSN, OBG, Peds, FON, and Aptitude.",
    lastUpdated: "2026-03-01",
    content: {
      intro: "The AIIMS NORCET Syllabus is vast and clinical-focused. Unlike state-level exams, NORCET prioritizes application-based knowledge. This guide breaks down the syllabus into high-yield subjects and topics that have historically appeared in the exam.",
      highlights: [
        { label: "Total Questions", value: "200 MCQs" },
        { label: "Duration", value: "3 Hours (180 Mins)" },
        { label: "Negative Marking", value: "1/3 marks deducted" },
        { label: "Qualifying Marks", value: "50% (UR), 45% (OBC), 40% (SC/ST)" }
      ],
      sections: [
        {
          title: "Exam Pattern Overview",
          content: (
            <div className="space-y-4">
              <p>NORCET follows a two-stage process (Prelims & Mains). Both stages have a similar syllabus but differ in difficulty and question type.</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Prelims:</strong> Screening nature. Focuses on basic knowledge and aptitude.</li>
                <li><strong>Mains:</strong> Selection nature. Focuses on clinical scenarios, priority-based questions, and image-based questions.</li>
              </ul>
              <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 text-sm text-yellow-900">
                <strong>Note:</strong> The syllabus covers the entire B.Sc. Nursing / GNM curriculum, but the weightage varies significantly.
              </div>
            </div>
          )
        },
        {
          title: "1. Medical-Surgical Nursing (MSN)",
          content: (
            <div className="space-y-4">
              <p><strong>Weightage: High (30-35%)</strong>. This is the backbone of NORCET.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Cardiovascular System</h4>
                  <ul className="text-sm space-y-1 text-slate-600">
                    <li>Myocardial Infarction (MI) Management</li>
                    <li>Heart Failure & Drugs (Digoxin, Diuretics)</li>
                    <li>ECG Interpretation (Arrhythmias)</li>
                    <li>Hypertension Guidelines</li>
                  </ul>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Nervous System</h4>
                  <ul className="text-sm space-y-1 text-slate-600">
                    <li>CVA (Stroke) - Ischemic vs Hemorrhagic</li>
                    <li>Increased ICP Management</li>
                    <li>GCS Scale & Neurological Assessment</li>
                    <li>Meningitis & Seizure precautions</li>
                  </ul>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Respiratory System</h4>
                  <ul className="text-sm space-y-1 text-slate-600">
                    <li>COPD & Asthma Management</li>
                    <li>Tuberculosis (DOTS Therapy)</li>
                    <li>Chest Tube Drainage System</li>
                    <li>ABG Analysis (Acid-Base Balance)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Renal System</h4>
                  <ul className="text-sm space-y-1 text-slate-600">
                    <li>Acute vs Chronic Renal Failure</li>
                    <li>Dialysis (Hemodialysis/Peritoneal)</li>
                    <li>Electrolyte Imbalances (Hyperkalemia)</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "2. Fundamentals of Nursing (FON)",
          content: (
            <div className="space-y-4">
              <p><strong>Weightage: High (25-30%)</strong>. Focuses on practical procedures and basic care.</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 ml-2">
                <li><strong>Vital Signs:</strong> Temperature, Pulse, Respiration, BP (Errors & Techniques).</li>
                <li><strong>Procedures:</strong> NG Tube, Catheterization, IV Cannulation, IM Injection sites.</li>
                <li><strong>CPR:</strong> Latest AHA Guidelines (BLS/ACLS).</li>
                <li><strong>Biomedical Waste Management:</strong> Color coding of bins (Strictly asked).</li>
                <li><strong>Positions:</strong> Therapeutic positions for various conditions.</li>
              </ul>
            </div>
          )
        },
        {
          title: "3. Obstetrics & Gynecology (OBG)",
          content: (
            <div className="space-y-4">
              <p><strong>Weightage: Medium-High (15-20%)</strong>.</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 ml-2">
                <li><strong>Antenatal Care:</strong> Assessment, Leopold Maneuvers, EDD.</li>
                <li><strong>Labor:</strong> Stages of Labor, Partograph, Fetal Monitoring.</li>
                <li><strong>Complications:</strong> PPH, Preeclampsia/Eclampsia, Placenta Previa.</li>
                <li><strong>Newborn Care:</strong> APGAR Score, Resuscitation, Breastfeeding.</li>
              </ul>
            </div>
          )
        },
        {
          title: "4. Pediatric Nursing",
          content: (
            <div className="space-y-4">
              <p><strong>Weightage: Medium (10-15%)</strong>.</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 ml-2">
                <li>Growth & Development Milestones.</li>
                <li>Congenital Heart Defects (Cyanotic/Acyanotic).</li>
                <li>Immunization Schedule (Latest).</li>
                <li>Common Disorders: Nephrotic Syndrome, Leukemia, Dehydration.</li>
              </ul>
            </div>
          )
        },
        {
          title: "5. Psychiatric Nursing",
          content: (
            <div className="space-y-4">
              <p><strong>Weightage: Medium (10-15%)</strong>. Important for Mains (Clinical Scenarios).</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 ml-2">
                <li>MSE (Mental Status Examination).</li>
                <li>Schizophrenia & Psychosis.</li>
                <li>Mood Disorders (Depression/Mania).</li>
                <li>Therapeutic Communication & Nurse-Patient Relationship.</li>
                <li>Defense Mechanisms.</li>
              </ul>
            </div>
          )
        },
        {
          title: "6. Community Health Nursing (CHN)",
          content: (
            <div className="space-y-4">
              <p><strong>Weightage: Low-Medium (5-10%)</strong>.</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 ml-2">
                <li>Epidemiology (Triad, Levels of Prevention).</li>
                <li>National Health Programs.</li>
                <li>Family Planning Methods.</li>
                <li>Communicable Diseases & Vectors.</li>
              </ul>
            </div>
          )
        },
        {
          title: "7. General Aptitude & GK",
          content: (
            <div className="space-y-4">
              <p><strong>Weightage: Fixed (20 Questions)</strong>. Often the rank decider.</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 ml-2">
                <li><strong>Reasoning:</strong> Blood Relations, Coding-Decoding, Series.</li>
                <li><strong>Maths:</strong> Basic Arithmetic, Percentage, Profit/Loss.</li>
                <li><strong>GK:</strong> Current Affairs (Health related), Basic Static GK.</li>
              </ul>
              <div className="mt-4">
                 <p className="text-sm text-slate-500 italic">Preparation for the entire syllabus, including Aptitude, is handled comprehensively by <strong>NPrep</strong>.</p>
                 <NPrepCTA variant="general" />
              </div>
            </div>
          )
        }
      ],
      faqs: [
        { question: "Does the syllabus change every year?", answer: "The core nursing syllabus remains consistent. However, the weightage of topics shifts. NPrep courses are updated annually to reflect these trends." },
        { question: "Is there a specific book for the NORCET syllabus?", answer: "No single book covers everything perfectly. Standard nursing textbooks (Saunders, Lippincott) combined with NPrep notes are recommended." },
        { question: "Are image-based questions part of the syllabus?", answer: "Yes, especially in Mains. You must be familiar with instruments, X-rays, and ECG strips." },
        { question: "How much weightage does Aptitude carry?", answer: "Exactly 20 questions (10% of the paper). Ignoring this can cost you a good rank." },
        { question: "Is Pharmacology important?", answer: "Direct Pharma questions are few, but Pharmacology is integrated into MSN (e.g., Drugs for MI, Emergency drugs)." },
        { question: "Do I need to study Research & Management?", answer: "Yes, basic concepts of Research and Ward Management are asked (approx 5-8 questions)." },
        { question: "Is the syllabus different for Prelims and Mains?", answer: "The syllabus topics are the same. Prelims tests basic knowledge/recall, while Mains tests clinical application/priority." },
        { question: "Is there a skill test syllabus?", answer: "NORCET currently does not have a separate skill test; clinical skills are tested via scenario-based MCQs in Mains." }
      ]
    }
  },
  "norcet-exam-date": createPlaceholder("norcet-exam-date", "AIIMS NORCET 2026 Exam Date"),
  "norcet-eligibility": createPlaceholder("norcet-eligibility", "NORCET 2026 Eligibility Criteria"),
  "norcet-application-form": createPlaceholder("norcet-application-form", "NORCET 2026 Application Form"),
  "norcet-admit-card": createPlaceholder("norcet-admit-card", "NORCET 2026 Admit Card"),
  "norcet-cut-off": createPlaceholder("norcet-cut-off", "NORCET Previous Year Cut-off"),
  "norcet-result": createPlaceholder("norcet-result", "NORCET 2026 Results"),
  "aiims-nursing-officer-recruitment": createPlaceholder("aiims-nursing-officer-recruitment", "AIIMS Nursing Officer Recruitment"),
};

// --- Blog Posts ---
export const blogPosts: BlogPostData[] = [
  // ... (Keeping existing blog posts as they are already high quality, just ensuring they are exported)
  // Re-exporting the same blog posts from previous context to maintain data integrity
  {
    slug: "norcet-study-plan-3-months",
    title: "3-Month Study Plan for AIIMS NORCET Success (Day-by-Day Strategy)",
    excerpt: "A comprehensive 90-day intensive study schedule to cover the entire nursing syllabus, including revision slots and mock test strategy.",
    date: "2026-05-25",
    category: "Study Strategy",
    imageUrl: "https://iili.io/frEv8ZJ.png",
    thumbnail: {
      title: "AIIMS NORCET 2026",
      subtitle: "3 Month Study Plan"
    },
    content: (
      <>
        <p className="lead text-xl text-slate-700 mb-6">
          Is it possible to crack AIIMS NORCET in just 3 months? <strong>Yes, absolutely.</strong> But let’s be realistic—you cannot afford to waste a single day. This is not just a timetable; it is a <strong>strategic war plan</strong> designed to take you from "average preparation" to "top ranker" in 90 days.
        </p>
        <p className="mb-6">
          Whether you are a fresh graduate or a working nurse, this plan optimizes every hour. We will break down the syllabus into manageable chunks, prioritize high-yield topics, and ensure you have enough time for the most critical part: <strong>Revision and Mock Tests</strong>.
        </p>

        <Callout type="summary" title="Quick Summary of the 90-Day Plan">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Month 1 (Foundation):</strong> Cover the "Big 3" subjects (MSN, FON, OBG) which constitute 60% of the exam.</li>
            <li><strong>Month 2 (Strengthening):</strong> Finish minor subjects (Peds, Psych, Community) and start Aptitude.</li>
            <li><strong>Month 3 (The Kill Zone):</strong> Pure revision, daily mock tests, and error analysis. No new theory.</li>
            <li><strong>Daily Commitment:</strong> 6-8 hours (Full-time) or 4-5 hours (Working professionals).</li>
          </ul>
        </Callout>

        <TableOfContents 
          items={[
            { id: "understanding-pattern", label: "1. Understanding the NORCET Pattern" },
            { id: "month-1", label: "2. Month 1: Building the Foundation", subItems: [
              { id: "week-1-2", label: "Week 1-2: Medical Surgical Nursing" },
              { id: "week-3", label: "Week 3: Fundamentals of Nursing" },
              { id: "week-4", label: "Week 4: OBG & Gynecology" }
            ]},
            { id: "month-2", label: "3. Month 2: Mastering Minor Subjects" },
            { id: "month-3", label: "4. Month 3: Revision & Mock Tests" },
            { id: "daily-schedule", label: "5. Recommended Daily Schedule" },
            { id: "common-mistakes", label: "6. Common Mistakes to Avoid" },
            { id: "faqs", label: "7. Frequently Asked Questions" }
          ]} 
        />

        <h2 id="understanding-pattern" className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Understanding the NORCET Pattern</h2>
        <p className="mb-4">
          Before diving into books, you must understand the battlefield. NORCET is not just about knowledge; it's about <strong>accuracy and clinical application</strong>.
        </p>
        <p className="mb-4">
          The exam consists of 200 MCQs (180 Nursing + 20 General Knowledge/Aptitude). The biggest challenge is the <strong>1/3rd negative marking</strong>. This means for every 3 wrong answers, you lose 1 mark. Your strategy must focus on reducing negatives rather than attempting 200/200.
        </p>

        <h2 id="month-1" className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Month 1: Building the Foundation (The Big Three)</h2>
        <p className="mb-4">
          The first month is dedicated to the heavyweights. Do not touch minor subjects yet. If you master MSN, FON, and OBG, you have already won half the battle.
        </p>

        <h3 id="week-1-2" className="text-xl font-bold text-slate-800 mt-8 mb-3">Week 1-2: Medical Surgical Nursing (MSN)</h3>
        <p className="mb-4">
          MSN is vast. Do not try to read everything. Focus on systems with the highest weightage in previous NORCET exams.
        </p>
        <RichTable caption="High-Yield MSN Topics Checklist">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-blue-100 text-blue-900 font-bold">
              <tr><th className="p-3">System</th><th className="p-3">Must-Read Topics</th><th className="p-3">Clinical Focus</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3 font-semibold">Cardiovascular</td><td className="p-3">MI, Heart Failure, Hypertension</td><td className="p-3">ECG Interpretation, CPR Drugs</td></tr>
              <tr><td className="p-3 font-semibold">Respiratory</td><td className="p-3">COPD, Asthma, Tuberculosis</td><td className="p-3">ABG Analysis, Chest Tube Care</td></tr>
              <tr><td className="p-3 font-semibold">Neurology</td><td className="p-3">Stroke (CVA), Meningitis, GCS</td><td className="p-3">ICP Monitoring, Seizure Safety</td></tr>
              <tr><td className="p-3 font-semibold">Renal</td><td className="p-3">AKI vs CKD, Nephrotic Syndrome</td><td className="p-3">Dialysis Care, Fluid Balance</td></tr>
            </tbody>
          </table>
        </RichTable>

        <h3 id="week-3" className="text-xl font-bold text-slate-800 mt-8 mb-3">Week 3: Fundamentals of Nursing (FON)</h3>
        <p className="mb-4">
          This is the most scoring subject. Questions are usually practical and procedure-based.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
          <li><strong>Vital Signs:</strong> Errors in BP measurement, Fever patterns.</li>
          <li><strong>Procedures:</strong> NG Tube, Catheterization, IV Cannulation steps.</li>
          <li><strong>Acid-Base Balance:</strong> Master the ABG values.</li>
          <li><strong>Biomedical Waste Management:</strong> Memorize the color coding bins (Yellow, Red, White, Blue).</li>
        </ul>

        <h3 id="week-4" className="text-xl font-bold text-slate-800 mt-8 mb-3">Week 4: Obstetrics & Gynecology (OBG)</h3>
        <p className="mb-4">
          Focus on the physiological changes in pregnancy and labor management.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
          <li><strong>Antenatal Care:</strong> EDD calculation, Leopold maneuvers.</li>
          <li><strong>Labor:</strong> Stages of labor, Partograph plotting (Very Important).</li>
          <li><strong>Complications:</strong> PPH management, Preeclampsia drugs (MgSo4).</li>
        </ul>

        <NPrepCTA variant="general" />

        <h2 id="month-2" className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Month 2: Mastering Minor Subjects</h2>
        <p className="mb-4">
          Now that the core is strong, move to subjects that are easy to cover but yield direct questions.
        </p>
        <RichTable caption="Month 2 Study Schedule">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-purple-100 text-purple-900 font-bold">
              <tr><th className="p-3">Week</th><th className="p-3">Subject</th><th className="p-3">Key Focus Areas</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3">Week 5</td><td className="p-3">Pediatrics</td><td className="p-3">Milestones, Congenital Heart Defects, Immunization Schedule.</td></tr>
              <tr><td className="p-3">Week 6</td><td className="p-3">Psychiatry</td><td className="p-3">Schizophrenia, Defense Mechanisms, Lithium Toxicity.</td></tr>
              <tr><td className="p-3">Week 7</td><td className="p-3">Community Health</td><td className="p-3">Epidemiology, Health Programs, Contraception methods.</td></tr>
              <tr><td className="p-3">Week 8</td><td className="p-3">Pharma & Micro</td><td className="p-3">Emergency Drugs, Sterilization methods, Immunity.</td></tr>
            </tbody>
          </table>
        </RichTable>

        <h2 id="month-3" className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Month 3: The "Kill Zone" (Revision & Mock Tests)</h2>
        <p className="mb-4">
          <strong>Stop reading new theory.</strong> If you haven't covered a topic by now, leave it. Month 3 is exclusively for consolidating what you know.
        </p>
        
        <StepByStep 
          steps={[
            { title: "Morning: Mock Test (9 AM - 12 PM)", text: "Attempt a full-length 200 MCQ test. Sit in a quiet room. Do not pause the test. Train your brain to be active during exam hours." },
            { title: "Afternoon: Analysis (2 PM - 5 PM)", text: "This is more important than the test itself. Check every wrong answer. Was it a knowledge gap? Or a silly mistake? Note it down in a 'Mistake Notebook'." },
            { title: "Evening: Targeted Revision (6 PM - 9 PM)", text: "Revise ONLY the topics you got wrong in the mock test. If you missed a question on 'Diabetes', revise the entire Diabetes chapter." }
          ]}
        />

        <Callout type="mistake" title="Common Mistakes in Month 3">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Over-attempting:</strong> Trying to solve 190+ questions and getting -20 marks in negatives. Stick to 160-170 confident attempts.</li>
            <li><strong>Ignoring Aptitude:</strong> The 20 marks of GK/Aptitude often decide the rank. Spend 30 mins daily on this.</li>
            <li><strong>Burnout:</strong> Studying 16 hours a day and falling sick before the exam. Sleep 7 hours minimum.</li>
          </ul>
        </Callout>

        <h2 id="daily-schedule" className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Recommended Daily Schedule</h2>
        <p className="mb-4">
          Consistency beats intensity. Follow this routine for the next 90 days.
        </p>
        <RichTable>
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-800 text-white">
              <tr><th className="p-3 border">Time Slot</th><th className="p-3 border">Activity</th><th className="p-3 border">Notes</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3 border font-bold">6 AM - 9 AM</td><td className="p-3 border">Heavy Theory (New Topic)</td><td className="p-3 border">Brain is fresh. Tackle difficult concepts.</td></tr>
              <tr><td className="p-3 border font-bold">10 AM - 1 PM</td><td className="p-3 border">MCQ Practice (Subject-wise)</td><td className="p-3 border">Solve 100-150 questions from QBank.</td></tr>
              <tr><td className="p-3 border font-bold">2 PM - 4 PM</td><td className="p-3 border">Revision of Previous Day</td><td className="p-3 border">Active recall. Do not just re-read.</td></tr>
              <tr><td className="p-3 border font-bold">5 PM - 6 PM</td><td className="p-3 border">Aptitude / GK</td><td className="p-3 border">Maths formulas, Current affairs.</td></tr>
              <tr><td className="p-3 border font-bold">8 PM - 10 PM</td><td className="p-3 border">Mock Test Analysis / Weak Areas</td><td className="p-3 border">Review your mistake notebook.</td></tr>
            </tbody>
          </table>
        </RichTable>

        <NPrepCTA variant="test" />

        <Glossary 
          terms={[
            { term: "Negative Marking", def: "Deduction of marks for wrong answers. In NORCET, it is 1/3rd (0.33 marks)." },
            { term: "Partograph", def: "A graphical record of maternal and fetal data during labor to assess progress." },
            { term: "GCS (Glasgow Coma Scale)", def: "A clinical scale used to reliably measure a person's level of consciousness." },
            { term: "High-Yield Topics", def: "Topics that are frequently repeated in exams and carry maximum weightage." },
            { term: "Active Recall", def: "A study method where you stimulate your memory for a piece of information." }
          ]}
        />

        <FAQSection 
          items={[
            { q: "Can I clear NORCET without coaching?", a: "Yes, if you are disciplined. However, a structured course like NPrep GOLD helps save time by providing curated content." },
            { q: "How many hours should I study daily?", a: "Quality matters more than quantity. 6-8 hours of focused study is sufficient." },
            { q: "Is it necessary to attempt all 200 questions?", a: "No! Attempting 160-170 with 90% accuracy is better than attempting 200 with 70% accuracy." },
            { q: "Which book is best for MCQs?", a: "Target High and PR Yadav are popular, but NPrep QBank is updated with the latest clinical scenarios." },
            { q: "How to manage negative marking?", a: "Avoid guessing. If you can eliminate 2 options, take a calculated risk. If you are clueless, skip it." },
            { q: "Is aptitude section important?", a: "Yes, it constitutes 20 questions. Scoring well here can significantly boost your rank." },
            { q: "How many mock tests should I take?", a: "At least 20-30 full-length mock tests in the last month of preparation." },
            { q: "What is the ideal revision strategy?", a: "Use short notes and flashcards. Do not read full textbooks during revision." },
            { q: "How to stay motivated?", a: "Focus on your goal of becoming a Nursing Officer. Take short breaks and reward yourself for small milestones." },
            { q: "Can I use online resources?", a: "Yes, online platforms like NPrep offer high-quality content and flexibility." }
          ]}
        />

        <RelatedArticles 
          links={[
            { title: "NORCET Syllabus 2026 Detailed Breakdown", url: "/norcet-syllabus" },
            { title: "Download Previous Year Question Papers", url: "/previous-year-papers" },
            { title: "NORCET vs RRB Staff Nurse Comparison", url: "/blog/norcet-vs-rrb-nursing" },
            { title: "Check Latest NORCET Notification", url: "/norcet-notification" },
            { title: "Nursing Officer Salary & Perks", url: "/blog/nursing-officer-salary-8th-pay-commission" },
            { title: "NORCET 2026 Eligibility Criteria", url: "/norcet-eligibility" }
          ]}
        />
      </>
    )
  },
  {
    slug: "norcet-vs-rrb-nursing",
    title: "NORCET vs RRB Staff Nurse: Which is Better? (Detailed Comparison)",
    excerpt: "Comparing salary, job profile, work-life balance, and career growth between AIIMS Nursing Officer and Railway Staff Nurse.",
    date: "2026-05-18",
    category: "Career Guidance",
    imageUrl: "https://iili.io/frEg0cQ.png",
    thumbnail: {
      title: "NORCET vs RRB Staff Nurse",
      subtitle: "Detailed Comparison"
    },
    content: (
      <>
        <p className="lead text-xl text-slate-700 mb-6">
          Two of the biggest giants in government nursing recruitment are <strong>AIIMS (via NORCET)</strong> and <strong>Indian Railways (RRB Staff Nurse)</strong>. Both offer central government status, job security, and respect. However, they cater to very different career aspirations and lifestyles.
        </p>
        <p className="mb-6">
          If you are confused between choosing the clinical excellence of AIIMS or the perks of Indian Railways, this detailed comparison will help you decide. We will analyze Salary, Work-Life Balance, Promotions, and Perks.
        </p>

        <Callout type="note" title="Key Difference at a Glance">
          <p><strong>AIIMS</strong> is for those who love clinical challenges, fast-paced environments, and want to work in India's premier medical institute. <strong>Railways</strong> is for those who prioritize work-life balance, travel perks, and a moderate workload.</p>
        </Callout>

        <TableOfContents 
          items={[
            { id: "job-profile", label: "1. Job Profile & Work Environment" },
            { id: "salary-comparison", label: "2. Salary Structure Comparison" },
            { id: "perks-benefits", label: "3. Perks & Allowances" },
            { id: "career-growth", label: "4. Promotion & Career Growth" },
            { id: "selection-process", label: "5. Selection Process Difficulty" },
            { id: "verdict", label: "6. Final Verdict: Which to Choose?" },
            { id: "faqs", label: "7. Frequently Asked Questions" }
          ]} 
        />

        <h2 id="job-profile" className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Job Profile & Work Environment</h2>
        <p className="mb-4">
          The daily life of a nurse in AIIMS is vastly different from one in a Railway Hospital.
        </p>
        <RichTable caption="Work Environment Comparison">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-800 text-white">
              <tr><th className="p-3">Feature</th><th className="p-3">AIIMS Nursing Officer</th><th className="p-3">RRB Staff Nurse</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3 font-bold">Patient Load</td><td className="p-3">Very High (General Public + Referrals)</td><td className="p-3">Moderate (Railway Employees & Families)</td></tr>
              <tr><td className="p-3 font-bold">Case Complexity</td><td className="p-3">Critical, Trauma, Super-specialty</td><td className="p-3">General Medicine, First Aid, Routine Surgeries</td></tr>
              <tr><td className="p-3 font-bold">Shift Duties</td><td className="p-3">Hectic, often extended hours</td><td className="p-3">Structured, relatively relaxed</td></tr>
              <tr><td className="p-3 font-bold">Infrastructure</td><td className="p-3">World-class, latest technology</td><td className="p-3">Good, but varies by division</td></tr>
            </tbody>
          </table>
        </RichTable>

        <h2 id="salary-comparison" className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Salary Structure Comparison</h2>
        <p className="mb-4">
          Both posts are Level-7 (4600 Grade Pay), but the allowances make a difference.
        </p>
        <RichTable caption="Monthly Salary Breakdown (Approx)">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-green-100 text-green-900 font-bold">
              <tr><th className="p-3">Component</th><th className="p-3">AIIMS (Metro City)</th><th className="p-3">Railways (Class X City)</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3">Basic Pay</td><td className="p-3">₹44,900</td><td className="p-3">₹44,900</td></tr>
              <tr><td className="p-3">DA (50%)</td><td className="p-3">₹22,450</td><td className="p-3">₹22,450</td></tr>
              <tr><td className="p-3">Nursing Allowance</td><td className="p-3">₹7,200</td><td className="p-3">₹7,200</td></tr>
              <tr><td className="p-3">Dress Allowance</td><td className="p-3">₹1,800</td><td className="p-3">₹1,800</td></tr>
              <tr><td className="p-3">In-Hand (Approx)</td><td className="p-3 font-bold text-blue-600">₹80,000 - ₹85,000</td><td className="p-3 font-bold text-green-600">₹75,000 - ₹80,000</td></tr>
            </tbody>
          </table>
        </RichTable>
        <p className="text-sm text-gray-500 mt-2">Note: AIIMS often has higher HRA and specific institutional allowances compared to some Railway divisions.</p>

        <h2 id="perks-benefits" className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Perks & Allowances (Beyond Salary)</h2>
        <p className="mb-4">
          This is the tie-breaker for many candidates.
        </p>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-900 text-lg mb-3">AIIMS Perks</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Medical:</strong> Free treatment for self and family at AIIMS (Best in India).</li>
              <li><strong>Learning:</strong> Workshops, conferences, higher education support.</li>
              <li><strong>Prestige:</strong> The "AIIMS" tag carries immense respect globally.</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h3 className="font-bold text-green-900 text-lg mb-3">Railway Perks</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Travel:</strong> Free AC Passes for family (3 sets/year) anywhere in India.</li>
              <li><strong>Quarters:</strong> Railway colonies are often well-maintained with community halls.</li>
              <li><strong>Relaxed Life:</strong> More time for family and personal hobbies.</li>
            </ul>
          </div>
        </div>

        <NPrepCTA variant="general" />

        <h2 id="career-growth" className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Promotion & Career Growth</h2>
        <p className="mb-4">
          How fast will you climb the ladder?
        </p>
        <StepByStep 
          steps={[
            { title: "AIIMS Hierarchy", text: "Nursing Officer -> Senior Nursing Officer (Grade 1) -> ANS -> DNS -> Nursing Superintendent -> CNO. Promotions are relatively faster due to large cadre strength." },
            { title: "Railways Hierarchy", text: "Staff Nurse -> Nursing Superintendent -> Chief Matron -> ANO. Promotions can be slower in smaller divisions due to fewer senior posts." }
          ]}
        />

        <Callout type="mistake" title="Common Mistake: Choosing Only for Salary">
          <p>Do not choose AIIMS just because the salary is ₹5,000 higher. If you cannot handle high-stress trauma cases or night shifts, the extra money won't be worth the burnout. Choose Railways if you value peace of mind.</p>
        </Callout>

        <h2 id="verdict" className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Final Verdict: Which to Choose?</h2>
        <div className="space-y-4">
           <div className="p-4 border-l-4 border-blue-600 bg-white shadow-sm">
             <h4 className="font-bold text-lg text-blue-900">Choose AIIMS (NORCET) If:</h4>
             <p className="text-slate-600">You are ambitious, young, want to learn advanced medical procedures, and desire the highest professional status in Indian nursing.</p>
           </div>
           <div className="p-4 border-l-4 border-green-600 bg-white shadow-sm">
             <h4 className="font-bold text-lg text-green-900">Choose RRB Staff Nurse If:</h4>
             <p className="text-slate-600">You want a stable job with less work pressure, want to travel India for free with family, and prefer a balanced lifestyle over clinical thrill.</p>
           </div>
        </div>

        <Glossary 
          terms={[
            { term: "Level-7 Pay Matrix", def: "The pay scale for Nursing Officers starting at ₹44,900 basic pay." },
            { term: "Privilege Pass", def: "A railway pass that allows free travel for the employee and family in specific classes." },
            { term: "Cadre Restructuring", def: "Government policy changes that affect promotion avenues and designations." },
            { term: "Tertiary Care", def: "Specialized consultative health care (like AIIMS) for advanced medical investigation and treatment." }
          ]}
        />

        <FAQSection 
          items={[
            { q: "Can I apply for both exams?", a: "Yes! The syllabus is 80% similar. Only the aptitude portion varies slightly." },
            { q: "Is RRB recruitment regular like NORCET?", a: "No. NORCET happens twice a year. RRB vacancies are irregular and may come once in 2-3 years." },
            { q: "Which job has better transfer policy?", a: "Railways has a better mutual transfer policy compared to AIIMS, where transfers are difficult between different AIIMS institutes." },
            { q: "Is there an interview for these posts?", a: "No. Both recruitments are based purely on the written CBT exam marks." },
            { q: "Is work experience required for RRB?", a: "Generally, no. Freshers can apply for RRB Staff Nurse. For AIIMS, GNM candidates need 2 years of experience." },
            { q: "Which job has better pension?", a: "Both are covered under the National Pension System (NPS). There is no old pension scheme for new joiners." },
            { q: "Can I do MSc Nursing while working?", a: "Yes, both organizations have provisions for study leave, but AIIMS generally encourages higher studies more." },
            { q: "What is the age limit?", a: "AIIMS is 18-30 years. RRB is generally 20-40 years, offering a wider window." },
            { q: "Is there a bond in AIIMS?", a: "Yes, usually a 2-year probation period applies." },
            { q: "Which exam is tougher?", a: "NORCET is generally considered tougher due to clinical scenario-based questions." }
          ]}
        />

        <RelatedArticles 
          links={[
            { title: "AIIMS NORCET 2026 Study Plan", url: "/blog/norcet-study-plan-3-months" },
            { title: "Nursing Officer Salary After 8th Pay Commission", url: "/blog/nursing-officer-salary-8th-pay-commission" },
            { title: "Download NORCET Previous Year Papers", url: "/previous-year-papers" },
            { title: "Check Eligibility for NORCET 2026", url: "/norcet-eligibility" },
            { title: "NORCET Syllabus Detailed Breakdown", url: "/norcet-syllabus" },
            { title: "Latest Notifications", url: "/norcet-notification" }
          ]}
        />
      </>
    )
  },
  {
    slug: "norcet-previous-year-question-papers-pdf",
    title: "Download AIIMS NORCET Previous Year Question Papers (PDF)",
    excerpt: "Access authentic memory-based question papers for NORCET 7, 6, 5, 4, and 3. Practice real exam questions.",
    date: "2026-05-28",
    category: "Downloads & Resources",
    imageUrl: "https://iili.io/frEUi8B.png",
    thumbnail: {
      title: "NORCET PYQ Papers",
      subtitle: "Download PDF"
    },
    content: (
      <>
        <p className="lead text-xl text-slate-700 mb-6">
          Practicing <strong>Previous Year Question (PYQ) papers</strong> is the single most effective strategy to crack AIIMS NORCET. Since AIIMS does not release official question papers, students often struggle to find authentic questions.
        </p>
        <p className="mb-6">
          In this comprehensive guide, we provide you with downloadable PDFs of memory-based papers from NORCET 3 to NORCET 7. We also analyze the difficulty level of each shift and provide a strategy on how to use these papers effectively.
        </p>
        
        <TableOfContents 
          items={[
            { id: "why-pyq", label: "1. Why Solve PYQs?" },
            { id: "download-links", label: "2. Download Links (PDF)" },
            { id: "paper-analysis", label: "3. Detailed Analysis of Past Papers" },
            { id: "how-to-attempt", label: "4. Strategy to Attempt PYQs" },
            { id: "faqs", label: "5. FAQs" }
          ]} 
        />

        <h2 id="why-pyq" className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Why Solve PYQs?</h2>
        <p className="mb-4">At <strong>norcetexam.com</strong>, we have curated authentic memory-based question papers from actual exam takers.</p>
        <Callout type="tip" title="Benefit of PYQs">
          <ul className="list-disc list-inside">
            <li><strong>Pattern Recognition:</strong> Understand the shift from one-liners to clinical vignettes.</li>
            <li><strong>High-Yield Topics:</strong> Identify topics like MI, Diabetes, and Labor that repeat every year.</li>
            <li><strong>Time Management:</strong> Practice finishing 200 questions in 180 minutes.</li>
          </ul>
        </Callout>

        <h2 id="download-links" className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Download NORCET Question Papers</h2>
        <RichTable>
          <table className="min-w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Exam Name</th>
                <th className="px-6 py-4 text-left font-bold">Shift / Date</th>
                <th className="px-6 py-4 text-center font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">NORCET 7 Prelims</td>
                <td className="px-6 py-4 text-slate-600">Sep 2024</td>
                <td className="px-6 py-4 text-center">
                  <a href="https://links.nprep.in/aXOX5oZXPZb" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline flex items-center justify-center"><Download className="w-4 h-4 mr-1"/> Download</a>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">NORCET 4</td>
                <td className="px-6 py-4 text-slate-600">June 2023</td>
                <td className="px-6 py-4 text-center">
                  <a href="https://links.nprep.in/weaumiphIZb" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline flex items-center justify-center"><Download className="w-4 h-4 mr-1"/> Download</a>
                </td>
              </tr>
               <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">NORCET 3 - Shift 2</td>
                <td className="px-6 py-4 text-slate-600">2022</td>
                <td className="px-6 py-4 text-center">
                  <a href="https://links.nprep.in/K7VH496yQZb" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline flex items-center justify-center"><Download className="w-4 h-4 mr-1"/> Download</a>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">NORCET 3 - Shift 1</td>
                <td className="px-6 py-4 text-slate-600">2022</td>
                <td className="px-6 py-4 text-center">
                  <a href="https://links.nprep.in/f2X7pvwHMZb" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline flex items-center justify-center"><Download className="w-4 h-4 mr-1"/> Download</a>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">NORCET 2020 - Shift 2</td>
                <td className="px-6 py-4 text-slate-600">Nov 2020</td>
                <td className="px-6 py-4 text-center">
                  <a href="https://links.nprep.in/xkOMXfpAhZb" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline flex items-center justify-center"><Download className="w-4 h-4 mr-1"/> Download</a>
                </td>
              </tr>
            </tbody>
          </table>
        </RichTable>

        <h2 id="paper-analysis" className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Detailed Analysis of Past Papers</h2>
        <p className="mb-4">Understanding the evolution of the exam is crucial.</p>
        
        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">NORCET 7 (2024) Analysis</h3>
        <p className="mb-4">This exam marked a significant shift towards <strong>Stage-wise testing</strong>. The Prelims focused on basic knowledge and screening, while Mains was purely clinical.</p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
            <li><strong>Difficulty:</strong> Moderate to Hard.</li>
            <li><strong>Key Topics:</strong> Emergency Nursing, Critical Care, Image-based questions on instruments.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">NORCET 3 (2022) Analysis</h3>
        <p className="mb-4">Known for its length. Questions were paragraph-based, testing reading speed and comprehension.</p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
            <li><strong>Difficulty:</strong> Hard.</li>
            <li><strong>Key Topics:</strong> Psychiatric Nursing, Community Health, Leadership & Management.</li>
        </ul>

        <h2 id="how-to-attempt" className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Strategy to Attempt PYQs</h2>
        <StepByStep 
          steps={[
            { title: "Simulate Exam Conditions", text: "Sit for 3 hours without breaks while attempting these papers. Do not use your phone." },
            { title: "Identify Weak Areas", text: "Note down which subjects (e.g., OBG, Peds) had the most wrong answers. Be honest with yourself." },
            { title: "Review Solutions", text: "Use the detailed solutions provided in the links to understand the rationale. Don't just memorize the answer." },
            { title: "Re-attempt", text: "After 1 week, attempt the same paper again to see if your score has improved." }
          ]}
        />

        <NPrepCTA variant="pyq" />
        
        <Glossary 
          terms={[
            { term: "Memory-Based Paper", def: "A question paper reconstructed by students after the exam, as official papers are not released." },
            { term: "Clinical Vignette", def: "A short story or scenario about a patient used to test clinical reasoning." },
            { term: "Normalization", def: "A statistical process to adjust scores across different shifts to ensure fairness." },
            { term: "Percentile", def: "A score indicating the percentage of candidates who scored lower than you." }
          ]}
        />

        <FAQSection 
          items={[
            { q: "Are these official papers?", a: "No, AIIMS does not release official papers. These are memory-based papers reconstructed by students." },
            { q: "Do questions repeat?", a: "Exact questions rarely repeat, but the *topics* (like MI, Diabetes, Labor) repeat every year." },
            { q: "Is the answer key accurate?", a: "Yes, the solutions provided in the links are verified by NPrep's expert faculty." },
            { q: "Can I print these PDFs?", a: "Yes, the PDFs are printer-friendly." },
            { q: "How many years of PYQs should I solve?", a: "Solving the last 5 years (2020-2025) is sufficient to understand the trend." },
            { q: "Is NORCET 2026 pattern different?", a: "It is expected to follow the Stage 1 (Prelims) and Stage 2 (Mains) pattern introduced in NORCET 7." },
            { q: "Does NPrep app have more papers?", a: "Yes, the NPrep app contains subject-wise PYQs and mock tests based on these papers." },
            { q: "What is a good score in PYQs?", a: "Aim for 120-130+ correct answers out of 200 to be in the safe zone." },
            { q: "How to reduce negative marking?", a: "Practice elimination technique. If you can't eliminate 2 options, skip the question." },
            { q: "Are IBQs included in these PDFs?", a: "Yes, image-based questions are included where available." }
          ]}
        />

        <RelatedArticles 
          links={[
            { title: "Analysis of NORCET Trends (2020-2025)", url: "/blog/norcet-previous-year-questions" },
            { title: "3 Month Study Plan for NORCET", url: "/blog/norcet-study-plan-3-months" },
            { title: "NORCET Syllabus Breakdown", url: "/norcet-syllabus" },
            { title: "Join NPrep Test Series", url: "/courses" },
            { title: "Check Exam Eligibility", url: "/norcet-eligibility" },
            { title: "Latest Exam Notifications", url: "/norcet-notification" }
          ]}
        />
      </>
    )
  },
  {
    slug: "nursing-officer-salary-8th-pay-commission",
    title: "Nursing Officer Salary After 8th Pay Commission (Projected)",
    excerpt: "Projected salary structure for AIIMS Nursing Officers under the 8th Pay Commission. Analysis of fitment factors.",
    date: "2026-06-01",
    category: "Salary & Career",
    imageUrl: "https://iili.io/frESX5P.png",
    thumbnail: {
      title: "AIIMS Nursing Officer 2026",
      subtitle: "Salary & 8th Pay Commission"
    },
    content: (
      <>
        <p className="lead text-xl text-slate-700 mb-6">
          Becoming a <strong>Nursing Officer at AIIMS (All India Institute of Medical Sciences)</strong> remains one of the most prestigious and financially secure career choices for nursing professionals in India. AIIMS stands at the apex of India’s public healthcare system, offering advanced clinical exposure, super-specialty practice, and unparalleled professional respect.
        </p>
        <p className="mb-6">
          AIIMS Nursing Officers are the backbone of patient care-handling critical responsibilities across ICUs, emergency units, trauma centres, oncology wards, cardiac care units, and advanced diagnostic departments. Given the clinical intensity and responsibility involved, salary revision under the upcoming <strong>8th Pay Commission</strong> is a closely watched development among nursing aspirants.
        </p>

        <TableOfContents 
          items={[
            { id: "fitment-factor", label: "1. 8th Pay Commission & Fitment Factor" },
            { id: "salary-structure", label: "2. Projected Salary Structure" },
            { id: "calculation", label: "3. How Salary is Calculated" },
            { id: "city-wise", label: "4. City-Wise In-Hand Salary" },
            { id: "hra-allowances", label: "5. HRA & Other Allowances" },
            { id: "why-aiims", label: "6. Why AIIMS is Top Choice" },
            { id: "faqs", label: "7. FAQs" }
          ]} 
        />

        <h2 id="fitment-factor" className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. 8th Pay Commission & Fitment Factor: What to Expect</h2>
        <p className="mb-4">
          One of the most important determinants of salary revision under any Pay Commission is the <strong>fitment factor</strong>.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700">
          <li>Expert estimates suggest that the <strong>8th Pay Commission fitment factor may range between 1.95 and 2.46</strong></li>
          <li>The <strong>higher the fitment factor, the higher the revised basic pay</strong></li>
          <li>To remain <strong>realistic, conservative, and exam-oriented</strong>, <strong>all salary calculations in this blog are based on the lower-end fitment factor of 1.95</strong></li>
        </ul>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-600 my-6">
          If the final fitment factor is closer to <strong>2.46</strong>, the actual salary figures may be <strong>significantly higher</strong> than those shown here.
        </blockquote>

        <h2 id="salary-structure" className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. AIIMS Nursing Officer Salary Structure (8th Pay Commission – Projected)</h2>
        <p className="mb-4">*(Calculated using Fitment Factor = <strong>1.95</strong>)*</p>
        
        <RichTable caption="Projected Salary Breakdown">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr><th className="p-3">Salary Component</th><th className="p-3">Amount (Approx.)</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3 font-bold">Revised Basic Pay (Level 7)</td><td className="p-3 font-bold">₹87,555</td></tr>
              <tr><td className="p-3">Dearness Allowance (50%)</td><td className="p-3">₹43,778</td></tr>
              <tr><td className="p-3">House Rent Allowance (HRA)</td><td className="p-3">₹4,041 – ₹12,123</td></tr>
              <tr><td className="p-3">Transport Allowance (TA + DA)</td><td className="p-3">₹5,400 – ₹7,200</td></tr>
              <tr><td className="p-3">Nursing Allowance</td><td className="p-3">₹2,400 – ₹4,800</td></tr>
              <tr><td className="p-3">Uniform Allowance</td><td className="p-3">₹1,500 – ₹3,000 (Annual)</td></tr>
              <tr><td className="p-3">Night Duty Allowance</td><td className="p-3">Applicable</td></tr>
              <tr><td className="p-3">OTA (Overtime Allowance)</td><td className="p-3">Applicable</td></tr>
              <tr><td className="p-3 font-bold text-blue-800">Gross Monthly Salary</td><td className="p-3 font-bold text-blue-800">₹1.43 – ₹1.56 lakh</td></tr>
              <tr><td className="p-3 font-bold text-green-700">Expected In-Hand Salary</td><td className="p-3 font-bold text-green-700">₹1.25 – ₹1.38 lakh</td></tr>
            </tbody>
          </table>
        </RichTable>

        <h2 id="calculation" className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. How the Salary Has Been Calculated (1.95 Fitment)</h2>
        <StepByStep 
          steps={[
            { title: "1. Revised Basic Pay", text: "₹44,900 × 1.95 = ₹87,555. This is the base figure for all other calculations." },
            { title: "2. Dearness Allowance (DA @ 50%)", text: "50% of ₹87,555 = ₹43,778. DA is provided to offset inflation." },
            { title: "3. Transport Allowance", text: "Increased from ₹3,600 to ₹5,400 and ₹4,800 to ₹7,200 depending on the city." },
            { title: "4. House Rent Allowance (HRA)", text: "Calculated based on city category (X, Y, Z). Metro cities get the highest HRA." }
          ]}
        />

        <h2 id="city-wise" className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. City-Wise AIIMS Nursing Officer In-Hand Salary (Projected)</h2>
        <RichTable caption="Location Based Salary">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-slate-800 text-white">
              <tr><th className="p-3">AIIMS Location</th><th className="p-3">City Category</th><th className="p-3">Approx. In-Hand Salary</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3">AIIMS Delhi</td><td className="p-3">X (Metro)</td><td className="p-3 font-bold">₹1.34 – ₹1.38 lakh</td></tr>
              <tr><td className="p-3">AIIMS Rishikesh</td><td className="p-3">Y</td><td className="p-3">₹1.30 – ₹1.33 lakh</td></tr>
              <tr><td className="p-3">AIIMS Bhubaneswar</td><td className="p-3">Y</td><td className="p-3">₹1.28 – ₹1.32 lakh</td></tr>
              <tr><td className="p-3">AIIMS Jodhpur</td><td className="p-3">Y</td><td className="p-3">₹1.26 – ₹1.30 lakh</td></tr>
              <tr><td className="p-3">AIIMS Raipur</td><td className="p-3">Z</td><td className="p-3">₹1.25 – ₹1.28 lakh</td></tr>
              <tr><td className="p-3">AIIMS Patna</td><td className="p-3">Z</td><td className="p-3">₹1.25 – ₹1.28 lakh</td></tr>
            </tbody>
          </table>
        </RichTable>

        <h2 id="hra-allowances" className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. HRA Under 8th Pay Commission (Based on Revised Basic)</h2>
        <RichTable>
          <table className="min-w-full border border-gray-200">
            <thead className="bg-purple-600 text-white">
              <tr><th className="p-3">City Category</th><th className="p-3">HRA %</th><th className="p-3">HRA Amount</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3">X (Metro)</td><td className="p-3">27%</td><td className="p-3">₹12,123</td></tr>
              <tr><td className="p-3">Y (Tier-2)</td><td className="p-3">18%</td><td className="p-3">~₹8,000</td></tr>
              <tr><td className="p-3">Z (Tier-3)</td><td className="p-3">9%</td><td className="p-3">₹4,041</td></tr>
            </tbody>
          </table>
        </RichTable>
        <Callout type="note" title="Note on HRA">
          <p>HRA is not applicable if government accommodation (quarters) is allotted to the employee.</p>
        </Callout>

        <h2 id="why-aiims" className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Why AIIMS Nursing Officer Will Remain a Top Government Nursing Job</h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700">
          <li>Salary among the <strong>highest in government nursing</strong></li>
          <li>Strong inflation protection through DA</li>
          <li>Excellent risk and hardship allowances</li>
          <li>Long-term job stability</li>
          <li>Exposure to India’s best medical infrastructure</li>
          <li>Free healthcare benefits</li>
          <li>Clear promotion pathways</li>
          <li>National-level prestige</li>
        </ul>
        <p className="mb-6">
          With even the <strong>lowest projected fitment factor of 1.95</strong>, AIIMS Nursing Officers are expected to enter a <strong>₹1.5 lakh gross salary bracket</strong> under the 8th Pay Commission. Any upward revision toward <strong>2.46</strong> will only strengthen this position further.
        </p>

        <NPrepCTA variant="general" />

        <Glossary 
          terms={[
            { term: "Fitment Factor", def: "A multiplier used to revise the basic pay from one Pay Commission to the next." },
            { term: "DA (Dearness Allowance)", def: "An allowance paid to government employees to offset the impact of inflation." },
            { term: "HRA (House Rent Allowance)", def: "Allowance provided to employees to meet accommodation expenses." },
            { term: "Gross Salary", def: "Total salary before any deductions like tax or pension contributions." },
            { term: "In-Hand Salary", def: "The final amount received in the bank account after all deductions." }
          ]}
        />

        <FAQSection 
          items={[
            { q: "What fitment factor is used in this salary calculation?", a: "All calculations use a conservative fitment factor of 1.95, though the actual 8th Pay Commission factor may range from 1.95 to 2.46." },
            { q: "Will AIIMS Nursing Officer salary cross ₹1.5 lakh per month?", a: "Yes. Even at 1.95 fitment, gross salary reaches ₹1.56 lakh. Higher fitment will push it further." },
            { q: "Does everyone get HRA?", a: "No. HRA is not applicable if government accommodation is provided." },
            { q: "Are night duty and OTA included in gross salary?", a: "No. These are additional earnings over and above the stated gross salary." },
            { q: "Is this salary officially notified?", a: "No. This is a projection based on current structure and realistic fitment assumptions." },
            { q: "When will 8th Pay Commission be implemented?", a: "It is expected to be implemented around 2026." },
            { q: "Is there any difference in salary between AIIMS Delhi and AIIMS Patna?", a: "Yes, mainly due to HRA (House Rent Allowance) which depends on the city category." },
            { q: "Do Nursing Officers get pension?", a: "Yes, they are covered under the National Pension System (NPS)." },
            { q: "What is the probation period?", a: "The probation period is usually 2 years." },
            { q: "Can I get a loan easily as an AIIMS employee?", a: "Yes, AIIMS employees are considered premium customers by banks for loans." }
          ]}
        />

        <RelatedArticles 
          links={[
            { title: "NORCET vs RRB Staff Nurse Salary Comparison", url: "/blog/norcet-vs-rrb-nursing" },
            { title: "3 Month Study Plan for NORCET", url: "/blog/norcet-study-plan-3-months" },
            { title: "Check NORCET Eligibility", url: "/norcet-eligibility" },
            { title: "Download Previous Year Papers", url: "/previous-year-papers" },
            { title: "Latest Exam Notifications", url: "/norcet-notification" },
            { title: "Join NPrep GOLD Batch", url: "/courses" }
          ]}
        />
      </>
    )
  },
  {
    slug: "norcet-previous-year-questions",
    title: "Analysis of NORCET Previous Year Question Papers (2020-2025)",
    excerpt: "Detailed topic-wise analysis of past 5 years of NORCET papers. Identify high-yield topics for 2026.",
    date: "2026-05-15",
    category: "Previous Year Questions",
    imageUrl: "https://iili.io/frEe6VR.png",
    thumbnail: {
      title: "AIIMS NORCET 2026",
      subtitle: "PYQ Analysis 2020-25"
    },
    content: (
      <>
        <p className="lead text-xl text-slate-700 mb-6">
          Smart preparation isn't about reading everything; it's about reading what matters. Analysis of <strong>NORCET papers from 2020 to 2025</strong> reveals that <strong>60% of the paper comes from 40% of the syllabus</strong>.
        </p>
        <p className="mb-6">
          In this detailed analysis, we break down the subject-wise weightage, identify the most repeated topics, and provide a roadmap to master them.
        </p>

        <TableOfContents 
          items={[
            { id: "weightage", label: "1. Subject-Wise Weightage" },
            { id: "high-yield", label: "2. Top 10 High-Yield Topics" },
            { id: "ibq", label: "3. Image-Based Questions (IBQs)" },
            { id: "trends", label: "4. Emerging Trends in NORCET" },
            { id: "strategy", label: "5. How to Use This Analysis" },
            { id: "faqs", label: "6. FAQs" }
          ]} 
        />

        <h2 id="weightage" className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Subject-Wise Weightage</h2>
        <p className="mb-4">Based on the analysis of the last 5 years (10 shifts), here is the average distribution of questions.</p>
        <RichTable caption="Average Question Distribution (Out of 200)">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-slate-800 text-white">
              <tr><th className="p-3">Subject</th><th className="p-3">Questions (Avg)</th><th className="p-3">Priority</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3">Medical Surgical Nursing (MSN)</td><td className="p-3">45-50</td><td className="p-3 text-red-600 font-bold">High</td></tr>
              <tr><td className="p-3">Fundamentals of Nursing (FON)</td><td className="p-3">30-35</td><td className="p-3 text-red-600 font-bold">High</td></tr>
              <tr><td className="p-3">Obstetrics & Gynecology (OBG)</td><td className="p-3">20-25</td><td className="p-3 text-orange-600 font-bold">Medium</td></tr>
              <tr><td className="p-3">Pediatric Nursing</td><td className="p-3">15-20</td><td className="p-3 text-orange-600 font-bold">Medium</td></tr>
              <tr><td className="p-3">Psychiatric Nursing</td><td className="p-3">15-20</td><td className="p-3 text-orange-600 font-bold">Medium</td></tr>
              <tr><td className="p-3">Community Health Nursing (CHN)</td><td className="p-3">10-15</td><td className="p-3 text-blue-600 font-bold">Low</td></tr>
              <tr><td className="p-3">Pharmacology</td><td className="p-3">5-10</td><td className="p-3 text-blue-600 font-bold">Low</td></tr>
              <tr><td className="p-3">Aptitude & GK</td><td className="p-3">20</td><td className="p-3 text-green-600 font-bold">Fixed</td></tr>
            </tbody>
          </table>
        </RichTable>

        <h2 id="high-yield" className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Top 10 High-Yield Topics</h2>
        <p className="mb-4">These topics have appeared in almost every single NORCET exam.</p>
        <Callout type="tip" title="Must Read Topics">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Fluid & Electrolytes:</strong> Hypo/Hyperkalemia, IV Fluids types.</li>
            <li><strong>Acid-Base Balance:</strong> ABG Analysis (Respiratory/Metabolic Acidosis/Alkalosis).</li>
            <li><strong>ECG Interpretation:</strong> MI, Ventricular Fibrillation, Heart Block.</li>
            <li><strong>Labor Stages:</strong> Mechanism of labor, Partograph.</li>
            <li><strong>Burns Management:</strong> Parkland formula, Rule of 9.</li>
            <li><strong>Diabetes Mellitus:</strong> Insulin types, DKA management.</li>
            <li><strong>CPR Guidelines:</strong> AHA latest guidelines (Compression:Breath ratio).</li>
            <li><strong>Biomedical Waste Management:</strong> Color coding of bins.</li>
            <li><strong>Drugs:</strong> Emergency drugs (Adrenaline, Atropine), Digoxin toxicity.</li>
            <li><strong>Congenital Heart Defects:</strong> Cyanotic vs Acyanotic.</li>
          </ul>
        </Callout>

        <h2 id="ibq" className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Image-Based Questions (IBQs)</h2>
        <p className="mb-4">IBQs are a game-changer. They are usually straightforward if you have seen the instrument/condition before.</p>
        <RichTable caption="Common IBQ Categories">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-indigo-600 text-white">
              <tr><th className="p-3">Category</th><th className="p-3">Examples</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="p-3 font-bold">Instruments</td><td className="p-3">Retractors, Forceps, Laryngoscope blades.</td></tr>
              <tr><td className="p-3 font-bold">Procedures</td><td className="p-3">ECG lead placement, NG tube insertion, CPR position.</td></tr>
              <tr><td className="p-3 font-bold">Conditions</td><td className="p-3">Skin rashes, Decubitus ulcers stages, X-rays (Pneumothorax).</td></tr>
            </tbody>
          </table>
        </RichTable>

        <h2 id="trends" className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Emerging Trends in NORCET</h2>
        <StepByStep 
          steps={[
            { title: "Clinical Vignettes", text: "Questions are becoming longer. Instead of asking 'What is the dose of PCM?', they describe a patient with fever and liver history and ask for management." },
            { title: "Priority Questions", text: "Options like 'What is the FIRST action?' or 'What is the PRIORITY nursing diagnosis?' are increasing." },
            { title: "Integrated Questions", text: "Combining Pharma with MSN. E.g., A patient with Renal Failure (MSN) needs an antibiotic (Pharma) - which one is safe?" }
          ]}
        />

        <NPrepCTA variant="test" />

        <h2 id="strategy" className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. How to Use This Analysis</h2>
        <p className="mb-4">Don't just read this analysis; apply it to your study plan.</p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700">
          <li><strong>Prioritize:</strong> Finish High-Yield topics first.</li>
          <li><strong>Practice:</strong> Solve at least 50 IBQs daily.</li>
          <li><strong>Mock Tests:</strong> Take full-length tests to build stamina for long clinical questions.</li>
        </ul>

        <Glossary 
          terms={[
            { term: "High-Yield", def: "Topics that provide the maximum return on investment in terms of marks." },
            { term: "IBQ (Image Based Question)", def: "Questions where an image is provided and the candidate must identify it or answer based on it." },
            { term: "Clinical Vignette", def: "A short scenario describing a patient's condition." },
            { term: "Priority Question", def: "A question type where all options might be correct, but one is the 'most' correct or 'first' action." }
          ]}
        />

        <FAQSection 
          items={[
            { q: "Is Aptitude important?", a: "Yes, 20 questions come from Aptitude/GK, which often decides the rank." },
            { q: "How many IBQs come in exam?", a: "Expect around 15-20 image-based questions in the Mains stage." },
            { q: "Does the syllabus change every year?", a: "The core nursing syllabus remains same, but the pattern (Stage 1/2) evolves." },
            { q: "Is Psychiatric Nursing important?", a: "Yes, especially for Mains, where complex behavioral scenarios are asked." },
            { q: "How to prepare for GK?", a: "Focus on current health programs and basic static GK. Don't spend too much time on history/geography." },
            { q: "Are numericals asked?", a: "Yes, mainly drug calculations and fluid replacement formulas." },
            { q: "What is the weightage of Pharma?", a: "Direct Pharma questions are few (5-10), but applied Pharma is integrated into MSN." },
            { q: "Is Research & Management asked?", a: "Yes, about 5-8 questions, mostly on research terminology and management styles." },
            { q: "How to handle long questions?", a: "Read the last line of the question first to know what is being asked, then read the scenario." },
            { q: "Where can I practice these topics?", a: "NPrep GOLD batch covers all these high-yield topics in detail." }
          ]}
        />

        <RelatedArticles 
          links={[
            { title: "Download NORCET PYQ Papers", url: "/blog/norcet-previous-year-question-papers-pdf" },
            { title: "3 Month Study Plan", url: "/blog/norcet-study-plan-3-months" },
            { title: "NORCET Syllabus Breakdown", url: "/norcet-syllabus" },
            { title: "Join NPrep Test Series", url: "/courses" },
            { title: "Nursing Officer Salary", url: "/blog/nursing-officer-salary-8th-pay-commission" },
            { title: "Latest Notifications", url: "/norcet-notification" }
          ]}
        />
      </>
    )
  }
];

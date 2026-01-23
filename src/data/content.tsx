import React from 'react';
import { Link } from 'react-router-dom';
import { NPREP_LINKS, SITE_LINKS, OFFICIAL_LINKS } from './links';
import { ExternalLink, CheckCircle, Zap, Award, Bell, AlertCircle, FileText, Download, FileDown } from 'lucide-react';

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
  imageUrl?: string; // Added optional image URL
  thumbnail: {
    title: string;
    subtitle: string;
  };
  content: React.ReactNode;
}

// Enhanced CTA Component
const NPrepCTA = ({ variant = 'general' }: { variant?: 'general' | 'test' | 'revision' | 'pyq' }) => {
  const content = {
    general: {
      title: "Crack NORCET 2026 & RRB with NPrep GOLD",
      text: "Comprehensive prep for NORCET 10 & 11, RRB, CHO, BTSC & KGMU. 900+ Hours of Theory & Clinicals.",
      link: NPREP_LINKS.gold,
      btn: "Join GOLD Batch",
      color: "bg-blue-50 border-blue-200"
    },
    test: {
      title: "Practice Makes Perfect",
      text: "30,000+ Questions with explanations. Subject-wise tests & Daily Test Series for NORCET & RRB.",
      link: NPREP_LINKS.testSeries,
      btn: "Start Test Series",
      color: "bg-indigo-50 border-indigo-200"
    },
    revision: {
      title: "Rapid Revision 2.0",
      text: "Cover complete nursing syllabus for NORCET & RRB in just 100 Hours. Includes QBank & PYQs.",
      link: NPREP_LINKS.rapid,
      btn: "Start Revision",
      color: "bg-purple-50 border-purple-200"
    },
    pyq: {
      title: "Solve Previous Papers",
      text: "Download and practice solved papers for NORCET & RRB exams.",
      link: NPREP_LINKS.pyq,
      btn: "Get PYQs",
      color: "bg-green-50 border-green-200"
    }
  }[variant];

  return (
    <div className={`my-8 p-6 rounded-xl border ${content.color} shadow-sm`}>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{content.title}</h3>
      <p className="text-slate-700 mb-4">{content.text}</p>
      <a 
        href={content.link} 
        target="_blank" 
        rel="nofollow noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
      >
        {content.btn} <ExternalLink className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
};

// Notification News Item Component
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

// Helper to generate placeholder content and prevent self-referencing errors
const createPlaceholder = (slug: string, title: string): PillarPageData => ({
  slug,
  title,
  description: `Detailed information about ${title}.`,
  lastUpdated: "2026-03-01",
  content: {
    intro: `Content for ${title} is currently being updated with the latest official notifications.`,
    highlights: [{ label: "Status", value: "Updating" }],
    sections: [
      { 
        title: "Information Coming Soon", 
        content: <div className="p-4 bg-blue-50 text-blue-800 rounded">This section is being updated.</div> 
      }
    ],
    faqs: []
  }
});

// Pillar Pages Content
export const pillarPages: Record<string, PillarPageData> = {
  "norcet-notification": {
    slug: "norcet-notification",
    title: "AIIMS NORCET 2026 Latest News & Official Notification Updates",
    description: "Live updates for AIIMS NORCET 2026. Confirmed exam dates for NORCET-10: Prelims on April 11, 2026 and Mains on April 30, 2026.",
    lastUpdated: "2026-02-28",
    content: {
      intro: "Stay updated with the latest announcements from the Examination Section, AIIMS New Delhi. The official schedule for NORCET-10 has been released, confirming the exam dates for both Stage-I and Stage-II.",
      highlights: [
        { label: "Exam Name", value: "NORCET-10 (2026)" },
        { label: "Status", value: "Scheduled" },
        { label: "Prelims Date", value: "11 April 2026" },
        { label: "Mains Date", value: "30 April 2026" },
        { label: "Official Portal", value: "aiimsexams.ac.in" }
      ],
      sections: [
        {
          title: "🔴 Latest Official Updates (Live Feed)",
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
                <NewsItem 
                  date="01 Feb 2026" 
                  title="Addendum: Vacancy position for Nursing Officer Recruitment in AIIMS Kalyani" 
                />
                <NewsItem 
                  date="20 Jan 2026" 
                  title="Final Result: Nursing Officer Recruitment Common Eligibility Test (NORCET-9)" 
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
          title: "Official Notification PDF Download",
          content: (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center my-6">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-blue-900 mb-2">Download NORCET 2026 Notification</h3>
              <p className="text-blue-700 mb-4 text-sm">
                The detailed advertisement containing eligibility, vacancy matrix, and application procedure will be available here once released.
              </p>
              <a 
                href={OFFICIAL_LINKS.aiims} 
                target="_blank" 
                rel="noreferrer nofollow"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-sm"
              >
                Check Official Portal <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          )
        },
        {
          title: "Important Dates Tracker (NORCET-10)",
          content: (
            <div className="space-y-4">
              <p className="text-slate-700">The official schedule for AIIMS NORCET-10 has been announced:</p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm">
                  <span className="w-32 font-bold text-slate-900">Stage-I (Prelims):</span>
                  <span className="text-slate-600 font-medium text-blue-700">April 11, 2026</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-32 font-bold text-slate-900">Prelims Result:</span>
                  <span className="text-slate-600">Mid-April 2026</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-32 font-bold text-slate-900">Stage-II (Mains):</span>
                  <span className="text-slate-600 font-medium text-blue-700">April 30, 2026</span>
                </li>
                 <li className="flex items-center text-sm">
                  <span className="w-32 font-bold text-slate-900">Final Result:</span>
                  <span className="text-slate-600">Early May 2026</span>
                </li>
              </ul>
              <NPrepCTA variant="general" />
            </div>
          )
        }
      ],
      faqs: [
        { question: "Where can I find the official NORCET notification?", answer: "The official notification is ONLY published on www.aiimsexams.ac.in under the 'Recruitments' tab." },
        { question: "Is the exam schedule for 2026 released?", answer: "Yes. NORCET-10 Prelims is scheduled for April 11, 2026, and Mains for April 30, 2026." }
      ]
    }
  },
  "norcet-syllabus": {
    slug: "norcet-syllabus",
    title: "AIIMS NORCET Syllabus 2026 & Exam Pattern (Detailed Breakdown)",
    description: "Detailed AIIMS NORCET Syllabus 2026. Topic-wise breakdown for Nursing subjects, General Intelligence, and Aptitude. Download Syllabus PDF.",
    lastUpdated: "2026-01-10",
    content: {
      intro: "Understanding the AIIMS NORCET Syllabus is the first step towards cracking this competitive exam. The syllabus comprises core nursing subjects along with a section on general intelligence and aptitude. A strategic approach to these topics is essential for a high rank.",
      highlights: [
        { label: "Total Questions", value: "200 MCQs" },
        { label: "Total Marks", value: "200 Marks" },
        { label: "Duration", value: "3 Hours (180 Minutes)" },
        { label: "Negative Marking", value: "1/3 marks deducted" },
        { label: "Qualifying Marks", value: "50% (UR), 45% (OBC), 40% (SC/ST)" }
      ],
      sections: [
        {
          title: "1. Medical-Surgical Nursing (MSN) - High Weightage",
          content: (
            <div className="space-y-4">
              <p>This is the most critical section, covering 30-40% of the exam. Focus on:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li><strong>Cardiovascular System:</strong> MI, Heart Failure, Hypertension, ECG Interpretation, CPR Guidelines.</li>
                <li><strong>Respiratory System:</strong> COPD, Asthma, Pneumonia, Tuberculosis, ABG Analysis, Chest Drainage.</li>
                <li><strong>Neurology:</strong> CVA (Stroke), Meningitis, Head Injury (GCS), Seizures, Increased ICP.</li>
                <li><strong>Renal System:</strong> Renal Failure (AKI/CKD), Dialysis, Nephrotic Syndrome, UTIs.</li>
                <li><strong>Endocrine System:</strong> Diabetes Mellitus (DKA/HHS), Thyroid disorders, Adrenal disorders.</li>
                <li><strong>Gastrointestinal:</strong> Liver Cirrhosis, Pancreatitis, Peptic Ulcer, Intestinal Obstruction.</li>
                <li><strong>Oncology:</strong> Chemotherapy drugs & side effects, Radiation therapy care, Warning signs of cancer.</li>
                <li><strong>Burns & Fluid Resuscitation:</strong> Parkland formula, Rule of 9.</li>
              </ul>
            </div>
          )
        },
        {
          title: "2. Fundamentals of Nursing (FON)",
          content: (
            <div className="space-y-4">
              <p>Focus on practical, procedure-based questions:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li><strong>Vital Signs:</strong> Temperature, Pulse, Respiration, BP (Errors in measurement).</li>
                <li><strong>Procedures:</strong> NG Tube insertion, Catheterization, IV Cannulation, IM Injection sites.</li>
                <li><strong>Nursing Process:</strong> Assessment, Diagnosis, Planning, Implementation, Evaluation.</li>
                <li><strong>Patient Safety:</strong> Fall prevention, Infection control, Biomedical Waste Management (BMW).</li>
                <li><strong>Acid-Base & Fluid Electrolyte Balance:</strong> Hyponatremia, Hyperkalemia, etc.</li>
              </ul>
            </div>
          )
        },
        {
          title: "3. Obstetrics & Gynecology (OBG)",
          content: (
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Antenatal Care:</strong> Pregnancy signs, EDD calculation, ANC visits.</li>
              <li><strong>Labor:</strong> Stages of labor, Mechanisms of labor, Partograph.</li>
              <li><strong>Complications:</strong> PPH, Preeclampsia/Eclampsia, Placenta Previa, Abruptio Placentae.</li>
              <li><strong>Newborn Care:</strong> APGAR Score, NSR, Breastfeeding.</li>
            </ul>
          )
        },
        {
          title: "4. Pediatrics",
          content: (
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Growth & Development:</strong> Milestones (Gross motor, fine motor).</li>
              <li><strong>Congenital Anomalies:</strong> TOF, PDA, Cleft lip/palate, Spina bifida.</li>
              <li><strong>Common Illnesses:</strong> Diarrhea (Dehydration mgmt), Pneumonia, Nephrotic syndrome.</li>
              <li><strong>Immunization:</strong> National Immunization Schedule (Latest).</li>
            </ul>
          )
        },
        {
          title: "5. Psychiatry & Mental Health",
          content: (
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Schizophrenia:</strong> Positive/Negative symptoms.</li>
              <li><strong>Mood Disorders:</strong> Mania, Depression (Suicide risk assessment).</li>
              <li><strong>Therapies:</strong> ECT (Indications/Side effects), Lithium toxicity.</li>
              <li><strong>Defense Mechanisms:</strong> Identification with examples.</li>
            </ul>
          )
        },
        {
          title: "6. General Aptitude & GK (20 Questions)",
          content: (
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li><strong>Reasoning:</strong> Blood relations, Coding-Decoding, Directions, Series.</li>
              <li><strong>Quantitative Aptitude:</strong> Percentage, Profit/Loss, Time & Work, Averages.</li>
              <li><strong>General Knowledge:</strong> Current Affairs (last 6 months), Health schemes, Important Days.</li>
            </ul>
          )
        },
        {
          title: "Preparation Strategy",
          content: (
             <p>Focus on high-weightage subjects like MSN and OBG. Regular practice of previous year questions is highly recommended. Use <a href={NPREP_LINKS.gold} className="text-blue-600 font-bold hover:underline">NPrep GOLD</a> for concept clarity.</p>
          )
        }
      ],
      faqs: [
        { question: "Is there negative marking in NORCET?", answer: "Yes, there is a negative marking of 1/3 marks for every incorrect answer." },
        { question: "Does the syllabus change every year?", answer: "The core nursing syllabus remains largely consistent, though the weightage of specific topics may vary slightly." }
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

// Blog Posts Data
export const blogPosts: BlogPostData[] = [
  {
    slug: "norcet-previous-year-question-papers-pdf",
    title: "Download AIIMS NORCET Previous Year Question Papers (PDF) - Authentic Memory Based",
    excerpt: "Access authentic memory-based question papers for NORCET 7, 6, 5, 4, and 3. Practice real exam questions to boost your preparation.",
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
          At <strong>norcetexam.com</strong>, we have curated <strong>authentic memory-based question papers</strong> from actual exam takers. These papers help you understand the evolving exam pattern, the difficulty level of clinical scenarios, and the weightage of different subjects.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-8">
          <h3 className="font-bold text-blue-900 text-lg mb-2">Why Solve These PYQs?</h3>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>Understand the <strong>Stage 1 (Prelims) vs Stage 2 (Mains)</strong> pattern.</li>
            <li>Identify high-yield topics that are repeated every year.</li>
            <li>Practice time management for the 180-minute duration.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-6">Download NORCET Question Papers (Direct Links)</h2>
        
        <div className="overflow-x-auto mb-12">
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
                  <a 
                    href="https://links.nprep.in/aXOX5oZXPZb" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm"
                  >
                    <Download className="w-4 h-4 mr-2" /> Download
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">NORCET 4</td>
                <td className="px-6 py-4 text-slate-600">June 2023</td>
                <td className="px-6 py-4 text-center">
                  <a 
                    href="https://links.nprep.in/weaumiphIZb" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm"
                  >
                    <Download className="w-4 h-4 mr-2" /> Download
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">NORCET 3 - Shift 2</td>
                <td className="px-6 py-4 text-slate-600">2022</td>
                <td className="px-6 py-4 text-center">
                  <a 
                    href="https://links.nprep.in/K7VH496yQZb" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm"
                  >
                    <Download className="w-4 h-4 mr-2" /> Download
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">NORCET 3 - Shift 1</td>
                <td className="px-6 py-4 text-slate-600">2022</td>
                <td className="px-6 py-4 text-center">
                  <a 
                    href="https://links.nprep.in/f2X7pvwHMZb" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm"
                  >
                    <Download className="w-4 h-4 mr-2" /> Download
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">NORCET 2021 (Shift 2)</td>
                <td className="px-6 py-4 text-slate-600">20 Nov 2021</td>
                <td className="px-6 py-4 text-center">
                  <a 
                    href="https://links.nprep.in/xkOMXfpAhZb" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm"
                  >
                    <Download className="w-4 h-4 mr-2" /> Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How to Analyze These Papers?</h2>
        <p className="mb-4">
          Don't just solve them; analyze them. Here is a 3-step strategy:
        </p>
        <ol className="list-decimal list-inside space-y-3 mb-8 text-slate-700">
          <li><strong>Simulate Exam Conditions:</strong> Sit for 3 hours without breaks while attempting these papers.</li>
          <li><strong>Identify Weak Areas:</strong> Note down which subjects (e.g., OBG, Peds) had the most wrong answers.</li>
          <li><strong>Review Solutions:</strong> Use the detailed solutions provided in the links to understand the rationale behind every answer.</li>
        </ol>

        <NPrepCTA variant="test" />
      </>
    )
  },
  {
    slug: "nursing-officer-salary-8th-pay-commission",
    title: "Nursing Officer Salary After 8th Pay Commission (Projected)",
    excerpt: "Projected salary structure for AIIMS Nursing Officers under the 8th Pay Commission. Analysis of fitment factors, revised basic pay, and expected in-hand salary.",
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

        <div className="my-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <Link to="/aiims-nursing-officer-recruitment" className="text-blue-600 font-bold hover:underline flex items-center">
             Click to Explore the Highest Paying Government Nursing Jobs in India &rarr;
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8th Pay Commission & Fitment Factor: What to Expect</h2>
        <p className="mb-4">
          One of the most important determinants of salary revision under any Pay Commission is the <strong>fitment factor</strong>.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700">
          <li>Expert estimates suggest that the <strong>8th Pay Commission fitment factor may range between 1.95 and 2.46</strong></li>
          <li>The <strong>higher the fitment factor, the higher the revised basic pay</strong></li>
          <li>To remain <strong>realistic, conservative, and exam-oriented</strong>, <strong>all salary calculations in this blog are based on the lower-end fitment factor of 1.95</strong></li>
        </ul>
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-600 my-6">
          If the final fitment factor is closer to <strong>2.46</strong>, the actual salary figures may be <strong>significantly higher</strong> than those shown here.
        </blockquote>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">AIIMS Nursing Officer Salary Structure (8th Pay Commission – Projected)</h2>
        <p className="mb-4 text-sm text-gray-500">*(Calculated using Fitment Factor = 1.95)*</p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Salary Component</th>
                <th className="px-4 py-2 text-left">Amount (Approx.)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white"><td className="px-4 py-2 font-semibold">Revised Basic Pay (Level 7)</td><td className="px-4 py-2 font-bold">₹87,555</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-2">Dearness Allowance (50%)</td><td className="px-4 py-2">₹43,778</td></tr>
              <tr className="bg-white"><td className="px-4 py-2">House Rent Allowance (HRA)</td><td className="px-4 py-2">₹4,041 – ₹12,123</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-2">Transport Allowance (TA + DA)</td><td className="px-4 py-2">₹5,400 – ₹7,200</td></tr>
              <tr className="bg-white"><td className="px-4 py-2">Nursing Allowance</td><td className="px-4 py-2">₹2,400 – ₹4,800</td></tr>
              <tr className="bg-gray-50"><td className="px-4 py-2">Uniform Allowance</td><td className="px-4 py-2">₹1,500 – ₹3,000 (Annual)</td></tr>
              <tr className="bg-white"><td className="px-4 py-2 font-bold text-slate-900">Gross Monthly Salary</td><td className="px-4 py-2 font-bold text-slate-900">₹1.43 – ₹1.56 lakh</td></tr>
              <tr className="bg-blue-50"><td className="px-4 py-2 font-bold text-blue-600">Expected In-Hand Salary</td><td className="px-4 py-2 font-bold text-blue-600">₹1.25 – ₹1.38 lakh</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How the Salary Has Been Calculated (1.95 Fitment)</h2>
        <div className="space-y-4 mb-8">
          <div>
            <h3 className="font-bold text-lg">1. Revised Basic Pay</h3>
            <p>₹44,900 × 1.95 = <strong>₹87,555</strong></p>
          </div>
          <div>
            <h3 className="font-bold text-lg">2. Dearness Allowance (DA @ 50%)</h3>
            <p>50% of ₹87,555 = <strong>₹43,778</strong></p>
          </div>
          <div>
            <h3 className="font-bold text-lg">3. Transport Allowance (Including DA)</h3>
            <ul className="list-disc list-inside ml-4">
              <li>₹3,600 → ₹5,400</li>
              <li>₹4,800 → ₹7,200</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">4. House Rent Allowance (HRA)</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Metro (X): ₹12,123</li>
              <li>Tier-2 (Y): ~₹8,000</li>
              <li>Tier-3 (Z): ₹4,041</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">City-Wise AIIMS Nursing Officer In-Hand Salary (Projected)</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">AIIMS Location</th>
                <th className="px-4 py-2 text-left">City Category</th>
                <th className="px-4 py-2 text-left">Approx. In-Hand Salary</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2">AIIMS Delhi</td><td className="px-4 py-2">X (Metro)</td><td className="px-4 py-2">₹1.34 – ₹1.38 lakh</td></tr>
              <tr><td className="px-4 py-2">AIIMS Rishikesh</td><td className="px-4 py-2">Y</td><td className="px-4 py-2">₹1.30 – ₹1.33 lakh</td></tr>
              <tr><td className="px-4 py-2">AIIMS Bhubaneswar</td><td className="px-4 py-2">Y</td><td className="px-4 py-2">₹1.28 – ₹1.32 lakh</td></tr>
              <tr><td className="px-4 py-2">AIIMS Jodhpur</td><td className="px-4 py-2">Y</td><td className="px-4 py-2">₹1.26 – ₹1.30 lakh</td></tr>
              <tr><td className="px-4 py-2">AIIMS Raipur</td><td className="px-4 py-2">Z</td><td className="px-4 py-2">₹1.25 – ₹1.28 lakh</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Allowances & Benefits for AIIMS Nursing Officers</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <li className="bg-white p-3 border rounded shadow-sm"><strong>Dearness Allowance (DA):</strong> Revised twice yearly</li>
          <li className="bg-white p-3 border rounded shadow-sm"><strong>Nursing Allowance:</strong> ₹2,400 – ₹4,800</li>
          <li className="bg-white p-3 border rounded shadow-sm"><strong>Night Duty Allowance:</strong> Extra pay per night shift</li>
          <li className="bg-white p-3 border rounded shadow-sm"><strong>Risk & Hardship Allowance:</strong> ICU, Emergency, Isolation wards</li>
          <li className="bg-white p-3 border rounded shadow-sm"><strong>Medical Benefits:</strong> Free treatment for self, subsidised for dependents</li>
          <li className="bg-white p-3 border rounded shadow-sm"><strong>Accommodation:</strong> Hostels & staff quarters at subsidised rates</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why AIIMS Nursing Officer Will Remain a Top Government Nursing Job</h2>
        <p className="mb-4">
          With even the <strong>lowest projected fitment factor of 1.95</strong>, AIIMS Nursing Officers are expected to enter a <strong>₹1.5 lakh gross salary bracket</strong> under the 8th Pay Commission. Any upward revision toward <strong>2.46</strong> will only strengthen this position further.
        </p>

        <NPrepCTA variant="general" />

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">FAQs</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">1. What fitment factor is used in this salary calculation?</h3>
            <p className="text-slate-700">All calculations use a <strong>conservative fitment factor of 1.95</strong>, though the actual 8th Pay Commission factor may range from <strong>1.95 to 2.46</strong>.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">2. Will AIIMS Nursing Officer salary cross ₹1.5 lakh per month?</h3>
            <p className="text-slate-700">Yes. Even at <strong>1.95 fitment</strong>, gross salary reaches ₹1.56 lakh. Higher fitment will push it further. </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">3. Does everyone get HRA?</h3>
            <p className="text-slate-700">No. HRA is not applicable if government accommodation is provided.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">4. Is this salary officially notified?</h3>
            <p className="text-slate-700">No. This is a <strong>projection based on current structure and realistic fitment assumptions</strong>.</p>
          </div>
        </div>
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
          If you are confused between choosing the clinical excellence of AIIMS or the perks of Indian Railways, this detailed comparison will help you decide.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Head-to-Head Comparison</h2>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Feature</th>
                <th className="px-4 py-2 text-left">AIIMS Nursing Officer</th>
                <th className="px-4 py-2 text-left">RRB Staff Nurse</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2 font-bold">Job Profile</td><td className="px-4 py-2">Intense Clinical Care, ICUs, Research</td><td className="px-4 py-2">Primary Care, Railway Hospitals, First Aid</td></tr>
              <tr><td className="px-4 py-2 font-bold">Work Load</td><td className="px-4 py-2 text-red-600">High (Busy Shifts)</td><td className="px-4 py-2 text-green-600">Moderate to Low</td></tr>
              <tr><td className="px-4 py-2 font-bold">Salary (Initial)</td><td className="px-4 py-2">₹75,000 - ₹85,000</td><td className="px-4 py-2">₹65,000 - ₹75,000</td></tr>
              <tr><td className="px-4 py-2 font-bold">Allowances</td><td className="px-4 py-2">Nursing, Dress, Risk Allowance</td><td className="px-4 py-2">Running Allowance, Night Duty</td></tr>
              <tr><td className="px-4 py-2 font-bold">Unique Perk</td><td className="px-4 py-2">Best Medical Care in India</td><td className="px-4 py-2">Free Railway Passes (Family)</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Salary & Financial Growth</h2>
        <p className="mb-4">
          <strong>AIIMS</strong> generally offers a slightly higher take-home salary due to specific hospital-based allowances like the Risk & Hardship allowance, which is often higher in tertiary care centers.
        </p>
        <p className="mb-4">
          <strong>Railways</strong>, however, offers the "Running Allowance" (for specific cadres) and excellent overtime structures. But strictly speaking, an AIIMS payslip will usually be heavier by ₹5,000 - ₹10,000 initially.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Work-Life Balance</h2>
        <p className="mb-4">
          This is where <strong>RRB wins hands down</strong>. Railway hospitals generally have a fixed patient load (railway employees and families). The shifts are predictable, and the stress level is manageable.
        </p>
        <p className="mb-4">
          <strong>AIIMS</strong> is a high-pressure environment. You will handle critical cases, trauma, and emergencies daily. If you are passionate about clinical nursing, AIIMS is heaven. If you want a relaxed government job, AIIMS might burn you out.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. The "Railway Pass" Factor</h2>
        <p className="mb-4">
          One of the biggest attractions of the RRB job is the <strong>Privilege Pass</strong>. You and your family get free travel across India in AC coaches. For many, this travel perk outweighs the slightly lower salary of Railways.
        </p>

        <NPrepCTA variant="general" />

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Verdict: Which One to Choose?</h2>
        <ul className="space-y-4 mb-8">
          <li className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <strong>Choose AIIMS (NORCET) if:</strong> You are young, ambitious, want to learn advanced medical procedures, and want the highest possible salary in the nursing field.
          </li>
          <li className="bg-green-50 p-4 rounded-lg border border-green-100">
            <strong>Choose RRB Staff Nurse if:</strong> You prioritize work-life balance, want to stay closer to home (more railway zones than AIIMS), and love travel perks.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">FAQs</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">1. Can I apply for both?</h3>
            <p className="text-slate-700">Yes! The syllabus is 80% similar. Nursing subjects remain the same; only the aptitude portion varies slightly.</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-bold text-lg mb-2">2. Is RRB recruitment regular like NORCET?</h3>
            <p className="text-slate-700">No. NORCET happens twice a year (fixed). RRB vacancies are irregular and may come once in 2-3 years.</p>
          </div>
        </div>
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
          Smart preparation isn't about reading everything; it's about reading what matters. An analysis of <strong>NORCET Previous Year Question (PYQ) papers from 2020 to 2025</strong> reveals a clear pattern: <strong>60% of the paper comes from 40% of the syllabus</strong>.
        </p>
        <p className="mb-6">
          In this article, we break down the subject-wise weightage and list the "High-Yield Topics" that AIIMS repeats almost every year.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Subject-Wise Weightage (Average of Last 5 Exams)</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Subject</th>
                <th className="px-4 py-2 text-left">Approx Questions</th>
                <th className="px-4 py-2 text-left">Priority Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2">Medical-Surgical Nursing</td><td className="px-4 py-2">45-50</td><td className="px-4 py-2 text-red-600 font-bold">Very High</td></tr>
              <tr><td className="px-4 py-2">Fundamentals of Nursing</td><td className="px-4 py-2">30-35</td><td className="px-4 py-2 text-red-600 font-bold">Very High</td></tr>
              <tr><td className="px-4 py-2">OBG & Gynecology</td><td className="px-4 py-2">20-25</td><td className="px-4 py-2 text-orange-600 font-bold">High</td></tr>
              <tr><td className="px-4 py-2">Pediatrics</td><td className="px-4 py-2">15-20</td><td className="px-4 py-2 font-medium">Medium</td></tr>
              <tr><td className="px-4 py-2">Psychiatry</td><td className="px-4 py-2">15-18</td><td className="px-4 py-2 font-medium">Medium</td></tr>
              <tr><td className="px-4 py-2">Community Health</td><td className="px-4 py-2">10-15</td><td className="px-4 py-2 font-medium">Medium</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Top 10 "Must-Read" Topics for 2026</h2>
        <ul className="list-decimal list-inside space-y-3 mb-6 text-slate-700 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <li><strong>Fluid & Electrolytes:</strong> Hypo/Hyperkalemia, Sodium balance, IV fluids types.</li>
          <li><strong>Acid-Base Balance:</strong> ABG Analysis (Respiratory/Metabolic Acidosis/Alkalosis).</li>
          <li><strong>ECG Interpretation:</strong> MI changes, Heart Blocks, Hyperkalemia ECG.</li>
          <li><strong>Labor Stages:</strong> Partograph, Mechanisms of Labor, FHR monitoring.</li>
          <li><strong>Burns:</strong> Parkland formula, Rule of 9, Fluid resuscitation.</li>
          <li><strong>Diabetes:</strong> Insulin types (onset/peak), DKA management.</li>
          <li><strong>CPR Guidelines:</strong> Latest AHA guidelines for BLS/ACLS.</li>
          <li><strong>Biomedical Waste Management:</strong> Color coding of bins (changes frequently).</li>
          <li><strong>Drugs:</strong> Digoxin, Lithium, Heparin/Warfarin, Emergency drugs.</li>
          <li><strong>Positions:</strong> Positioning for procedures (Liver biopsy, LP, Thoracentesis).</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Rise of Image-Based Questions (IBQs)</h2>
        <p className="mb-4">
          Since NORCET 2021, the number of image-based questions has increased. You must be able to visually identify:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700">
          <li>Surgical Instruments (Retractors, Forceps)</li>
          <li>X-Rays (Pneumothorax, Fractures)</li>
          <li>ECG Strips</li>
          <li>Dermatological Conditions</li>
        </ul>

        <NPrepCTA variant="pyq" />
      </>
    )
  },
  {
    slug: "norcet-study-plan-3-months",
    title: "3-Month Study Plan for AIIMS NORCET Success",
    excerpt: "A day-by-day study schedule to cover the entire syllabus in 90 days with revision slots.",
    date: "2026-05-25",
    category: "Study Plan",
    imageUrl: "https://iili.io/frEv8ZJ.png",
    thumbnail: {
      title: "AIIMS NORCET 2026",
      subtitle: "3 Month Study Plan"
    },
    content: (
       <>
        <p className="lead text-xl text-slate-700 mb-6">
          Is it possible to crack NORCET in 3 months? <strong>Yes.</strong> But you cannot afford to waste a single day. This 90-day intensive study plan is designed for students who have a basic understanding of nursing concepts and want to consolidate their knowledge for the exam.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Month 1: The "Big Three" (MSN, FON, OBG)</h2>
        <p className="mb-4">
          Dedicate the first month entirely to the subjects that carry 50-60% of the weightage.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="px-4 py-2 text-left">Week</th>
                <th className="px-4 py-2 text-left">Subject Focus</th>
                <th className="px-4 py-2 text-left">Daily Target</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2">Week 1-2</td><td className="px-4 py-2">Medical Surgical Nursing</td><td className="px-4 py-2">1 System/Day + 50 MCQs</td></tr>
              <tr><td className="px-4 py-2">Week 3</td><td className="px-4 py-2">Fundamentals of Nursing</td><td className="px-4 py-2">Procedures + 100 MCQs</td></tr>
              <tr><td className="px-4 py-2">Week 4</td><td className="px-4 py-2">OBG & Gynecology</td><td className="px-4 py-2">Labor/Pregnancy + 100 MCQs</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Month 2: Minor Subjects & Aptitude</h2>
        <p className="mb-4">
          Now move to subjects that are easier but scoring. Also, start allocating 1 hour daily for Aptitude/GK.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700">
          <li><strong>Pediatrics:</strong> Focus on milestones, congenital anomalies.</li>
          <li><strong>Psychiatry:</strong> MSE, Schizophrenia, Drugs (Lithium).</li>
          <li><strong>Community:</strong> Vaccines, Programs, Epidemiology.</li>
          <li><strong>Micro/Pharma:</strong> Only high-yield topics.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Month 3: The "Kill Zone" (Revision & Mock Tests)</h2>
        <p className="mb-4">
          Stop reading new theory. This month is only for output.
        </p>
        <div className="bg-red-50 p-4 border-l-4 border-red-500 mb-6">
          <strong>Daily Routine for Month 3:</strong>
          <br/>
          1. Attempt 1 Full-Length Mock Test (9 AM - 12 PM)
          <br/>
          2. Analyze the Test (2 PM - 4 PM) - <em>Crucial Step</em>
          <br/>
          3. Revise Weak Topics found in Mock (6 PM - 9 PM)
        </div>

        <NPrepCTA variant="revision" />
       </>
    )
  }
];

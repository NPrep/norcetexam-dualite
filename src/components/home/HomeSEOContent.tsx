import React from 'react';
import { NPREP_LINKS } from '../../data/links';
import { CheckCircle, BookOpen, Clock, Users, Video, FileText } from 'lucide-react';

export const HomeSEOContent = () => {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none lg:prose-lg">
          
          {/* Introduction */}
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Nursing?</h2>
          <p>
            Nursing is a healthcare profession focused on the care of individuals, families, and communities to maintain or improve their health and well-being. Nurses are trained to provide medical care, support, and education to patients in various settings, including hospitals, clinics, and community health organizations. Their responsibilities include monitoring patients' health, administering medications, assisting in medical procedures, providing emotional support, and educating patients and their families about health conditions and wellness practices. Nursing requires a combination of clinical knowledge, compassion, and strong communication skills to ensure the possible care for patients.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Nursing Exams 2026</h2>
          <p>
            Nursing Exams 2026 are essential for aspiring nurses aiming to enter dedicated nursing institutions and secure nursing roles in healthcare settings. The exams are conducted for various nursing programs, including BSc Nursing, GNM, ANM, and other specialized nursing posts. Each exam assesses the candidate's knowledge in subjects such as Anatomy, Physiology, Medical-Surgical Nursing, and Obstetrics. Preparing for Nursing Exams 2026 requires a well-organized study plan, a strong grasp of the syllabus, and access to comprehensive study materials. Students can access these resources through <a href={NPREP_LINKS.gold} target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">NPrep Online Courses</a>.
          </p>

          {/* Exam Details Table */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Nursing Exam 2026 Details</h2>
          <p>
            The Nursing Exam 2026 is conducted for aspiring nurses across India, with various exams held by different institutions for recruitment and educational purposes. These exams include BSc Nursing, ANM, GNM, RRB Staff Nurse, AIIMS NORCET, and NHM-CHO. Below are the key details for each exam:
          </p>
          <div className="overflow-x-auto my-8 not-prose">
            <table className="min-w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Nursing Exam</th>
                  <th className="px-6 py-4 text-left font-bold">Purpose</th>
                  <th className="px-6 py-4 text-left font-bold">Subjects Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-semibold text-blue-700">BSc Nursing (UG) Exam 2026</td>
                  <td className="px-6 py-4">Admission into BSc Nursing programs in top institutions like AIIMS.</td>
                  <td className="px-6 py-4">Anatomy, Physiology, Nursing Foundation, Medical-Surgical Nursing.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-blue-700">ANM Exam 2026</td>
                  <td className="px-6 py-4">For candidates pursuing a career as auxiliary nurses.</td>
                  <td className="px-6 py-4">Basic nursing skills, Maternal and Child healthcare.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-blue-700">GNM Exam 2026</td>
                  <td className="px-6 py-4">For those aiming to become general nurses and midwives.</td>
                  <td className="px-6 py-4">Maternal care, Child health, Community nursing.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-blue-700">RRB Staff Nurse Exam 2026</td>
                  <td className="px-6 py-4">Conducted by Railway Recruitment Board for Indian Railways posts.</td>
                  <td className="px-6 py-4">Nursing theory, Medical-surgical nursing, Healthcare practices.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-blue-700">AIIMS NORCET Exam 2026</td>
                  <td className="px-6 py-4">AIIMS recruitment for Nursing Officers via NORCET.</td>
                  <td className="px-6 py-4">Medical-surgical nursing, Pediatric nursing, Obstetrics, Gynecology.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-blue-700">NHM-CHO Exam 2026</td>
                  <td className="px-6 py-4">For Community Health Officer roles under National Health Mission.</td>
                  <td className="px-6 py-4">Community health practices, Basic healthcare services.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Eligibility Table */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Nursing Exams 2026 Eligibility</h2>
          <p>
            <strong>NPrep</strong> presents a detailed table for the eligibility criteria for various Nursing Exams in 2026. The following table outlines the age, educational qualifications, and specific requirements for each major nursing exam.
          </p>
          <div className="overflow-x-auto my-8 not-prose">
            <table className="min-w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Nursing Exam</th>
                  <th className="px-6 py-4 text-left font-bold">Eligibility Criteria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-semibold">BSc Nursing (UG) Exam 2026</td>
                  <td className="px-6 py-4">Min age 17 years. 10+2 with Science (PCB) & min 50% marks.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">AIIMS NORCET Exam 2026</td>
                  <td className="px-6 py-4">Age 18-30 years. BSc Nursing (4 years) OR GNM + 2 Years Experience. Registered with Nursing Council.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">RRB Staff Nurse Exam 2026</td>
                  <td className="px-6 py-4">Age 20-40 years. GNM or BSc Nursing. Registered Nurse.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">NHM-CHO Exam 2026</td>
                  <td className="px-6 py-4">Age 21-40 years. BSc Nursing / GNM / Post-Basic BSc Nursing.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Exam Pattern Table */}
          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Nursing Exams 2026 Exam Pattern</h2>
          <p>
            The Nursing Exams 2026 exam pattern is designed to test the medical and nursing skills of the candidates. Below are the details for available exams.
          </p>
          <div className="overflow-x-auto my-8 not-prose">
            <table className="min-w-full border border-gray-200 shadow-sm rounded-lg overflow-hidden">
              <thead className="bg-indigo-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Nursing Exam</th>
                  <th className="px-6 py-4 text-left font-bold">Mode</th>
                  <th className="px-6 py-4 text-left font-bold">Duration</th>
                  <th className="px-6 py-4 text-left font-bold">Marking Scheme</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-6 py-4 font-semibold">AIIMS NORCET Exam 2026</td>
                  <td className="px-6 py-4">Online (CBT)</td>
                  <td className="px-6 py-4">3 hours</td>
                  <td className="px-6 py-4 text-red-600 font-bold">1 mark correct, 1/3 negative</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">RRB Staff Nurse Exam 2026</td>
                  <td className="px-6 py-4">Online/Offline</td>
                  <td className="px-6 py-4">90 mins</td>
                  <td className="px-6 py-4 text-red-600 font-bold">1 mark correct, 1/3 negative</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold">BSc Nursing (UG)</td>
                  <td className="px-6 py-4">Online/Offline</td>
                  <td className="px-6 py-4">2 hours</td>
                  <td className="px-6 py-4">No negative marking (usually)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Nursing Exams 2026 Syllabus</h2>
          <p>
            The Nursing Exams 2026 syllabus is comprehensive and tailored for different nursing exams, covering essential subjects required to excel in the field. It includes topics such as Anatomy, Physiology, Medical-Surgical Nursing, Pediatric Nursing, Obstetrical Nursing, and Community Health Nursing. Detailed syllabi are available on <a href={NPREP_LINKS.home} className="text-blue-600 hover:underline">NPrep</a>.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">List of Upcoming Nursing Exams in India 2026</h2>
          
          <div className="space-y-8 mt-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-2">RRB Staff Nurse Exam</h3>
              <p className="text-slate-700">
                The Railway Recruitment Board is set to release 200+ RRB Nursing Superintendent posts in 2026. Candidates should check official RRB regional websites. Successful candidates who clear the RRB Staff Nurse Exam are well-prepared to navigate the unique healthcare demands of the railway industry.
              </p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">AIIMS NORCET Exam 2026</h3>
              <p className="text-slate-700">
                The AIIMS Nursing Officer Recruitment Common Eligibility Test (NORCET) is conducted annually. For the 2026 cycle, 8,000–12,000+ Nursing Officer posts are anticipated. The exam rigorously assesses candidates' knowledge of nursing practices. Prepare with <a href={NPREP_LINKS.gold} className="font-bold text-indigo-700 underline">NPrep Gold Batch</a>.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-2">DSSSB Staff Nurse Exam 2026</h3>
              <p className="text-slate-700">
                The Delhi Subordinate Services Selection Board is expected to release recruitment notification around Feb-March 2026. Aspirants with GNM or BSc Nursing should monitor DSSSB notifications.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
              <h3 className="text-xl font-bold text-purple-900 mb-2">ESIC Staff Nurse Exam 2026</h3>
              <p className="text-slate-700">
                Employees’ State Insurance Corporation (ESIC) is anticipated to publish new Staff Nurse vacancies around 1,500–2,500+ posts during 2026.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">NPrep Online Courses</h2>
          <p>
            <strong>NPrep</strong> offers flexible and comprehensive online courses for aspiring nurses. These courses include video lectures, detailed study materials, practice questions, and mock tests, designed to accommodate various learning styles and schedules. Whether you're a student or a working professional, these courses cover the entire syllabus in a structured manner. <a href={NPREP_LINKS.gold} className="text-blue-600 font-bold hover:underline">Enrolling in NPrep's online courses</a> equips you with all the resources needed to excel.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">NPrep Online Coaching Features</h2>
          <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
            {[
              { title: "Dedicated Teachers", desc: "Learn from dedicated educators through live and recorded sessions.", icon: Users },
              { title: "Learn Anytime", desc: "Flexible learning with access to both live classes and recordings.", icon: Video },
              { title: "Simplified Learning", desc: "Courses are taught in Hinglish, making complex topics easy to grasp.", icon: BookOpen },
              { title: "Structured Schedule", desc: "Follow a well-organized study plan to stay on track.", icon: Clock },
              { title: "Up-to-date Content", desc: "Courses align with the latest syllabus and exam formats.", icon: CheckCircle },
              { title: "Comprehensive Coverage", desc: "In-depth explanations of all nursing subjects.", icon: FileText },
            ].map((feature, idx) => (
              <div key={idx} className="flex p-4 bg-gray-50 rounded-lg border border-gray-100">
                <feature.icon className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Nursing Exams 2026 Study Materials</h2>
          <p>
            NPrep offers a wide range of study materials designed to support nursing exam preparation. These include comprehensive textbooks, reference guides, past year question papers, and practice sets. Additionally, NPrep provides <a href={NPREP_LINKS.free} className="text-blue-600 font-bold hover:underline">free downloadable resources</a> on their platform.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Nursing Exams Previous Years Question Paper</h2>
          <p>
            Solving previous years' question papers is an essential part of Nursing exam preparation. NPrep provides access to a wide range of <a href={NPREP_LINKS.pyq} className="text-blue-600 font-bold hover:underline">past question papers</a>, helping students familiarize themselves with the exam pattern. Practicing these papers helps identify key topics and improve time management skills.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">Nursing Exams 2026 Preparation Strategy</h2>
          <ul className="list-decimal pl-6 space-y-4">
            <li><strong>List Out Study Materials:</strong> Go through the syllabus and <a href={NPREP_LINKS.pyq} className="text-blue-600 hover:underline">previous year's question papers</a> to list out resources.</li>
            <li><strong>Make Effective Study Plans:</strong> Create a study plan with daily, weekly, and monthly goals.</li>
            <li><strong>Solve Mock Tests:</strong> Solving <a href={NPREP_LINKS.testSeries} className="text-blue-600 hover:underline">mock tests</a> is highly recommended to sail through the nursing exam.</li>
            <li><strong>Learn Time Management:</strong> Allot specific time for revision and practice while covering the syllabus.</li>
          </ul>

        </div>
      </div>
    </section>
  );
};

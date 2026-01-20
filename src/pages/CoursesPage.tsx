import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { BreadcrumbSchema } from '../components/seo/Schema';
import { NPREP_LINKS } from '../data/links';
import { ResourceCard } from '../components/ui/ResourceCard';
import { Home, ChevronRight } from 'lucide-react';

export const CoursesPage = () => {
  const resources = [
    {
      title: "GOLD Batch",
      description: "Complete preparation from zero to advanced level. Covers everything you need.",
      features: [
        "NORCET 10 & 11 / RRB / CHO / BTSC / KGMU - All Covered",
        "900 Hours - Basic to Advanced Theory (with Clinicals)",
        "100 Hrs - Rapid Revision 2.0",
        "30,000 Questions - QBank (Topic Wise)",
        "Daily Test Series",
        "Previous Year Papers",
        "Subject Wise Papers"
      ],
      link: NPREP_LINKS.gold,
      colorClass: "border-gray-200 hover:border-yellow-400",
      buttonText: "Join GOLD Batch",
      badgeText: "Best Seller",
      badgeColor: "bg-yellow-100 text-yellow-800"
    },
    {
      title: "Rapid Revision 2.0",
      description: "Fast-track revision for last minute preparation and quick recall.",
      features: [
        "NORCET / RRB / CHO / BTSC / KGMU - All Covered",
        "Complete Nursing Syllabus in 100 Hours",
        "Previous Year Papers - with Explainations",
        "Daily Test Series",
        "30,000+ Questions - QBank (Topic Wise)",
        "Subject Wise Tests"
      ],
      link: NPREP_LINKS.rapid,
      colorClass: "border-gray-200 hover:border-purple-400",
      buttonText: "Start Revision",
      badgeText: "Crash Course",
      badgeColor: "bg-purple-100 text-purple-800"
    },
    {
      title: "Test Series",
      description: "Real exam simulation with detailed performance analysis and ranking.",
      features: [
        "30,000+ Questions - QBank (Topic Wise)",
        "Each Question with Explaination",
        "Subject Wise Tests",
        "Daily Test Series",
        "Previous Year Question Papers",
        "IBQs, Clinical Scenario Questions"
      ],
      link: NPREP_LINKS.testSeries,
      colorClass: "border-gray-200 hover:border-green-400",
      buttonText: "Start Practicing",
      badgeText: "Practice",
      badgeColor: "bg-green-100 text-green-800"
    },
    // Free Resources (Kept for completeness but styled to match grid)
    {
      title: "Daily Free Tests",
      description: "Build consistency with new questions every day. A small step daily leads to a giant leap.",
      features: [
        "Daily Practice Questions",
        "Leaderboard Ranking",
        "Performance Analysis"
      ],
      link: NPREP_LINKS.dailyTest,
      colorClass: "border-gray-200 hover:border-blue-400",
      buttonText: "Take Today's Test",
      badgeText: "Free",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      title: "Free Study Library",
      description: "Access a vast collection of free PDFs, previous year papers, and important notes.",
      features: [
        "Free PDF Notes",
        "Previous Year Papers",
        "Exam Updates"
      ],
      link: NPREP_LINKS.free,
      colorClass: "border-gray-200 hover:border-slate-400",
      buttonText: "Access Library",
      badgeText: "Free",
      badgeColor: "bg-slate-100 text-slate-800"
    }
  ];

  return (
    <>
      <SEO 
        title="Premium Nursing Courses - NPrep GOLD, Rapid Revision & Test Series"
        description="Structured preparation for AIIMS NORCET 10 & 11 and RRB Nursing Superintendent. Choose from GOLD Batch, Rapid Revision 2.0, or Test Series."
      />
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: "Courses", item: "/courses" }]} />

      {/* Header Section */}
      <div className="bg-white pt-12 pb-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <nav className="flex items-center justify-center text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-blue-600 flex items-center"><Home className="w-4 h-4 mr-1"/> Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium">Courses</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Premium Nursing Courses
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Structured preparation for AIIMS NORCET 10 & 11, RRB Nursing Superintendent and other top exams.
              <br className="hidden md:block" /> Choose the plan that fits your schedule and start learning today.
            </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((item, idx) => (
                  <ResourceCard 
                      key={idx}
                      title={item.title}
                      description={item.description}
                      features={item.features}
                      link={item.link}
                      colorClass={item.colorClass}
                      buttonText={item.buttonText}
                      badgeText={item.badgeText}
                      badgeColor={item.badgeColor}
                  />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

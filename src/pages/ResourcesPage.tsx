import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';
import { BreadcrumbSchema } from '../components/seo/Schema';
import { NPREP_LINKS } from '../data/links';
import { ResourceCard } from '../components/ui/ResourceCard';
import { 
  Award, 
  Zap, 
  CheckCircle, 
  BookOpen, 
  FileText, 
  Home,
  ChevronRight
} from 'lucide-react';

export const ResourcesPage = () => {
  const resources = [
    {
      title: "GOLD Batch",
      features: [
        "NORCET 10 & 11 / RRB / CHO / BTSC / KGMU - All Covered",
        "900 Hours - Basic to Advanced Theory (with Clinicals)",
        "100 Hrs - Rapid Revision 2.0 Included",
        "30,000 Questions - QBank (Topic Wise)",
        "Daily Test Series & Subject Wise Papers",
        "Previous Year Papers"
      ],
      icon: Award,
      link: NPREP_LINKS.gold,
      colorClass: "bg-yellow-50 text-yellow-700 border-yellow-200",
      buttonText: "Join Gold Batch"
    },
    {
      title: "Rapid Revision 2.0",
      features: [
        "NORCET / RRB / CHO / BTSC / KGMU - All Covered",
        "Complete Nursing Syllabus in 100 Hours",
        "Previous Year Papers - with Explainations",
        "Daily Test Series",
        "30,000+ Questions - QBank (Topic Wise)",
        "Subject Wise Tests"
      ],
      icon: Zap,
      link: NPREP_LINKS.rapid,
      colorClass: "bg-purple-50 text-purple-700 border-purple-200",
      buttonText: "Start Revision"
    },
    {
      title: "Test Series",
      features: [
        "30,000+ Questions - QBank (Topic Wise)",
        "Each Question with Explaination",
        "Subject Wise Tests",
        "Daily Test Series",
        "Previous Year Question Papers",
        "IBQs, Clinical Scenario Questions"
      ],
      icon: CheckCircle,
      link: NPREP_LINKS.testSeries,
      colorClass: "bg-green-50 text-green-700 border-green-200",
      buttonText: "Start Practicing"
    },
    {
      title: "Daily Free Tests",
      description: "Build consistency with new questions every day. A small step daily leads to a giant leap in your NORCET rank.",
      features: [
        "Daily Practice Questions",
        "Leaderboard Ranking",
        "Performance Analysis"
      ],
      icon: BookOpen,
      link: NPREP_LINKS.dailyTest,
      colorClass: "bg-blue-50 text-blue-700 border-blue-200",
      buttonText: "Take Today's Test"
    },
    {
      title: "Free Study Library",
      description: "Access a vast collection of free PDFs, previous year papers, and important notes to supplement your preparation without any cost.",
      features: [
        "Free PDF Notes",
        "Previous Year Papers",
        "Exam Updates"
      ],
      icon: FileText,
      link: NPREP_LINKS.free,
      colorClass: "bg-slate-50 text-slate-700 border-slate-200",
      buttonText: "Access Library"
    }
  ];

  return (
    <>
      <SEO 
        title="Best AIIMS NORCET & RRB Preparation Resources - Courses & Test Series"
        description="Explore top-rated resources for AIIMS NORCET 2026 & RRB Staff Nurse. Join NPrep Gold Batch, Rapid Revision 2.0, and attempt Mock Tests."
      />
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: "Preparation Resources", item: "/preparation-resources" }]} />

      <div className="bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <nav className="flex items-center text-sm text-gray-500 mb-4">
              <Link to="/" className="hover:text-blue-600 flex items-center"><Home className="w-4 h-4 mr-1"/> Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium">Resources</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Preparation Resources</h1>
            <p className="text-slate-600 max-w-2xl">
              Everything you need to crack AIIMS NORCET 2026 & RRB Staff Nurse. From comprehensive video courses to real-time mock tests, choose the tool that fits your prep stage.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((item, idx) => (
                <ResourceCard 
                    key={idx}
                    title={item.title}
                    description={item.description}
                    features={item.features}
                    icon={item.icon}
                    link={item.link}
                    colorClass={item.colorClass}
                    buttonText={item.buttonText}
                />
            ))}
        </div>
      </div>
    </>
  );
};

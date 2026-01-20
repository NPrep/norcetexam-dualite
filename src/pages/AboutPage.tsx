import React from 'react';
import { SEO } from '../components/seo/SEO';
import { OrganizationSchema, BreadcrumbSchema } from '../components/seo/Schema';

export const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us - norcetexam.com"
        description="Learn about norcetexam.com, the leading authority on AIIMS NORCET exam preparation and nursing career guidance."
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: "About Us", item: "/about" }]} />

      <div className="bg-white max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">About norcetexam.com</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-700 mb-6">
            Welcome to <strong>norcetexam.com</strong>, India's most trusted informational hub dedicated exclusively to the AIIMS Nursing Officer Recruitment Common Eligibility Test (NORCET).
          </p>
          <p className="mb-4">
            Our mission is simple: To provide nursing aspirants with accurate, timely, and actionable information to help them secure a prestigious government job at AIIMS. We bridge the gap between official notifications and student understanding by simplifying complex exam patterns, eligibility rules, and syllabus breakdowns.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">What We Offer</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Latest Notifications:</strong> Instant updates on exam dates, application forms, and admit cards.</li>
            <li><strong>Deep-Dive Syllabus:</strong> Topic-wise breakdown of Nursing subjects, Aptitude, and GK.</li>
            <li><strong>Expert Strategy:</strong> Blogs and guides on how to crack NORCET in the first attempt.</li>
            <li><strong>Resource Integration:</strong> We partner with <strong>NPrep</strong> to provide top-tier video courses and test series.</li>
          </ul>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Vision</h2>
          <p>
            To empower every nursing graduate in India with the knowledge and resources they need to serve the nation as a Nursing Officer.
          </p>
        </div>
      </div>
    </>
  );
};

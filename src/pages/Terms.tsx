import React from 'react';
import { SEO } from '../components/seo/SEO';
import { BreadcrumbSchema } from '../components/seo/Schema';

export const Terms = () => {
  return (
    <>
      <SEO title="Terms of Use - norcetexam.com" description="Terms and Conditions for norcetexam.com" />
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: "Terms of Use", item: "/terms" }]} />
      <div className="bg-white max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <h1>Terms of Use</h1>
        <p>Welcome to norcetexam.com!</p>
        <p>These terms and conditions outline the rules and regulations for the use of norcetexam.com's Website.</p>
        <h2>Disclaimer</h2>
        <p>norcetexam.com is an informational website and is NOT affiliated with AIIMS (All India Institute of Medical Sciences). The official website for AIIMS exams is aiimsexams.ac.in. We do not claim to be the official authority.</p>
        <h2>Content Liability</h2>
        <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.</p>
      </div>
    </>
  );
};

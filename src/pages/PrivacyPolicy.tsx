import React from 'react';
import { SEO } from '../components/seo/SEO';
import { BreadcrumbSchema } from '../components/seo/Schema';

export const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Privacy Policy - norcetexam.com" description="Privacy Policy for norcetexam.com" />
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: "Privacy Policy", item: "/privacy-policy" }]} />
      <div className="bg-white max-w-4xl mx-auto px-4 py-12 prose prose-slate">
        <h1>Privacy Policy</h1>
        <p>Last Updated: January 1, 2026</p>
        <p>At norcetexam.com, accessible from https://norcetexam.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by norcetexam.com and how we use it.</p>
        <h2>Log Files</h2>
        <p>norcetexam.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics.</p>
        <h2>Cookies and Web Beacons</h2>
        <p>Like any other website, norcetexam.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.</p>
        <h2>Third Party Privacy Policies</h2>
        <p>norcetexam.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.</p>
      </div>
    </>
  );
};

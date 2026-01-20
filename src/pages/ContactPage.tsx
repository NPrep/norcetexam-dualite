import React from 'react';
import { SEO } from '../components/seo/SEO';
import { OrganizationSchema, BreadcrumbSchema } from '../components/seo/Schema';
import { Mail, MapPin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact Us - norcetexam.com"
        description="Get in touch with the norcetexam.com team for queries regarding AIIMS NORCET information and partnerships."
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: "Home", item: "/" }, { name: "Contact Us", item: "/contact" }]} />

      <div className="bg-white max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Contact Us</h1>
        <p className="text-lg text-slate-700 mb-8">
          Have a question about the website or found a discrepancy in our data? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-600" /> Email Support
            </h2>
            <p className="text-slate-600 mb-4">
              For general inquiries, feedback, or advertising opportunities:
            </p>
            <a href="mailto:support@norcetexam.com" className="text-blue-600 font-bold text-lg hover:underline">
              support@norcetexam.com
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-600" /> Office Address
            </h2>
            <p className="text-slate-600">
              norcetexam.com Digital Team<br />
              Sector 62, Noida<br />
              Uttar Pradesh, India - 201301
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

import React from 'react';
import { Helmet } from 'react-helmet-async';

// Organization Schema
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "norcetexam.com",
    "url": "https://norcetexam.com",
    "logo": "https://norcetexam.com/logo.png", // Placeholder
    "sameAs": [
      "https://facebook.com/nprep",
      "https://twitter.com/nprep"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9999999999",
      "contactType": "customer service",
      "email": "support@norcetexam.com"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Website Schema
export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "norcetexam.com",
    "url": "https://norcetexam.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://norcetexam.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

// Breadcrumb Schema
export const BreadcrumbSchema = ({ items }: { items: { name: string; item: string }[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item.startsWith('http') ? item.item : `https://norcetexam.com${item.item}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

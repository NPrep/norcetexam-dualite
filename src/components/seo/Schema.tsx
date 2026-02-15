import React from 'react';
import Head from 'next/head';
import { site } from '../../next/site';

// Organization Schema
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.name,
    "url": site.url,
    "logo": `${site.url}${site.logoPath}`,
    "email": site.email,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": site.email
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

// Website Schema
export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": site.name,
    "url": site.url
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
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
      "item": item.item.startsWith('http') ? item.item : `${site.url}${item.item}`
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

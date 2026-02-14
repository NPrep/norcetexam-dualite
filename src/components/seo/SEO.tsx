import React from 'react';
import Head from 'next/head';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalUrl, 
  type = 'website',
  publishedTime,
  modifiedTime
}) => {
  const siteTitle = "norcetexam.com";
  const fullTitle = `${title} | ${siteTitle}`;
  const siteUrl = "https://norcetexam.com";
  const { pathname } = useLocation();
  const canonical = canonicalUrl || `${siteUrl}${pathname}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Article Specific */}
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === 'article' && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Robots - Allow everything by default */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    </Head>
  );
};

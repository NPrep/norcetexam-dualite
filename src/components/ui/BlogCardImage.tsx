import React from 'react';
import { BlogPostData } from '../../data/content';
import { BlogThumbnail } from './BlogThumbnail';

interface BlogCardImageProps {
  post: BlogPostData;
  className?: string;
}

export const BlogCardImage: React.FC<BlogCardImageProps> = ({ post, className = "" }) => {
  if (post.imageUrl) {
    return (
      <div className={`relative w-full aspect-video overflow-hidden ${className}`}>
        <img loading="lazy" 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Category Tag Overlay for Image */}
        <div className="absolute top-4 left-4 bg-white text-blue-900 text-[10px] md:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-blue-100 z-20">
          {post.category}
        </div>
      </div>
    );
  }

  return (
    <BlogThumbnail 
      category={post.category}
      title={post.thumbnail.title}
      subtitle={post.thumbnail.subtitle}
      className={className}
    />
  );
};

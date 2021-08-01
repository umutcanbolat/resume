import React from 'react';

export default function SocialItem({ image, text, link }) {
  console.log(image, text, link);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="social-item">
        {image}
        {text}
      </div>
    </a>
  );
}

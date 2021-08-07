import React from 'react';
import styled from 'styled-components';

const StyledSocialItem = styled.div`
  svg {
    font-size: 1.3rem;
  }

  a {
    color: black;
    padding-left: 0.4rem;
    font-size: 0.9rem;
    font-family: 'DM Mono', monospace;
  }

  .social-item {
    width: fit-content;

    display: flex;
    flex-flow: row;
    align-items: center;
  }

  color: black;
`;

export default function SocialItem({ image, text, href }) {
  return (
    <StyledSocialItem>
      <div className="social-item">
        {image}
        <a href={href} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </div>
    </StyledSocialItem>
  );
}

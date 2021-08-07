import React from 'react';
import styled from 'styled-components';
import { SocialLinks } from '../components';

const StyledHeader = styled.div`
  h1 {
    font-size: 2.2rem;
    width: fit-content;
    margin: 0 auto;
    font-family: 'Lobster', cursive;
  }
  p {
    width: fit-content;
    margin: 0 auto;
    font-family: 'Crimson Text', serif;
    margin-top: -0.4rem;
    margin-bottom: 0.5rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Umut Canbolat</h1>
      <p>Full-Stack Software Engineer</p>
      <SocialLinks />
    </StyledHeader>
  );
}

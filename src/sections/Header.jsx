import React from 'react';
import styled from 'styled-components';
import { SocialLinks } from '../components';

const StyledHeader = styled.div`
  padding-bottom: 0.8rem;
  h1 {
    font-size: 2.2rem;
    width: fit-content;
    margin: 0 auto;
    font-family: 'Lobster', cursive;
  }
  p {
    width: fit-content;
    margin: 0 auto;
    font-family: 'Noto Serif', serif;
    margin-top: -0.4rem;
    margin-bottom: 0.5rem;
  }
`;

export default function Header({ name, title }) {
  return (
    <StyledHeader>
      <h1>{name}</h1>
      <p>{title}</p>
      <SocialLinks />
    </StyledHeader>
  );
}

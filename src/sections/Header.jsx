import React from 'react';
import styled from 'styled-components';
import { SocialLinks } from '../components';

const StyledHeader = styled.div`
  h1 {
    font-size: 2.2rem;
    width: fit-content;
    margin: 0 auto;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Umut Canbolat</h1>
      <SocialLinks />
    </StyledHeader>
  );
}

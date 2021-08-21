import React from 'react';
import styled from 'styled-components';

const StyledSectionHeader = styled.div`
  header {
    border-bottom: 1px solid black;
    margin-bottom: 0.8rem;
  }

  h2 {
    margin: 0;
    font-family: 'Crimson Text', serif;
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export default function SectionHeader({ title }) {
  return (
    <StyledSectionHeader>
      <header>
        <h2>{title}</h2>
      </header>
    </StyledSectionHeader>
  );
}

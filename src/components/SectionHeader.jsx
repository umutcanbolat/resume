import React from 'react';
import styled from 'styled-components';

const StyledSectionHeader = styled.div`
  header {
    display: flex;
    align-items: center;
    display: flex;
    border-bottom: 1px solid black;
  }

  svg {
    font-size: 1.3rem;
    padding-left: 0.3rem;
  }

  h2 {
    margin: 0.2rem;
  }
`;

export default function SectionHeader({ title, icon }) {
  return (
    <StyledSectionHeader>
      <header>
        <h2>{title}</h2>
        {icon}
      </header>
    </StyledSectionHeader>
  );
}

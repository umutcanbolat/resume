import React from 'react';
import styled from 'styled-components';

const StyledSectionHeader = styled.div``;

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

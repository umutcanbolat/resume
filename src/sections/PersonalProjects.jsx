import React from 'react';
import styled from 'styled-components';

import { SectionHeader } from '../components';

const StyledProjects = styled.div``;

export default function PersonalProjects({ data }) {
  return (
    <StyledProjects>
      <SectionHeader title="Personal Projects" />
    </StyledProjects>
  );
}

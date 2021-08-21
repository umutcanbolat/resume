import React from 'react';
import styled from 'styled-components';

import { SectionHeader, DescribedItem } from '../components';

const StyledProjects = styled.div``;

export default function PersonalProjects({ data }) {
  return (
    <StyledProjects>
      <SectionHeader title="Personal Projects" />
      {data.map(({ name, descriptions, links }) => (
        <DescribedItem key={name} name={name} descriptions={descriptions} links={links} />
      ))}
    </StyledProjects>
  );
}

import React from 'react';
import styled from 'styled-components';

import { SectionHeader, DescribedItem } from '../components';

const StyledProjects = styled.div`
  & {
    margin-bottom: 1.5rem;
  }
  .project:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default function PersonalProjects({ data }) {
  return (
    <StyledProjects>
      <SectionHeader title="Personal Projects" />
      {data.map(({ name, descriptions, links }) => (
        <div key={name} className="project">
          <DescribedItem name={name} descriptions={descriptions} links={links} />
        </div>
      ))}
    </StyledProjects>
  );
}

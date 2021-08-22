import React from 'react';
import styled from 'styled-components';

import { SectionHeader, Publication } from '../components';

const StyledPublications = styled.div`
  .publication:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default function Publications({ data }) {
  return (
    <StyledPublications>
      <SectionHeader title="Publications" />
      {data.map(({ name, descriptions, date, publisher, link }) => (
        <div key={name} className="publication">
          <Publication
            name={name}
            descriptions={descriptions}
            date={date}
            publisher={publisher}
            link={link}
          />
        </div>
      ))}
    </StyledPublications>
  );
}

import React from 'react';
import styled from 'styled-components';
import { GrMagic } from 'react-icons/gr';
import { SectionHeader, WorkExperience } from '../components';

const StyledExperiences = styled.div``;

export default function Experiences() {
  return (
    <StyledExperiences>
      <SectionHeader title="Experience" icon={<GrMagic />} />
      <WorkExperience companyName="Klarna Bank AB" companyUrl="https://www.klarna.com">
        <WorkExperience.Role
          name="Software Engineer II"
          location="Giessen, Germany"
          startDate={new Date(2021, 5)}
          endDate={undefined}
        />
        <WorkExperience.Role
          name="Software Engineer I"
          location="Giessen, Germany"
          startDate={new Date(2020, 2)}
          endDate={new Date(2021, 5)}
        />
      </WorkExperience>
    </StyledExperiences>
  );
}

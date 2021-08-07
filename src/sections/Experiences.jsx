import React from 'react';
import styled from 'styled-components';
import { GrMagic } from 'react-icons/gr';
import { SectionHeader } from '../components';

const StyledExperiences = styled.div``;

export default function Experiences() {
  return (
    <StyledExperiences>
      <SectionHeader title="Experience" icon={<GrMagic />} />
    </StyledExperiences>
  );
}

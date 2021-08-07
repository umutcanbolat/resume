import React from 'react';
import styled from 'styled-components';
import { HiSparkles } from 'react-icons/hi';
import { SectionHeader } from '../components';

const StyledExperiences = styled.div``;

export default function Experiences() {
  return (
    <StyledExperiences>
      <SectionHeader title="Experience" icon={<HiSparkles />} />
    </StyledExperiences>
  );
}

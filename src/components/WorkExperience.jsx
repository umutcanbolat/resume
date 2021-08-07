/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';

const StyledWorkExperience = styled.div`
  .timeline {
    margin-left: 0.5rem;
  }
`;

export default function WorkExperience({ companyName, companyUrl, children }) {
  return (
    <StyledWorkExperience>
      <h3>
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          {companyName}
        </a>
      </h3>
      <div className="timeline">
        <Timeline>
          {children.map((c, i) => (
            <Timeline.Item key={i} color="gray">
              {c}
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </StyledWorkExperience>
  );
}

const StyledRole = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
  }

  header {
    display: flex;
    flex-flow: column;
  }

  h4 {
    margin: 0;
  }

  .location {
    color: gray;
  }
`;

const Role = ({ name, location, startDate, endDate }) => {
  return (
    <StyledRole>
      <header>
        <div className="title">
          <h4>{name}</h4>
          <span>{`${startDate.getFullYear()} - ${
            endDate ? endDate.getFullYear() : 'present'
          }`}</span>
        </div>
        <span className="location">{location}</span>
      </header>
    </StyledRole>
  );
};

WorkExperience.Role = Role;

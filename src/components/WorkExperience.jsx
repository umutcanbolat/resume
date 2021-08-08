/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';
import { getFormattedDate } from '../utils/dateUtils';

const StyledWorkExperience = styled.div`
  h3 {
    font-family: 'Oxygen', sans-serif;
    font-size: 0.9rem;
    margin-bottom: 0.8em;
  }
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
  font-size: 0.9em;
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
    margin-top: -0.22em;
  }

  .years {
    font-style: italic;
  }

  .details {
    margin-top: 0.17rem;
  }
`;

const Role = ({ name, location, startDate, endDate, children }) => {
  return (
    <StyledRole>
      <header>
        <div className="title">
          <h4>{name}</h4>
          <span className="years">{`${getFormattedDate(startDate)} - ${
            endDate ? getFormattedDate(endDate) : 'present'
          }`}</span>
        </div>
        <span className="location">{location}</span>
      </header>

      <div className="details">{children}</div>
    </StyledRole>
  );
};

WorkExperience.Role = Role;

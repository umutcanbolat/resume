/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';
import { getFormattedDate } from '../utils/dateUtils';

const StyledWorkExperience = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.9em;
  }
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.8em;
  }
  .timeline {
    margin-left: 0.5rem;
  }
  h3 > a {
    color: black;
  }
`;

export default function WorkExperience({ companyName, companyUrl, children }) {
  let content;
  if (children.length > 1) {
    content = (
      <>
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
      </>
    );
  } else {
    const {
      name: roleName,
      location,
      startDate,
      endDate,
      dateFormat,
      children: roleChildren,
    } = children[0].props;
    content = (
      <SingleRoleWorkExperience
        companyName={companyName}
        companyUrl={companyUrl}
        roleName={roleName}
        location={location}
        startDate={startDate}
        endDate={endDate}
        dateFormat={dateFormat}
      >
        {roleChildren}
      </SingleRoleWorkExperience>
    );
  }
  return <StyledWorkExperience>{content}</StyledWorkExperience>;
}

const StyledRole = styled.div`
  font-size: 0.9em;
  .heading {
    display: flex;
    justify-content: space-between;
  }

  header {
    display: flex;
    flex-flow: column;
  }

  h4 {
    margin: 0;
    font-size: 0.95rem;
  }

  .location {
    color: dimgray;
    margin-top: -0.22em;
  }

  .years {
    font-style: italic;
  }

  .details {
    margin-top: 0.17rem;
  }
`;

const Role = ({ name, location, startDate, endDate, children, dateFormat = 'month' }) => (
  <StyledRole>
    <header>
      <div className="heading">
        <h4 className="role-title">{name}</h4>
        <span className="years">{`${getFormattedDate(startDate, dateFormat)} - ${
          endDate ? getFormattedDate(endDate, dateFormat) : 'present'
        }`}</span>
      </div>
      <span className="location">{location}</span>
    </header>

    <div className="details">{children}</div>
  </StyledRole>
);

WorkExperience.Role = Role;

const StyledSingleRoleWorkExperience = styled.div`
  .role-title {
    margin-bottom: 0;
  }
`;

const SingleRoleWorkExperience = ({
  companyName,
  companyUrl,
  roleName,
  location,
  startDate,
  endDate,
  dateFormat,
  children,
}) => {
  const name = (
    <>
      <span>{roleName} • </span>
      <a href={companyUrl} target="_blank" rel="noopener noreferrer">
        {companyName}
      </a>
    </>
  );
  return (
    <StyledSingleRoleWorkExperience>
      <Role
        name={name}
        location={location}
        startDate={startDate}
        endDate={endDate}
        dateFormat={dateFormat}
      >
        {children}
      </Role>
    </StyledSingleRoleWorkExperience>
  );
};

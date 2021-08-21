/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import WorkExperience from './WorkExperience';

const StyledList = styled.div`
  ul.role-description {
    list-style-type: disc;
    padding-left: 1.5rem;
  }

  .role-description > li:not(:last-child) {
    margin-bottom: 0.22em;
  }

  .role-description > li {
    font-size: 0.79rem;
  }

  .ant-timeline-item {
    padding-bottom: 10px;
  }

  .ant-timeline-item-last {
    padding-bottom: 0;
    margin-bottom: -0.2rem;
  }
`;

export default function ExperienceList({ title, data, dateFormat = 'month' }) {
  return (
    <StyledList>
      <SectionHeader title={title} />
      {data.map(({ id, company, url, roles }) => (
        <WorkExperience key={id} companyName={company} companyUrl={url}>
          {roles.map(({ id: roleId, role, location, startDate, endDate, descriptionItems }) => (
            <WorkExperience.Role
              key={roleId}
              name={role}
              location={location}
              startDate={startDate}
              endDate={endDate}
              dateFormat={dateFormat}
            >
              <ul className="role-description">
                {descriptionItems?.map((item, i) => (
                  <li key={i} className="role-item">
                    {item}
                  </li>
                ))}
              </ul>
            </WorkExperience.Role>
          ))}
        </WorkExperience>
      ))}
    </StyledList>
  );
}

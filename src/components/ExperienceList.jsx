/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import Highlighter from 'react-highlight-words';

import SectionHeader from './SectionHeader';
import WorkExperience from './WorkExperience';

import TechKeywords from '../static/techKeywords.json';

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
          {roles.map(
            ({ id: roleId, role, location, startDate, endDate, descriptions, projects }) => (
              <WorkExperience.Role
                key={roleId}
                name={role}
                location={location}
                startDate={startDate}
                endDate={endDate}
                dateFormat={dateFormat}
              >
                <ul className="role-description">
                  {descriptions?.map((item, i) => (
                    <li key={i} className="role-item">
                      <Highlighter searchWords={TechKeywords} textToHighlight={item} />
                    </li>
                  ))}
                  {projects?.map(({ name, about, descriptions: projectItems }) => (
                    <li key={name} className="role-item">
                      {about}
                      <ul className="role-description">
                        {projectItems?.map((item, i) => (
                          <li key={i} className="role-item">
                            <Highlighter searchWords={TechKeywords} textToHighlight={item} />
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </WorkExperience.Role>
            ),
          )}
        </WorkExperience>
      ))}
    </StyledList>
  );
}

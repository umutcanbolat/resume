/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { GrMagic } from 'react-icons/gr';
import { SectionHeader, WorkExperience } from '../components';

const data = [
  {
    id: 1,
    company: 'Klarna Bank AB',
    url: 'https://www.klarna.com',
    roles: [
      {
        id: 1,
        role: 'Software Engineer II',
        location: 'Giessen, Germany',
        startDate: new Date(2021, 5),
        endDate: undefined,
        descriptionItems: [
          <>
            Development of the post-purchase operations of direct debit payment method using{' '}
            <b>Spring Boot</b> with <b>Java 11</b>.
          </>,
          <>
            Handling the post-purchase communications. <b>Email/SMS/Push</b> send-outs with{' '}
            <b>Apache Kafka</b>.
          </>,
          <>
            Creating <b>monitoring/alarming</b> dashboards using <b>Datadog</b>.
          </>,
        ],
      },
      {
        id: 2,
        role: 'Software Engineer I',
        location: 'Giessen, Germany',
        startDate: new Date(2020, 2),
        endDate: new Date(2021, 5),
        descriptionItems: [
          <>
            Worked as a full-stack engineer using <b>React.js</b> on the front-end and{' '}
            <b>Java 11</b> with <b>DropWizard</b> at the back-end.
          </>,
          <>
            Development of a <b>paywall</b> solution for digital newspapers. This new solution
            increased the conversion rate significantly while signing up <b>more recurring users</b>
            . (Tested initially on Swedish newspaper <b>Dagens Nyheter</b>)
          </>,
          <>
            Implementation of a completely new user experience for direct debit by enabling the
            usage of <b>Klarna User Accounts</b>.
          </>,
          <>
            Automated front-end testing with <b>Testcafe</b> and <b>Jest</b>.
          </>,
          <>
            End-to-end and unit testing backend with <b>Groovy</b>, <b>Spock Framework</b> and{' '}
            <b>WireMock</b>.
          </>,
        ],
      },
    ],
  },
];

const StyledExperiences = styled.div`
  ul.role-description {
    list-style-type: disc;
    padding-left: 1.5rem;
    font-size: 0.92em;
  }

  li.role-item:not(:last-child) {
    margin-bottom: 0.32em;
  }
`;

export default function Experiences() {
  return (
    <StyledExperiences>
      <SectionHeader title="Experience" icon={<GrMagic />} />
      {data.map(({ id, company, url, roles }) => (
        <WorkExperience key={id} companyName={company} companyUrl={url}>
          {roles.map(({ id: roleId, role, location, startDate, endDate, descriptionItems }) => (
            <WorkExperience.Role
              key={roleId}
              name={role}
              location={location}
              startDate={startDate}
              endDate={endDate}
            >
              <ul className="role-description">
                {descriptionItems.map((item, i) => (
                  <li key={i} className="role-item">
                    {item}
                  </li>
                ))}
              </ul>
            </WorkExperience.Role>
          ))}
        </WorkExperience>
      ))}
    </StyledExperiences>
  );
}

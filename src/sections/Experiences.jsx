import React from 'react';
import styled from 'styled-components';
import { GrMagic } from 'react-icons/gr';
import { SectionHeader, WorkExperience } from '../components';

const StyledExperiences = styled.div`
  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }
`;

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
        >
          <ul>
            <li>
              Development of the post-purchase operations of direct debit payment method using{' '}
              <b>Spring Boot</b> with <b>Java 11</b>.
            </li>
            <li>
              Handling the post-purchase communications of direct debit. <b>Email/SMS/Push</b>{' '}
              send-outs with <b>Apache Kafka</b>.
            </li>
            <li>
              Creating <b>monitoring/alarming</b> dashboards using <b>Datadog</b>.
            </li>
          </ul>
        </WorkExperience.Role>
        <WorkExperience.Role
          name="Software Engineer I"
          location="Giessen, Germany"
          startDate={new Date(2020, 2)}
          endDate={new Date(2021, 5)}
        >
          <ul>
            <li>
              Worked as a full-stack engineer using <b>React.js</b> on the front-end and{' '}
              <b>Java 11</b> with <b>DropWizard</b> at the back-end.
            </li>
            <li>
              Development of a <b>paywall</b> solution for digital newspapers. This new solution
              increased the conversion rate significantly while signing up{' '}
              <b>more recurring users</b>. (Tested initially on Swedish newspaper{' '}
              <b>Dagens Nyheter</b>)
            </li>
            <li>
              Implementation of a completely new user experience for direct debit by enabling the
              usage of <b>Klarna User Accounts</b>.
            </li>
            <li>
              Automated front-end testing with <b>Testcafe</b> and <b>Jest</b>.
            </li>
            <li>
              End-to-end and unit testing backend with <b>Groovy</b>, <b>Spock Framework</b> and{' '}
              <b>WireMock</b>.
            </li>
          </ul>
        </WorkExperience.Role>
      </WorkExperience>
    </StyledExperiences>
  );
}

/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default {
  workExperience: [
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
              Handling the post-purchase communications. <b>Email/SMS/Push</b> send-outs using{' '}
              <b>Apache Kafka</b> and <b>React.js</b>.
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
              increased the conversion rate significantly while signing up{' '}
              <b>more recurring users</b>. (Tested initially on Swedish newspaper Dagens Nyheter)
            </>,
            <>
              Implementation of a completely new user experience for direct debit by enabling the
              usage of <b>Klarna User Accounts</b>.
            </>,
            <>
              Automated front-end testing with <b>Testcafe</b> and <b>Jest</b>, back-end testing
              with <b>Groovy</b>, <b>Spock Framework</b> and <b>WireMock</b>..
            </>,
          ],
        },
      ],
    },
    {
      id: 2,
      company: 'Huawei',
      url: 'https://www.huawei.com',
      roles: [
        {
          id: 1,
          role: 'R&D Asst. Software Engineer',
          location: 'Istanbul, Turkey',
          startDate: new Date(2018, 9),
          endDate: new Date(2020, 1),
          descriptionItems: [
            <>
              I worked on the development of a CMS portal as a back-end engineer.
              <ul key="AppGallery" className="role-description">
                <li>
                  The system was used by maintainers of the <b>AppGallery</b> application market, to
                  manage Android apps published by developers worldwide.
                </li>
                <li>
                  The system was written in <b>Java</b> and consisted several <b>microservices</b>.
                </li>
              </ul>
            </>,
            <>
              I&apos;ve developed data visualization web applications for mobile carriers.
              <ul key="SmartCare" className="role-description">
                <li>
                  Used <b>React.js</b>, <b>TypeScript</b> and <b>Apache Echarts</b> on the front-end
                  and <b>Spring</b> at the back-end.
                </li>
                <li>
                  Worked on the development of an internal front-end framework with built-in
                  centralized state management.
                </li>
              </ul>
            </>,
          ],
        },
      ],
    },
    {
      id: 3,
      company: 'OBSS',
      url: 'https://obss.com.tr',
      roles: [
        {
          id: 1,
          role: 'Jr. Software Developer',
          location: 'Kocaeli, Turkey',
          startDate: new Date(2017, 10),
          endDate: new Date(2018, 5),
          descriptionItems: [
            <>
              Designed and developed a risk measuring <b>UWP</b> app with <b>C#.NET</b> for Turkey’s
              biggest insurance company Anadolu Sigorta.
            </>,
          ],
        },
      ],
    },
    {
      id: 3,
      company: 'Adam Mickiewicz University',
      url: 'https://ai.wmi.amu.edu.pl/',
      roles: [
        {
          id: 1,
          role: 'Intern, Research Assistant',
          location: 'Poznań, Poland',
          startDate: new Date(2017, 5),
          endDate: new Date(2017, 8),
          descriptionItems: [
            <>
              Developed a corpus quality evaluation software using <b>Java</b> and <b>Prolog</b> as
              a continuation of the research project &quot;OCAS&quot;.
            </>,
          ],
        },
      ],
    },
  ],
};

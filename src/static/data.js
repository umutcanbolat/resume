/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default {
  experiences: [
    {
      id: 1,
      company: 'Klarna',
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
              Development of the post-purchase operations of direct debit payment method with{' '}
              <mark>Spring Boot</mark> and <mark>Java 11</mark>.
            </>,
            <>
              Handling the post-purchase communications. Email/SMS/Push send-outs using{' '}
              <mark>Apache Kafka</mark> and <mark>React.js</mark>.
            </>,
            <>
              Creating monitoring/alarming dashboards using <mark>Datadog</mark>.
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
              Worked as a full-stack engineer using <mark>React.js</mark> on the front-end and{' '}
              <mark>Java 11</mark> at the back-end.
            </>,
            <>
              Development of a paywall solution for digital newspapers. This new solution increased
              the conversion rate significantly while signing up more recurring users. (Tested
              initially on Swedish newspaper Dagens Nyheter)
            </>,
            <>
              Implementation of a completely new user experience for direct debit by enabling the
              usage of Klarna User Accounts.
            </>,
            <>
              Automated front-end testing with <mark>Testcafe</mark> and <mark>Jest</mark>, back-end
              testing with <mark>Groovy</mark>, <mark>Spock Framework</mark> and{' '}
              <mark>WireMock</mark>.
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
                  The system was used by maintainers of the AppGallery application market, to manage
                  Android apps published by developers worldwide.
                </li>
                <li>
                  The system was written in <mark>Java</mark> and consisted several{' '}
                  <mark>microservices</mark>.
                </li>
              </ul>
            </>,
            <>
              I&apos;ve developed data visualization web applications for mobile carriers.
              <ul key="SmartCare" className="role-description">
                <li>
                  Used <mark>React.js</mark>, <mark>TypeScript</mark> and{' '}
                  <mark>Apache Echarts</mark> on the front-end and <mark>Spring</mark> at the
                  back-end.
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
              Designed and developed a risk measuring <mark>UWP</mark> app with <mark>C#.NET</mark>{' '}
              for Turkey’s biggest insurance company Anadolu Sigorta.
            </>,
          ],
        },
      ],
    },
    {
      id: 4,
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
              Developed a corpus quality evaluation software using <mark>Java</mark> and{' '}
              <mark>Prolog</mark> as a continuation of the research project OCAS.
            </>,
          ],
        },
      ],
    },
  ],
  education: [
    {
      id: 1,
      company: 'Kocaeli University',
      url: 'https://kocaeli.edu.tr',
      roles: [
        {
          id: 1,
          role: 'Computer Engineering',
          location: "Bachelor's Degree",
          startDate: new Date(2014, 8),
          endDate: new Date(2018, 5),
        },
      ],
    },
    {
      id: 2,
      company: 'Adam Mickiewicz University',
      url: 'https://ai.wmi.amu.edu.pl/',
      roles: [
        {
          id: 1,
          role: 'Computer Science',
          location: "Bachelor's Degree • Erasmus+ Exchange",
          startDate: new Date(2015, 8),
          endDate: new Date(2016, 1),
        },
      ],
    },
  ],
  personalProjects: [
    {
      name: 'Instant Username Search',
      description: (
        <>
          A username search engine which checks more than 100 social media sites. Monthly 45k+
          active users.
          <br />
          <b>Tech stack:</b> React.js, Spring Boot, Kubernetes, Docker, GitHub pages, Github
          Actions.
        </>
      ),
      links: {
        github: 'https://www.github.com/instantusername/instant-username-search',
        web: 'https://www.instantusername.com',
      },
    },
    {
      name: 'Autofillr',
      description:
        'A Chrome extension that fills registration forms with randomly but consistently generated fake data. This drastically decrased the time requeired for testing/validating user flows.',
      links: {
        github: 'https://github.com/umutcanbolat/Autofillr',
        chromeWebStore:
          'https://chrome.google.com/webstore/detail/autofillr/jcgfleiagjfjlgdpbignhphpdcbjplco',
      },
    },
    {
      name: 'Unrepeat',
      description:
        "The missing inverse of the javascript's repeat method written in Typescript. Available at NPM.",
      links: {
        github: 'https://github.com/umutcanbolat/unrepeat',
        npm: 'https://www.npmjs.com/package/unrepeat',
      },
    },
  ],
};

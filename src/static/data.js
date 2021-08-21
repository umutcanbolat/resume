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
          descriptions: [
            'Development of the post-purchase operations of direct debit payment method with Spring Boot and Java 11.',
            'Handling the post-purchase communications. Email/SMS/Push send-outs using Apache Kafka and React.js.',
            'Creating monitoring/alarming dashboards using Datadog.',
          ],
        },
        {
          id: 2,
          role: 'Software Engineer I',
          location: 'Giessen, Germany',
          startDate: new Date(2020, 2),
          endDate: new Date(2021, 5),
          descriptions: [
            'Worked as a full-stack engineer using React.js on the front-end and Java 11 at the back-end.',
            'Development of a paywall solution for digital newspapers. This new solution increased the conversion rate significantly while signing up more recurring users. (Tested initially on Swedish newspaper Dagens Nyheter)',
            'Implementation of a completely new user experience for direct debit by enabling the usage of Klarna User Accounts.',
            'Automated front-end testing with Testcafe and Jest, back-end testing with Groovy, Spock Framework and WireMock.',
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
          projects: [
            {
              name: 'HMS',
              about: 'I worked on the development of a CMS portal as a back-end engineer.',
              descriptions: [
                'The system was used by maintainers of the AppGallery application market, to manage Android apps published by developers worldwide.',
                'The system was written in Java and consisted several microservices.',
              ],
            },
            {
              name: 'SmartCare',
              about: "I've developed data visualization web applications for mobile carriers.",
              descriptions: [
                'Used React.js, TypeScript and Apache Echarts on the front-end and Spring at the back-end.',
                'Worked on the development of an internal front-end framework with built-in centralized state management.',
              ],
            },
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
          descriptions: [
            'Designed and developed a risk measuring UWP app with C#.NET for Turkey’s biggest insurance company Anadolu Sigorta.',
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
          descriptions: [
            'Developed a corpus quality evaluation software using Java and Prolog as a continuation of the research project OCAS.',
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
      descriptions: [
        'A username search engine which checks more than 100 social media sites. Monthly 45k+ active users.',
        'Tech stack: React.js, Spring Boot, Kubernetes, Docker, GitHub pages, Github Actions.',
      ],
      links: {
        github: 'https://www.github.com/instantusername/instant-username-search',
        web: 'https://www.instantusername.com',
      },
    },
    {
      name: 'Autofillr',
      descriptions: [
        'A Chrome extension that fills registration forms with randomly but consistently generated fake data. This drastically decrased the time requeired for testing/validating user flows.',
      ],
      links: {
        github: 'https://github.com/umutcanbolat/Autofillr',
        chromeWebStore:
          'https://chrome.google.com/webstore/detail/autofillr/jcgfleiagjfjlgdpbignhphpdcbjplco',
      },
    },
    {
      name: 'Unrepeat',
      descriptions: [
        "The missing inverse of the javascript's repeat method. Written in Typescript. Available at NPM.",
      ],
      links: {
        github: 'https://github.com/umutcanbolat/unrepeat',
        npm: 'https://www.npmjs.com/package/unrepeat',
      },
    },
  ],
};

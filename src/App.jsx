import React from 'react';
import { Header, PersonalProjects, Publications } from './sections';
import { ExperienceList } from './components';

import 'antd/dist/antd.css';
import './App.css';

import data from './static/data.json';

function App() {
  const { name, title, experiences, education, personalProjects, publications } = data;

  return (
    <>
      <section className="sheet padding-10mm">
        <Header name={name} title={title} />
        <ExperienceList title="Experience" data={experiences} />
        <ExperienceList title="Education" dateFormat="year" data={education} />
      </section>
      <section className="sheet padding-10mm">
        <PersonalProjects data={personalProjects} />
        <Publications data={publications} />
      </section>
    </>
  );
}

export default App;

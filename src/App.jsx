import React from 'react';
import { Header, PersonalProjects } from './sections';
import { ExperienceList } from './components';

import 'antd/dist/antd.css';
import './App.css';

import data from './static/data.json';

function App() {
  return (
    <>
      <section className="sheet padding-10mm">
        <Header />
        <ExperienceList title="Experience" data={data.experiences} />
        <ExperienceList title="Education" dateFormat="year" data={data.education} />
      </section>
      <section className="sheet padding-10mm">
        <PersonalProjects data={data.personalProjects} />
      </section>
    </>
  );
}

export default App;

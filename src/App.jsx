import React from 'react';
import { GrMagic } from 'react-icons/gr';
import { FaGraduationCap } from 'react-icons/fa';
import { Header } from './sections';
import { ExperienceList } from './components';

import 'antd/dist/antd.css';
import './App.css';

import data from './static/data';

function App() {
  return (
    <section className="sheet padding-10mm">
      <Header />
      <ExperienceList title="Experience" icon={<GrMagic />} data={data.experiences} />
      <ExperienceList
        title="Education"
        icon={<FaGraduationCap />}
        dateFormat="year"
        data={data.education}
      />
    </section>
  );
}

export default App;

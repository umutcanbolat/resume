import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Header, Experiences } from './sections';

function App() {
  return (
    <section className="sheet padding-10mm">
      <Header />
      <Experiences />
    </section>
  );
}

export default App;

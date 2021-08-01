import React from 'react';
import './App.css';
import { SocialLinks } from './sections';

function App() {
  return (
    <section className="sheet padding-10mm">
      <h1
        id="title"
        style={{
          width: 'fit-content',
          margin: '0 auto',
        }}
      >
        Umut Canbolat
      </h1>
      <div className="social-links">
        <SocialLinks />
      </div>
    </section>
  );
}

export default App;

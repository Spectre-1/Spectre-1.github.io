// App.js

import React from 'react';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import Education from './components/Education.js';
// import ProjectsSection from './components/Projects.js';
import ExperienceSection from './components/Experience.js';
// import ContactSection from './components/ContactMe.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Education />
      <ExperienceSection />
    </div>
  );
};

export default App;

// App.js

import React from 'react';
import Header from './components/Header.js';
import AboutMeSection from './components/AboutMe.js';
import SkillsSection from './components/Education.js';
import ProjectsSection from './components/Projects.js';
import ExperienceSection from './components/Experience.js';
import ContactSection from './components/ContactMe.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

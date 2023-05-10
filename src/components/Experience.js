// ExperienceSection.js

import React from 'react';
import IndividualExperience from './IndividualExperience';

const ExperienceSection = () => {
  return (
    <section id="Experience" className="pt-12 bg-gray-50 dark:bg-darkBlue1">
      <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl text-center">
        Experience
      </h1>
      <div className="container mx-auto px-6 pb-32">
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <IndividualExperience
            companyName="CarbonCopies Foundation"
            role="Backend Developer"
            period="Feb 2023 - Current"
            description="Contributed to the organization`s goal of promoting and accelerating whole brain emulation through pair programming to fix bugs and enhance performance of the game engine for a public outreach program. Set up CI/CD pipelines test due to migration from Github to Gitlab."
            imageSource="images/CarbonCopies.jpeg"
          />
          <IndividualExperience
            companyName="Limon"
            role="Full Stack Developer"
            period="Feb 2022 - June 2022"
            description="Designed UI/UX using industry tools like Figma, resulting in mockups for the application. Collaborated in pair programming to develop over 50% of the front-end using React Native. Contributed to the creation of an AI recommendation algorithm in Python using Tensor Flow. Ensured code maintainability and readability by enforcing code styling through prettier and adding documentation as needed."
            imageSource="images/Limon.jpeg"
          />
          <IndividualExperience
            companyName="UCLA Katsushi Lab"
            role="Undergrad Student Researcher"
            period="Feb 2022 - June 2022"
            description="Conducted research on the correlation between human vision, facial recognition, and the human brain, while assisting in developing and implementing new experiment protocols using Python and PsychoPy. Gathered experimental data in Microsoft Excel and analyzed it in MATLAB, producing 2D graphs displaying reaction time and degree of eccentricity."
            imageSource="images/UCLA_Bruins_script.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
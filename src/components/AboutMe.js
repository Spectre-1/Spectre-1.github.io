import React from 'react';
import mainImage from '../images/Main.jpg'; // Update this with the correct path

const AboutMe = () => {
  return (
    <section id="About Me" className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom">
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <img src={mainImage} alt="" className="mx-auto" style={{width: '40%'}} />
        {/* ... */}
      </div>
    </section>
  );
}

export default AboutMe;

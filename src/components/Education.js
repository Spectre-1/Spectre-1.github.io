import React from 'react';
import universityLogo from '../images/The_University_of_California_Irvine.svg';  // Update this with the correct path

const Education = () => {
  return (
    <section id="Education" className="pt-12 bg-gray-50 dark:bg-darkBlue1 mx-auto">
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <img src={universityLogo} alt="" className="mx-auto" style={{width: '25%'}} />
        {/* ... */}
      </div>
    </section>
  );
}

export default Education;

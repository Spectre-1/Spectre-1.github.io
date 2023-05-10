import React from 'react';
import logo from '../Images/icon.svg';  // Update this with the correct path

const Header = () => {
  return (
    <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
      <div className= "flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10 sm:text-sm sm:width">
        <a href = "#Education" className="hover:text-accentCyan">Education & Skills</a>
        <a href = "#Experience" className="hover:text-accentCyan">Experience</a>
        <a href = "#Projects" className="hover:text-accentCyan">Projects</a>
        <a href = "#Contact" className="hover:text-accentCyan">Contact Me!</a>
        {/* Dark/Light Mode Button... */}
      </div>
    </header>
  );
}

export default Header;

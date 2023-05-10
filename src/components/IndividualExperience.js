// IndividualExperience.js

import React from 'react';

const IndividualExperience = ({ companyName, role, period, description, imageSource }) => {
  return (
    <div className="flex flex-col items-center space-y-2 md:w-1/2">
      <div className="flex items-center justify-center h-24 mb-6">
        <img src={imageSource} alt="" className="mx-auto"style={{ width: "50%" }} />
      </div>
      <h3 className="text-xl font-bold">{companyName}</h3>
      <h4 className="text-l font-bold">{role}</h4>
      <h4 className="text-l font-bold">{period}</h4>
      <p className="max-w-md">
        {description}
      </p>
    </div>
  );
};

export default IndividualExperience;
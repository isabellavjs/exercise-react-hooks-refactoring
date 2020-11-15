import React, { useState } from 'react';
import CarsContext from './CarsContext';


function CarsProvider ({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

 const handleCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const contextValue = {
    ...cars,
    moveCar: handleCar,
  }

  return (
      <CarsContext.Provider value={contextValue}>
        {children}
      </CarsContext.Provider>
    );
};

export default CarsProvider;

import React, { useContext, useState } from 'react';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';


function Cars () {
  const { moveCar, cars } = useContext(CarsContext);
  const [redCar, setRedCar] = useState(false);
  const [blueCar, setBlueCar] = useState(false);
  const [yellowCar, setYellowCar] = useState(false);

  const handleCar = () => {
    if (cars.redCar) {
      moveCar('redCar', !redCar);
      setRedCar(false);
    } else if (cars.blueCar) {
      moveCar(blueCar);
      setBlueCar(true);
    } else if (cars.yellowCar) {
      moveCar(yellowCar);
      setYellowCar(true);
    }
  }

    return (
      <div>
        <div>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={handleCar}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={blueCar ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={handleCar}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={yellowCar ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={handleCar}
            type="button"
          >
            Move
        </button>
        </div>
      </div>
    )
};


export default Cars;

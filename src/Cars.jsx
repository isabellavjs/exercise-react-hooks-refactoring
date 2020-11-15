import React, { useContext } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import CarsContext from './context/CarsContext';
// import SignalContext from './context/SignalContext';

function Cars () {
    const { red:redCar, blue:blueCar, yellow:yellowCar, moveCar } = useContext(CarsContext);
    // const { isDisable, signalColor, setDisable } = useContext(SignalContext);
    // console.log('set disable', isDisable);
    return (
      <div>
        <div>
          <img
            className={redCar ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('red', !redCar)}
            type="button"
            // disabled={() => setDisable(signalColor)}
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
            onClick={() => moveCar('blue', !blueCar)}
            type="button"
            // disabled={() => setDisable(signalColor)}
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
            onClick={() => moveCar('yellow', !yellowCar)}
            type="button"
            // disabled={() => setDisable(signalColor)}
          >
            Move
        </button>
        </div>
      </div>
    )
};

export default Cars;

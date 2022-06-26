import './style.css';

import { Rating } from '../Rating/index';

export function DriverCard(props) {
  return (
    <>
      <div id="driverCard">
        <div>
          <img id="driverImage" src={props.img} alt="perfil" />
        </div>
        <div>
          {' '}
          <p id="driverName">{props.name}</p>
          <Rating>{props.rating}</Rating>
          <p id="carLicense">
            {props.car.model} {props.car.licensePlate}
          </p>
        </div>
      </div>
    </>
  );
}

import { useSelector } from "react-redux";

import { selectCars } from "../../../../services/state/cars/carsSelectors";

import AdvertListItem from "../AdvertListItem";

const AdvertList = () => {
  const cars = useSelector(selectCars);

  return (
    <ul>
      {cars.map((car) => (
        <AdvertListItem key={car.id} car={car} />
      ))}
    </ul>
  );
};

export default AdvertList;

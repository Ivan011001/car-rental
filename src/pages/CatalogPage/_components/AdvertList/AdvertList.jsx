import { useSelector } from "react-redux";

import { selectCars } from "../../../../services/state/cars/carsSelectors";

import AdvertListItem from "../AdvertListItem";

import { StyledAdvertList } from "./AdvertList.styled";

const AdvertList = () => {
  const cars = useSelector(selectCars);

  return (
    <StyledAdvertList>
      {cars.map((car) => (
        <AdvertListItem key={car.id} car={car} />
      ))}
    </StyledAdvertList>
  );
};

export default AdvertList;

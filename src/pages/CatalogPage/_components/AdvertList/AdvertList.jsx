import { useSelector } from "react-redux";
import { selectCars } from "@/services/state/cars/carsSelectors";

import AdvertListItem from "../AdvertListItem";
import LoadMore from "../LoadMore";

import { StyledAdvertList } from "./AdvertList.styled";

const AdvertList = () => {
  const cars = useSelector(selectCars);

  return (
    <>
      <StyledAdvertList>
        {cars.map((car) => (
          <li key={car.id}>
            <AdvertListItem car={car} />
          </li>
        ))}
      </StyledAdvertList>
      <LoadMore />
    </>
  );
};

export default AdvertList;

import { useSelector } from "react-redux";
import { selectCars, selectAdvertsCount } from "@/services/state/cars/carsSelectors";

import AdvertListItem from "../AdvertListItem";
import LoadMore from "../LoadMore";

import { StyledAdvertList } from "./AdvertList.styled";

const AdvertList = () => {
  const cars = useSelector(selectCars);
  const count = useSelector(selectAdvertsCount);

  const isAbleToFetch = cars.length !== count;

  return (
    <>
      <StyledAdvertList>
        {cars.map((car) => (
          <li key={car.id}>
            <AdvertListItem car={car} />
          </li>
        ))}
      </StyledAdvertList>

      {isAbleToFetch && <LoadMore />}
    </>
  );
};

export default AdvertList;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCars } from "../../services/state/cars/carsOperations";
import { selectIsLoading } from "../../services/state/cars/carsSelectors";

import Loader from "../../components/ui/Loader";
import AdvertList from "./_components/AdvertList";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div>
      <AdvertList />
      {isLoading && <Loader />}
    </div>
  );
};

export default CatalogPage;

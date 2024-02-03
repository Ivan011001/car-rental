import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCars } from "@/services/state/cars/carsOperations";
import { selectIsLoading } from "@/services/state/cars/carsSelectors";

import Loader from "@/components/ui/Loader";

import AdvertForm from "./_components/AdvertForm";
import AdvertList from "./_components/AdvertList";

import { StyledCatalogPage } from "./CatalogPage.styled";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <StyledCatalogPage>
      <AdvertForm />
      <AdvertList />
      {isLoading && <Loader />}
    </StyledCatalogPage>
  );
};

export default CatalogPage;

import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "@/services/state/cars/carsOperations";
import { selectCurrentPage } from "@/services/state/cars/carsSelectors";
// import { incrementPage } from "@/services/state/cars/carsSlice";

import { StyledLoadMoreButtonWrapper, StyledLoadMoreButton } from "./LoadMore.styled";

const LoadMore = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectCurrentPage);

  const onHandleClick = () => {
    const data = {
      page,
    };
    dispatch(getAllCars(data));
  };

  return (
    <StyledLoadMoreButtonWrapper>
      <StyledLoadMoreButton onClick={onHandleClick}>Load more</StyledLoadMoreButton>
    </StyledLoadMoreButtonWrapper>
  );
};

export default LoadMore;

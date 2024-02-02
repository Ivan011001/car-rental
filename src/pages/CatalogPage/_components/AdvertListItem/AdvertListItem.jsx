/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  extractLocation,
  // selectAccessories
} from "@/utils";
import { toggleFavorite } from "@/services/state/cars/carsSlice";
import { selectFavorites } from "@/services/state/cars/carsSelectors";

import Button from "@/components/ui/Button";

import {
  StyledAdvertItemCard,
  StyledAdvertItemCardImageWrapper,
  StyledAdvertItemLikeButton,
  StyledAdvertItemLikeIcon,
  StyledAdvertItemInfoContainer,
  StyledAdvertItemTitle,
  StyledAdvertItemModel,
  StyledAdvertItemPrice,
  StyledAdvertItemFeaturesList,
  StyledAdvertItemFeature,
} from "./AdvertListItem.styled";

const AdvertListItem = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.filter((favorite) => favorite.id === car.id)[0];

  const onFavoriteToggle = (car) => {
    dispatch(toggleFavorite(car));
  };

  return (
    <StyledAdvertItemCard>
      <div>
        <StyledAdvertItemCardImageWrapper $img={car.img}>
          <StyledAdvertItemLikeButton onClick={() => onFavoriteToggle(car)}>
            <StyledAdvertItemLikeIcon $isFavorite={isFavorite}>
              <use xlinkHref="/sprite.svg#icon-heart" />
            </StyledAdvertItemLikeIcon>
          </StyledAdvertItemLikeButton>
        </StyledAdvertItemCardImageWrapper>

        <StyledAdvertItemInfoContainer>
          <StyledAdvertItemTitle>
            {car.make} <StyledAdvertItemModel>{car.model}</StyledAdvertItemModel>,{" "}
            {car.year}
          </StyledAdvertItemTitle>
          <StyledAdvertItemPrice>{car.rentalPrice}</StyledAdvertItemPrice>
        </StyledAdvertItemInfoContainer>

        <StyledAdvertItemFeaturesList>
          <StyledAdvertItemFeature>
            {extractLocation(car.address).city}
          </StyledAdvertItemFeature>
          <StyledAdvertItemFeature>
            {extractLocation(car.address).country}
          </StyledAdvertItemFeature>
          <StyledAdvertItemFeature>{car.rentalCompany}</StyledAdvertItemFeature>
          <StyledAdvertItemFeature>Premium</StyledAdvertItemFeature>
          <StyledAdvertItemFeature>{car.type}</StyledAdvertItemFeature>
          <StyledAdvertItemFeature>{car.model}</StyledAdvertItemFeature>
          <StyledAdvertItemFeature>{car.id}</StyledAdvertItemFeature>
          <StyledAdvertItemFeature>{car.accessories[0]}</StyledAdvertItemFeature>
          {/* <StyledAdvertItemFeature>
            {selectAccessories(car.accessories)}
          </StyledAdvertItemFeature> */}
        </StyledAdvertItemFeaturesList>
      </div>

      <Button padY={12}>Learn More</Button>
    </StyledAdvertItemCard>
  );
};

export default AdvertListItem;

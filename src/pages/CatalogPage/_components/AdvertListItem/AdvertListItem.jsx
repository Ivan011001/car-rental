/* eslint-disable react/prop-types */

import Button from "../../../../components/ui/Button";

import {
  StyledAdvertItemCard,
  StyledAdvertItemCardImageWrapper,
  StyledAdvertItemLikeButton,
  StyledAdvertItemLikeIcon,
  StyledAdvertItemInfoContainer,
  StyledAdvertItemTitle,
  StyledAdvertItemModel,
  StyledAdvertItemPrice,
  // StyledAdvertItemFeaturesList,
  // StyledAdvertItemFeature,
} from "./AdvertListItem.styled";

const AdvertListItem = ({ car }) => {
  return (
    <StyledAdvertItemCard>
      <StyledAdvertItemCardImageWrapper $img={car.img}>
        <StyledAdvertItemLikeButton>
          <StyledAdvertItemLikeIcon>
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

      <Button padX={99} padY={12}>
        Learn More
      </Button>
    </StyledAdvertItemCard>
  );
};

export default AdvertListItem;

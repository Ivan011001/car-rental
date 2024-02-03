import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";

import {
  StyledFavoritesContainer,
  StyledFavoritesTitle,
  StyledFavoritesDescription,
  StyledFavoritesFeatureList,
  StyledFavoritesFeaturesItem,
} from "./MainFavorites.styled";

const MainFavorites = () => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate("/favorites");
  };

  return (
    <StyledFavoritesContainer>
      <StyledFavoritesTitle>Our brand new favorites feature</StyledFavoritesTitle>

      <StyledFavoritesDescription>
        We&apos;re thrilled to unveil our brand new favorite feature in the car rental app
        - &quot;Ride Freedom.&quot; Say goodbye to compromise and hello to the
        extraordinary experience of driving your dream car.
      </StyledFavoritesDescription>

      <StyledFavoritesFeatureList>
        Innovations:
        <StyledFavoritesFeaturesItem>
          ✅ Choose Your Dream Ride: Explore a curated selection of premium and luxury
          vehicles, handpicked for the ultimate driving experience.
        </StyledFavoritesFeaturesItem>
        <StyledFavoritesFeaturesItem>
          🔒 Secure Booking: Your peace of mind is our priority. With our secure booking
          process, your dream car reservation is guaranteed.
        </StyledFavoritesFeaturesItem>
        <StyledFavoritesFeaturesItem>
          🚀 Instant Upgrades: Embrace spontaneity with our instant upgrade feature. Found
          a premium vehicle that catches your eye mid-trip?
        </StyledFavoritesFeaturesItem>
      </StyledFavoritesFeatureList>

      <Button padY={14} padX={50} onClick={onHandleClick}>
        Discover Favorites
      </Button>
    </StyledFavoritesContainer>
  );
};

export default MainFavorites;

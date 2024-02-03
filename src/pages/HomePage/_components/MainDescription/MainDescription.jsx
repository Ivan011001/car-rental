import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";

import {
  StyledDescriptionContainer,
  StyledDescriptionTitle,
  StyledDescriptionFeaturesItem,
  StyledDescriptionFeaturesList,
} from "./MainDescription.styled";

const MainDescription = () => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate("/catalog");
  };

  return (
    <StyledDescriptionContainer>
      <StyledDescriptionTitle>Rent Your Dream Car with Our App</StyledDescriptionTitle>

      <p>
        Explore the freedom of the open road with our premier car rental service. Whether
        you&apos;re planning a weekend getaway, a business trip, or an extended vacation,
        we provide a seamless and convenient solution for all your transportation needs.
      </p>

      <StyledDescriptionFeaturesList>
        Features:
        <StyledDescriptionFeaturesItem>
          🔎 Discover: choose from a wide range of vehicles, including sleek sedans,
          spacious SUVs, and stylish luxury cars.
        </StyledDescriptionFeaturesItem>
        <StyledDescriptionFeaturesItem>
          ✍️ Booking: Our user-friendly website makes booking a car a breeze. With just a
          few clicks, you can select your preferred car.
        </StyledDescriptionFeaturesItem>
        <StyledDescriptionFeaturesItem>
          💰 Pricing: No hidden fees or surprises! Enjoy transparent pricing with no
          hidden costs.
        </StyledDescriptionFeaturesItem>
        <StyledDescriptionFeaturesItem>
          💪 Flexible Rental Periods: Whether you need a car for a few hours, a day, a
          week, or more.
        </StyledDescriptionFeaturesItem>
      </StyledDescriptionFeaturesList>

      <Button padY={14} padX={80} onClick={onHandleClick}>
        Start Renting
      </Button>
    </StyledDescriptionContainer>
  );
};

export default MainDescription;

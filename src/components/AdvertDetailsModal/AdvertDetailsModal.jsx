/* eslint-disable react/prop-types */

import { extractLocation, extractConditions } from "@/utils";

import Button from "../ui/Button";
import ModalWindow from "../ui/ModalWindow";

import {
  StyledAdvertDetailsContainer,
  StyledAdvertDetailsImage,
  StyledAdvertDetailsBody,
  StyledAdvertDetailsTitle,
  StyledAdvertDetailsModel,
  StyledAdvertDetailsFeatureHeading,
  StyledAdvertDetailsFeaturesList,
  StyledAdvertDetailsFeature,
  StyledAdvertDetailsDescription,
  StyledAdvertDetailsFuncList,
  StyledAdvertDetailsFunc,
  StyledAdvertDetailsRentalList,
  StyledAdvertDetailsRentalItem,
  StyledAdvertDetailsRentalItemValue,
  StyledAdvertDetailsTelephon,
} from "./AdvertDetailsModal.styled";

const AdvertDetailsModal = ({ car, onClose }) => {
  return (
    <ModalWindow onClose={onClose}>
      <StyledAdvertDetailsContainer>
        <StyledAdvertDetailsImage $img={car.img}></StyledAdvertDetailsImage>

        <StyledAdvertDetailsBody>
          <div>
            <StyledAdvertDetailsTitle>
              {car.make} <StyledAdvertDetailsModel>{car.model}</StyledAdvertDetailsModel>,{" "}
              {car.year}
            </StyledAdvertDetailsTitle>

            <StyledAdvertDetailsFeaturesList>
              <StyledAdvertDetailsFeature>
                {extractLocation(car.address).city}
              </StyledAdvertDetailsFeature>
              <StyledAdvertDetailsFeature>
                {extractLocation(car.address).country}
              </StyledAdvertDetailsFeature>
              <StyledAdvertDetailsFeature>{car.rentalCompany}</StyledAdvertDetailsFeature>
              <StyledAdvertDetailsFeature>Premium</StyledAdvertDetailsFeature>
              <StyledAdvertDetailsFeature>{car.type}</StyledAdvertDetailsFeature>
              <StyledAdvertDetailsFeature>{car.model}</StyledAdvertDetailsFeature>
              <StyledAdvertDetailsFeature>{car.id}</StyledAdvertDetailsFeature>
              <StyledAdvertDetailsFeature>
                {car.accessories[0]}
              </StyledAdvertDetailsFeature>
            </StyledAdvertDetailsFeaturesList>

            <StyledAdvertDetailsDescription>
              {car.description}
            </StyledAdvertDetailsDescription>
          </div>

          <div>
            <StyledAdvertDetailsFeatureHeading>
              Accessories and functionalities:
            </StyledAdvertDetailsFeatureHeading>
            <StyledAdvertDetailsFuncList>
              {car.accessories.map((accessorie) => (
                <StyledAdvertDetailsFunc key={accessorie}>
                  {accessorie}
                </StyledAdvertDetailsFunc>
              ))}
              {car.functionalities.map((functionalitie) => (
                <StyledAdvertDetailsFunc key={functionalitie}>
                  {functionalitie}
                </StyledAdvertDetailsFunc>
              ))}
            </StyledAdvertDetailsFuncList>
          </div>

          <div>
            <StyledAdvertDetailsFeatureHeading>
              Rental conditions:
            </StyledAdvertDetailsFeatureHeading>
            <StyledAdvertDetailsRentalList>
              {extractConditions(car.rentalConditions).map((condition) => (
                <StyledAdvertDetailsRentalItem key={condition}>
                  {condition}
                </StyledAdvertDetailsRentalItem>
              ))}
              <StyledAdvertDetailsRentalItem>
                Mileage:{" "}
                <StyledAdvertDetailsRentalItemValue>
                  {car.mileage}
                </StyledAdvertDetailsRentalItemValue>
              </StyledAdvertDetailsRentalItem>

              <StyledAdvertDetailsRentalItem>
                Price:{" "}
                <StyledAdvertDetailsRentalItemValue>
                  {car.rentalPrice}
                </StyledAdvertDetailsRentalItemValue>
              </StyledAdvertDetailsRentalItem>
            </StyledAdvertDetailsRentalList>
          </div>

          <Button padY={12} padX={50}>
            <StyledAdvertDetailsTelephon href="tel:+380730000000">
              Car rental
            </StyledAdvertDetailsTelephon>
          </Button>
        </StyledAdvertDetailsBody>
      </StyledAdvertDetailsContainer>
    </ModalWindow>
  );
};

export default AdvertDetailsModal;

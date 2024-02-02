/* eslint-disable react/prop-types */

import { extractLocation, parseConditions, formatMileage } from "@/utils";

import Button from "@/components/ui/Button";
import ModalWindow from "@/components/ui/ModalWindow";

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

              <StyledAdvertDetailsFeature>Id: {car.id}</StyledAdvertDetailsFeature>

              <StyledAdvertDetailsFeature>Year: {car.year}</StyledAdvertDetailsFeature>

              <StyledAdvertDetailsFeature>Type: {car.type}</StyledAdvertDetailsFeature>

              <StyledAdvertDetailsFeature>
                Fuel Consumption: {car.fuelConsumption}
              </StyledAdvertDetailsFeature>

              <StyledAdvertDetailsFeature>
                Engine Size: {car.engineSize}
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
              <StyledAdvertDetailsRentalItem>
                Minimum age:{" "}
                <StyledAdvertDetailsRentalItemValue>
                  {parseConditions(car.rentalConditions).minimumAge}
                </StyledAdvertDetailsRentalItemValue>
              </StyledAdvertDetailsRentalItem>

              {parseConditions(car.rentalConditions).conditions.map((condition) => (
                <StyledAdvertDetailsRentalItem key={condition}>
                  {condition}
                </StyledAdvertDetailsRentalItem>
              ))}

              <StyledAdvertDetailsRentalItem>
                Mileage:{" "}
                <StyledAdvertDetailsRentalItemValue>
                  {formatMileage(car.mileage)}
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

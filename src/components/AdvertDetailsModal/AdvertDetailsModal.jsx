/* eslint-disable react/prop-types */
import ModalWindow from "../ui/ModalWindow";

import { extractLocation, extractConditions } from "@/utils";

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
  StyledAdvertDetailsRentalList,
  StyledAdvertDetailsRentalItem,
  StyledAdvertDetailsRentalItemValue,
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
            <StyledAdvertDetailsFeaturesList>
              {car.accessories.map((accessorie) => (
                <StyledAdvertDetailsFeature key={accessorie}>
                  {accessorie}
                </StyledAdvertDetailsFeature>
              ))}
              {car.functionalities.map((functionalitie) => (
                <StyledAdvertDetailsFeature key={functionalitie}>
                  {functionalitie}
                </StyledAdvertDetailsFeature>
              ))}
            </StyledAdvertDetailsFeaturesList>
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
        </StyledAdvertDetailsBody>
      </StyledAdvertDetailsContainer>
    </ModalWindow>
  );
};

export default AdvertDetailsModal;

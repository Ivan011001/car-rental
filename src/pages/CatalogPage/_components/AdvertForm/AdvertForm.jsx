import { createPrices } from "@/utils";

import Button from "@/components/ui/Button";

import {
  StyledAdvertForm,
  StyledAdvertFormItemWrapper,
  StyledAdvertFormLabel,
  StyledAvdretFormInput,
} from "./AdvertForm.styled";

const makes = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];

const AdvertForm = () => {
  const prices = createPrices();

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledAdvertForm onSubmit={onFormSubmit}>
      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_brand">Car Brand</StyledAdvertFormLabel>
        <StyledAvdretFormInput placeholder="Enter the text" id="car_brand">
          <option selected disabled>
            Enter the text
          </option>
          {makes.map((make) => (
            <option key={make}>{make}</option>
          ))}
        </StyledAvdretFormInput>
      </StyledAdvertFormItemWrapper>

      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_price">Price/ 1 hour</StyledAdvertFormLabel>

        <StyledAvdretFormInput placeholder="To $" id="car_price">
          <option selected disabled>
            To $
          </option>
          {prices.map((price) => (
            <option key={price}>{price}</option>
          ))}
        </StyledAvdretFormInput>
      </StyledAdvertFormItemWrapper>

      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_mileage">
          Сar mileage / km
        </StyledAdvertFormLabel>
        <StyledAvdretFormInput placeholder="Enter the text" id="car_mileage" />
      </StyledAdvertFormItemWrapper>

      <Button padY={14} padX={44}>
        Search
      </Button>
    </StyledAdvertForm>
  );
};

export default AdvertForm;

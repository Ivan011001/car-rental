import makes from "/makes.json";

import { createPrices } from "@/utils";

import Button from "@/components/ui/Button";

import {
  StyledAdvertForm,
  StyledAdvertFormItemWrapper,
  StyledAdvertFormLabel,
  StyledAvdretFormInput,
  StyledAvdretFormArrowIcon,
  StyledAvdretFormCustomSelect,
} from "./AdvertForm.styled";

const AdvertForm = () => {
  const prices = createPrices();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const { brand, price } = e.target.elements;
    const data = {
      brand: brand.value,
      maxPrice: price.value,
    };
  };

  return (
    <StyledAdvertForm onSubmit={onFormSubmit}>
      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_brand">Car Brand</StyledAdvertFormLabel>

        <StyledAvdretFormCustomSelect>
          <StyledAvdretFormInput
            name="brand"
            placeholder="Enter the text"
            id="car_brand"
            defaultValue=""
            $width={224}
          >
            <option value="" disabled>
              Enter the text
            </option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </StyledAvdretFormInput>
          <StyledAvdretFormArrowIcon>
            <use xlinkHref="/sprite.svg#icon-chevron-down"></use>
          </StyledAvdretFormArrowIcon>
        </StyledAvdretFormCustomSelect>
      </StyledAdvertFormItemWrapper>

      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_price">Price/ 1 hour</StyledAdvertFormLabel>

        <StyledAvdretFormCustomSelect>
          <StyledAvdretFormInput
            name="price"
            placeholder="To $"
            id="car_price"
            defaultValue=""
            $width={125}
          >
            <option value="" disabled>
              To $
            </option>
            {prices.map((price) => (
              <option key={price}>{price}</option>
            ))}
          </StyledAvdretFormInput>
          <StyledAvdretFormArrowIcon>
            <use xlinkHref="/sprite.svg#icon-chevron-down"></use>
          </StyledAvdretFormArrowIcon>
        </StyledAvdretFormCustomSelect>
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

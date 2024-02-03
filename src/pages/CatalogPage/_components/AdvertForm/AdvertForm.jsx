import Button from "@/components/ui/Button";

import {
  StyledAdvertForm,
  StyledAdvertFormItemWrapper,
  StyledAdvertFormLabel,
  StyledAvdretFormInput,
} from "./AdvertForm.styled";

const AdvertForm = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();

    console.log("hi");
  };

  return (
    <StyledAdvertForm onSubmit={onFormSubmit}>
      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_brand">Car Brand</StyledAdvertFormLabel>
        <StyledAvdretFormInput placeholder="Enter the text" id="car_brand" />
      </StyledAdvertFormItemWrapper>

      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_price">Price/ 1 hour</StyledAdvertFormLabel>
        <StyledAvdretFormInput placeholder="To $" id="car_price" />
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

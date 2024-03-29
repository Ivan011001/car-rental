import { useDispatch } from "react-redux";
import { getAllCars } from "@/services/state/cars/carsOperations";
import { clearPage } from "@/services/state/cars/carsSlice";
import { clearAdverts } from "@/services/state/cars/carsSlice";

import makes from "/makes.json";

import { createPrices } from "@/utils";

import Button from "@/components/ui/Button";

import {
  StyledAdvertForm,
  StyledAdvertFormItemWrapper,
  StyledAdvertFormLabel,
  StyledAvdretFormSelect,
  StyledAvdretFormArrowIcon,
  StyledAvdretFormCustomSelect,
  StyledAvdretFormMileageInput,
  StyledAvdretFormInputFrom,
  StyledAvdretFormInputTo,
} from "./AdvertForm.styled";

const AdvertForm = () => {
  const dispatch = useDispatch();
  const prices = createPrices();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const { brand } = e.target.elements;

    const data = {
      brand: brand.value,
    };

    dispatch(clearPage());
    dispatch(clearAdverts());
    dispatch(getAllCars(data));
  };

  return (
    <StyledAdvertForm onSubmit={onFormSubmit}>
      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_brand">Car Brand</StyledAdvertFormLabel>

        <StyledAvdretFormCustomSelect>
          <StyledAvdretFormSelect
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
          </StyledAvdretFormSelect>
          <StyledAvdretFormArrowIcon>
            <use xlinkHref="/sprite.svg#icon-chevron-down"></use>
          </StyledAvdretFormArrowIcon>
        </StyledAvdretFormCustomSelect>
      </StyledAdvertFormItemWrapper>

      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="car_price">Price/ 1 hour</StyledAdvertFormLabel>

        <StyledAvdretFormCustomSelect>
          <StyledAvdretFormSelect
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
          </StyledAvdretFormSelect>
          <StyledAvdretFormArrowIcon>
            <use xlinkHref="/sprite.svg#icon-chevron-down"></use>
          </StyledAvdretFormArrowIcon>
        </StyledAvdretFormCustomSelect>
      </StyledAdvertFormItemWrapper>

      <StyledAdvertFormItemWrapper>
        <StyledAdvertFormLabel htmlFor="min_mileage">
          Сar mileage / km
        </StyledAdvertFormLabel>
        <StyledAvdretFormMileageInput>
          <StyledAvdretFormInputFrom
            type="number"
            name="minMileage"
            placeholder="From"
            id="min_mileage"
          />
          <StyledAvdretFormInputTo
            type="number"
            name="maxMileage"
            placeholder="To"
            id="max_mileage"
          />
        </StyledAvdretFormMileageInput>
      </StyledAdvertFormItemWrapper>

      <Button padY={14} padX={44}>
        Search
      </Button>
    </StyledAdvertForm>
  );
};

export default AdvertForm;

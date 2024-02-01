import { StyledLogo, StyledLogoIcon, StyledLogoTitle } from "./Logo.styled";

const Logo = () => {
  return (
    <StyledLogo to="/">
      <StyledLogoIcon>
        <use xlinkHref="/sprite.svg#icon-logo" />
      </StyledLogoIcon>
      <StyledLogoTitle>Car Rental</StyledLogoTitle>
    </StyledLogo>
  );
};

export default Logo;

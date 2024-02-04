import { StyledLogo, StyledLogoIcon, StyledLogoTitle } from "./Logo.styled";

const Logo = ({ text }) => {
  return (
    <StyledLogo to="/">
      <StyledLogoIcon>
        <use xlinkHref="/sprite.svg#icon-logo" />
      </StyledLogoIcon>
      {text && <StyledLogoTitle>Car Rental</StyledLogoTitle>}
    </StyledLogo>
  );
};

export default Logo;

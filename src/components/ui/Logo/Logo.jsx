import { StyledLogo, StyledLogoIcon, StyledLogoTitle } from "./Logo.styled";

// eslint-disable-next-line react/prop-types
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

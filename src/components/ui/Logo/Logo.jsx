import { StyledLogo, StyledLogoIcon } from "./Logo.styled";

const Logo = () => {
  return (
    <StyledLogo to="/">
      <StyledLogoIcon>
        <use xlinkHref="/sprite.svg#icon-logo" />
      </StyledLogoIcon>
    </StyledLogo>
  );
};

export default Logo;

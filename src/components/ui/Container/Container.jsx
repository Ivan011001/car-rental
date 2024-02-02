import { StyledContainer } from "./Container.styled";

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

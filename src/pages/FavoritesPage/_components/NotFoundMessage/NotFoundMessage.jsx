import {
  StyledNotFoundMessageWrapper,
  StyledNotFoundMessage,
} from "./NotFoundMessage.styled";

const NotFoundMessage = () => {
  return (
    <StyledNotFoundMessageWrapper>
      <StyledNotFoundMessage>
        Here all your favorite cars will be placed. Unfortunately, this list is empty
      </StyledNotFoundMessage>
    </StyledNotFoundMessageWrapper>
  );
};

export default NotFoundMessage;

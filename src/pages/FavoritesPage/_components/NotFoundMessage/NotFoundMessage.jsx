import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";

import {
  StyledNotFoundMessageWrapper,
  StyledNotFoundMessage,
} from "./NotFoundMessage.styled";

const NotFoundMessage = () => {
  return (
    <StyledNotFoundMessageWrapper>
      <StyledNotFoundMessage>
        Here all your favorite cars will be placed. <br /> Unfortunately, this list is
        empty
      </StyledNotFoundMessage>

      <Button padX={50} padY={12}>
        <Link style={{ color: "inherit" }} to="/catalog">
          Catalog
        </Link>
      </Button>
    </StyledNotFoundMessageWrapper>
  );
};

export default NotFoundMessage;

import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";

import {
  StyledNotFoundMessageWrapper,
  StyledNotFoundMessage,
} from "./NotFoundMessage.styled";

const NotFoundMessage = () => {
  const navigate = useNavigate();

  const handleCatalogNavigate = () => {
    navigate("/catalog");
  };

  return (
    <StyledNotFoundMessageWrapper>
      <StyledNotFoundMessage>
        Here all your favorite cars will be placed. <br /> Unfortunately, this list is
        empty
      </StyledNotFoundMessage>

      <Button padX={50} padY={12} onClick={handleCatalogNavigate}>
        Catalog
      </Button>
    </StyledNotFoundMessageWrapper>
  );
};

export default NotFoundMessage;

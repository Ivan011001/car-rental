import { TailSpin } from "react-loader-spinner";

import { StyledLoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <TailSpin color="var(--accent-color)" />
    </StyledLoaderWrapper>
  );
};

export default Loader;

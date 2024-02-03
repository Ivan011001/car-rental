import { StyledMainImage } from "./MainImage.styled";

// eslint-disable-next-line react/prop-types
const MainImage = ({ src }) => {
  return <StyledMainImage src={src} alt="Car on the road" width="710" height="473" />;
};

export default MainImage;

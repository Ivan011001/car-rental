import MainImage from "./_components/MainImage";
import MainDescription from "./_components/MainDescription";

import {
  StyledHomePageTitle,
  StyledHomePageTitleName,
  StyledHomePageInfo,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <div>
      <StyledHomePageTitle>
        Welcome to the <StyledHomePageTitleName>Car Rental</StyledHomePageTitleName>!
      </StyledHomePageTitle>

      <StyledHomePageInfo>
        <MainImage />
        <MainDescription />
      </StyledHomePageInfo>
    </div>
  );
};

export default HomePage;

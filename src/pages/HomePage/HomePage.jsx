import MainImage from "./_components/MainImage";
import MainDescription from "./_components/MainDescription";

import {
  StyledHomePageTitle,
  StyledHomePageTitleName,
  StyledHomePageInfo,
  StyledHomePageInfoSection,
} from "./HomePage.styled";

const HomePage = () => {
  return (
    <div>
      <StyledHomePageTitle>
        Welcome to the <StyledHomePageTitleName>Car Rental</StyledHomePageTitleName>!
      </StyledHomePageTitle>

      <StyledHomePageInfo>
        <StyledHomePageInfoSection>
          <MainImage src="/main-image.webp" />
          <MainDescription />
        </StyledHomePageInfoSection>

        <StyledHomePageInfoSection>
          <MainImage src="/main-image-2.webp" />
        </StyledHomePageInfoSection>
      </StyledHomePageInfo>
    </div>
  );
};

export default HomePage;

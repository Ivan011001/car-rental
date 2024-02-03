/* eslint-disable react/prop-types */

import AdvertListItem from "@/pages/CatalogPage/_components/AdvertListItem";

import {
  StyledFavoriteListWrapper,
  StyledFavoriteListTitle,
  StyledFavoriteList,
} from "./FavoriteList.styled";

const FavoriteList = ({ favorites }) => {
  return (
    <StyledFavoriteListWrapper>
      <StyledFavoriteListTitle>Favorite adverts:</StyledFavoriteListTitle>
      <StyledFavoriteList>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <AdvertListItem car={favorite} />
          </li>
        ))}
      </StyledFavoriteList>
    </StyledFavoriteListWrapper>
  );
};

export default FavoriteList;

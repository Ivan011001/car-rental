/* eslint-disable react/prop-types */

import AdvertListItem from "@/pages/CatalogPage/_components/AdvertListItem";

import { StyledFavoriteList } from "./FavoriteList.styled";

const FavoriteList = ({ favorites }) => {
  return (
    <div>
      <StyledFavoriteList>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <AdvertListItem car={favorite} />
          </li>
        ))}
      </StyledFavoriteList>
    </div>
  );
};

export default FavoriteList;

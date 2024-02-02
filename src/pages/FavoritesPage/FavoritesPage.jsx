import { useSelector } from "react-redux";
import { selectFavorites } from "@/services/state/cars/carsSelectors";

import FavoriteList from "./_components/FavoriteList";
import NotFoundMessage from "./_components/NotFoundMessage";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div style={{ height: "100%" }}>
      {favorites.length === 0 ? (
        <NotFoundMessage />
      ) : (
        <FavoriteList favorites={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;

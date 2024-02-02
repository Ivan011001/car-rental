import { useSelector } from "react-redux";
import { selectFavorites } from "@/services/state/cars/carsSelectors";

import FavoriteList from "./_components/FavoriteList";
import NotFoundMessage from "./_components/NotFoundMessage";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <section>
      {favorites.length === 0 ? (
        <NotFoundMessage />
      ) : (
        <FavoriteList favorites={favorites} />
      )}
    </section>
  );
};

export default FavoritesPage;

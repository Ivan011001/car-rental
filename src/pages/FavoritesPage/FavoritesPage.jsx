import { useSelector } from "react-redux";
import { selectFavorites } from "@/services/state/cars/carsSelectors";

import FavoriteList from "./_components/FavoriteList";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <section>
      {favorites.length === 0 ? (
        <p>
          Here all your favorite cars will be placed. Unfortunately, this list is empty
        </p>
      ) : (
        <FavoriteList favorites={favorites} />
      )}
    </section>
  );
};

export default FavoritesPage;

import { Routes, Route } from "react-router-dom";

import SharedLayout from "./pages/SharedLayout";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const CatalogPage = lazy(() => import("./pages/CatalogPage"));
// const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

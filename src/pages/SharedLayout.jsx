import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorite</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;

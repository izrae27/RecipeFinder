
import { Link, NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="brand">
          RecipeFinder
        </Link>

        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Favorites
          </NavLink>
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <p>
          © 2026 RecipeFinder. Discover something delicious.
        </p>
      </footer>
    </div>
  );
}

export default Layout;

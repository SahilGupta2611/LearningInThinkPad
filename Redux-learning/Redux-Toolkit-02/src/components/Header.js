import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Header.module.css";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
    history.replace("/auth");
    const isLoggedIn = localStorage.clear("Login");
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenticated && (
            <>
              <li>
                <Link to="/Users">Users</Link>
              </li>
              <li>
                <Link to="/Cart">My Cart</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
          {!isAuthenticated && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Users from "./components/Users";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Cart from "./components/Cart";
import { authActions } from "./store/auth";
import { useDispatch } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("Login");

  if (isLoggedIn) {
    dispatch(authActions.login());
  }

  return (
    <>
      <Header />

      <Switch>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/Users" exact>
          {!isAuthenticated ? <Redirect to="/Auth" /> : <Users />}
        </Route>
        {console.log(isAuthenticated)}
        <Route path="/UserProfile" exact>
          {!isAuthenticated ? <Redirect to="/Auth" /> : <UserProfile />}
        </Route>

        <Route path="/Cart" exact>
          {!isAuthenticated ? <Redirect to="/Auth" /> : <Cart />}
        </Route>
        <Route path="/" exact>
          {!isAuthenticated ? <Redirect to="/Auth" /> : <Counter />}
        </Route>
        <Route path="*">
          <p className="centered"> Page Not Found..</p>
        </Route>
      </Switch>
      {/* Redux class based component example */}
      {/* <CounterClass />  */}
    </>
  );
}

export default App;

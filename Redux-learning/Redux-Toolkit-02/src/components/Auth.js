import classes from "./Auth.module.css";
import { authActions } from "../store/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValidated, setFormValidated] = useState({
    emailIsValid: true,
    passwordIsValid: true,
  });

  const [touched, setTouched] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = (event) => {
    setTouched(true);

    event.preventDefault();
    if (email.length === 0 && password.length === 0) {
      setFormValidated(() => {
        return {
          emailIsValid: email.length > 0,
          passwordIsValid: password.length > 0,
        };
      });
      return;
    }
    dispatch(authActions.login());
    localStorage.setItem("Login", true);
    history.replace("/UserProfile");
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {!formValidated.emailIsValid && touched && (
            <p className="error">Email is not valid</p>
          )}
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!formValidated.emailIsValid && touched && (
              <p className="error">Password is not valid</p>
            )}
          </div>
          <button className={classes.button}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

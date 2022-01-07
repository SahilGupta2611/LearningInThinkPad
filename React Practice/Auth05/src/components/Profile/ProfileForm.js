import classes from "./ProfileForm.module.css";
import { useRef } from "react";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import { useHistory } from "react-router";

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authctx = useContext(AuthContext);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPassword = passwordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDaH3h6l0TKPXrtavLvowcP08xHZYyLoAU",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authctx.token,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then((res) => {
      //console.log(res);
      history.replace("/");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={passwordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;

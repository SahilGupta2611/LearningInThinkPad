import React from "react";
import { Route } from "react-router-dom";

function Welcome(props) {
  return (
    <section>
      <h1>The Welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, New User!</p>
      </Route>
    </section>
  );
}

export default Welcome;

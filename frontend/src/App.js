import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import SigninScreen from "./screens/SigninScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./actions/userActions";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <BrowserRouter>
      <div className="App" dir="rtl">
        <header className="center">
          <div>{userInfo && <Link onClick={logoutHandler}>התנתק</Link>}</div>
        </header>
        <main>
          <Route path="/" component={SigninScreen} exact />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
        </main>
        <footer className="center">
          <h1>כל הזכויות שמורות</h1>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

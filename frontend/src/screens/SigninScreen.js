import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signin } from "../actions/userActions";
import MessageBox from "../components/MessageBox";

const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  useEffect(() => {
    if (userInfo) {
      props.history.push("/profile");
    }
  }, [props.history, userInfo, error]);

  return (
    <div>
      {error && <MessageBox error={error} variant="danger" />}
      <form className="form" type="submit" onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="הכנס אימייל"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              placeholder="הכנס סיסמה"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">התחבר</button>
        </div>
        <div>
          ?אין לך חשבון
          <Link style={{ color: "blue", fontSize: "1.6rem" }} to="/register">
            הירשם
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;

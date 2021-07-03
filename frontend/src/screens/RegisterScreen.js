import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(register(name, email, password));
    } else {
      alert("סיסמאות לא תואמות");
    }
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
      <form className="form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">
            <input
              type="name"
              id="name"
              placeholder="הכנס שם"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
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
          <label htmlFor="password">
            <input
              type="password"
              id="confirmPassword"
              placeholder="אשר סיסמה"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">הירשם</button>
        </div>

        <div>
          יש לך חשבון?{" "}
          <Link style={{ color: "blue", fontSize: "1.6rem" }} to="/signin">
            התחבר
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;

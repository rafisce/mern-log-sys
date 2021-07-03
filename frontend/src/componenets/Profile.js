import jwt from "jsonwebtoken";
import React from "react";
import { useSelector } from "react-redux";
import { combineReducers } from "redux";

const Profile = (props) => {
  const user = props.userInfo;
  return (
    <div>
      <div> אתה מחובר</div>
      <div>
        <h1>name: {user.name}</h1>
      </div>
      <div>
        <h1>email: {user.email}</h1>
      </div>
    </div>
  );
};

export default Profile;

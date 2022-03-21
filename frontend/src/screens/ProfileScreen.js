import React from "react";
import { useSelector } from "react-redux";
import MessageBox from "../components/MessageBox";
import Profile from "../components/Profile";

const ProfileScreen = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;
  return (
    <div className="center">
      {userInfo ? (
        <Profile userInfo={userInfo}></Profile>
      ) : (
        setTimeout(() => {
          props.history.push("/");
        }, 2000) && <MessageBox error={"אין לך גישה"} />
      )}
    </div>
  );
};

export default ProfileScreen;

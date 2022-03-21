import React from "react";

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

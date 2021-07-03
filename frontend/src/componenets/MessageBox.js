import React from "react";

const MessageBox = (props) => {
  return (
    <div>
      <div>{props.error}</div>
    </div>
  );
};

export default MessageBox;

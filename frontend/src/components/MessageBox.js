import React from "react";

const MessageBox = (props) => {
  return (
    <div className={`alert alert-${props.variant || "info"}`}>
      {props.error}
    </div>
  );
};

export default MessageBox;

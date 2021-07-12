import React from "react";
import { Avatar } from "@material-ui/core";

const ModalHeader = ({ avatar, displayName }) => {
  return (
    <div className="modalHeader">
      <div className="modalHeader__avatar">
        <Avatar src={avatar} />
      </div>

      <h3>{displayName}</h3>
    </div>
  );
};

export default ModalHeader;

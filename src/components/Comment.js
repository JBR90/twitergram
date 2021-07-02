import React from "react";
import { Avatar } from "@material-ui/core";
import "../styles/comment.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const Comment = ({ comment, photoURL, displayName }) => {
  const classes = useStyles();
  console.log("in comment", comment);
  return (
    <div className="comment">
      <div className="comment__avatar">
        <Avatar className={classes.small} src={photoURL} />
      </div>
      <div className="comment__body">
        <p className="comment__user">{displayName} :</p>
        <p className="comment__comment">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;

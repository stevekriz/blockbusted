import React from "react";
import PropTypes from "prop-types";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

Like.propTypes = {
  liked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Like;

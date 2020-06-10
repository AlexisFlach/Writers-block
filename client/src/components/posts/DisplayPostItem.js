import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const DisplayPostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => (
  <div className="post bg-white p-1 my-1">
    <div>
      <h4>{name}</h4>
    </div>
    <div>
      <p className="my-1">{text}</p>
    </div>
  </div>
);

DisplayPostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect(null)(DisplayPostItem);

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: {
    user: { _id, avatar },
    location,
  },
}) => {
  return (
    <div>
      <img src={avatar} alt="avatar"></img>
      <div>
        <p>{location}</p>
        <Link to={`/profile/${_id}`}>See profile</Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;

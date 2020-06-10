import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <Fragment>
      <div>
        <img src={avatar}></img>
      </div>
      <div>
        {name}
        {location}
      </div>
      <div class="icons">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        )}
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};
export default ProfileTop;

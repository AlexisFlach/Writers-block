import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({ profile: { bio } }) => {
  return (
    <div>
      {bio && (
        <Fragment>
          <p>{bio}</p>
        </Fragment>
      )}
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;

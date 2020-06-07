import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { loading, profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Dashboard</h1>
      <p>Welcome {user && user.name}</p>
      {profile !== null ? (
        <Fragment>has</Fragment>
      ) : (
        <Fragment>
          <p>You have yet setup your profile. come on!</p>
          <Link to="/create-profile" classname="btn">
            Do it!
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  // alting från the state mappar vi in i komponenten
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

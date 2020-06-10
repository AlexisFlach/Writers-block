import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDisplayPosts } from "../../actions/post";
import DisplayPostItem from "./DisplayPostItem";

const DisplayPosts = ({ getDisplayPosts, post: { posts } }) => {
  useEffect(() => {
    getDisplayPosts();
  }, [getDisplayPosts]);
  return (
    <Fragment>
      <h1>Latest post</h1>

      <div className="posts">
        {posts.map((post) => (
          <DisplayPostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

DisplayPosts.propTypes = {
  getDisplayPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getDisplayPosts })(DisplayPosts);

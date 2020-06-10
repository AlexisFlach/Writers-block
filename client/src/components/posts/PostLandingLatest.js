import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDisplayPosts } from "../../actions/post";
import DisplayPostItem from "./PostItem";

const PostLandingLatest = ({ getDisplayPosts, post: { posts } }) => {
  useEffect(() => {
    getDisplayPosts();
  }, [getDisplayPosts]);
  return (
    <Fragment>
      <h1>Posts</h1>

      <div className="posts">
        {posts.map((post) => (
          <DisplayPostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

PostLandingLatest.propTypes = {
  getDisplayPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getDisplayPosts })(PostLandingLatest);

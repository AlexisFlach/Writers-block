import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, description, cover, user, likes, comments, date },
  showActions,
}) => (
  <div>
    <div className="post-display">
      <img src={cover} alt="" />
      <Link to={`/profile/${user}`}>
        <h4>{name}</h4>
      </Link>

      <p>{text}</p>
      <p>
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <div className="buttons">
            <button onClick={() => addLike(_id)} type="button" className="btn">
              <i className="fas fa-thumbs-up" />{" "}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={() => removeLike(_id)}
              type="button"
              className="btn"
            >
              <i className="fas fa-thumbs-down" />
            </button>
          </div>
          <Link to={`/posts/${_id}`} className="button button-sm">
            Read more{" "}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              className="button"
              onClick={() => deletePost(_id)}
              type="button"
              className="btn btn-danger"
            >
              Delete post
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);

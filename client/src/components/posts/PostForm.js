import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { addPost } from "../../actions/post";

import PropTypes from "prop-types";

const CreatePost = ({ addPost }) => {
  const [formData, setFormData] = useState({
    name: "",
    titel: "",
    text: "",
    cover: "https://source.unsplash.com/random",
    description: "",
  });

  const { name, titel, text, cover, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    addPost({ name, titel, cover, description, text });
    setFormData("");
  };

  return (
    <div>
      <h1>Create Post</h1>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Titel"
            name="titel"
            value={titel}
            onChange={(e) => onChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <textarea
            cols="30"
            rows="15"
            placeholder="Create a post"
            type="textfield"
            name="text"
            value={text}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>

        <div className="form-group">
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

CreatePost.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, addPost })(CreatePost);

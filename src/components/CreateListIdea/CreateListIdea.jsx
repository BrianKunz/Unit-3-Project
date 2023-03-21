// import styles from "./CreateListItem.module.scss";
import { createIdea } from "../../utilities/ideas-api";
import React, { Component } from "react";

export default class CreateListIdea extends Component {
  state = {
    title: "",
    img: "",
    description: "",
    category: "",
    link: "",
    error: "",
  };

  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
      error: "",
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      const idea = await createIdea(this.props.listId, formData); // Pass in listId to createIdea
      this.props.setIdea(idea);
    } catch (error) {
      this.setState({ error: "Failed to add to list" });
    }
  };

  render() {
    return (
      <div>
        <div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              required
            />
            <label>Image URL</label>
            <input
              type="text"
              name="img"
              value={this.state.img}
              onChange={this.handleInputChange}
            />
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              required
            />
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleInputChange}
            />
            <label>Link</label>
            <input
              type="text"
              name="link"
              value={this.state.link}
              onChange={this.handleInputChange}
              required
            />
            <button type="submit" className="btn-sm">
              Add to list
            </button>
          </form>
        </div>
        <h1>&nbsp;{this.state.error}</h1>
      </div>
    );
  }
}

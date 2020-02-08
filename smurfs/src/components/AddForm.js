import React, { useState, useContext } from "react";
import PostContext from "../contexts/PostContext";
import axios from "axios";

export default function AddForm() {
  const { posts, setPosts } = useContext(PostContext);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("https://smurfs-be-harms.herokuapp.com/smurfs", formData)
      .then(res => setPosts([...posts, res.data]))
      .catch(err => console.log(err));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          value={formData.name}
        />
        <input
          name="age"
          onChange={handleChange}
          type="text"
          value={formData.age}
        />
        <input
          name="height"
          onChange={handleChange}
          type="text"
          value={formData.height}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

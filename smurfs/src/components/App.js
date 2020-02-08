import React from "react";
import "./App.css";
import PostContext from "../contexts/PostContext";
import AddForm from "./AddForm";
import Posts from "../contexts/Posts";
export default function App() {
  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider value={{ post, setPosts }}>
      <div className="App">
        <AddForm />
        <Posts />
      </div>
    </PostContext.Provider>
  );
}

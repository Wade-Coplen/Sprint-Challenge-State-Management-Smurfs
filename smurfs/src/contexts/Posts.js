import React, { useState, useEffect, useContext } from "react";
import PostContext from "../contexts/PostContext";

export default function App() {
  const { posts, setPosts } = useContext(PostContext);

  return (
    <>
      {posts.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </>
  );
}

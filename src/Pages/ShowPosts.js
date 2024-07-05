import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://freefakeapi.io/authapi/posts?limit=10');
        setPosts(response.data);
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="posts containers_shadow">
      <h1>Посты</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <img src={post.picture} alt="post" />
        </div>
      ))}
    </div>
  );
}

export default Posts;
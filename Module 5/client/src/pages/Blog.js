import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/postService';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <section className="review-list">
      <h2>Blog Posts</h2>
      {posts.length ? (
        posts.map(post => (
          <div key={post._id} className="review-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><strong>By:</strong> {post.author}</p>
          </div>
        ))
      ) : (
        <p>No blog posts yet.</p>
      )}
    </section>
  );
}

export default Blog;

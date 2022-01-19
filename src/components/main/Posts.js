import React, { useState } from 'react';
import '../../style.css';
import './Posts.css';
import data from '../../data.json';
import Post from './Post';

export default function Posts(props) {
  // import data from data.json
  const blogPosts = data.blogPosts;

  const [headerClick, setHeaderClick] = useState('');
  const [showPost, setShowPost] = useState(false);

  // opens individual post
  const openHeader = (articleNum) => {
    setHeaderClick(articleNum);
    setShowPost(true);
  };
  // go back to main page
  const mainPg = () => {
    setHeaderClick('');
    setShowPost(false);
  };
  return (
    <>
      {showPost ? (
        <article className="postArticle">
          <h1 id="start">{blogPosts[headerClick].title}</h1>
          <br />
          <h4>By: {blogPosts[headerClick].author}</h4>
          <img src={blogPosts[headerClick].image} alt="post" />
          <br />
          {blogPosts[headerClick].text.map((para) => (
            <>
              <p key={blogPosts.index} className="postParas">
                {para}
              </p>
              <br />
            </>
          ))}
          <a href="#h1Head" id="goBack" onClick={mainPg}>
            go back to main page
          </a>
        </article>
      ) : (
        <article>
          {blogPosts.map((post, index) => (
            <Post
              key={index}
              index={index}
              post={post}
              openHeader={openHeader}
            />
          ))}
        </article>
      )}
    </>
  );
}

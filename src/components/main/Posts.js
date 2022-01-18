import React, { useState } from 'react';
import '../../style.css';
import data from '../../data.json';
import Post from './Post';

export default function Posts(props) {
  // import data from data.json
  const blogPosts = data.blogPosts;
  const [headerClick, setHeaderClick] = useState('');
  console.log(headerClick, 'Hclick');

  const openHeader = (articleNum) => {
    setHeaderClick(articleNum);
  };
console.log(blogPosts.fullTxt, 'defined?')
  return (
    <>
      {headerClick ? (
        <article>
          <h1>{blogPosts[headerClick].title}</h1>
          <h4>{blogPosts[headerClick].author}</h4>
          <img src={blogPosts[headerClick].image} alt="post" />
          <p>{blogPosts[headerClick].text}</p>
          {blogPosts.fullTxt.map((paras) => (
            <p>{paras}</p>
          ))}
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

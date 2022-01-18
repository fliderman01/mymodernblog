import React, { useState } from 'react';
import '../../style.css';
import data from '../../data.json';
import Post from './Post';

export default function App(props) {
  // import data from data.json
  const blogPosts = data.blogPosts;
  const [headerClick, setHeaderClick] = useState('');
  console.log(headerClick, 'Hclick')

  return (
    <>
      {headerClick ? (
        <article>
          <h1>{blogPosts[headClick].title}</h1>
          <h4>{blogPosts[headClick].author}</h4>
          <img src={blogPosts[headClick].image} alt="post" />
          <p>{blogPosts[headClick].fullTxt}</p>
        </article>
      ) : (
        <article>
          {blogPosts.map((post, index) => (
            <Post
              key={index}
              index={index}
              post={post}
              openHeader={articleNum=>console.log(articleNum, "parentNum")}
            />
          ))}
        </article>
      )}
    </>
  );
}

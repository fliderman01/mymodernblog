import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import '../../style.css';
import './Posts.css';
import data from '../../data.json';
import Post from './Post';

export default function Posts(props) {
  // import data from data.json
  const blogPosts = data.blogPosts;

  const [headerClick, setHeaderClick] = useState('');
  const [showPost, setShowPost] = useState(false);
  // for Pagination
  const [posts, setPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);
  // get json data (posts) for pagination
  const getData = () => {
    const data = blogPosts;
    const sliced = data.slice(offset, offset + perPage);
    const display = sliced.map(
      (post, index) => (
        console.log(post.title),
        (
          <Post
            key={Math.random() * 999}
            index={index}
            post={post}
            openHeader={openHeader}
          />
        )
      )
    );
    setPosts(display);
    setPageCount(Math.ceil(data.length / perPage));
  };
  // set offset when page number is clicked
  const pgClick = (e) => {
    const selected = e.selected;
    setOffset(selected * perPage);
  };
  // activates getData when offset is activated
  useEffect(() => {
    getData();
    scrollTo(0, 560); // on render(page change) scroll to 1st post header
  }, [offset]);

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
        <article className="postsArticle">
          {posts}
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            onPageChange={pgClick}
            containerClassName={'pagination'}
          />
        </article>
      )}
    </>
  );
}

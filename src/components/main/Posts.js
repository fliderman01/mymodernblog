import React, { useState } from 'react';
import '../../style.css';
import './Posts.css';
import data from '../../data.json';
import Post from './Post';

export default function Posts(props) {
  // import data from data.json
  const blogPosts = data.blogPosts;

  const [headerClick, setHeaderClick] = useState('');

  // opens individual post
  const openHeader = (articleNum) => {
    setHeaderClick(articleNum);
  };
  // go back to main page
  const mainPg = () => {
    setHeaderClick('');
  };
  return (
    <>
      {headerClick ?
      <article className="postArticle">
        <h1>{blogPosts[headerClick].title}</h1>
        <br />
        <h4>By: {blogPosts[headerClick].author}</h4>
        <img src={blogPosts[headerClick].image} alt="post" />
        <br />
        <p className="postParas">{blogPosts[headerClick].text}</p>
        <br />
        {blogPosts[headerClick].fullTxt.map((para) => (
          <>
            <p key={Math.random() * 999} className="postParas">
              {para}
            </p>
            <br />
          </>
        ))}
        <a href="#top" id="goBack" onClick={mainPg}>
          go back to main page
        </a>
      </article>
       :
      <article>
        {blogPosts.map((post, index) => (
          <Post key={index} index={index} post={post} openHeader={openHeader} />
        ))}
      </article>
       }
    </>
  );
}

// const bodyPosts = () => {
//   if (headerClick >= 0) {
//     <article className="postArticle">
//       <h1>{blogPosts[headerClick].title}</h1>
//       <br />
//       <h4>By: {blogPosts[headerClick].author}</h4>
//       <img src={blogPosts[headerClick].image} alt="post" />
//       <br />
//       <p className="postParas">{blogPosts[headerClick].text}</p>
//       <br />
//       {blogPosts[headerClick].fullTxt.map((para) => (
//         <>
//           <p key={Math.random() * 999} className="postParas">
//             {para}
//           </p>
//           <br />
//         </>
//       ))}
//       <a href="#top" id="goBack" onClick={mainPg}>
//         go back to main page
//       </a>
//     </article>;
//   } else if (headerClick == '') {
//     <article>
//       {blogPosts.map((post, index) => (
//         <Post key={index} index={index} post={post} openHeader={openHeader} />
//       ))}
//     </article>;
//   }
// };
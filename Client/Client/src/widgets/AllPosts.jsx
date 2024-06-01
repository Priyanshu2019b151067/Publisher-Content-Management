import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post';

function AllPosts() {
  const posts =  useSelector((state) => state.posts);
  console.log(posts);
 const renderedPost = posts.map((post)=>(
    <div className='col-3 m-3' key={post._id}>
        <Post post = {post}/>
    </div>
 ))
 //console.log();
  return (
    <div className='container'>
        <div className='row'>
            {renderedPost}
        </div>
    </div>
  )
}

export default AllPosts
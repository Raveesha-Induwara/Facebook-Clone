import React from 'react'
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'
import './postPane.css'

export default function PostPane() {
  return (
    <div className='postPaneBox'>
      <div className="postPaneContainer">
        <AddPost/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

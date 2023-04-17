import React from 'react'
import Navbar from '../../Components/Navigation/Navbar'
import LeftPane from '../../Components/LeftPane/LeftPane'
import PostPane from '../../Components/PostPane/PostPane'
import RightPane from '../../Components/RightPane/RightPane'
import './home.css'

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='bottomContainer'>
        <LeftPane/>
        <PostPane/>
        <RightPane/>
      </div>
    </>
  )
}

import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import './post.css'

export default function Post() {
  return (
    <div className='Post'>
      <div className="postContainer">
        <div className="postTop">
            <img className='profileImage' src="./Images/profile.jpg" alt="profile image"/>
            <div className="postDetails">
              <div className='postUserName'>Raveesha Induwara Abeysinghe</div>
              <div className="postTask">update his cover photo</div>
              <div className='postTime'>10 minuits ago . <PublicIcon className='publicIcon'/></div>
            </div>
            <div className="dottedLine"><MoreHorizIcon/></div>
            <div className="crossIcon"><CloseIcon/></div> 
        </div>

        <div className="postCenter">
            <div className="postCaption">Smile is pane. </div>
            <img className='postImage' src="./Images/profile.jpg" alt="post image"/>
        </div>

        <div className="postBottom">
          <div className="reactDetails">
            <div className="postBottomLeft">
              <ThumbUpAltIcon className='LikeReact'/>
              <FavoriteIcon className='HeartReact'/>
              <div className='likeCount'>You and 225 others</div>
            </div>
            <div className="postBottomRight">
              <span className="commentCount">95 comment . 1 share</span>
            </div>
          </div>

          <hr/>

          <div className="commentSection">
            <div className='react'>
              <FavoriteIcon className='reactIcon'/> 
              <div>Love</div>
            </div>
            <div className='comment'>
              <ChatBubbleOutlineIcon className='commentIcon'/>
              <div>Comment</div>
            </div>
            <div className='share'>
              <ReplyIcon className='shareIcon'/>
              <div>Share</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

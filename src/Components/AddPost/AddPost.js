import React from 'react'
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import FlagIcon from '@mui/icons-material/Flag';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SettingsIcon from '@mui/icons-material/Settings';
import TuneIcon from '@mui/icons-material/Tune';
import StyleIcon from '@mui/icons-material/Style';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './addPost.css'

export default function AddPost() {
  return (
    <>
        <div className='addPost'>
            <div className="addPostContainer">
                <div className='post'>
                    <h3>Posts</h3>
                    <div className='topIcons'>
                        <div className='Icon'><TuneIcon/></div>
                        <div className='Icon'><SettingsIcon/></div>
                    </div>
                </div>
                
                <div className="addPostTop">
                    <img src="./Images/profile.jpg" alt="image" />
                    <input type="text" placeholder="What's on your mind, Rishi?" className='addPostInput'/>
                </div>
                <hr className='postHr'/>

                <div className="addPostBottom">
                    <div className="addPostOptions">
                        <div className="addPostOption">
                            <div className='addPostIcon videoIcon'><VideoCameraFrontIcon/></div>
                            <span className="addPostOptionText">Live video</span>
                        </div>
                        <div className="addPostOption">
                            <div className='addPostIcon photoIcon'><PhotoAlbumIcon/></div>
                            <span className="addPostOptionText">Photo/video</span>
                        </div>
                        <div className="addPostOption">
                            <div className='addPostIcon eventIcon'><InsertEmoticonIcon/></div>
                            <span className="addPostOptionText">Feeling/activity</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="postButtons">
            <div className="postButton">
                <div className='PostIcon'><StyleIcon/></div> 
                <button type='button'>Photos</button>
            </div>
            <div className="postButton">
                <div className='PostIcon'><EmojiEmotionsIcon/></div>
                <button type='button'>Avatars</button>
            </div>
        </div>
    </>
  )
}

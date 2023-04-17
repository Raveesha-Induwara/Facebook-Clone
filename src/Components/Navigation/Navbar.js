import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MessageIcon from '@mui/icons-material/Message';
import AppsIcon from '@mui/icons-material/Apps';
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navBarBox'>
        <div className='navBarLeft'>
            <span className='logo'>facebook</span>
        </div>

        <div className='navBarCenter'>
            <div className='searchBar'>
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search Facebook'/>
            </div>
        </div>

        <div className='navBarRight'>
            <dvi className='navBarLinks'>
                <div className='navBarLink'>HomePage</div>
                <div className='navBarLink'>Profile</div>
            </dvi>

            <div className='navBarIcons'>
                <div className='navBarIcon'>
                    <AppsIcon/>
                    <span className='IconTag'>5</span>
                </div>
                <div className='navBarIcon'>
                    <MessageIcon/>
                    <span className='IconTag'>3</span>
                </div>
                <div className='navBarIcon'>
                    <CircleNotificationsIcon/>
                    <span className='IconTag'>2</span>
                </div>
            </div>

            <div className='profilePic'>
                <img src='./Images/profile.jpg'alt='profile picture'/>
            </div>
        </div>
    </div>
  )
}

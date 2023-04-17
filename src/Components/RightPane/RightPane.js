import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import './rightPane.css'

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">

        <div className='requestSection'>
          <div className="heading"> Friend requests <span className='seeAll'>See All</span> </div>
          <div className="requestProfile"> 
            <img src="./Images/Malinda Suresh.jpg" alt="profile picture" className='profilePic'/>
            <div className="requesDetails">
              <div>
                <span className="profileName">Malinda Suresh</span>
                <span className='requestTime'>2d</span>
              </div>
              <div className="friendCount"> 
                <img src="./Images/Jiyath Amasara.jpg" alt=""/> 
                <div>116 mutual friend</div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className='btn_confirm'>Confirm</button>
            <button className='btn_delete'>Delete</button>
          </div>
        </div>

        <hr />

        <div className="birthdayContainer">
          <div className='heading'>Birthdays</div>
          <div className='birthdayDetails'>
            <img className="birthdayIcon" src="./Images/gift1.png" alt="birthday gift" />
            <p><b className='specialText'>Rishi Kumar</b>'s' and <b className='specialText'>two others</b> birthday is today.</p>
          </div>
        </div>

        <hr />

        <div className="contactSection">
          <div className="headingContainer">
            <div className="heading contact">Contact</div>
            <div className='Icon'><VideoCameraFrontIcon/></div>
            <div className='Icon'><SearchIcon /></div>
            <div className='Icon'><MoreHorizIcon /></div>
          </div>

          <div className="contactProfiles">
              <li className='contactProfile'>
                <div>
                  <img src="./Images/Kavishka Nirmal.jpg" alt="profile picture" className='profilePic'/>
                  <span className="onlineStatus"></span>
                </div>
                <div className="profileName">Kavishka Nirmal</div>
              </li>
              <li className='contactProfile'>
                <div>
                  <img src="./Images/Nethupama Shavinda.jpg" alt="profile picture" className='profilePic'/>
                  <span className="onlineStatus"></span>
                </div>
                <div className="profileName">Nethupama Shavinda</div>
              </li>
              <li className='contactProfile'>
                <div>
                  <img src="./Images/Dasun Theekshana.jpg" alt="profile picture" className='profilePic'/>
                  <span className="onlineStatus"></span>
                </div>
                <div className="profileName">Dasun Theekshana</div>
              </li>
              <li className='contactProfile'>
                <div>
                  <img src="./Images/Jiyath Amasara.jpg" alt="profile picture" className='profilePic'/>
                  <span className="onlineStatus"></span>
                </div>
                <div className="profileName">Jiyath Amasara</div>
              </li>
              <li className='contactProfile'>
                <div>
                  <img src="./Images/Pramuditha Sandeepa.jpg" alt="profile picture" className='profilePic'/>
                  <span className="onlineStatus"></span>
                </div>
                <div className="profileName">Pramuditha Sandeepa</div>
              </li>
          </div>
        </div>

      </div>
    </div>
  )
}

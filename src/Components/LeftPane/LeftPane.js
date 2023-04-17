import React from 'react'
import './leftPane.css'
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FlagIcon from '@mui/icons-material/Flag';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HistoryIcon from '@mui/icons-material/History';
import GradeIcon from '@mui/icons-material/Grade';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
        <div className='leftPaneContainer'>
            <div className='leftPaneMenu'>
                <li className='leftPaneMenuItems'>
                    <img className='profileImg' src="./Images/profile.jpg" alt="profile picture" />
                    <span className='leftPaneMenuText'><b>Raveesha Induwara Abeysinghe</b></span>
                </li>
                <li className='leftPaneMenuItems'>
                    <GroupIcon className='leftPaneMenuIcon group'/>
                    <span className='leftPaneMenuText'>Friends</span>
                </li>
                <li className='leftPaneMenuItems'>
                    <FlagIcon className='leftPaneMenuIcon flag'/>
                    <span className='leftPaneMenuText'>Pages</span>
                </li>
                <li className='leftPaneMenuItems'>
                    <BookmarkIcon className='leftPaneMenuIcon bookmark'/>
                    <span className='leftPaneMenuText'>Saved</span>
                </li>
                <li className='leftPaneMenuItems'>
                    <PendingActionsIcon className='leftPaneMenuIcon recent'/>
                    <span className='leftPaneMenuText'>Most recent</span>
                </li>
                <li className='leftPaneMenuItems'>
                    <GroupsIcon className='leftPaneMenuIcon groups'/>
                    <span className='leftPaneMenuText'>Groups</span>
                </li>
                <li className='leftPaneMenuItems'>
                    <StorefrontIcon className='leftPaneMenuIcon marketPlace'/>
                    <span className='leftPaneMenuText'>Marketplace</span>
                </li>
                <li className='leftPaneMenuItems'>
                    <OndemandVideoIcon className='leftPaneMenuIcon video'/>
                    <span className='leftPaneMenuText'>Watch</span>
                </li>
                <li className='leftPaneMenuItems'>
                    <HistoryIcon className='leftPaneMenuIcon history'/>
                    <span className='leftPaneMenuText'>Memories</span>
                </li>
                <li className='leftPaneMenuItems'>
                    <EventNoteIcon className='leftPaneMenuIcon event'/>
                    <span className='leftPaneMenuText'>Events</span>
                </li>
                <li className='leftPaneMenuItems'>
                    <GradeIcon className='leftPaneMenuIcon star'/>
                    <span className='leftPaneMenuText'>Favourites</span>
                </li>
            </div> 
            <hr/>
            <div className="pagesHeading">
                <h4>All the Pages You LIke or Folow</h4>
            </div>
            <div className="pageList">
                <li className="pageListItem">
                    <img src="./Images/university logo.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>University of Moratuwa, Katubedda</span>
                    <span className='dotIcon'><MoreVertIcon/></span> 
                </li>
                <li className="pageListItem">
                    <img src="./Images/msu.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>MSU - Moratuwa Students' union</span>
                    <span className='dotIcon'><MoreVertIcon/></span> 
                </li>
                <li className="pageListItem">
                    <img src="./Images/mora lenze.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>Mora Lenz</span>
                    <span className='dotIcon'><MoreVertIcon/></span> 
                </li>
                <li className="pageListItem">
                    <img src="./Images/mora spirit.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>MoraSpirit 360</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/it union.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>IT Faculty Students' Union-University of Moratuwa</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/fit future careers.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>FIT Future Careers</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/intecs.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>INTECS</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/fit sixes.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>FIT SIXES Cricket Fiesta</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/fit moments.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>FIT Moments</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/dreams solutions.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>Dreams Solutions - Education Support Center</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/gdc.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>GDC Cloud Sri Lanka</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/code gen.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>Life at CodeGen</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/cambio.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>Cambio Software Engineering</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/block-stars.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>Block-Stars</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/slt mobitel.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>SLTMobitel</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/tck.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>TCK Solution</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/code rush.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>FIT CodeRush</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/unity plaza.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>Unitu Plaza</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/msi.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>MSI Gaming</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/nanotec.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>Nanotek Computer Solutions</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/hackdoze.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>HackDoze</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
                <li className="pageListItem">
                    <img src="./Images/data strom.jpg" alt="" className='pagePic'/>
                    <span className='pageName'>Data Storm</span>
                    <span className='dotIcon'><MoreVertIcon/></span>
                </li>
            </div>
        </div>
    </div>
  )
}

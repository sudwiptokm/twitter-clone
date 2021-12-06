import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcon"/>

            <SidebarOptions active text='Home' Icon={HomeIcon}/>
            <SidebarOptions text='Explore' Icon={SearchIcon}/>
            <SidebarOptions text='Notifications' Icon={NotificationsIcon}/>
            <SidebarOptions text='Messages' Icon={MailOutlineIcon}/>
            <SidebarOptions text='Bookmarks' Icon={BookmarkIcon}/>
            <SidebarOptions text='Lists' Icon={ListIcon}/>
            <SidebarOptions text='Profile' Icon={PersonIcon}/>
            <SidebarOptions text='More' Icon={MoreHorizIcon}/>
            
            <Button variant = "outlined" className = "sidebar_tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default sidebar

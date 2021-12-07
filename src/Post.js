import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

function Post({avatar, displayName, username, verified, message, image}) {
    return (
        <div className='post'>
            <div className="post_avatar">
                <Avatar alt="User_Pic" src={avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="text">
                        <h3>{displayName} <span><VerifiedUserIcon className='post_badge' /></span> <span className='post_username'>{username}</span></h3>
                    </div>
                    <div className="description">
                        <p>{message}</p>
                    </div>
                </div>
                <img src={image} alt="post_gif" />
                <div className="post_footer">
                    <ChatBubbleOutlineIcon />
                    <RepeatIcon />
                    <FavoriteBorderIcon />
                    <IosShareIcon />
                </div>
            </div>
        </div>
    )
}

export default Post

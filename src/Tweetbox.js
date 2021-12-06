import { Button, Avatar } from '@mui/material';
import React from 'react';
import './Tweetbox.css';

function Tweetbox() {
    return (
        <div className='tweetbox'>
            <form>
                <div className="tweetbox_input">
                    <Avatar alt="User_Pic" src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDI5MTc5NzI1NDg5Nzk4/top-10-greatest-leonardo-dicaprio-movies.jpg"/>
                    <input type="text" placeholder="What is Happening?"/>
                </div>
                <input type="text" placeholder="Optional: Enter Image URL" className="tweetbox_inputImage"/>
                <Button variant = "outlined" className="tweetbox_tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox

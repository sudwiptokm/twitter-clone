import { Button, Avatar } from '@mui/material';
import React, { useState } from 'react';
import db from './firebase';
import './Tweetbox.css';

function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    var [addid=0, setAddid] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection("posts").add({
            avatar:
            "https://media.vanityfair.com/photos/551f1c62fa699a350cfdebbf/master/pass/leonardo-dicaprio-resort.jpg",
            displayName:
            "Leonardo DiCaprio",
            image:
            tweetImage,
            message:
            tweetMessage,
            username:
            "ldcaprio",
            verified:
            true,
            id: addid,
        })

        setAddid(addid=parseInt(addid)-1)
        setTweetImage("");
        setTweetMessage("");
    }

    return (
        <div className='tweetbox'>
            <form>
                <div className="tweetbox_input">
                    <Avatar alt="User_Pic" src="https://media.vanityfair.com/photos/551f1c62fa699a350cfdebbf/master/pass/leonardo-dicaprio-resort.jpg"/>
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                type="text" placeholder="Optional: Enter Image URL" className="tweetbox_inputImage"/>
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox_tweetButton"
                    >
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default Tweetbox

import React from 'react';
import './Feed.css';
import Tweetbox from './Tweetbox';

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            {/* Tweet Box */}
            <Tweetbox />

            {/* Tweets */}



        </div>
    )
}

export default Feed

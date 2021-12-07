import React from 'react';
import './Feed.css';
import Post from './Post';
import Tweetbox from './Tweetbox';

function Feed() {
    return (
        <div className="feed">

            <div className="feed_header">
                <h2>Home</h2>
            </div>

            <Tweetbox />

            <Post 
                displayName="Leaonardo DiCaprio"
                username="ldcaprio"
                verified={true}
                message="I am the fucking BOSSS"
                image="https://static.onecms.io/wp-content/uploads/sites/6/2020/07/23/Dicaprio.jpg"
                avatar="https://media.vanityfair.com/photos/551f1c62fa699a350cfdebbf/master/pass/leonardo-dicaprio-resort.jpg"
            />


        </div>
    )
}

export default Feed

import React, {useState, useEffect} from 'react';
import db from './firebase';
import './Feed.css';
import Post from './Post';
import Tweetbox from './Tweetbox';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        db.collection("posts").orderBy("id").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    },[])
    return (
        <div className="feed">

            <div className="feed_header">
                <h2>Home</h2>
            </div>

            <Tweetbox />

            <FlipMove>
                {posts.map((post) => (
                    <Post
                        id= {post.id}
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        message={post.message}
                        avatar={post.avatar}
                        image={post.image}                    />
                ))}
            </FlipMove>


        </div>
    )
}

export default Feed

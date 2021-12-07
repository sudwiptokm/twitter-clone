import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widget_searchIcon"/>
                <input type="text" placeholder='Search Twitter'/>
            </div>
            <div className="widgets_widgetContainer">
                <h2>What is happening...</h2>
                <TwitterTweetEmbed tweetId={"1468269047133396992"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="ValorantEsports"
                    options={{height: 780}}
                    className="widget_twitter_timeline"
                />
                <TwitterShareButton
                    url={'https://facebook.com/sudwipt0'}
                    options={{ text: 'Lets become friends', via: 'Poseidon_R6' }}
                />
            </div>
        </div>
    )
}

export default Widgets

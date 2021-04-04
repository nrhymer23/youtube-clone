import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
                </div>
        <hr></hr>

        <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwnjo5Cgnv1-A342q82xN0hfUbG__vNEiCI3TgN4QAg=s176-c-k-c0x00ffffff-no-rj"
        channel="Joe Budden Tv"
        verified
        subs="910K"
        noOfVideos={382}
        description="Blah Blah Blah"
        />
            <hr />

        <VideoRow
        views=""
        subs=""
        description=""
        timestamp=""
        channel=""
        title=""
        image=""
         />

        </div>
    )
}

export default SearchPage

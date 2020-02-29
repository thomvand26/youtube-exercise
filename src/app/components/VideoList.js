import React, { useState, useContext } from 'react';
import { SearchContext } from '../context/';

import VideoListItem from './VideoListItem';

import './VideoList.css';

// import { Link } from "react-router-dom";

const VideoList = () => {
    const { videos, setVideo } = useContext(SearchContext);

    const handleVideoClicked = (videoID) => {
        setVideo(videoID);
    }

    return (
        <div className="videoList">
            <ul>
                {
                    videos.map((video) => {
                        // console.log(video);
                        return (
                            <VideoListItem key={video.id.videoId} videoImg={video.snippet.thumbnails.medium.url} videoTitle={video.snippet.title} videoDescription={video.snippet.description} videoClicked={() => handleVideoClicked(video.id.videoId)} />
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default VideoList;
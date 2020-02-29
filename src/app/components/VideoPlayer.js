import React, { useState, useContext } from 'react';
import { SearchContext } from '../context';

import './VideoPlayer.css';

const VideoPlayer = () => {
    const { video } = useContext(SearchContext);
    const url = `https://www.youtube.com/embed/${video}`;
    return (
        <div className="videoPlayer">
            <iframe width="80%" height="400px" src={url}></iframe>
        </div>
    );
};

export default VideoPlayer;
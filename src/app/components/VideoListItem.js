import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { SearchContext } from '../context/';

const VideoListItem = ({videoImg, videoTitle, videoDescription, videoClicked}) => {
    return (
        <Link to="/detail">
            <li className="videoList__item" onClick={ev => videoClicked()}>
                <div className="videoList__left">
                    <img className="videoList__itemThumbnail" src={videoImg} />
                </div>
                <div className="videoList__right">
                    <h3 className="videoList__itemTitle">{videoTitle}</h3>
                    <p className="videoList__itemDescription">{videoDescription}</p>
                </div>
            </li>
        </Link>
    );
};

export default VideoListItem;
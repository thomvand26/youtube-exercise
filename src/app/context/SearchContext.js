import React, { createContext, useEffect, useState } from 'react';
// import uuid from 'uuid/v1';
import { youtubeDataApi } from '../config';
// import { LoadingGraphic } from '../components/LoadingGraphic';

const SearchContext = createContext();

// const mockData = [
//     { id: uuid(), title: 'Mijn kindjes wassen', completed: false, createdAt: Date.now() },
//     { id: uuid(), title: 'Vegan food halen uit den Albert', completed: true, createdAt: Date.now() },
//     { id: uuid(), title: 'Nieuw Macbook Pro 18inch afhalen at coolblue', completed: false, createdAt: Date.now() }
// ];

const SearchContextProvider = ({children}) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ videos, setVideos ] = useState([]);
    const [ video, setVideo ] = useState('KMU0tzLwhbE');

    const loadVideos = (videoArray) => {
        setVideos(videoArray);
    }

    const search = async (query) => {
        setIsLoading(true);

        const url =
        `${youtubeDataApi.searchUrl}?part=snippet&key=${youtubeDataApi.apiKey}&q=${query}&type=video`;

        const response = await fetch(url);
        const data = await response.json();
        loadVideos(data.items);
        
        setIsLoading(false);
    }

    return (
        <SearchContext.Provider value={{video, setVideo, isLoading, videos, search}}>
            {children}
        </SearchContext.Provider>
    )
};

export {
    SearchContext,
    SearchContextProvider,
}
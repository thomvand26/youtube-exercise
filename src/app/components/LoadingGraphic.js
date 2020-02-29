import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context';

import './LoadingGraphic.css';

const LoadingGraphic = () => {
    const [hide, setHide] = useState(true);
    const { isLoading } = useContext(SearchContext);

    useEffect(() => {
        setHide(!isLoading);
    }, [isLoading]);

    return (
        <div className={`loading${hide ? ' loading--hide' : ''}`} />
    );
};

export default LoadingGraphic;
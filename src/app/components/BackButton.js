import React from 'react';
import { Link } from 'react-router-dom';

import './BackButton.css';

const BackButton = ({route}) => {
    return (
        <Link to={route} className="backButton">Back</Link>
    );
};

export default BackButton;
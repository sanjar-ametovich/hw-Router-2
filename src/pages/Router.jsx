import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Router.scss';
import { useState } from 'react';

const Router = () => {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState('Home');

    const locationPath = (value) => {
        setCurrentLocation(value);
    };

    return (
        <div>
            <div className="location">
                <Link onClick={()=>locationPath('Home')} to="/">home</Link>
                <Link onClick={()=>locationPath('Users')} to={'/users'}>
                    {location.pathname}
                </Link>
            </div>
            <div className="router">
                <nav className="router-block">
                    <ul className="router-item">
                        <li>
                            <Link to="/" onClick={() => locationPath('Home')}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/users" onClick={() => locationPath('Users')}>
                                Users
                            </Link>
                            <ul className="router-list">
                                <li>
                                    <Link to="/users/vasya" onClick={() => locationPath('Vasia')}>
                                        Vasya
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/users/peter" onClick={() => locationPath('Peter')}>
                                        Peter
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {currentLocation}
            </div>
        </div>
    );
};

export default Router;

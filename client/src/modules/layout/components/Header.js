import React from 'react';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../../../constants';
import { Navigate } from 'react-router-dom';
const Header = () => {
    const authToken = window.localStorage.getItem(AUTH_TOKEN);
    return (
        <div className="flex pa1 justify-between nowrap orange">
            <div className="flex flex-fixed black">
                <Link to="/" className="no-underline black">
                    <div className="fw7 mr1">T O D O</div>
                </Link>
                <Link to="/" className="ml1 no-underline black">
                    new
                </Link>
                <div className="ml1">|</div>
            </div>
            <div className="flex flex-fixed">
                {authToken ? (
                    <div
                        className="ml1 pointer black"
                        onClick={() => {
                            window.localStorage.removeItem(AUTH_TOKEN);
                            // doesnt work
                            // return <Navigate to='/' />;
                            window.location.href = '/login';
                        }}
                    >
                        logout
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="ml1 no-underline black"
                    >
                        login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
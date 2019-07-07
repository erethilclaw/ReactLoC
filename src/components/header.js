import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    Lair of Claw
                </Link>
                <span className="navbar-text">
                    <Link to="/login">Sign in</Link>
                </span>
            </nav>
        )
    };
}


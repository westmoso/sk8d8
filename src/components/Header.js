import React from 'react'
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import '../styling/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/home">
                <IconButton>
                    <HomeIcon fontSize="large" />
                </IconButton>
            </Link>
            <Link to="/resources">
                <IconButton>
                    <NotListedLocationIcon fontSize="large" />
                </IconButton>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" />
                </IconButton>
            </Link>
            <Link to="/account">
                <IconButton>
                    <ExitToAppIcon fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header

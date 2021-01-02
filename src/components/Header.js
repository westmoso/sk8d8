import React, { useState } from 'react'
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import '../styling/Header.css';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    console.log('menuOpen is:', menuOpen);
    const handleStateChange = (state) => {
        console.log('reached handleStateChange in header');
        setMenuOpen(state.isOpen);
    }
    const closeMenu = () => {
        console.log('reached closeMenu');
        setMenuOpen(false);
    }

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
            <Link to="/profile">
                <IconButton>
                    <AccountCircleIcon fontSize="large" />
                </IconButton>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" />
                </IconButton>
            </Link>
            <Link to="/login">
                <IconButton>
                    <ExitToAppIcon fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header

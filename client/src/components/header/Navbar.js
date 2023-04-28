import React from 'react'
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="left">
                    <div className='navlogo'>
                        <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSVpH6YvARnSN8XxRneThFbgaND-ShtrCBjsCEwDaPKrpkSzA-c' alt='logo' />
                    </div>
                    <div className="nav_searchbar">
                        <input type="text" name='' id='' />
                        <div className='search_icon'>
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className="right">

                </div>
            </nav>
        </header>
    )
}

export default Navbar

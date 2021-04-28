import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="nav-row">
            <Link to="/">
                <div className="round-box back-arrow">
                    <img src="assets/images/icons/arrow-back.png" />
                </div>
                
            </Link>

            <Link to="/">
                <div className="round-box close-icon">
                    <img src="assets/images/icons/close-icon.png" />
                </div>
                
            </Link>

        </div>


    )
}

export default Navbar;

import React from 'react';

import '../../styles/components/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="images/logo.png" width="100" alt="Transportes X" />
                <h1>Transportes X 2021</h1>
            </div>
        </header>
    )
}


export default Header;
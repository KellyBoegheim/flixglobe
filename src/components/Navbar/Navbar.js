import React, {useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { Button} from "../Button/Button";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>FLIXGLOBE</Link>
                    <div className="menu-icon" onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/previouscontent' className='nav-links' onClick={closeMobileMenu}>
                            Mis niets
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/nextcontent' className='nav-links' onClick={closeMobileMenu}>
                            Wordt verwacht
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                            Mijn Flixglobe
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signin' className='nav-links' onClick={closeMobileMenu}>
                            Log in
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Registreer
                        </Link>
                    </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>REGISTREER</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar



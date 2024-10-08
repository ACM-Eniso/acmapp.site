import './NavBar.css';
import logo from '../../assets/logo.svg'
import menu_icon from '../../assets/menu-icon.png'
import {useEffect, useState} from "react";
import {Link} from 'react-scroll';


const NavBar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false);
    const  toggleMenu = () => {
            mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className="logo"/>
            <ul className={mobileMenu?'':'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='competition' smooth={true} offset={-260} duration={500}>Competition</Link></li>
                <li><Link to='about' smooth={true} offset={-275} duration={500}>About Us</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link></li>
            </ul>
            <img src={menu_icon} className="menu-icon" onClick={toggleMenu}/>
        </nav>
    );
};

export default NavBar;

import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

// Copied and re:edited
export const Navbar = ({setWithMenu, withMenu}) => {

    const [withScroll, setWithScroll] = useState(false);
    
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if(window.scrollY > 0 || withMenu === true ) {
                    return setWithScroll(true);
            }
            return  setWithScroll(false);
        })
        if (withMenu === true){
            setWithScroll(true);
       }
    }, [withMenu]);

    const handleClick = () => {
        setWithMenu(false);
    }
    return(
        <div className={`wrapper-navbar ${withScroll ? 'with-scroll' : ''} ${withMenu ? 'with-menu' : null}`}>
            <div className='container-navbar'>
                <Link to='aboutMe' smooth={true} offset={withMenu ? -350 : -150}>
                    <div className='nav-item'>
                        <img 
                            alt='menu-icon'
                            className='icon-nav'
                            src={`${withScroll ? cvLogo : ".png"}`}

                        />
                        <span onClick={handleClick} className={`${withScroll ? 'title-scroll' : null } title-item`}>
                            About Me
                        </span>
                    </div>
                </Link>
              
             
            </div>
        </div>
    )
}
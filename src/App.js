import React, { useState } from 'react';
// there's a problem withitn the react-router-dom 
import { Navbar } from './components/navBar/navbar'
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'


function App() {
  const [withMenu, setWithMenu] = useState(false);
  return (
 <Router>
        <div className='body-container' >
            <Navbar 
                withMenu={withMenu}
                setWithMenu={setWithMenu}
            />
            <div className='container-all-pages' onClick={() => withMenu === true ? setWithMenu(false) : null} >
                <div className='wrapper-menu-mobile' onClick={() => setWithMenu(true)}>
                    <img alt='menu'  src={MenuLogo}/>
                </div>
                
                <div className='title-page' >
                    <motion.h1 initial={true} animate={{ x: 300}} className='name'>
                         THIS IS THA9FNI .
                    </motion.h1>
                    
         </div></div></div></Router>
  );
}
export default App;
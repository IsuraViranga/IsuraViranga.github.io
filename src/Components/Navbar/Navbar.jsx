import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menue from '../../assets/menu.svg';
import close from '../../assets/close.svg';


 
const Navbar = () => {

  const[menu,setMenu]=useState("Home");
  const menuRef =useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }


  const handleClick=(value)=>{
     setMenu(value);
  }

  const navNames = {
    Home:'home change',
    About_Me:'about',
    Services:'services',
    Portfolio:'Laatest Works',
    Contact:'contact'
  }

  const columnNames = ['Home', 'About_Me', 'Services', 'Portfolio', 'Contact'];
  const storeMap = columnNames.map((x,index) => {
    return <li key={index}><AnchorLink className='anchor-link' offset={50} href={`#${navNames[x]}`}><p onClick={()=>handleClick(x)}>{x}</p></AnchorLink>{menu===x ? <hr id='underline'/> :<></>}</li>;
  });

  return (
    <div className='navbar'>
      <img src={menue} onClick={openMenu} alt='' className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={close} onClick={closeMenu} alt='close' className='nav-mob-close'/>
        {storeMap}
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>   
  );
};

export default Navbar;

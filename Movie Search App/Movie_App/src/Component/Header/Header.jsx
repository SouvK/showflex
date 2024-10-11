import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import styles from "./Header.module.css"
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import logo from "../../assets/Images/LogoForHeader.jpg"


function Header() {
    let [darkMode, setdarkMode] = useState(localStorage.getItem("darkMode") || true);
    const activeClass = `nav-link ${styles['navBarText']} active border-bottom border-danger border-4`;
    const nonaActiveClass = `nav-link ${styles['navBarText']}`;

    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.setItem('darkMode',JSON.stringify(darkMode));
        if(darkMode){
            document.documentElement.setAttribute('data-bs-theme','dark');
        }
        else{
            document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' :'white');
        }
    },[darkMode]);

    let hndleSubmit = (e)=>{
        e.preventDefault();
        let searchTerm = e.target.search.value;
        navigate(`/search?q=${searchTerm}`);
    }
    
    return (
        <header>
            <nav className="shadow navbar navbar-expand-sm pt-3 pb-3 my-3">
                <Link to="/" className="navbar-brand ms-2" href="#" ><img src={logo} className={`${styles['logoImg']}`}></img></Link>
                <div className='container-fluid justify-content-center'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className={(e) => (e.isActive ? activeClass : nonaActiveClass)} >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/popular" className={(e) => (e.isActive ? activeClass : nonaActiveClass)} >Popular</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/top-rated" className={(e) => (e.isActive ? activeClass : nonaActiveClass)} >Top Rated</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/upcoming" className={(e) => (e.isActive ? activeClass : nonaActiveClass)}>UpComing</NavLink>
                        </li>
                    </ul>
                </div>
                <button onClick={()=>setdarkMode((prev)=>!prev)} className={`me-2 ${styles['modeButton']}`}> {darkMode ? <MdOutlineLightMode size={23} /> : <MdOutlineDarkMode size={25} />} </button>
                <form onSubmit={hndleSubmit}>
                <div className={`d-flex align-content-center ${styles['srchBorder']} me-2`}>
                    <IoSearchOutline size={32} className='pt-2' /><input className={`${styles['searchBorderRemove']} align-content-center p-2 me-2`} type="search" placeholder="Search" name="search" />
                </div>
                </form>
            </nav>
        </header>
    )
}


export default Header
import Link from 'next/link';
import styles from './Navbar.module.css';
import { MdOutlineLightMode } from 'react-icons/md';
import {BiSolidMoon,BiHomeHeart} from 'react-icons/bi';
import { useState,useContext } from 'react';
import {ThemeContext} from '@/pages/themeContext'


const themes = {
    light:{
        primaryColor:'#000',
        secondaryColor:'#e2e8ee',
    },
    dark:{
        primaryColor:'#fff',
        secondaryColor:'#000',
    }
};

const Navbar = () => {
    const {theme, toggle} = useContext(ThemeContext);

    return (
        <nav className={styles.navbar} 
        style={{
            backgroundColor:themes[theme].secondaryColor,
            color:themes[theme].primaryColor,
        }} >
            <ul className={styles.ul}>
                <li className={styles.list}>
                    <Link href="/">
                        <div>
                        News-Feed <BiHomeHeart />
                        </div>
                    </Link>
                </li>
            </ul>
            <ul className={styles.ul}>
                <li className={styles.list}>
                    <button onClick={toggle}>
                    {theme === 'light' ?(<BiSolidMoon className={styles.icon} />):
                    (<MdOutlineLightMode className={styles.icon} />)}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
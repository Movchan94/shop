import React from 'react'
import styles from './Header.module.css'
import Menu from "./MenuContainer";
import FilterContainer from "../Common/Filter/FilterContainer";

const  Header =()=> {
    return (
        <div className = {styles.appHeader}>
            <Menu/>
            <div className = {styles.filter}><FilterContainer/></div>
        </div>
        )}




export default Header
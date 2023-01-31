import React from 'react'
import styles from '../../styles/NavSuggestion.module.css'
import {FaUserAlt,FaSearch} from 'react-icons/fa'
import {RiEBikeFill} from 'react-icons/ri'


const NavSuggestion = () => {
  return (
    <div className ={styles.navContainer}>
<div className={styles.superContainer}>
<div className={styles.logoContainer}>
<RiEBikeFill color="white" size={50}/>
<div>
    <div>EAS<span className={styles.y}>Y</span></div>
    <div>RENT</div>
</div>
</div>

        <div className={styles.navInputContainer}>
            <input type="text" placeholder="search for location" className={styles.navInput} />
            <div className={styles.btn}>
            <FaSearch size={20} color={"#9B59B6"}/>
            </div>
        </div>
       <div className={styles.userLogoContainer}>
        <FaUserAlt />
       </div>
       
        </div>


    </div>
  )
}

export default NavSuggestion
import { navData } from "../util/navData";
import styles from '../components/sidenav.module.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
import React, { useState } from 'react';


export default function Sidenav() {
  const [open, setopen] = useState(false);
  const toggleOpen = () => {
    setopen(!open);
  }
  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
      </button>
      {navData.map(item =>{
        return (
          <Link key={item.id} href={item.link} className={styles.sideitem}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
          </Link>
        )
      })}
    </div>
  );
}

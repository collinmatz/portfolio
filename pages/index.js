import { useState, useEffect } from 'react'
import Body from './body.js'
import styles from '../styles/Home.module.css'
import github from '../public/github.png'
import linkedin from '../public/linkedIn.png'
import email from '../public/email2.png'

export default function Home() {

  useEffect(() => {
    document.title = "Collin Matz";
  }, []);

  return (
    <div className={styles.container} id="background">
      <div className={styles.header}>
        <h1>Collin Matz</h1>
        <div className={styles.contact}>
          <a href="https://github.com/collinmatz"><img className={styles.logo} src={github.src} alt="github"/></a>
          <a href="https://www.linkedin.com/in/collinmatz/"><img className={styles.logo} src={linkedin.src}></img></a>
          <a href="mailto:collin.matz.a@gmail.com"><img className={styles.logo} src={email.src}></img></a>
        </div>
      </div>
      <Body/>
    </div>
  );
}

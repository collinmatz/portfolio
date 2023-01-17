import { useState} from 'react'
import styles from "../styles/index.module.css"
import { Card } from './contentCard.js';

/*
    custom component for navbar layout
*/
export const NavbarItem = (props) => {
    const [clicked, setClicked] = useState(props.startClicked);

    const handleClick = () => {
        setClicked(!clicked);
    };

    if (clicked) {
        return (
            <div className={styles.navbarItemCardArea}>
                <div className={styles.navbarItem}>
                    <h1 className={styles.clicked} onClick={handleClick}>{props.text}</h1>
                </div>
                <div className={styles.cardDiv}>
                    <Card content={props.content} className={styles.cardClicked}/>
                </div>
            </div>
        );
    }
    else {
        return (
        <div className={styles.navbarItemCardArea}>
            <div className={styles.navbarItem}>
                <h1 className={styles.unclicked} onClick={handleClick}>{props.text}</h1>
            </div>
        </div>
        );
    }
};
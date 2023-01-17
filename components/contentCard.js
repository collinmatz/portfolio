import { useState, useRef, useEffect } from 'react'
import styles from "../styles/index.module.css"

export const Card = (props) => {
    const [visible, setVisible] = useState(true);
    
    if (visible) {
        return (
            <div>
                <h2>{props.content}</h2>
            </div>
        );
    }
    else {
        return (null);
    }
}
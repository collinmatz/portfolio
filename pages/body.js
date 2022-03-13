import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Body() {

    const [activeAbout, setActiveAbout] = useState(true);
    const [activeBlog, setActiveBlog] = useState(true);
    const [activeLinks, setActiveLinks] = useState(true);
    const [activeProjects, setActiveProjects] = useState(true);
    const [id, setId] = useState("about");
    const divMaxHeight = "6em";
    useEffect(() => {
        const contents = document.getElementById("bodyContent").getElementsByTagName('div');
        console.log(contents);
        for (var i = 0; i < contents.length; i++) {
            setTimeout(() => {
                const elem = document.getElementById(contents[i].id);
                elem.style.height = divMaxHeight;
                elem.style.opacity = 1;
                elem.style.pointerEvents = "all";
            }, (i*350));
        }
    }, []);

    useEffect(() => {
        if (activeAbout) {
            const elem = document.getElementById(id);
            elem.style.height = divMaxHeight;
            elem.style.opacity = 1;
            elem.style.pointerEvents = "all";
        }
        else {
            const elem = document.getElementById(id);
            elem.style.height = "2em";
            elem.style.opacity = 0;
            elem.style.pointerEvents = "none";
        }
    }, [activeAbout])

    useEffect(() => {
        if (activeBlog) {
            const elem = document.getElementById(id);
            elem.style.height = divMaxHeight;
            elem.style.opacity = 1;
            elem.style.pointerEvents = "all";
        }
        else {
            const elem = document.getElementById(id);
            elem.style.height = "2em";
            elem.style.opacity = 0;
            elem.style.pointerEvents = "none";
        }
    }, [activeBlog])

    useEffect(() => {
        if (activeLinks) {
            const elem = document.getElementById(id);
            elem.style.height = divMaxHeight;
            elem.style.opacity = 1;
            elem.style.pointerEvents = "all";
        }
        else {
            const elem = document.getElementById(id);
            elem.style.height = "2em";
            elem.style.opacity = 0;
            elem.style.pointerEvents = "none";
        }
    }, [activeLinks])

    useEffect(() => {
        if (activeProjects) {
            const elem = document.getElementById(id);
            elem.style.height = divMaxHeight;
            elem.style.opacity = 1;
            elem.style.pointerEvents = "all";
        }
        else {
            const elem = document.getElementById(id);
            elem.style.height = "2em";
            elem.style.opacity = 0;
            elem.style.pointerEvents = "none";
        }
    }, [activeProjects])

    return (
        <span className={styles.bodyContent} id="bodyContent">

            <h2 onClick={() => { setActiveAbout(!activeAbout); setId("about"); }}>About Me</h2>
            <div id="about">
                <p>I am an undergraduate pursuing my BS in Computer Science at the University of Texas Dallas. 
                    Currently, I am researching articulated object manipulation with the <a href="https://labs.utdallas.edu/irvl/research/">Intelligent Robotics and Vision Lab at UT Dallas</a>.
                    I have a passion for AI / machine learning, specifically computer vision. Aside from that, I enjoy reading books on math, tutoring students, and working on coding projects! 
                </p>
            </div>

            <h2 onClick={() => { setActiveBlog(!activeBlog); setId("blog"); }}>Blog</h2>
            <div id="blog">
                <p> Coming soon! </p>
            </div>

            <h2 onClick={() => { setActiveLinks(!activeLinks); setId("links"); }}>Useful Links</h2>
            <div id="links">
                <p> Coming soon! </p>
            </div>

            <h2 onClick={() => { setActiveProjects(!activeProjects); setId("projects"); }}>Projects</h2>
            <div id="projects">
                <p>The source code for all my projects can be found on my GitHub. However, here are some highlighted projects for your consideration:</p>
                <ul>
                    <li><a href="DuckGarden(Pre-Alpha).zip" download>Duck Garden (Pre-Alpha)</a></li>
                </ul>
            </div>

        </span>
    );
}
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Body() {

    const [activeAbout, setActiveAbout] = useState(true);
    const [activeBlog, setActiveBlog] = useState(true);
    const [activeLinks, setActiveLinks] = useState(true);
    const [activeProjects, setActiveProjects] = useState(true);
    const [id, setId] = useState("about");
    const divMaxHeight = "10em";
    const divMinHeight = "2em";

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
            elem.style.height = divMinHeight;
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
            elem.style.height = divMinHeight;
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
            elem.style.height = divMinHeight;
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
            elem.style.height = divMinHeight;
            elem.style.opacity = 0;
            elem.style.pointerEvents = "none";
        }
    }, [activeProjects])

    return (
        <div className={styles.bodyContent} id="bodyContent">

            <h2 onClick={() => { setActiveAbout(!activeAbout); setId("about"); }}>About Me</h2>
            <div id="about">
                <p>I am an undergraduate pursuing my BS in Computer Science at the University of Texas Dallas. 
                    Currently, I am researching articulated object manipulation with the <a href="https://labs.utdallas.edu/irvl/research/">Intelligent Robotics and Vision Lab at UT Dallas</a>.
                    I have a passion for AI / machine learning, specifically computer vision. Aside from that, I enjoy reading books on math, tutoring students, and working on coding projects.
                    Specific coding projects include webscrapers, small games, and websites! Please feel free to take a look at my GitHub, LinkedIn, or contact me by email by clicking on one of
                    the three icons above. This site is still a work in progress. More features will be added in the future as I continue to work on more projects! 
                </p>
            </div>

            {/* <h2 onClick={() => { setActiveBlog(!activeBlog); setId("blog"); }}>Blog</h2>
            <div id="blog">
                <p> Coming soon! </p>
            </div> */}

            <h2 onClick={() => { setActiveLinks(!activeLinks); setId("links"); }}>Useful Links</h2>
            <div id="links">
                <p>Wanting to learn the basics of computer science? Here are some useful links to familiarize yourself with the concepts:</p>
                <ul>
                    <li><a href="https://cooervo.github.io/Algorithms-DataStructures-BigONotation/">Big-O Cheat Sheets</a></li>
                    <li><a href="https://www.w3schools.com/">W3 Schools</a></li>
                    <li><a href="https://leetcode.com/">Leet Code</a></li>
                </ul>
            </div>

            <h2 onClick={() => { setActiveProjects(!activeProjects); setId("projects"); }}>Projects</h2>
            <div id="projects">
                <p>The source code for all my projects can be found on my GitHub. However, here are some highlighted projects for your consideration:</p>
                <p><a href="DuckGarden(Pre-Alpha).zip" download>Duck Garden Download</a>: Before it gets its own home, the Duck Garden download will live here. Duck Garden is intended to be a friend
                while you work on your computer. The small duck waddles around his screen keeping you company. I will continue to support the app so long as I have the time to do so!
                </p>
            </div>

        </div>
    );
}
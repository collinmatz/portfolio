import { useState, useRef, useEffect } from 'react'
import styles from "../styles/index.module.css"
import { NavbarItem } from '../components/navbarItems';

export default function Home() {

  const [name, setName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  const fullName = useRef("");
  const fullNameWithoutSuffix = useRef("Collin Matz, ");
  const firstRender = useRef(true);

  const aboutMeContent = <span>
    <h3>I am a senior studying computer science at the University of Texas at Dallas.
      My passion is artifical intelligence and machine learning. My favorite thing about
      coding is that it allows me to utilize my passion for math and puzzles to create
      apps and software that help others.
    </h3>
  </span>

  const projectsContent = <span>
      <div><a href="https://github.com/collinmatz/Palm">Palm: Custom programming language using Java interpreter</a></div>
      <div><a href="https://github.com/collinmatz/Maze">Maze: Maze generation and automatic solving using Python</a></div>
      <div><a href="https://github.com/collinmatz/tictactoe">TicTacToe: TicTacToe bot built in Python</a></div>
      <div><a href="https://github.com/collinmatz/duck-garden">Duck Garden: Python application where you can watch a duck waddle</a></div>
      <div><a href="https://github.com/collinmatz/portfolio">This portfolio</a></div>
  </span>

  const contactContent = <span className={styles.contact}>
    <div><a href="https://www.linkedin.com/in/collinmatz/">LinkedIn</a></div>
    <div><a href="https://github.com/collinmatz">Github</a></div>
  </span>

  const NavbarList = [
    <NavbarItem key={0} name={"about"} text={"About Me"} id="about"
      startClicked={false} content={aboutMeContent}/>,
    <NavbarItem key={1} name={"projects"} text={"Projects"} id="projects"
      startClicked={false} content={projectsContent}/>,
    <NavbarItem key={2} name={"contact"} text={"Contact"} id="contact"
      startClicked={false} content={contactContent}/>,
  ];

  const nameSuffixes = [
    "software engineer.",
    "programmer.",
    "bed enjoyer.",
    "friend to all.",
    "allergic to cats.",
    "academic weapon.",
    "has defeated the ender dragon in minecraft.",
    "californian turned texan.",
    "pc enthusiast.",
    "likes AI/ML.",
    "loves math!",
    "built his own pc.",
    "creator of duck garden.",
    "aspires to develop the AI singularity."
  ];

  useEffect(() => {
    if (firstRender.current) {
      document.title = "Collin Matz Portfolio";
      fullName.current = fullNameWithoutSuffix.current + nameSuffixes[Math.floor(Math.random() * nameSuffixes.length)];
      firstRender.current = false;
    }
  });

  const [nameComplete, setNameComplete] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (!nameComplete) {
        if (name !== fullName.current) {
          setNameIndex(nameIndex + 1);
          setName(name + fullName.current[nameIndex]);
        }
        else {
          setNameComplete(true);
        }
      }
    }, 70);
  }, [nameComplete, name]);

  useEffect(() => {
    setTimeout(() => {
      if (nameComplete) {
        if (name !== fullNameWithoutSuffix.current) {
          setNameIndex(nameIndex - 1);
          setName(name.slice(0, nameIndex - 1));
        }
        else {
          fullName.current = fullNameWithoutSuffix.current + nameSuffixes[Math.floor(Math.random() * nameSuffixes.length)];
          setNameComplete(false);
        }
      }
    }, 50);
  }, [nameComplete, name]);

  const cursor = '|';
  useEffect(() => {
    setTimeout(() => {
      setBlink(!blink);
    }, 500);
  }, [blink]);

  return (
    <div className={styles.main}>

      <div className={styles.header}>
        <h1>{name}<span style={blink ? {opacity: '0%'} : {opacity: '100%'}}>{cursor}</span></h1>
      </div>

      <div className={styles.body}>
        {NavbarList}
      </div>

      <div className={styles.footer}>
        Collin Matz, {new Date().getFullYear()}
      </div>

    </div>
  );
}

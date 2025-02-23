import './ButtonDarkMode.css'
import logo_dark from '../../img/icons/moon.svg';
import logo_light from '../../img/icons/sun.svg';
import { useState, useEffect, useRef } from 'react';
import { useLocalStorage } from '../../utils/UseLocalStorage';
import DetectDarkMode from '../../utils/DetectDarkMode';

const ButtonDarkMode = () => {
    

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', DetectDarkMode());

    const btnRef = useRef(null);

    const toggleDarkMode =()=>{
        
        if(darkMode==="light"){
            setDarkMode("dark");
        }
        else{
            setDarkMode("light");
        }

    }

    useEffect(()=>{
        window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
    });},[])

    useEffect(()=>{
        if(darkMode==='dark'){
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active');
        }
        else{
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active');
        }
        console.log(document.body.classList);
    }, [darkMode])

    return (  <>
     <button ref={btnRef} onClick={()=>{toggleDarkMode()}} className="dark-mode-btn">
            <img src={logo_light} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={logo_dark} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button>
    </>);
}
 
export default ButtonDarkMode;
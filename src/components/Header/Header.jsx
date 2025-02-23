import logo_dark from '../../img/icons/moon.svg';
import logo_light from '../../img/icons/sun.svg';
import './Header.css'

export default function Header(props){
    return(
        
            <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Nestor</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="https://github.com/Segun228" className="btn">Download CV</a>
            </div>
        </header>
    );
}
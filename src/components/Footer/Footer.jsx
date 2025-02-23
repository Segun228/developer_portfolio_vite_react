import './Footer.css'
import logo_vk from '../../img/icons/vk.svg';
import logo_inst from '../../img/icons/instagram.svg';
import logo_twit from '../../img/icons/twitter.svg';
import logo_github from '../../img/icons/gitHub.svg';
import logo_linked from '../../img/icons/linkedIn.svg';

export default function Footer(props){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/dianabol_enjoyer"><img src={logo_vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://www.instagram.com/nestor_korhonen"><img src={logo_inst} alt="Link"/></a></li>
                        
                        <li className="social__item"><a href="https://github.com/Segun228"><img src={logo_github} alt="Link"/></a></li>
                        <li className="social__item tg"><a href="#!"><img src={logo_linked} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2025 fullstack-portfolio.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
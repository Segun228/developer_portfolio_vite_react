import './buttonGitHub.css';
import GitHubIcon from '../../img/icons/gitHub-black.svg';

const ButtonGitHub = ({link}) => {
    return ( 
        <a href={link} target='_blank' className="btn-outline">
                    <img src={GitHubIcon} alt=""/>
                    GitHub repo
        </a>
    );
}
 
export default ButtonGitHub;
import projects_01 from '../../img/projects/01.jpg';
import './Project.css'
import { NavLink } from 'react-router-dom';
const Project = (props) => {
    
    
    return ( 
        <NavLink to={`/project/${props.index}`}>
        <li className="project">
                    <img src={props.image} alt="Project img" className="project__img" />
                    <h3 className="project__title">{props.title}</h3>
        </li>
        </NavLink>
    );
}
 
export default Project;
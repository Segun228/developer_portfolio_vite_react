import image from './../img/projects/02-big.jpg';
import GitHubIcon from './../img/icons/gitHub-black.svg';
import ButtonGitHub from '../components/buttonGithub/ButtonGitHub';
import { useParams } from 'react-router-dom';
import { projects } from '../helpers/projectList';
import { NavLink } from 'react-router-dom';


const Project = () => {
    
    const {id} = useParams();
    const project = projects[id]
    console.log(project)
    return (  
       <>
       <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                <img src={project.bigImage} alt={project.title} className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: {project.skills}</p>
                </div>

                {project.gitHubLink && (<ButtonGitHub link={project.gitHubLink}></ButtonGitHub>)}

                

            </div>
        </div>
    </main>

       </> 
    );
}
 
export default Project;
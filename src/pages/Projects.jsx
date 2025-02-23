import Project from "../components/Projects/Project";
import {projects} from "../helpers/projectList"
import { uid } from "uid";

const Projects = () => {
    return (  
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projects.map((project, index)=>{
                    return(
                        <Project key={uid()} title={project.title} skills={project.skills} image={project.image} gitHubLink={project.gitHubLink} index={index}></Project>
                    );
                })}
                
                

            </ul>
        </div>
    </main>
 );
}
 
export default Projects;
import { usePortfolioContext } from "../../context/usePortfolioContext";
import Project from "../Project";

const Projects = () => {
    const { state: { projects } } = usePortfolioContext();

    return (
        <section id="projects">
            <h2>Projets</h2>
            {
                projects.map((project, index) => <Project key={index} project={project} />)
            }
        </section>
    )
}

export default Projects

import './index.css'

const Project = ({ project }) => {
    const languagesIcons = {
        'Bash': 'Bash_Logo_Colored.svg',
        'CSS': 'CSS3_logo.svg',
        'C': 'C_Programming_Language.svg',
        'HTML': 'HTML5_Badge.svg',
        'Python': 'python-seeklogo.com.svg',
        'React': 'react-3.svg',
        'SQL': 'sql-database-generic-svgrepo-com.svg',
        'JavaScript': 'Unofficial_JavaScript_logo_2.svg',
        'PHP': 'Webysther_20160423_-_Elephpant.svg',
        'Batch': 'Windows-Logo.svg'
    }

    return (
        <div className="project box">
            <h3>{project.title}</h3>
            <div className="project-languages">
                {
                    project.languages.map((language, index) => <img key={index} src={'icon/language/' + languagesIcons[language]} alt={language} title={language} />)
                }
            </div>
            <div className="project-brand d-flex justify-content-center">
                {
                    project.brand.search(/\.mp4$/) === -1
                        ? <img src={project.brand} alt={project.title}/>
                        : <video src={project.brand} autoPlay muted loop></video>
                }
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
                {
                    project.links.demo !== undefined &&
                    <div>
                        <a href={project.links.demo} target="_blank" title="Voir la démo">
                            <img src="/icon/white/internet.svg" alt="Démo" />
                            <div>Démo</div>
                        </a>
                    </div>
                }
                <div>
                    <a href={project.links.git} target="_blank" title="Voir le code source du projet">
                        <img src="/icon/white/github-mark.svg" alt="Git" />
                        <div>Git</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project

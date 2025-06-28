interface IProjectItem {
  project: IProject
}

const Project = ({ project }: IProjectItem) => {
  console.log('LOG', project)
  return (
    <section className="project">
      <a className="projectLink" href={project.link}>
        <div className="projectHeader">
          <h3 className="projectHeaderTitle">{project.title}</h3>
          <p className="projectHeaderType">{ project.type}</p>
        </div>
        <div className="projectBody">
          <img className="bodyImage" src={project.image} alt={project.subtitle} />
          <div className="contentBodyText">
            <h4 className="bodyTitle">{project.subtitle}</h4>
            <p className="bodyDescription">{project.description}</p>
          </div>
        </div>
      </a>
    </section>
  )
}

export default Project
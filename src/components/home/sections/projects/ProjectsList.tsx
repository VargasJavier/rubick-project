import Project from './Project'

interface ProjectList {
  projectsList: IProject[]
}

const ProjectsList = ({projectsList}: ProjectList) => {
  return (
    <div className='containerProjectsList'>
      {
        projectsList.map((project: IProject) => (
          <Project project={project} />
        ))
      }
    </div>
  )
}

export default ProjectsList
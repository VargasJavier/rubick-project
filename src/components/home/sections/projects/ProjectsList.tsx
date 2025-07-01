import Project from './Project'

interface ProjectList {
  projectsList: IProject[]
}

const ProjectsList = ({projectsList}: ProjectList) => {
  return (
    <div className='containerProjectsList'>
      {
        projectsList.map((project: IProject, index: number) => (
          <Project project={project} key={index}/>
        ))
      }
    </div>
  )
}

export default ProjectsList
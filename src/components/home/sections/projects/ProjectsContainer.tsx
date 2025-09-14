import { projectsList } from '../../../../data/projects'
import ProjectsList from './ProjectsList'

const ProjectsContainer = () => {
  return (
    <section className='sectionProjects'>
      <div className='containerHeaderProjects'>
        <h3 className='titleHeaderProject'>Proyectos</h3>
        <p className='subtitleHeaderProject'>Que nuestro trabajo hable por nosotros. Hemos seleccionados este grupo de proyectos recientes para ti.</p>
      </div>
      <section>
        <ProjectsList projectsList={projectsList}/>
      </section>
    </section>
  )
}

export default ProjectsContainer
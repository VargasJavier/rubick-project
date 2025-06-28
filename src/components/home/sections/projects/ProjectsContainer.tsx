import { projectsList } from '../../../../data/projects'
import ProjectsList from './ProjectsList'

const ProjectsContainer = () => {
  return (
    <section>
      <div className='containerHeaderProjects'>
        <h3 className='titleHeaderProject'>Proyectos</h3>
        <p className='subtitleHeaderProject'>Un escaparate seleccionado de nuestro trabajo más impactante, que combina estrategia, narración de historias e imágenes destacadas.</p>
      </div>
      <section>
        <ProjectsList projectsList={projectsList}/>
      </section>
    </section>
  )
}

export default ProjectsContainer
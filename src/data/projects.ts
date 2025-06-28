import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/project-2.jpg'
import project3 from '../assets/projects/project-3.jpg'

export const projectsList: IProject[] = [
  {
    title: 'Fasho',
    type: 'Rediseño',
    subtitle: 'Fasho ECommerce Website',
    description: 'Un sitio web de portafolio creativo diseñado para resaltar la marca excelencia, elaborado con diseños modernos y atractivos. Visuales para captar la atención de la audiencia.',
    link: '/proyecto/fasho',
    image: project1
  },
  {
    title: 'Pulsefit',
    type: 'Desarrollo de App',
    subtitle: 'Pulsefit Gym Website',
    description: 'Un innovador sitio web de plataforma SaaS construido con los principios de diseño «user-first», que ofrece una navegación fluida y una presentación dinámica de los contenidos.',
    link: '/proyecto/pulsefit',
    image: project2
  },
  {
    title: 'Aiflow',
    type: 'E-commerce',
    subtitle: 'Aiflow Agency Website',
    description: 'Un sitio web de consultoría financiera desarrollado para ofrecer la máxima claridad, combinando un diseño minimalista con una narración impactante para generar confianza.',
    link: '/proyecto/aiflow',
    image: project3
  }
]
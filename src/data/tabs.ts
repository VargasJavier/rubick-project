import imageTab1 from "../assets/services/services-brand.jpg"
import imageTab2 from "../assets/services/services-digital.jpg"
import imageTab3 from "../assets/services/services-web.jpg"
import imageTab4 from "../assets/services/services-design.jpg"

type Tab = {
  id: string;
  label: string;
  image: any;
  link: string;
  description: string;
};

export const tabs: Tab[] = [
  {
    id: 'tab1',
    label: 'Identidad de Marca',
    image: imageTab1,
    link: '/servicios/tab1',
    description: 'Soluciones creativas y un profundo conocimiento de sus objetivos empresariales. Ya sea que se trate de una empresa nueva o una empresa establecida.'
  },
  {
    id: 'tab2',
    label: 'Mercadotecnia Digital',
    image: imageTab2,
    link: '/servicios/tab2',
    description: 'Impulsar el tráfico y los clientes potenciales específicos con estrategias creativas adaptadas a sus ambiciones de crecimiento.'
  },
  {
    id: 'tab3',
    label: 'Desarrollo Web',
    image: imageTab3,
    link: '/servicios/tab3',
    description: 'Cree sitios web rápidos y escalables con tecnologías modernas que potencien el éxito de su negocio.'
  },
  {
    id: 'tab4',
    label: 'Diseño UI UX',
    image: imageTab4,
    link: '/servicios/tab4',
    description: 'Soluciones creativas respaldadas por un profundo conocimiento de tus objetivos, ya sea que estés lanzando una startup o escalando una marca establecida.'
  },
];
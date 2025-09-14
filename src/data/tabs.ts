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
    description: 'Potencia tu marca a un nuevo nivel. Basta de copiar al vecino de al lado, trabajemos en cómo se diferencia tu marca de los demás.'
  },
  {
    id: 'tab2',
    label: 'Automatizaciones',
    image: imageTab2,
    link: '/servicios/tab2',
    description: 'Mejora la eficiencia y reduce las horas de trabajo de tu equipo. Para aprovecharlas en lo que realmente importa, las ventas.'
  },
  {
    id: 'tab3',
    label: 'Desarrollo Web',
    image: imageTab3,
    link: '/servicios/tab4',
    description: 'Cree sitios web rápidos y escalables con tecnologías modernas que potencien el éxito de su negocio.'
  },
  {
    id: 'tab4',
    label: 'SEO',
    image: imageTab4,
    link: '/servicios/tab3',
    description: 'Puedes tener los mejores productos pero no sirve de nada si nadie te ve. Con un SEO bien trabajado, el tráfico no será problema.'
  },
];
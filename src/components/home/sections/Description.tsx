import { useEffect, useState } from "react";
import TabContent from "../contents/TabContent";
import imageTab1 from "../../../assets/services/services-image-1.jpg"

type Tab = {
  id: string;
  label: string;
  image: any;
  link: string;
  description: string;
};

const tabs: Tab[] = [
  {
    id: 'tab1',
    label: 'Identidad de Marca',
    image: imageTab1,
    link: '/servicios/tab1',
    description: 'Impulsar el tráfico y los clientes potenciales específicos con estrategias creativas adaptadas a sus ambiciones de crecimiento.'
  },
  {
    id: 'tab2',
    label: 'Mercadotecnia Digital',
    image: imageTab1,
    link: '/servicios/tab2',
    description: 'Impulsar el tráfico y los clientes potenciales específicos con estrategias creativas adaptadas a sus ambiciones de crecimiento.'
  },
  {
    id: 'tab3',
    label: 'Desarrollo Web',
    image: imageTab1,
    link: '/servicios/tab3',
    description: 'Impulsar el tráfico y los clientes potenciales específicos con estrategias creativas adaptadas a sus ambiciones de crecimiento.'
  },
  {
    id: 'tab4',
    label: 'Diseño UI UX',
    image: imageTab1,
    link: '/servicios/tab4',
    description: 'Impulsar el tráfico y los clientes potenciales específicos con estrategias creativas adaptadas a sus ambiciones de crecimiento.'
  },
];

const Description = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [tabSelected, setTabSelected] = useState(tabs[0]);

  useEffect(() => {
    let item = tabs.find(tab => tab.id === activeTab) ?? tabs[0]
    setTabSelected(item)
  }, [activeTab])
  

  return (
      <section className='descriptionContainer'>
        <section className="descriptionContent">
          <p className='descriptionText'>{`Eleva tu presencia digital con distinción,\nsumergir\nen una creatividad sin límites. Nuestro equipo de\nDiseñadores y desarrollo Pioneros\nEnciende mostrador Tu visión digital`}</p>
          <div className='containerStadistics'>
          <div className='stadisticsItem'><span className='stadisticsNumber'>40+</span>Clientes satisfechos</div>
          <div className="stadisticsItemLine"></div>
          <div className='stadisticsItem'><span className='stadisticsNumber'>100+</span>Proyectos entregados</div>
          <div className="stadisticsItemLine"></div>
          <div className='stadisticsItem'><span className='stadisticsNumber'>12+</span>Años de experiencia</div>
          </div>
      </section>
      <div className="separator"></div>
        <section className="services">
          <h3 className="servicesTitle">¿Qué ofrecemos?</h3>
          <div className="tabsContainer">
            <div className="tabsMenu">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tabButton ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="tabsContent">
            {
              <TabContent image={tabSelected.image} link={tabSelected.link} description={tabSelected.description} label={tabSelected.label} />
            }
            </div>
          </div>
        </section>
      </section>
  )
}

export default Description
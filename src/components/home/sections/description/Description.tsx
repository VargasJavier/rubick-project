import { useEffect, useState } from "react";
import TabContent from "../../contents/TabContent";
import { tabs } from "../../../../data/tabs";


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
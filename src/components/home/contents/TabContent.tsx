
const TabContent = ({image, label, link, description}: any) => {
  return (
    <div className="tabContent">
      <img className="tabContentImage" src={image} alt={label} />
      <div className="tabContentText">
        <p className="tabContentDescription">{description}</p>
        <a className="tabContentLink" href={link}>Comenzar</a>
      </div>
    </div>
  )
}

export default TabContent
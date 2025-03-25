export default function SideBar(props) {
    const { HandleToggleModel , data} = props
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description</p>
          <p>
           {data?.explanation}
          </p>
        </div>
        <button onClick={ HandleToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

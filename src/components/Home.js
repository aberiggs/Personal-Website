import "./Home.css"
import Portrait from "./SprocketPic.jpg"

function Home() {
  return (
    <div className="Home">
      <div className ="Home-top"> 
        <div className="Home-top-left"></div>
        <div className="Home-top-content">
          <h1 className="Home-name">Abe Riggs IV</h1>
          <img className="Home-portrait" src={Portrait} alt="Portrait"></img>
          <h2>About Me</h2>
        </div>
        <div className="Home-top-right"></div>
      </div>
      <div className="Home-bottom">

      </div>
     
    </div>
  );
}

export default Home;

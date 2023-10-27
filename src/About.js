import Vinco from "./Vinc.jpg";
import "./Style.css";

function About({ close }) {
  return (
    <div className="aboutCont">
      <img
        className="vincoImg"
        src={Vinco}
        alt="vinco img"
        style={{ width: 500, height: 600 }}
      ></img>
      <span className="ParaCont">
        <div className="childParaCont">
          <h3>Vincenzo Bisogno</h3>
          <p>
            <u>Italian Chef</u>
          </p>
          <p className="Para">
            <span>Born and grown in the land where pizza did originate,</span>
            <br></br>
            <span>Chef Vincenzo's cuisine is inspired by</span> <br></br>
            <span>
              several years of experience in different regions of Italy.
            </span>
            <br></br>
            <span>His passion for excellence induce him to research</span>
            <br></br>
            <span>continuously the best quality food to create</span> <br></br>
            <span>an immersive culinary experience for his guests.</span>
            <br></br>
          </p>
        </div>
      </span>

  
      <button className="aboutContButton"style={{ height: 40, width: 40 }} onClick={close}>
        X
      </button> 

    </div>
  );
}
export default About;

import Load from "../../components/imgs/gif/innoit.gif";
import "./loader.css";

function Loader3({width, height}) {
  return (
    <div style={{ flex: "4" }}>
    <div className="loa">
      <img src={Load} alt="" style={{maxHeight: height, maxWidth: width}} />
    </div>
  </div>
  )
}

export default Loader3
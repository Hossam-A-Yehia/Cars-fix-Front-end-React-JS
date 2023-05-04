import Load from "../../components/imgs/gif/loading-buffering.gif";
import "./loader.css";

function Loader2({width, height}) {
  return (
    <div >
    <div className="loa">
      <img src={Load} alt="" style={{maxHeight: height, maxWidth: width}} />
    </div>
  </div>
  )
}

export default Loader2
import ImageSlider from './ImageSlider'
import { VIDEOS } from "../data/data";
import "./ImageSlider.css" 
import "../App.css"



function Slide() {
  return (
    <div className="App">
      <div className="container">
        <ImageSlider className="bar"images={VIDEOS} />
      </div>
    </div>
  );
}

export default Slide;
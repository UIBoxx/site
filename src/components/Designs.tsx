import "../CSS/main.css";
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';



function DesignTemplates(){
    return (
        <div className="design-images">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
        <a href="Web-Designs"><button className="explore-btn">Explore More <span>&#8594;</span></button></a>
    </div>
    );
}

export default DesignTemplates;
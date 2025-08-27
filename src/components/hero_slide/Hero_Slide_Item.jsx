import "./hero_slide.css";
import { HeroButton } from "../button/HeroButton.jsx";
import { URL } from "../../api/Api.js";
import { useNavigate } from "react-router-dom";
import * as root from "../constant_JS/RootPath.js";

export default function Hero_Slide_Item(p_hero) {
  let navigate = useNavigate();  //for routing
  let item = p_hero.item;
  const bg_img = URL.originalImage(item.poster_path || item.backdrop_path);

  return(
    <div className="hero-item" style={{backgroundImage: `url(${bg_img})`}}>
      <div className="item-info"> 
        <h2 className="title">{item.title}</h2>
        <p className="overview">{item.overview}</p>
        <HeroButton onClick={() => 
          navigate(`/${root.Home_Page}/movie/${item.id}`)}
        >
          View Details
        </HeroButton>
      </div>
    </div>
  );
}

//this is for a single movie item
//used original img for background
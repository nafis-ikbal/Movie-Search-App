import { Link } from "react-router-dom";
import "./card.css";
import * as root from "../constant_JS/RootPath.js";
import {category} from "../../api/TMDB_Data.js";
import { URL } from "../../api/Api.js";
import CardButton from "../button/CardButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Card(p_card) {
    const item = p_card.item;  //a movie/tv-show objects comes from api

    //dynamic URL for routing
    const link = 
        `/${root.Home_Page}/${category[p_card.category]}/${item.id} `;

    const poster = URL.w500Image(item.poster_path || item.backdrop_path);

    return(
        <Link to={link} className="card">
            <div style={{backgroundImage: `url(${poster})`}} className="bg-img">
                <CardButton>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </CardButton>
            </div>
            <h3 className="card-h3">{item.title || item.name}</h3>
        </Link>
    );
}

//single movie / tv card
//for movie -> title , for tv-show -> name
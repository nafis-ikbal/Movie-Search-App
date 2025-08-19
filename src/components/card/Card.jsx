import { Link } from "react-router-dom";
import "./card.css";
import { Button } from "../button/Button.jsx";
import * as root from "../../RootPath.js";
import {category} from "../../api/TMDB_Data.js";
import { URL } from "../../api/Api.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Card(p_card) {
    const item = p_card.item;  //a movie/tv-show objects comes from api

    //dynamic URL for routing
    const link = 
        `/${root.Home_Page}/${category[p_card.category]}/${item.title || item.name} `;

    const poster = URL.w500Image(item.poster_path || item.backdrop_path);

    return(
        <Link to={link}>
            <div style={{backgroundImage: `url(${poster})`}} className="bg-img">
                <Button>
                    <FontAwesomeIcon icon={faCirclePlay} />
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

//single movie / tv card
//for movie -> title , for tv-show -> name
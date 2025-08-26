import "./details_css/details.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTMDB } from "../../api/TMDB_Data";
import { URL } from "../../api/Api";
import Hr_Slider from "../../components/hr_slider/Hr_Slider";
import Info from "./Info";
import Video from "./Video";

export default function Details() {
  const { category, id } = useParams(); //get current category & id
  const [details, setDetails] = useState(null);  //hold a movie or tv series details

  useEffect(() => {
    async function getDetail() {
      const res = await getTMDB.detail(category, id, { params: {} });  
      setDetails(res);
      window.scrollTo(0, 0);  //scroll the page to top when navigate another movie
    }
    getDetail();
  }, [category, id]);  

  //get poster after get data (details)
  const poster = details ? URL.originalImage(details.poster_path || details.backdrop_path) : "";

  return(
    <>
      {details && (
        <div className="details"
          style={{backgroundImage: `url(${poster})`}}  
        >
          <div className="content">
            <div className="content-info">
              <div
                className="poster"
                style={{backgroundImage: `url(${poster})`}}
              ></div>

              <div className="info">
                <Info item={details}/>
              </div>
            </div>

            <div className="content-video">
              <h2 className="cont-h2">Videos</h2>
              <div className="video-container">
                <Video item={details.id}/>
              </div>
            </div>

            <div className="similar-content">
              <h2 className="cont-h2">{`Similar ${category}`}</h2>
              <Hr_Slider category={category} type="Similar" id={details.id}/>
            </div>
          </div>  
        </div>
      )}
    </>
  );
}

//this is for movie or tv series info, cast, video & similar item
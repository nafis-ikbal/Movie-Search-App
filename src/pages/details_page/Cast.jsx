import { getTMDB } from "../../api/TMDB_Data";
import { URL } from "../../api/Api";
import "./details_css/cast.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cast({id}) {
  const {category} = useParams();  
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      const res = await getTMDB.credits(category, id);
      setCast(res.cast.slice(0, 5));  //top 5 cast
    }
    getCast();
  }, [category, id]); 

  return(
    <div className="claslist">
      {cast.map((c, idx) => (
         <div className="cast" key={idx}>
            <div 
              className="cast-img"
              style={{backgroundImage: `url(${URL.w500Image(c.profile_path)})`}}
            ></div>
            <p className="cast-name">{c.name}</p>
         </div>
      ))}
    </div>
  );
}
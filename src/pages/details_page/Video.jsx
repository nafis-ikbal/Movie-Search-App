import "./details_css/video.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTMDB } from "../../api/TMDB_Data";

export default function Video() {
  const { category, id } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      const res = await getTMDB.getVideos(category, id);
      setVideos(res.results.slice(0,6));  //1st 6 videos
    }
    getVideos();
  }, [category, id]);  

  return (
    <>
      {videos.map((v,idx) => (
          <div className="video" key={idx}>
            <iframe 
              src={`https://www.youtube.com/embed/${v.key}`}
              title="video"
            ></iframe>
          </div>
      ))}
    </>
  );
}

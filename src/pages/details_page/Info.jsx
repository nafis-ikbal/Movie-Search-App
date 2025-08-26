import "./details_css/info.css";
import Cast from "./Cast";

export default function Info({item}) {

  return (
    <>
      <h2 className="item-title">{item.title || item.name}</h2>
      <p className="date">Release Date: <span>{item.release_date || item.first_air_date}</span></p>

      <div className="genre">
        {item.genres && 
          item.genres.slice(0,5).map((g, idx) => (
            <span key={idx}>
              {g.name}
            </span>
          ))}
      </div>

      <p className="item-overview">{item.overview}</p>
      <p className="rating">Rating: <span>{item.vote_average.toFixed(1)}</span></p>
      <p className="rating">Vote: <span>{item.vote_count}</span></p>

      <div className="cast-container">
        <h2>Leading Actors</h2>
        <Cast id={item.id}/>
      </div>
    </>
  );
}
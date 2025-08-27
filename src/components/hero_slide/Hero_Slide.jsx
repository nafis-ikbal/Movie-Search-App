import "./hero_slide.css";
import "swiper/css";  //swiper default style
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTMDB, movieType } from "../../api/TMDB_Data.js";
import Hero_Slide_Item from "./Hero_Slide_Item.jsx";

export default function Hero_Slide() {
  const [movieList, setMovieList] = useState([]);  //store movielist from api

  useEffect(() => {
    async function getMovies() {
      let params = {page: 1};
        try {
          const res = await getTMDB.getMovieList(movieType.popular, {params});
          setMovieList(res.results.slice(0, 10));  //1st 10 movies
        } catch (error) {
          console.log(error);
        }
    }

    getMovies();
  }), [];

  return (
    <div className="hero-slide">
      <Swiper 
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={8}
        slidesPerView={3}
        autoplay={{ delay: 2000 }} 
      >
      {movieList.map((item, idx) => (
        <SwiperSlide key={idx}>
          {({isActive}) => (
            <Hero_Slide_Item 
              item={item}
              className={ `${isActive ? "active" : ""}`}
            />
          )}
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
}

//landing page banner with slides (show top 10 popular movies with sliding animation)
//used on 'homepage'
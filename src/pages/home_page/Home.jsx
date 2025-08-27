import "swiper/css";
import "./home.css";
import Hero_Slide from "../../components/hero_slide/Hero_Slide";
import { category, movieType, tvType } from "../../api/TMDB_Data";
import Section from "./Section";

export default function Home() {
  return(
    <>
      <Hero_Slide/>

      <div className="sec-container">
        <Section
          title={`Trending Movies`}
          category={category.movie}
          type={movieType.popular}
        />
        <Section
          title={`Top Rated Movies`}
          category={category.movie}
          type={movieType.top_rated}
        />
        <Section
          title={`Trending TV Series`}
          category={category.tv}
          type={tvType.popular}
        />
        <Section
          title={`Top Rated TV Series`}
          category={category.tv}
          type={tvType.top_rated}
        />
      </div>
    </>
  );
}

//load 'hr_slider' & 'hero-slide' component
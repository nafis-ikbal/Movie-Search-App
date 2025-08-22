import "./hr_slider.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../card/Card.jsx"
import { getTMDB, category } from "../../api/TMDB_Data";

export default function Hr_Slider(p_hr) {
    const [lists, setLists] = useState([]);  //hold all movies/tv shows

    useEffect(() => {
        async function getLists() {
            let res = null;
            const params = {};
            try {
                if(p_hr.type !== "similar") {
                    if(p_hr.category === category.movie) {
                        res = await getTMDB.getMovieList(p_hr.type, {params});
                    } else {
                        res = await getTMDB.getTvList(p_hr.type, {params});
                    }
                } else {
                    res = await getTMDB.similar(p_hr.category, p_hr.id);
                }

                setLists(res.results);
            } catch (error) {
                console.log(error);
            }
        }

        getLists();
    }, [p_hr.category, p_hr.id, p_hr.type]);

    return(
        <div className="slider">
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
                {lists.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <Card item={item} category={p_hr.category}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    ); 
}

//horizontal slider (using 'swiper' library)
// slide card horizontally when mouse grab
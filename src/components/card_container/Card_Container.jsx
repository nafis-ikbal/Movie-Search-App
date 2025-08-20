import "./card_container.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import { category, movieType, tvType, getTMDB } from "../../api/TMDB_Data";
import { OutlineButton } from "../button/Button.jsx";
import Search from "./Search.jsx";

export default function Card_Container(p_container) {
    const [list, setList] = useState([]);  //fetch all movies/tv-shows lists
    const [currPage, setCurrPage] = useState(1);  //access current page number
    const [totalPage, setTotalPage] = useState(0);  //total availabe page
    const {keyword} = useParams(); //user search text/keyword 
    let res = null;  //store response

    //fetch movies or tv-shows
    useEffect(() => {
        async function getList() {
            let params = {page: currPage};

            try {
                if(!keyword) {  //if user don't search anything
                    if(p_container.category === category.movie) {
                        res = await getTMDB.getMovieList(movieType.upcoming, {params});
                    } else {
                        res = await getTMDB.getTvList(tvType.popular, {params});
                    }
                } else {
                    res = await getTMDB.search(p_container.category, {
                        params: { query: keyword, page: currPage},
                    })
                }

                setList(res.results);  //movie / tv list
                setCurrPage(1);  //reset first page
                setTotalPage(res.total_pages);  //total available page
            } catch (error) {
                console.log(error);
            }
        }

        getList();
    }, [keyword, p_container.category]); //runs when category movies/tv or when search

    //fetch next page data
    async function onMore() {
        const nextPage = currPage + 1;
        const params = keyword ? { page: nextPage, query: keyword} : {page: nextPage};

        try {
            if(!keyword) {
                if(p_container.category === category.movie) {
                        res = await getTMDB.getMovieList(movieType.upcoming, {params});
                } else {
                        res = await getTMDB.getTvList(tvType.popular, {params});
                }
            } else {
                res = await getTMDB.search(p_container.category, {params});
            }

            setList((prevList) => [...prevList, ...res.results]);  //append new list 
            setCurrPage(nextPage);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="layout">
            <Search category={p_container.category} keyword={keyword}/>

            <div className="card-container">
                {list.map((item, idx) => (
                    <Card key={idx} category={p_container.category} item={item}/>
                ))}
            </div>

            {currPage < totalPage && (
                <div className="more">
                    <OutlineButton onClick={onMore}>
                        <span>{`More ${p_container.category}...`}</span>
                    </OutlineButton>
                </div>
            )}
        </div>
    );
}

//layout for card listing (use in movies & tv-series section)
//also call the api & get data
//if user don't search anything, it show 'upcoming' movies or 'popular' tv shows
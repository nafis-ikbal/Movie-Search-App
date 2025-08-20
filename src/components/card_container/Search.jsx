import "./card_container.css";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button } from "../button/Button.jsx";
import * as root from "../../RootPath.js";
import Input from "../input/Input.jsx"

export default function Search({category, Keyword}) {
    const navigate = useNavigate();  //change the url when navigate card
    const [searchKeyword, setSearchKeyword] = useState(Keyword || "");

    //navigate search page
    const goSearch = useCallback(() => {
        if(searchKeyword.trim().length > 0) { //if keyword is not empty
            navigate(`/${root.Home_Page}/${category}/search/${searchKeyword}`);
        }
    }, [searchKeyword, category, navigate]);

    useEffect(() => {
        function onPress(evt) {
            if(evt.key === "Enter") {  //when press enter
                goSearch();
            }
        };
        document.addEventListener("keyup", onPress);
        return () => document.removeEventListener("keyup", onPress);  //remove when unmount
    }, [goSearch]);

    return(
        <div className="search">
            <Input
                type="text"
                placeholder={`search for a ${category}`}
                value={searchKeyword}
                onChange={(event) => setSearchKeyword(event.target.value)}
            />
            <Button onClick={goSearch}>
                Search
            </Button>
        </div>
    );
}

//useCallback -> doesn’t get re-created every render
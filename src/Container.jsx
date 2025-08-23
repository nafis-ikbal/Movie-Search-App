import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import "./Container.css";
import Hero_Slide from "./components/hero_slide/Hero_Slide";


export default function Container() {
    return(
        <BrowserRouter>
            <div className="mainc">
                <Header/>
                {/* <Hero_Slide/> */}
            </div>
        </BrowserRouter>
    );
}
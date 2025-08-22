import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import "./Container.css";
import Hr_Slider from "./components/hr_slider/Hr_Slider";


export default function Container() {
    return(
        <BrowserRouter>
            <div className="mainc">
                <Header/>
                <Hr_Slider/>
            </div>
        </BrowserRouter>
    );
}
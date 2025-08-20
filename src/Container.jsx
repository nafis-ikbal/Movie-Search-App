import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import "./Container.css";
import Card_Container from "./components/card_container/Card_Container";


export default function Container() {
    return(
        <BrowserRouter>
            <div className="mainc">
                <Header/>
                <Card_Container/>
            </div>
        </BrowserRouter>
    );
}
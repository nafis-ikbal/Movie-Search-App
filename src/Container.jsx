import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import Card from "./components/card/Card";

export default function Container() {
    return(
        <BrowserRouter>
            <>
                <Header/>
                <Card/>
            </>
        </BrowserRouter>
    );
}
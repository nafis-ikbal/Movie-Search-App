import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";

export default function Container() {
    return(
        <BrowserRouter>
            <>
                <Header/>
            </>
        </BrowserRouter>
    );
}
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

export default function Container() {
    return(
        <BrowserRouter>
            <>
                <Header/>
                <Footer/>
            </>
        </BrowserRouter>
    );
}
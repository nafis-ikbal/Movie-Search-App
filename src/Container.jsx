import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Input from "./components/input/Input";

export default function Container() {
    return(
        <BrowserRouter>
            <>
                <Header/>
                <Input/>
            </>
        </BrowserRouter>
    );
}
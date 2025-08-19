import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import Input from "./components/input/Input";
import { Button, OutlineButton } from "./components/button/Button";

export default function Container() {
    return(
        <BrowserRouter>
            <>
                <Header/>
                <Input/>
                
                <OutlineButton/>
            </>
        </BrowserRouter>
    );
}
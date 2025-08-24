import { BrowserRouter } from "react-router-dom";
import "./Container.css";
import Category from "./pages/category_page/Category";

export default function Container() {
    return(
        <BrowserRouter>
            <div className="mainc">
                <Category/>
            </div>
        </BrowserRouter>
    );
}
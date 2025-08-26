import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as root from "../src/components/constant_JS/RootPath";
import Header from "./components/header/Header";
import Details from "./pages/details_page/Details";

export default function Container() {
    return(
        <BrowserRouter>
          <Header/>
          {/* <Details/> */}
        </BrowserRouter>
    );
}
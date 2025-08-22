import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import "./Container.css";
import VideoContent from "./components/video_popup/VideoContent";


export default function Container() {
    return(
        <BrowserRouter>
            <div className="mainc">
                <Header/>
                <VideoContent/>
            </div>
        </BrowserRouter>
    );
}
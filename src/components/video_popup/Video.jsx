import "./video.css";

export default function Video({active, children}) {
    return(
        <div className={`video ${active ? "active" : ""}`}>
            {children}
        </div>
    );
}

//this is used in 'hero-slide'
//if user click on 'tailer or play' button , it displayed yt video (from TMDB's video api)
//controls visibility 
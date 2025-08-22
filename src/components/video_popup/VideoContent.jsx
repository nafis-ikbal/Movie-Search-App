import { useRef } from "react";
import "./video.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function VideoContent({onClose, children}) {
    const videoRef = useRef(null);

    return(
        <div ref={videoRef}>
            {children}

            <div onClick={onClose} className="close-btn">
                <FontAwesomeIcon icon={faCircleXmark}/>
            </div>
        </div>
    );
}

//handle actual content & close button
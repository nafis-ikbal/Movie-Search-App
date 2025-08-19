import "./Button.css";

function Button(p_btn) {
    return(
        <>
            <button 
                className={`btn ${p_btn.className}`}
                onClick={p_btn.onClick}
            >
                {p_btn.content}
            </button>
        </>
    );
}

function OutlineButton(p_btn) {
    return(
        <>
            <button
                className={`ouline-btn ${p_btn.className}`}
                onClick={p_btn.onClick}
            >
                {p_btn.content}
            </button>
        </>
    );
}

export {Button, OutlineButton};

//classname wise change button
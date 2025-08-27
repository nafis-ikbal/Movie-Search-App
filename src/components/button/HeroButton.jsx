import "./heroButton.css";

function HeroButton(p_btn) {
  return(
    <>
      <button 
        className={`hero-btn ${p_btn.className || ""}`}
        onClick={p_btn.onClick}
      >
        {p_btn.children}
      </button>
    </>
  );
} 

export {HeroButton};
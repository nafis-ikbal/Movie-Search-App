import "./cardbutton.css";

export default function CardButton(p_btn) {
  return(
    <>
      <button 
        className={`card-btn ${p_btn.className || ""}`}
        onClick={p_btn.onClick}
      >
        {p_btn.children}
      </button>
    </>
  );
}
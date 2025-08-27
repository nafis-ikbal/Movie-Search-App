import Hr_Slider from "../../components/hr_slider/Hr_Slider";
import "./home.css";

export default function Section({title, category, type}) {
  return(
    <div className="section">
      <h2 className="sec-h2">{title}</h2>
      <Hr_Slider category={category} type={type}/>
    </div>
  );
}
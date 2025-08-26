// import './App.css'
import "swiper/css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Route_Component from "./routes/Route_Component";

function App() {

  return (
    <BrowserRouter>
      <>
        <Header/>
        <Route_Component/>
        <Footer/>
      </>
    </BrowserRouter>
  )
}

export default App

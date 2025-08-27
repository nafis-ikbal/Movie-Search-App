import { Link, useLocation } from "react-router-dom";
import * as root from "../constant_JS/RootPath";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const NavBar = [
  {Name: "Home", path: `/${root.Home_Page}` , icon: faHouse},
  {Name: "Movies", path: `/${root.Home_Page}/movie`, icon: faFilm},
  {Name: "TV Series", path: `/${root.Home_Page}/tv`, icon: faTv},
];

export default function Header() {
  const {pathname} = useLocation(); //current url. exp: /home/movies
  const headerRef = useRef(null);  //for reference header eml
  const active = NavBar.findIndex((e) => e.path === pathname) //check which nav match current url

  return (
    <div ref={headerRef} className="header">
      <ul className="nav">
        {NavBar.map((elm, idx) => {
          return (
            <li key={idx} className="header-li">
              <Link to={elm.path}>
                <i><FontAwesomeIcon icon={elm.icon}/></i>
                  <span className={`sp ${idx === active ? "active" : ""}`}>
                    {elm.Name}
                  </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  ); 
}

// top navbar with links
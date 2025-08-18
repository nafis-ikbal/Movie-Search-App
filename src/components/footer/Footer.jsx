import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    const menu = [
        ["Home", "Terms of Service", "Privacy Policy"],
        ["FAQ", "About Us", "Contact Us"],
        ["Top IMDB", "Live", "You Must Watch"]
    ];

    return (
        <div className="footer">
            <div className="menu">
                {menu.map((row, idx_row) => (  //iterate menu
                    <li key={idx_row} className="menu-row">
                        {row.map((col, col_idx) => ( //iterate row of menu
                            <Link key={col_idx}>{col}</Link>
                        ))}
                    </li>
                ))}
            </div>
            <div className="copy-right">
                &copy; Copyright nfR
            </div>
        </div>
    );
}
import "./navbar.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
          <span className="logo">Booker</span>
        </Link>
        <div className="navItems">
          <Button text="Login" variant="navButton" />
          <Button text="Register" variant="navButton" />
        </div>
      </div>
    </div>
  );
};

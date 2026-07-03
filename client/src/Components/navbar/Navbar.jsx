import "./navbar.css";
import { Button } from "../button/Button";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Booker</span>
        <div className="navItems">
          <Button text="Login" variant="navButton" />
          <Button text="Register" variant="navButton" />
        </div>
      </div>
    </div>
  );
};

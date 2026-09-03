import "./navbar.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booker</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button text="Login" variant="navButton" />
            </Link>
            <Button text="Register" variant="navButton" />
          </div>
        )}
      </div>
    </div>
  );
};

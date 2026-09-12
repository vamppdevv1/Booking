import "./sidebar.scss";
import {
  Person,
  CreditCard,
  Store,
  ExitToApp,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/darkmode/darkmodeSlice";
import axios from "axios";

export const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    localStorage.clear();
    try {
      await axios.post(
        "http://localhost:8800/api/auth/logout",
        {},
        {
          withCredentials: true,
        },
      );
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Booker panel</span>
        </Link>
      </div>
      <hr />
      <div className="separate">
        <div className="center">
          <ul>
            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <Person className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/hotels" style={{ textDecoration: "none" }}>
              <li>
                <Store className="icon" />
                <span>Hotels</span>
              </li>
            </Link>
            <Link to="/rooms" style={{ textDecoration: "none" }}>
              <li>
                <CreditCard className="icon" />
                <span>Rooms</span>
              </li>
            </Link>
            <li>
              <ExitToApp className="icon" />
              <span style={{ cursor: "pointer" }} onClick={handleClick}>
                Logout
              </span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div className="colorOption" onClick={() => dispatch(toggle())}>
            <DarkMode />
          </div>
          <div className="colorOption" onClick={() => dispatch(toggle())}>
            <LightMode />
          </div>
        </div>
      </div>
    </div>
  );
};

import "./navbar.scss";
import {
  SearchOutlined,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/darkmode/darkmodeSlice";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"
export const NavBar = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
const {user} = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined className="icon" />
        </div>
        <div className="items">
          <div className="item">
            {darkMode ? (
              <DarkModeOutlined
                className="icon"
                onClick={() => dispatch(toggle())}
              />
            ) : (
              <LightModeOutlined
                className="icon"
                onClick={() => dispatch(toggle())}
              />
            )}
          </div>
          <div className="item username">
            <p>

            {user.username}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

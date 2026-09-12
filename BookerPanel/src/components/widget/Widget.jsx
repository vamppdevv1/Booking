import "./widget.scss";
import {
  KeyboardArrowUp,
  PersonOutlined,
  AccountBalanceWalletOutlined,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
export const Widget = ({ type }) => {
  const { data: hotelsCount } = useFetch(
    "http://localhost:8800/api/hotels/getCount",
  );
  const { data: roomsCount } = useFetch(
    "http://localhost:8800/api/rooms/getCount",
  );
  const { data: usersCount } = useFetch(
    "http://localhost:8800/api/users/getCount",
  );

  let info;
  switch (type) {
    case "user":
      info = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        count: usersCount,
        icon: (
          <PersonOutlined
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "hotels":
      info = {
        title: "HOTELS",
        isMoney: false,
        link: "View all hotels",
        count:hotelsCount,
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "rooms":
      info = {
        title: "ROOMS",
        isMoney: false,
        link: "View all rooms",
        count:roomsCount,
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{info.title}</span>
        <span className="counter">
          {info.isMoney ? "$" : ""}
          {info.count}
        </span>
        <Link to={`/${info.title.toLocaleLowerCase()}`} style={{textDecoration:"none"}}>
        
        <span className="link">{info.link}</span>
        </Link>
        
      </div>
      <div className="right">{info.icon}</div>
    </div>
  );
};

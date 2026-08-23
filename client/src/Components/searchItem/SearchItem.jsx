import "./searchItem.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
export const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siInfo">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <Button text={item.rating} />
          </div>
        )}
        <span className="siFeatures">{item.desc} </span>

        <div className="siDetails">
          <div className="button">
            <Link to={`/hotels/${item._id}`}>
              <Button text="See availability" variant="searchButton" />
            </Link>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">${item.cheapestPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
          </div>
        </div>
      </div>
    </div>
  );
};

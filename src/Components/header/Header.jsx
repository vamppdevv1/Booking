import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        //!header list
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A life time of discounte? It is genius</h1>
        <p className="headerDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          molestiae, illum neque quisquam vitae minima, itaque fugiat ipsa hic
          quam cumque repudiandae praesentium minus doloremque perspiciatis quia
          eos, corporis animi!
        </p>
         //!header search
        <div className="headerSearch">
            <div className="headerSearchItem">
                
            </div>
        </div>
      </div>
    </div>
  );
};

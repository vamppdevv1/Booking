// importing
import "./header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button/Button";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import format from "date-fns/format";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
export const Header = ({ type }) => {
  //destination
  const [destination, setDestination] = useState("");

  // calandar state
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // toggle calandar or options
  const [activePanel, setActivePanel] = useState(null);
  //options state

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const minValues = {
    adult: 1,
    children: 0,
    room: 1,
  };
  //handle Search
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, options, date } });
  };
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "i"
            ? prev[name] + 1
            : Math.max(minValues[name], prev[name] - 1),
      };
    });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {/* header list */}
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
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A life time of discount? It is genius
            </h1>
            <p className="headerDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              molestiae, illum neque quisquam vitae minima, itaque fugiat ipsa
              hic quam cumque repudiandae praesentium minus doloremque
              perspiciatis quia eos, corporis animi!
            </p>
            {/* header search */}
            <div className="headerSearch">
              {/* destination */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              {/* calander and date */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() =>
                    setActivePanel(activePanel === "date" ? null : "date")
                  }
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {activePanel === "date" && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              {/* Options */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() =>
                    setActivePanel(activePanel === "options" ? null : "options")
                  }
                  className="headerSearchText"
                >{`${options.adult} adult ${options.children} children ${options.room} room`}</span>
                {activePanel === "options" && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <Button
                          variant="circle"
                          text="-"
                          onClick={() => handleOption("adult", "d")}
                        />
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <Button
                          variant="circle"
                          text="+"
                          onClick={() => handleOption("adult", "i")}
                        />
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <Button
                          variant="circle"
                          text="-"
                          onClick={() => handleOption("children", "d")}
                        />
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <Button
                          variant="circle"
                          text="+"
                          onClick={() => handleOption("children", "i")}
                        />
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <Button
                          variant="circle"
                          text="-"
                          onClick={() => handleOption("room", "d")}
                        />
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <Button
                          variant="circle"
                          text="+"
                          onClick={() => handleOption("room", "i")}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* button */}
              <div className="headerSearchItem">
                <Button
                  text="Search"
                  variant="searchButton"
                  onClick={handleSearch}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

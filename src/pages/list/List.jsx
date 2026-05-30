import { Header } from "../../Components/header/Header";
import { SearchItem } from "../../Components/searchItem/SearchItem";
import { Button } from "../../Components/button/Button";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

import format from "date-fns/format";

import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export const List = () => {
  const location = useLocation();
  const [activePanel, setActivePanel] = useState(null);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="Destination">Destination</label>
              <input
                placeholder={destination}
                type="text"
                name=""
                id="Destination"
              />
            </div>
            {/* date item list */}
            <div className="lsItem">
              <label htmlFor="Date">Check-in Date</label>
              <span
                id="Date"
                onClick={() =>
                  setActivePanel(activePanel === "date" ? null : "date")
                }
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {activePanel === "date" && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            {/* options list item */}
            <div className="lsOptions">
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptionItem">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.adult}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options.children}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.room}
                    />
                  </div>
                </div>
              </div>
            </div>
             <Button text="Search" variant="searchButton"/>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

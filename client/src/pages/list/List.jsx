import { Header } from "../../Components/header/Header";
import { SearchItem } from "../../Components/searchItem/SearchItem";
import { Button } from "../../Components/button/Button";
import useFetch from "../../hooks/useFetch";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

import format from "date-fns/format";

import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export const List = () => {
  const location = useLocation();
  const [activePanel, setActivePanel] = useState(null);
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const [options] = useState(location.state.options);
  const { data, loading, reFetch } = useFetch(
    `http://localhost:8800/api/hotels?city=${destination}`,
  );
  const handleClick = () => {
    reFetch(
      `http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${max || 1000}`,
    );
  };
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
                onChange={(e) => setDestination(e.target.value)}
                type="text"
                name=""
                id="Destination"
              />
            </div>
            {/* date item list */}
            <div className="lsItem">
              <label htmlFor="Date">Check-in Date</label>
              <span
                id="dates"
                onClick={() =>
                  setActivePanel(activePanel === "dates" ? null : "dates")
                }
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {activePanel === "dates" && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDates={new Date()}
                  ranges={dates}
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
                      Min price <small>per night</small>
                    </span>
                    <input
                      min={1}
                      onChange={(e) => setMin(e.target.value)}
                      type="number"
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input
                      min={1}
                      onChange={(e) => setMax(e.target.value)}
                      type="number"
                      className="lsOptionInput"
                    />
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
            <Button
              onClick={handleClick}
              text="Search"
              variant="searchButton"
            />
          </div>
          <div className="listResult">
            {loading ? (
              "loading please wait"
            ) : (
              <>
                {data.map((item) => {
                  return <SearchItem key={item._id} item={item} />;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

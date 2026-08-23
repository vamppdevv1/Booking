//importing
import { Header } from "../../Components/header/Header";
import { SearchItem } from "../../Components/searchItem/SearchItem";
import { Button } from "../../Components/button/Button";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./list.css";
import { SearchContext } from "../../context/SearchContext";
//func
export const List = () => {
  const location = useLocation();
  //states
  const { dispatch } = useContext(SearchContext);
  const [activePanel, setActivePanel] = useState(null);
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  //options state breakdown
  const [room, setRoom] = useState(location.state.options.room);
  const [adults, setAdults] = useState(location.state.options.adults);
  const [children, setChildren] = useState(location.state.options.children);
  //fetching data
  const { data, loading, reFetch } = useFetch(
    `http://localhost:8800/api/hotels?city=${destination}`,
  );
  //handling functions
  const handleClick = () => {
    const options = {
      room,adults,children
    }
    dispatch({
      type: "NEW_SEARCH",
      payload: {
        dates,
        destination,
        options,
      },
    });
    console.log(dates);
    reFetch(
      `http://localhost:8800/api/hotels?city=${destination}&min=${min || 0}&max=${max || 1000}`,
    );
  };
  //func
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
                      placeholder={adults}
                      onChange={(e) => setAdults(e.target.value)}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={children}
                      onChange={(e) => setChildren(e.target.value)}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={room}
                      onChange={(e) => setRoom(e.target.value)}
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
          {/* results */}
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

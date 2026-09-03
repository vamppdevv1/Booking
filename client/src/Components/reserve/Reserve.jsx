import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Button } from "../button/Button";
import { SearchContext } from "../../context/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./reserve.css";
export const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  //fetch
  const { data, loading } = useFetch(
    `http://localhost:8800/api/hotels/room/${hotelId}`,
  );
  const { dates } = useContext(SearchContext);
  //handle Functions
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value),
    );
  };
  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:8800/api/rooms/availability/${roomId}`,
            { dates: allDates },
          );
          return res.data;
        }),
      );
      setOpen(null);
    } catch (err) {}
  };
  //logic functions
  const getDatesInRange = (start, end) => {
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };
  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime()),
    );
    return !isFound;
  };
  //func
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(null)}
        />
        <span>Select your rooms:</span>
        {data.map((room) => {
          return (
            <div className="rItem" key={room._id}>
              <div className="rItemInfo">
                <div className="rTitle">{room.title}</div>
                <div className="rDesc">{room.desc}</div>
                <div className="rMax">
                  Max People: <b>{room.maxPeople}</b>{" "}
                </div>
                <div className="rPrice">Price: ${room.price}</div>
              </div>
              <div className="rSelectRooms">
                {room.roomNumber.map((roomNumber) => (
                  <div className="rRoom" key={roomNumber._id}>
                    <label htmlFor={roomNumber._id}>{roomNumber.number}</label>
                    <input
                      id={roomNumber._id}
                      type="checkbox"
                      value={roomNumber._id}
                      onChange={handleSelect}
                      disabled={!isAvailable(roomNumber)}
                      className="rCheck"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <Button
          text="Reserve Now!"
          variant="searchButton"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

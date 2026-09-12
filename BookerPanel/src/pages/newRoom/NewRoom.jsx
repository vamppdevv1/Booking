import "./newRoom.scss";
import { SideBar } from "../../components/sidebar/SideBar";
import { NavBar } from "../../components/navbar/NavBar";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const NewRoom = ({ inputs, title }) => {
  const navigate = useNavigate()
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const { data, loading } = useFetch("http://localhost:8800/api/hotels");
  const [rooms, setRooms] = useState([]);
  //handle
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumber = rooms.split(",").map((room) => ({ number: room }));
    try {
      await axios.post(
        `http://localhost:8800/api/rooms/${hotelId}`,
        { ...info, roomNumber },
        { withCredentials: true },
      );
      navigate("/rooms")
      toast.success("Room have been created successfully")
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  //func
  return (
    <div className="newRoom">
      <SideBar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label htmlFor={input.label}>{input.label}</label>
                    <input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      onChange={handleChange}
                    />
                  </div>
                );
              })}
              <div className="formInput">
                <label>Choose a hotel</label>
                <select
                  onChange={(e) => setHotelId(e.target.value)}
                  id="hotelId"
                >
                  {loading
                    ? "Loading"
                    : data &&
                      data.map((hotel) => {
                        return (
                          <option key={hotel._id} value={hotel._id}>
                            {hotel.name}
                          </option>
                        );
                      })}
                </select>
              </div>
              <div className="formInput">
                <label>Rooms</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="give comma between room numbers"
                  id=""
                ></textarea>
              </div>
              <button onClick={handleClick}>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

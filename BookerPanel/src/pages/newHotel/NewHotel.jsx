import "./newHotel.scss";
import { SideBar } from "../../components/sidebar/SideBar";
import { NavBar } from "../../components/navbar/NavBar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
export const NewHotel = ({ inputs, title }) => {
  const navigate = useNavigate()
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const { data, loading } = useFetch("http://localhost:8800/api/rooms");
  //handle
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setRooms(value);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/du7o3bbcv/image/upload",
            data,
          );
          const { url } = uploadRes.data;
          return url;
        }),
      );
      const newHotel = {
        ...info,
        rooms,
        photo: list,
      };
      await axios.post("http://localhost:8800/api/hotels", newHotel,{
        withCredentials:true
      });
      toast.success("Hotel created successfully")
      navigate("/hotels/new")
    } catch (err) {
       toast.error(err.response.data.message);
    }
  };
  //func
  return (
    <div className="newHotel">
      <SideBar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3ss9b7zeppIhhOv-SHlHh9Y9limkqksR-UmuDT7ngfo8wIM2nxWDnkgL&s=10"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  type="file"
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label htmlFor={input.label}>{input.label}</label>
                    <input
                      id={input.id}
                      type={input.type}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              })}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value="false">No</option>
                  <option value="true">yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Rooms</label>
                {
                  <select id="rooms" multiple onChange={handleSelect}>
                    {loading
                      ? "loading"
                      : data &&
                        data.map((room) => {
                          return (
                            <option key={room._id} value={room._id}>
                              {room.title}
                            </option>
                          );
                        })}
                  </select>
                }
              </div>
              <button onClick={handleClick}>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

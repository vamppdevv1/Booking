import "./newUser.scss";
import { SideBar } from "../../components/sidebar/SideBar";
import { NavBar } from "../../components/navbar/NavBar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
export const NewUser = ({ inputs, title }) => {
  const navigate = useNavigate()
  //states
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  //handle
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/du7o3bbcv/image/upload",
        data,
      );
      const { url } = uploadRes.data;
      const newUser = { ...info, img: url };
      await axios.post("http://localhost:8800/api/auth/register",newUser);
        toast.success("User created successfully");
        navigate("/users/new");
    } catch (err) {
       toast.error(err.response.data.message);
    }
  };
  console.log(info)
  //func
  return (
    <div className="newUser">
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
                file
                  ? URL.createObjectURL(file)
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
                  onChange={(e) => setFile(e.currentTarget.files[0])}
                  type="file"
                  style={{ display: "none" }}
                  
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label htmlFor={input.label}>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      onChange={handleChange}
                      id={input.id}
                    />
                  </div>
                );
              })}
              <button onClick={handleClick}>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

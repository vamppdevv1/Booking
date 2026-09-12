//import
import { useState } from "react";
import { Button } from "../../Components/button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import "./register.css";
//comp
export const Register = () => {
  //credentials
  const [credentials, setCredentials] = useState({
  });
  const navigate = useNavigate();
  //handling functions
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        credentials,
      );
      toast.success("Registered successfully")
      navigate("/");
    } catch (err) {
    
    }
  };
  console.log(credentials)
  //func
  return (
    <div className="login">
      <div className="loginContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
          required
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
          required
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
          required
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
          required
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
          required
        />
        <input
          type="tel"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className="lInput"
          required
        />
        <Button
          text="Register"
          variant="searchButton"
          onClick={handleClick}
          className="lButton"
        />
      </div>
    </div>
  );
};

//import
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../Components/button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
//comp
export const Login = () => {
  //credentials
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  //handling functions
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials,
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILED", payload: err.response.data });
    }
  };
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
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <Button
          text="Login"
          variant="searchButton"
          onClick={handleClick}
          className="lButton"
          disabled={loading}
        />

        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

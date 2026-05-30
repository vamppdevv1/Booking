import "./mailList.css";
import { Button } from "../button/Button";
export const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        SIgn up and we will send the best deals to you
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" />
        <Button text="Subscribe" variant="searchButton" />
      </div>
    </div>
  );
};

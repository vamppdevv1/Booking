import "./button.css";

export const Button = ({ variant, text, onClick }) => {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick}>
      {text}
    </button>
  );
};

import "./index.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [christmasDay, setChristmasDay] = useState(0);

  useEffect(() => {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25); // 11 è dicembre (gli indici dei mesi in JavaScript partono da 0)
    const timeDifference = christmas.getTime() - today.getTime();
    const days = Math.ceil(timeDifference / (1000 * 3600 * 24));

    setChristmasDay(days);
  }, []);
  return (
    <div className="Header">
      <div className="Header__Wrapper">
        <h1 className="Header__Title">Christmas Advent Calendar</h1>
        <p className="Header__Counter">
          There are <span>{christmasDay}</span> days left until Christmas.
        </p>
      </div>
    </div>
  );
};

export default Header;

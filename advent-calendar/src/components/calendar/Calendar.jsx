import Day from "../Day/";
import "./index.css";

const Calendar = ({ calendarData, setDayClick }) => {
  return (
    <div className="Calendar">
      <div className="Calendar__wrapper">
        {calendarData.map((day, key) => (
          <Day key={key} dayData={day} setDayClick={setDayClick} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;

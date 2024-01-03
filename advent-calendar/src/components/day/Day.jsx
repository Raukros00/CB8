import "./index.css";

const Day = ({ dayData, setDayClick }) => {
  const { id, classOfDay, isOpen } = dayData;

  const onHandleClickDay = (e) => {
    if (isOpen) return;

    e.target.classList.add("Day__Open");
    dayData.isOpen = true;
    setDayClick(dayData);
  };

  const today = new Date();

  return (
    <div
      className={`Day ${classOfDay} ${today.getDay() === id ? " Today" : ""}`}
      onClick={onHandleClickDay}
    >
      <h4>{id}</h4>
    </div>
  );
};

export default Day;

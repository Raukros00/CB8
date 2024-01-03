import "./index.css";

const DayPopUp = ({ dayData, setDayClick }) => {
  const { quote, author } = dayData;

  const handleCloseBtn = () => {
    setDayClick({});
  };

  return (
    <div className="DayPopUp">
      <div className="DayPopUp__Wrapper">
        <div className="DayPopUp__Info">
          <p className="DayPopUp__Quote">"{quote}"</p>
          <p className="DayPopUp__Author">{author}</p>
          <a className="DayPopUp__Btn" onClick={() => handleCloseBtn()}>
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default DayPopUp;

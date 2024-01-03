import Calendar from "./components/calendar";
import DayPopUp from "./components/dayPopUp";
import Header from "./components/header";
import { calendar } from "./mocks/calendar";
import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";

function App() {
  const [dayClick, setDayClick] = useState({});
  return (
    <div className="App">
      <div className="Snow">
        <div></div>
      </div>
      {Object.keys(dayClick).length > 0 ? (
        <DayPopUp dayData={dayClick} setDayClick={setDayClick} />
      ) : (
        ""
      )}
      <Header />
      <Calendar calendarData={calendar} setDayClick={setDayClick} />
      <Footer />
    </div>
  );
}

export default App;

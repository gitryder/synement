import { useState, useEffect } from "react";
import Board from "./Board";
import ReactGA from 'react-ga';
import "./styles/App.css";

ReactGA.initialize('G-P3SFV0S4LJ');
ReactGA.pageview('/homepage');

const App = () => {
  const today = new Date().toDateString().slice(3, 11);
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    .toDateString()
    .slice(3, 11);

  const [todayWorkData, setTodayWorkData] = useState([]);
  const [tomorrowWorkData, setTomorrowWorkData] = useState([]);
  const [afterWorkData, setAfterWorkData] = useState([]);

  useEffect(() => {
    const TODAY_URL = "https://synement.herokuapp.com/te/today";
    const TOMORROW_URL = "https://synement.herokuapp.com/te/tomorrow";
    const AFTER_URL = "https://synement.herokuapp.com/te/after";

    fetch(TODAY_URL)
      .then((response) => response.json())
      .then((data) => setTodayWorkData(data));

    fetch(TOMORROW_URL)
      .then((response) => response.json())
      .then((data) => setTomorrowWorkData(data));

    fetch(AFTER_URL)
      .then((response) => response.json())
      .then((data) => setAfterWorkData(sortObjectsByDate(data)));
  }, []);

  return (
    <div className="main-app-container">
      <h1 className="page-title">synement</h1>
      <p className="page-author">Made with ❤️ by Danyl & Gandharv</p>

      <div className="all-boards-container">
        <Board name="Today" date={today} workData={todayWorkData} />
        <Board name="Tomorrow" date={tomorrow} workData={tomorrowWorkData} />
        <Board name="Coming up" date="Next" workData={afterWorkData} />
      </div>
    </div>
  );
};

function sortObjectsByDate(data) {
  return (
      data.sort((a,b) => {
      const dateA = new Date(a.date_due), dateB = new Date(b.date_due);
      return dateA - dateB;
    })
  );
};

export default App;

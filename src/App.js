import { useState, useEffect } from "react";
import Board from "./Board";
import "./styles/App.css";

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
      <h1 className="page-title">
        <a
          class="gh-repo"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/grewscant/synement"
        >
          synement
        </a>
      </h1>
      <p className="page-author"><strong>Made with 💖 by </strong>
        <a
          class="gh-repo"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/grewscant/"
        >
        Danyl Fernandes
        </a>
      </p>
      <p className="page-author contributors">
        ✨ <strong>Contributors: </strong> 
        <a
          class="gh-repo"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ganm0r/"
        >
        Gandharv More
        </a>
      </p>

      <div className="all-boards-container">
        <Board name="Today" date={today} workData={todayWorkData} />
        <Board name="Tomorrow" date={tomorrow} workData={tomorrowWorkData} />
        <Board name="Coming up" date="Next" workData={afterWorkData} />
      </div>
    </div>
  );
};

function sortObjectsByDate(data) {
  return data.sort((a, b) => {
    const dateA = new Date(a.date_due),
      dateB = new Date(b.date_due);
    return dateA - dateB;
  });
}

export default App;

import { useState, useEffect } from 'react';
import Board from './Board';
import { AcademicYear as AY, Endpoints } from './Constants';
import * as PrefProvider from './PrefProvider';
import './styles/App.css';

const App = () => {
    const today = new Date().toDateString().slice(3, 11);
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        .toDateString()
        .slice(3, 11);

    const [todayWorkData, setTodayWorkData] = useState([]);
    const [tomorrowWorkData, setTomorrowWorkData] = useState([]);
    const [afterWorkData, setAfterWorkData] = useState([]);

    useEffect(() => {
        initPrefs();
        console.log(localStorage);
        const urls = getEndpointUrlsByYear();

        fetch(urls.today)
            .then(response => response.json())
            .then(data => setTodayWorkData(data));

        fetch(urls.tomorrow)
            .then(response => response.json())
            .then(data => setTomorrowWorkData(data));

        fetch(urls.after)
            .then(response => response.json())
            .then(data => setAfterWorkData(sortObjectsByDate(data)));
    }, []);

    return (
        <div className="main-app-container">
            <h1 className="page-title">
                <a
                    className="gh-repo"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/grewscant/synement">
                    synement
                </a>
            </h1>
            <p className="page-author">Made with 💖 by Danyl Fernandes</p>
            <p className="page-author contributors">
                ✨ <strong>Contributors:</strong> Gandharv More
            </p>

            <div className="all-boards-container">
                <Board name="Today" date={today} workData={todayWorkData} />
                <Board
                    name="Tomorrow"
                    date={tomorrow}
                    workData={tomorrowWorkData}
                />
                <Board
                    name="Coming up"
                    date="Next"
                    workData={afterWorkData}
                    showDateOnCards
                />
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

function initPrefs() {
    if (!PrefProvider.getYearPref()) PrefProvider.setYearPref(AY.TE);
}

function getEndpointUrlsByYear(year) {
    switch (year) {
        case AY.SE:
            return Endpoints.SE;
        case AY.TE:
            return Endpoints.TE;
        case AY.BE:
            return Endpoints.BE;
        default:
            return Endpoints.TE;
    }
}

export default App;

import { useState, useEffect } from 'react';
import Board from './Board';
import Settings from './Settings';
import { AcademicYear as AY, Endpoints } from './Constants';
import * as PrefProvider from './PrefProvider';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
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
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="main-app-container">
                        <div className="nav">
                            <h1 className="page-title">
                                <a
                                    className="gh-repo"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/grewscant/synement">
                                    synement
                                </a>
                            </h1>
                            <Link to="/settings">
                                <svg
                                    className="settings-icon"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 23L2.5 17.5V6.5L12 1L21.5 6.5V17.5L12 23ZM12 3.312L4.5 7.653V16.347L12 20.689L19.5 16.347V7.653L12 3.311V3.312ZM12 16C10.9395 15.997 9.92294 15.5759 9.171 14.828C8.02724 13.6839 7.68525 11.9635 8.30448 10.4689C8.92371 8.97436 10.3822 8 12 8C13.0603 8.00284 14.0765 8.42402 14.828 9.172C16.3895 10.734 16.3895 13.266 14.828 14.828C14.0764 15.5757 13.0602 15.9968 12 16ZM12 10C11.0458 9.9998 10.2244 10.6736 10.0381 11.6094C9.85175 12.5452 10.3524 13.4823 11.2339 13.8476C12.1153 14.2129 13.1321 13.9047 13.6623 13.1114C14.1926 12.3182 14.0886 11.2608 13.414 10.586C13.0398 10.2098 12.5307 9.99879 12 10Z"
                                        fill="#FFFFFF"></path>
                                </svg>
                            </Link>
                        </div>
                        <p className="page-author">
                            Made with 💖 by Danyl Fernandes
                        </p>
                        <p className="page-author contributors">
                            ✨ <strong>Contributors:</strong> Gandharv More
                        </p>

                        <div className="all-boards-container">
                            <Board
                                name="Today"
                                date={today}
                                workData={todayWorkData}
                            />
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
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
            </Switch>
        </Router>
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

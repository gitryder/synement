import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as PrefProvider from './PrefProvider';
import { AcademicYear as AY } from './Constants';
import './styles/Settings.css';

const Settings = () => {
    const history = useHistory();
    const [selectedYear, setSelectedYear] = useState(AY.TE);

    useEffect(() => {
        console.log(localStorage);
        setSelectedYear(PrefProvider.getYearPref());
    }, []);

    return (
        <div className="main-app-container">
            <h1 className="settings-page-title">settings</h1>
            <hr />

            <div className="all-settings-container">
                <div className="setting">
                    <input
                        type="radio"
                        name="setting-btn"
                        id="year-se"
                        checked={selectedYear === AY.SE}
                        onClick={() => {
                            setSelectedYear(AY.SE);
                            PrefProvider.setYearPref(AY.SE);
                            history.push('/');
                            window.location.reload();
                        }}
                        readOnly
                    />
                    <label htmlFor="year-se">SE</label>

                    <input
                        type="radio"
                        name="setting-btn"
                        id="year-te"
                        checked={selectedYear === AY.TE}
                        onClick={() => {
                            setSelectedYear(AY.TE);
                            PrefProvider.setYearPref(AY.TE);
                            history.push('/');
                            window.location.reload();
                        }}
                        readOnly
                    />
                    <label htmlFor="year-te">TE</label>

                    <input
                        type="radio"
                        name="setting-btn"
                        id="year-be"
                        checked={selectedYear === AY.BE}
                        onClick={() => {
                            setSelectedYear(AY.BE);
                            PrefProvider.setYearPref(AY.BE);
                            history.push('/');
                            window.location.reload();
                        }}
                        readOnly
                    />
                    <label htmlFor="year-be">BE</label>
                </div>
            </div>
        </div>
    );
};

export default Settings;

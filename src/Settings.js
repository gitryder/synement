import { useState, useEffect } from 'react';
import * as PrefProvider from './PrefProvider';
import { AcademicYear as AY } from './Constants';
import './styles/Settings.css';

const Settings = () => {
    const [selectedYear, setSelectedYear] = useState(AY.TE);

    useEffect(() => {
        console.log(localStorage);
        setSelectedYear(PrefProvider.getYearPref());
    }, []);

    return (
        <div className="main-app-container">
            <h1 className="page-title">settings</h1>
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
                            PrefProvider.setYearPref(AY);
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

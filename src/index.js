import React from 'react';
import ReactDOM from 'react-dom';
import GA4React from 'ga-4-react';
import App from './App';

const ga4react = new GA4React('G-MMZFM66Y0X');

(async _ => {
    await ga4react
        .initialize()
        .then(res => console.log('Successfully started.'))
        .catch(err => console.log('Failure starting.'))
        .finally(() => {
            ReactDOM.render(<App />, document.getElementById('root'));
        });
})();

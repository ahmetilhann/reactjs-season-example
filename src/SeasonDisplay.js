import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Let hits beach',
    iconName: 'sun',
  },
  winter: {
    text: 'Burry it is chilly',
    iconName: 'sun',
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];


  return (
    <div className={`season-display ${season}`}>
      <i className={`massive icon-left ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive icon-right ${iconName} icon`} />
    </div>
  );

}

export default SeasonDisplay;
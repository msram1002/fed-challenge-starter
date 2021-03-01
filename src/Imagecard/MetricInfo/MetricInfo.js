import React from 'react'
import './MetricInfo.css';
import AccessAlarmRoundedIcon from '@material-ui/icons/AccessAlarmRounded';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';

function metricInfo({metricInfo}) {

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function displayMetrics(imagePath) {
    if (imagePath.isMetric) {
      return (
        <div className="card-container__info__metrics">
          <span><AccessAlarmRoundedIcon className="metric_icon" fontSize="small" />{randomNumber(30,60)}:{randomNumber(30,60)}</span>
          <span><DirectionsRunRoundedIcon className="metric_icon" fontSize="small" />{randomNumber(1000,10000)} m</span>
        </div>
      );
    }
  }


  return (
    <div>
      {displayMetrics(metricInfo)}
    </div>
  );
}

export default metricInfo;

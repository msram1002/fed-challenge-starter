import React from 'react'
import './MetricInfo.css';
import AccessAlarmRoundedIcon from '@material-ui/icons/AccessAlarmRounded';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';

function metricInfo({metricInfo}) {
  // We can also use randomNumber function to gnerate values here for time and distance
  // function randomNumber(min, max) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // }

  function displayMetrics(imagePath) {
    if (imagePath.isMetric) {
      return (
        <div className="card-container__info__metrics">
          <span><AccessAlarmRoundedIcon className="metric_icon" fontSize="small" />{`${imagePath.time}`}</span>
          <span><DirectionsRunRoundedIcon className="metric_icon" fontSize="small" />{`${imagePath.distance}`} m</span>
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

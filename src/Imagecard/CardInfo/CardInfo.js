import React from 'react'
import './CardInfo.css';

function CardInfo({cardInfo}) {
  
  function correctName(imgPath) {
    let correctedName = (imgPath.trainerImg.split(".")[0]).split("-");
    correctedName = correctedName.splice(0, correctedName.length - 1);
    return correctedName.join(" ");
  }

  return (
    <div className="card-container__info__data">
      <p className="card-container__info__data__title">{correctName(cardInfo)}</p>
      <img src={`images/${cardInfo.trainerImg}`} alt={correctName(cardInfo)}/>
    </div>
  );
}

export default CardInfo;

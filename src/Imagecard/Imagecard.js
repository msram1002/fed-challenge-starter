import React, { useState, useContext} from 'react';
import CardInfo from './CardInfo/CardInfo';
import MetricInfo from './MetricInfo/MetricInfo';
import ViewDetails from './ViewDetails/ViewDetails';
import {AssetContext} from '../AssetContext'
import './Imagecard.css';

function Imagecard () {
  
  const [images, setImages] = useContext(AssetContext);

  return (
    <div className="cards">
      {images.map((image, index) => (
        <div key={index} className="card-container">
          <img className="card-container__image" src={`images/${image.thumbImg}`} alt={image.thumbImg}/>
          <div className="card-container__info">
            <CardInfo cardInfo={image}/>
            <MetricInfo metricInfo={image}/>
            <ViewDetails hasMoreData={image}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Imagecard;

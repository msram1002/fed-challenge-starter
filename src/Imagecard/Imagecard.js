import React, { useState, useContext} from 'react';
import CardInfo from './CardInfo/CardInfo';
import MetricInfo from './MetricInfo/MetricInfo';
import ViewDetails from './ViewDetails/ViewDetails';
import {AssetContext} from '../AssetContext'
import './Imagecard.css';
import { CompareArrowsOutlined } from '@material-ui/icons';

function Imagecard () {
  
  const [images, setImages] = useContext(AssetContext);

  const handleCard = (i) => {
    const array = [...images];
    array.forEach(function (arrayItem) {
      arrayItem.isSelected = false;
    });
    array[i] = {...images[i], isSelected: true };
    setImages(array);
  }
  
  return (
    <div className="cards">
      {images.map((image, index) => (
        <div key={index} className={`card-container ${image.isSelected && "cards_selected"}`} onClick={() => handleCard(index)}>
          <img className="card-container__image" src={`images/${image.thumbImg}`} alt={image.thumbImg}/>
          <div className="card-container__info">
            <CardInfo cardInfo={image}/>
            <MetricInfo metricInfo={image}/>
            <ViewDetails hasMoreData={image}/>
            <div>
              {JSON.parse(`${image.isSelected}`) &&
                <p>Card Selected: YES</p>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Imagecard;

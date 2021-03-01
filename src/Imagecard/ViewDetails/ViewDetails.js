import React from 'react';
import './ViewDetails.css';

function ViewDetails({hasMoreData}) {
  
  function displayMoreDetails(imagePath) {
    if (imagePath.hasMoreData) {
      return (
        <div className="card-container__info__moredetails">
          view details
        </div>
      );
    }
  }

  return (
    <div>
      {displayMoreDetails(hasMoreData)}
    </div>
  )
}

export default ViewDetails;

import React, {useState, createContext} from 'react';

export const AssetContext = createContext();

export const AssetProvider = props => {
  const [images, setImages] = useState([
    {
      thumbImg: 'lake-inniscarra-thumb.jpg',
      trainerImg: 'lake-inniscarra-trainer.jpg',
      isMetric: true,
      hasMoreData: true
    },
    {
      thumbImg: 'performance-series-thumb.jpg',
      trainerImg: 'performance-series-trainer.jpg',
      isMetric: false,
      hasMoreData: false
    },
    {
      thumbImg: 'slow-pulls-thumb.jpg',
      trainerImg: 'slow-pulls-trainer.jpg',
      isMetric: true,
      hasMoreData: false
    },
    {
      thumbImg: '20-minutes-to-toned-thumb.jpg',
      trainerImg: '20-minutes-to-toned-trainer.jpg',
      isMetric: false,
      hasMoreData: false
    },
    {
      thumbImg: 'charles-race-thumb.jpg',
      trainerImg: 'charles-race-trainer.jpg',
      isMetric: true,
      hasMoreData: false
    },
    {
      thumbImg: 'full-body-hiit-thumb.jpg',
      trainerImg: 'full-body-hiit-trainer.jpg',
      isMetric: false,
      hasMoreData: false
    },
    {
      thumbImg: 'kafue-river-thumb.jpg',
      trainerImg: 'kafue-river-trainer.jpg',
      isMetric: true
    },
    {
      thumbImg: 'shred-and-burn-thumb.jpg',
      trainerImg: 'shred-and-burn-trainer.jpg',
      isMetric: false,
      hasMoreData: false
    }
  ]);

  return (
    <AssetContext.Provider value={[images, setImages]}>
      {props.children}
    </AssetContext.Provider>
  );
}
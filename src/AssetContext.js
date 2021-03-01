import React, {useState, createContext} from 'react';

export const AssetContext = createContext();

export const AssetProvider = props => {
  const [images, setImages] = useState([
    {
      thumbImg: 'lake-inniscarra-thumb.jpg',
      trainerImg: 'lake-inniscarra-trainer.jpg',
      isMetric: true,
      hasMoreData: true,
      isSelected: false,
      time: "50:37",
      distance: 1741
    },
    {
      thumbImg: 'performance-series-thumb.jpg',
      trainerImg: 'performance-series-trainer.jpg',
      isMetric: false,
      hasMoreData: false,
      isSelected: false,
      time: "NA",
      distance: null
    },
    {
      thumbImg: 'slow-pulls-thumb.jpg',
      trainerImg: 'slow-pulls-trainer.jpg',
      isMetric: true,
      hasMoreData: false,
      isSelected: false,
      time: "41:15",
      distance: 1520
    },
    {
      thumbImg: '20-minutes-to-toned-thumb.jpg',
      trainerImg: '20-minutes-to-toned-trainer.jpg',
      isMetric: false,
      hasMoreData: false,
      isSelected: false,
      time: "NA",
      distance: null
    },
    {
      thumbImg: 'charles-race-thumb.jpg',
      trainerImg: 'charles-race-trainer.jpg',
      isMetric: true,
      hasMoreData: false,
      isSelected: false,
      time: "32:49",
      distance: 1489
    },
    {
      thumbImg: 'full-body-hiit-thumb.jpg',
      trainerImg: 'full-body-hiit-trainer.jpg',
      isMetric: false,
      hasMoreData: false,
      isSelected: false,
      time: "NA",
      distance: null
    },
    {
      thumbImg: 'kafue-river-thumb.jpg',
      trainerImg: 'kafue-river-trainer.jpg',
      isMetric: true,
      hasMoreData: false,
      isSelected: false,
      time: "35:45",
      distance: 1896
    },
    {
      thumbImg: 'shred-and-burn-thumb.jpg',
      trainerImg: 'shred-and-burn-trainer.jpg',
      isMetric: false,
      hasMoreData: false,
      isSelected: false,
      time: "NA",
      distance: null
    }
  ]);

  return (
    <AssetContext.Provider value={[images, setImages]}>
      {props.children}
    </AssetContext.Provider>
  );
}
import React from 'react';
import './App.css';
import Imagecard from './Imagecard/Imagecard';
// import assets from './assets';
import {AssetProvider} from './AssetContext';

function App() {
  
  return (
    <AssetProvider>
      <div className="App">
        <h1 className="title"> iFit - FED Challenge </h1>
        {/* Earlier used to get data from assets.js */}
        {/* <Imagecard imagePaths={assets}/> */}
        {/* Now using state mgmt from AssetContext */}
        <Imagecard />
      </div>
    </AssetProvider>
  );
}

export default App;

import React from 'react';
import Map1 from './Map1';
import DownloadApp from './DownloadApp';
import GISmap from "./GISmap";

function App() {
  return (
    <div align="center">
    {/* <Hosting /> */}
      <Map1 />
      <DownloadApp/>
        <GISmap></GISmap>
    </div>
  );
}

export default App;

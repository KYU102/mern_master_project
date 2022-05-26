import './App.css';
import React, { useState } from "react";
import Homepage from './views/Homepage';
import List from './views/List';
import Stream from './views/Stream';
import StreamList from './views/StreamList';
import Slide from './components/Slide';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [refreshState, setRefresh] = useState(false)
  // REFRESH
  const refresh = () => {
    setRefresh(!refreshState)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage refreshState={refreshState} refresh={refresh}/>}/>
        <Route path="/list" element={<List />}/>
        <Route path="/stream_list" element={<StreamList />}/>
        <Route path="/slide" element={<Slide />}/>
        <Route path="/:gamer_id/" element={<Stream />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

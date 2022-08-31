import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationList';
import Location from './components/Location';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Characters from "Rick and Morty"</h1>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/character" element={<CharacterList />} />
        <Route path="/location" element={<LocationList />} />
        <Route path="/location/:locationId/*" element={<Location />} />
        <Route path="/character/:characterId/*" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;


import './App.css';
import Scene from './components/Scene/Scene';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Routes>
        <Route path="/scene" element={<Scene />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;

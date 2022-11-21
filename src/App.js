import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Stack from './components/Stack/Stack';
import Scene from './components/Scene/Scene';
import { Portfolio } from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <About />
      <Portfolio />
      <Stack />
      <Scene />
    </div>
  );
}

export default App;

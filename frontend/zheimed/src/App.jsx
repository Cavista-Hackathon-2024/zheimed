import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/Landingpage';
import { DemoPage } from './pages/demopage';
import {DemoConsole} from './pages/DemoConsole';
import './index.css';

function App() {
  return (
    <>
      <Routes>
          <Route path='/'  element={<LandingPage />}/>
          <Route path="/demo" element={<DemoPage />}/>
          <Route path='/demo/console' element={<DemoConsole/>}/>

      </Routes>
    </>
  )
}

export default App

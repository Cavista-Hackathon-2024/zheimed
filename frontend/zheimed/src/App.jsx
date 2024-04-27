import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/Landingpage';
import { DemoPage } from './pages/demopage';
import './index.css';

function App() {
  return (
    <>
      <Routes>
          <Route path='/'  element={<LandingPage />}></Route>
          <Route path="/demo" element={<DemoPage />}></Route>
      </Routes>
    </>
  )
}

export default App

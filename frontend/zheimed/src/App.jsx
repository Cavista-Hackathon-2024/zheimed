import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/Landingpage';
import { DemoPage } from './pages/demopage';
import Form from './pages/form';
import RunDemo from './pages/runDemo';
import './index.css';

function App() {
  return (
    <>
      <Routes>
          <Route path='/'  element={<LandingPage />}></Route>
          <Route path="/demo" element={<DemoPage />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/rundemo' element={<RunDemo />}></Route>
      </Routes>
    </>
  )
}

export default App

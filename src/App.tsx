import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Generated from './components/Generated';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generated' element={<Generated />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

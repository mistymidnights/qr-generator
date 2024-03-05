import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Generated from './components/Generated';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generated' element={<Generated />} />
        </Routes>
        <div className='rrss'>
          {' '}
          <div>
            <a
              className='rrss-icon'
              href='https://www.linkedin.com/in/cristinadeveloper/'
              target='_blank'
              title='Perfil Linkedin'
            >
              <BsLinkedin />
            </a>
          </div>
          <div>
            <a
              className='rrss-icon'
              href='https://github.com/mistymidnights/qr-generator'
              target='_blank'
              title='Repositorio GitHub'
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import './Home.css';
import Background from '../../public/bg-illustration.svg';
import Logo from '/logo-qr-generator.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const notifyErr = () => toast.error('Tienes que introducir una URL válida');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(text);
  };

  const passToQr = () => {
    if (
      text === ' ' ||
      text === null ||
      !text.match(/^https?:\/\/([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/i)
    ) {
      notifyErr();
    } else {
      localStorage.setItem('text', text);
      navigate('/generated', { state: { text: text } });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Verificar si la tecla presionada es Enter (código 13)
    if (event.key === 'Enter') {
      passToQr();
    }
  };

  return (
    <>
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{ top: 120 }}
        toastOptions={{
          className: 'toast-notify',
          duration: 4000,
          style: {
            color: '#9b1919',
            background: '#dad5dc',
          },
        }}
      />
      <div className='background'>
        <img src={Background} alt='' />
      </div>
      <div className='main'>
        <img className='logo my-5' src={Logo} alt='' />
        <div className='input-container'>
          <input
            id='text-input'
            type='text'
            placeholder='Enter an url'
            onChange={handleInput}
            onKeyDown={handleKeyPress}
          />
          <button onClick={passToQr}>QR Code</button>
        </div>
      </div>
    </>
  );
};

export default Home;

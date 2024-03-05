import './Generated.css';
import Background from '/bg-illustration.svg';
import QRCode from 'react-qr-code';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { IoIosDownload } from 'react-icons/io';
import { TiArrowBack } from 'react-icons/ti';
import html2canvas from 'html2canvas';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Generated: React.FC = () => {
  const location = useLocation();
  const text = location.state?.text || '';
  const canvasRef = useRef(null);

  const notifyDownload = () =>
    toast('Cofigo QR descargado!', {
      duration: 3000,
      style: {
        borderRadius: '10px',
        background: '#3f9147',
        color: '#e7e7e7',
      },
    });

  const notifyErrDw = () =>
    toast('Error al descargar imagen.', {
      style: {
        borderRadius: '10px',
        background: '#9b1919',
        color: '#dad5dc',
      },
    });

  const downloadImage = async () => {
    const canvas = canvasRef.current;

    if (canvas) {
      try {
        const canvasImage = await html2canvas(canvas);
        const imageURL = canvasImage.toDataURL('image/png');

        const a = document.createElement('a');
        a.href = imageURL;
        a.download = 'custom-qr.png';
        a.click();
        notifyDownload();
      } catch (error) {
        notifyErrDw();
        console.error('Error generating image:', error);
      }
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
      />
      <div className='background'>
        <img src={Background} alt='' />
      </div>
      <div className='container text-center qr-main'>
        <div className='row'>
          <div className='qr-container'>
            <div className='card-qr'>
              <div className='canvas' ref={canvasRef}>
                <QRCode value={text} />
              </div>
            </div>
            <p className='text-generated'>
              Texto generado para: <span>{text}</span>
            </p>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 d-flex justify-content-center gap-4'>
            <button className='btn-blue' onClick={downloadImage}>
              Download <IoIosDownload className='icon' />
            </button>
          </div>
          <div className='row pt-4'>
            <div className='col-12'>
              <Link to={'/'}>
                <button className='btn-back'>
                  Generar otro código QR <TiArrowBack className='icon' />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generated;

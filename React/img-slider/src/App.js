import ImageSlider from './ImageSlider';
import Modal from './Modal';
import { useState } from 'react';

function App() {

  const [modalStatus, setModalStatus] = useState(false);

  return (
    <div className="main-container">
      <button className="openModalBtn" onClick={() => { setModalStatus(true); }}>Open</button>
      {modalStatus && <Modal changeModalStatus={ setModalStatus } />}
    </div>
  );
}

export default App;

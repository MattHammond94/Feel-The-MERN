import ImageSlider from "./ImageSlider";


function Modal({ changeModalStatus }) {

  const slides = [
    { url: 'http://localhost:3000/1.jpg', title: 'Artwork-1' },
    { url: 'http://localhost:3000/2.jpg', title: 'Artwork-2' },
    { url: 'http://localhost:3000/3.jpg', title: 'Artwork-3' },
    { url: 'http://localhost:3000/4.jpg', title: 'Artwork-4' },
    { url: 'http://localhost:3000/5.jpg', title: 'Artwork-5' }
  ]

  const containerStyles = {
    width: '500px',
    height: '600px',
    margin: '0 auto',
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="closeBtn" onClick={ () => { changeModalStatus(false); }}>&#215;</button>
        <div className="body">
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
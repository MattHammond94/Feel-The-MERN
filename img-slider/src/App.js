import ImageSlider from './ImageSlider';

function App() {

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
    margin: '0 auto'
  };

  return (
    <div>
      <h1>Image Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;

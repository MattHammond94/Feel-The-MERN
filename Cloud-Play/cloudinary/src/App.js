import { useState } from 'react'

function App() {
  const [file, setFile] = useState('');
  const [image, setImage] = useState('');

  const previewFiles = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
    }

    reader.onloadend = () => {
      console.log(image);
      setImage(reader.result)
    }
  }

  const handleChange = (e) => {
    const file = e.target.files[0]
    setFile(file);
    previewFiles(file)
  }

  const handleSubmit = (e) => {
    // console.log(e.target.files);
  }

  return (
    <>
      <div className="App">
        <h1>Cloudinary</h1>
        <form onSubmit={e => handleSubmit(e)}>
          <label htmlFor="fileInput">Upload photo</label>
          <br />
          <input type="file" id="fileInput" onChange={e => handleChange(e)} required
          accept="image/png, image/jpeg, image/jpg, image/jfif" />
          <button className="butt">Submit</button>
        </form>
      </div>
      <div className="img">
        <img src={image} alt="" />
      </div>
    </>
  );
}

export default App;

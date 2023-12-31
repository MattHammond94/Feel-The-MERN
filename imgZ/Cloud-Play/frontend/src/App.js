import { useState } from 'react'
import axios from 'axios';
import Img from './Img';

function App() {
  const [file, setFile] = useState('');
  const [image, setImage] = useState('');
  const [uploadedImg, setUploadedImg] = useState('');

  const previewFiles = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file)
    }

    reader.onloadend = () => {
      setImage(reader.result)
    }
    
    console.log(image);
  }

  const handleChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
    setFile(file);
    previewFiles(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:4444/", {
      image: image
    })

    console.log(result)

    try { 
      const uploadedImg = result.data.public_id;
      setUploadedImg(uploadedImg);
    } catch(err) {
      console.log(err);
    }
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
          <br />
          <button className="butt">Submit</button>
        </form>
      </div>
      <div className="img">
        <h1>This image is a base64 convert of uploaded file:</h1>
        <img src={image} alt="" />
        <br />
        <h1>This image came from cloudinary:</h1>
        <Img uploadedImg={uploadedImg}/>
      </div>
    </>
  );
}

export default App;

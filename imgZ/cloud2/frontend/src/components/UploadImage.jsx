import { useState } from "react"
import axios from 'axios';

export default function UploadImage() {

  const [loading, setLoading] = useState(false)
  const [url , setUrl] = useState('')

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      }

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
      setLoading(true);
      axios
       .post('http://localhost:44444/uploadImage', { image: base64 })
       .then((res) => {
        setUrl(res.data);
        alert("image uploaded");
       })
       .then(() => setLoading(false))
       .catch(console.log);
  }


  function UploadInput() {
    return (
      <div>
        <label htmlFor="file">
          <p> Upload file - SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </label>
        <input onChange={ uploadImage } type="file"/>
      </div>
    );
  }

  return (
    <div>
        <h2>Upload photo</h2>
        <UploadInput />
    </div>
  )
}

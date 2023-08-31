import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { Transformation } from '@cloudinary/url-gen';



const Img = ({ uploadedImg }) => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dablfnllx'
    }
  });

  const myImage = cld.image(uploadedImg)


  // '46ce2dd498acbe61afbb4ed029a2284d'

  return (
    <>
      <AdvancedImage cldImg={ myImage }/>
    </>
  )
}

export default Img
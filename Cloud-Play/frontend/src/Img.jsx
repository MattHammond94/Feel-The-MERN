import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { Transformation } from '@cloudinary/url-gen';

import { sepia } from '@cloudinary/url-gen/actions/effect';
import { thumbnail, scale } from '@cloudinary/url-gen/actions/resize';
import { opacity, brightness } from '@cloudinary/url-gen/actions/adjust';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'

const Img = ({ uploadedImg }) => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dablfnllx'
    }
  });

  const myImage = cld.image(uploadedImg)

  // '46ce2dd498acbe61afbb4ed029a2284d'

  const myTransformedImage = cld.image(uploadedImg)
  myTransformedImage
  .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))
  .effect(sepia()).adjust(opacity(75))
  .resize(scale(1000))
  .adjust(brightness(10))

  return (
    <>
      <AdvancedImage cldImg={ myImage }/>
      <AdvancedImage cldImg={ myTransformedImage } />
    </>
  )
}

export default Img
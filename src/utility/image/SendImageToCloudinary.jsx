// import React from 'react';
// import { Cloudinary } from '@cloudinary/url-gen';
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
// import { AdvancedImage } from '@cloudinary/react';




// const SendImageToCloudinary = async(file) => {

//     const cloudName = `${import.meta.env.VITE_CLOUDNAME}`; 
//     const uploadPreset = `${import.meta.env.VITE_UPLOADPRESET}`; 
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', uploadPreset);
  
//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to upload image');
//       }
  
//       const data = await response.json();
//       return data.secure_url; // Return the URL of the uploaded image
//     } catch (error) {
//       console.error('Error uploading to Cloudinary:', error);
//       return null;
//     }
    
 
// };

// export default SendImageToCloudinary;




// Import necessary libraries
import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const SendImageToCloudinary  = async (file) => {
  const cloudName = `${import.meta.env.VITE_CLOUDNAME}`; 
  const uploadPreset = `${import.meta.env.VITE_UPLOADPRESET}`; 

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.secure_url; // Return the URL of the uploaded image
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    return null;
  }
};

const App = () => {
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const cld = new Cloudinary({ cloud: { cloudName} });

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = await SendImageToCloudinary (file);
      if (imageUrl) {
        setUploadedImageUrl(imageUrl);
      }
    }
  };

  const img = uploadedImageUrl
    ? cld
        .image(uploadedImageUrl)
        .format('auto')
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500))
    : null;

  return (
    <div>
      <h1>Upload and Display Image</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {uploadedImageUrl && img && <AdvancedImage cldImg={img} />}
    </div>
  );
};

export default App;

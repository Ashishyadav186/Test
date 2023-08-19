import React from 'react'
import { storage, db } from 
import './ImageUpload.css';
import { useState } from 'react';




function imageUpload(username) {
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
        };
    
        const handleChange = (e) => {
            if (e.target.files[0]) {
                setImage(e.target.files[0]);
            }
        };
        const handleUpload = () => {
            constupload = storage.ref('images/${images.name')
        }
        }
  return (
    <div>
      
    </div>
  )
}

export default imageUpload

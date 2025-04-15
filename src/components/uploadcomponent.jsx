// frontend/src/components/UploadComponent.jsx

import React, { useState } from 'react';
import { storage } from '../firebase/firebaseconfig.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert('Please log in to upload files.');
      return;
    }

    const storageRef = ref(storage, `uploads/${user.uid}/${file.name}`);
    const uploadTask = uploadBytes(storageRef, file);

    uploadTask
      .then((snapshot) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        setDownloadURL(url);
        alert('File uploaded successfully!');
      })
      .catch((error) => {
        console.error('Upload Error:', error);
        alert('File upload failed.');
      });
  };

  return (
    <div className="upload-container">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="upload-button">
        Upload
      </button>
      {downloadURL && (
        <div className="uploaded-file">
          <p>
            File URL:{' '}
            <a href={downloadURL} target="_blank" rel="noopener noreferrer">
              {downloadURL}
            </a>
          </p>
          <img src={downloadURL} alt="Uploaded" style={{ maxWidth: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default UploadComponent;
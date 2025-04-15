// frontend/src/components/Profile.jsx

import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/usercontext.jsx';
import { auth } from '../firebase/firebaseconfig.js';
import { updateProfile } from 'firebase/auth';
import { FaUserCircle, FaCamera } from 'react-icons/fa';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [photoURL, setPhotoURL] = useState(user.photoURL || '');
  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      // Update user context
      setUser({ ...auth.currentUser });
      setMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Failed to update profile.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="relative">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
            ) : (
              <FaUserCircle className="w-32 h-32 text-gray-400" />
            )}
            <label
              htmlFor="photoURL"
              className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-700 transition"
              title="Change Profile Picture"
            >
              <FaCamera className="text-white" />
            </label>
            <input
              type="file"
              id="photoURL"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setPhotoURL(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>

          {/* User Information */}
          <h2 className="mt-4 text-2xl font-semibold text-white">
            {user.displayName || 'Your Name'}
          </h2>
          <p className="text-gray-400">{user.email}</p>
        </div>

        {/* Edit Profile Section */}
        <div className="mt-6">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition flex items-center justify-center"
            >
              Edit Profile
            </button>
          ) : (
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              {/* Display Name Input */}
              <div>
                <label htmlFor="displayName" className="block text-gray-300 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Profile Picture URL Input (Optional) */}
              {/* 
              <div>
                <label htmlFor="photoURL" className="block text-gray-300 mb-1">
                  Profile Picture URL
                </label>
                <input
                  type="url"
                  id="photoURL"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              */}

              {/* Message Display */}
              {message && (
                <p
                  className={`text-center ${
                    message.includes('success') ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {message}
                </p>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="w-1/2 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
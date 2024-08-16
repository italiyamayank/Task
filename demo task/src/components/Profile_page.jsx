import React, { useState } from 'react';
import Profile_card from './Profile_card';

const Profile_page = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software developer and tech enthusiast.",
    profileImage: "https://example.com/profile.jpg"
  });

  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedUser({ ...updatedUser, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser(updatedUser);
    setEditMode(false);
    console.log('Profile updated:', updatedUser);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {!editMode ? (
        <>
          <Profile_card user={user} />
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </button>
        </>
      ) : (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Bio</label>
            <textarea
              name="bio"
              value={updatedUser.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile_page;

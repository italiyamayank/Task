import React from 'react'

const Profile_card = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover object-center" src={user.profileImage} alt={user.name} />
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="mt-2 text-gray-800">{user.bio}</p>
      </div>
    </div>
  )
}

export default Profile_card

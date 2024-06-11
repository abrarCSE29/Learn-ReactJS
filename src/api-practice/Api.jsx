import React, { useEffect, useState } from 'react'

export default function Api(props) {
  const profiles = props.profiles;
  return (
    <div>
      <h1>This is Api Component</h1>
      {
        
        profiles.map((profile, index) =>
          <div key={index}>
            {/* <p>{profile.bio.length}</p> */}
            <div>
              <img src={profile.profilePic} alt="profile" />
            </div>
            <p>User Name : {profile.username}</p>
            <p>UserID : {profile.userId}</p>
            <p>User Email : {profile.email}</p>
            {profile.bio.length > 0 && (
              <p>User Bio : {profile.bio}</p>
            )
            }
            
            <button type="button" onClick={()=>props.handleProfileClick(profile.username)}>Click Me</button>
          </div>
        )
      }
    </div>
  )
}

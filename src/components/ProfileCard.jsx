import React from 'react';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-avatar"
        />
        <h1 className="profile-name">Wittayarat123</h1>
        <p className="profile-role">Software Developer</p>
      </div>
      <div className="profile-body">
        <p className="profile-description">
          Passionate about building secure and modern web applications.
        </p>
        <button className="profile-button">Contact Me</button>
      </div>
    </div>
  );
}

export default ProfileCard;
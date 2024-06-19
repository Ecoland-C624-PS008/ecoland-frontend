// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../api/authSlice";

const Profile = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');

  const handleSaveChanges = () => {
    // Logika untuk menyimpan perubahan ke server atau local storage
    console.log('Changes saved!');
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const cardStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const textareaStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'vertical',
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const profileImageStyle = {
    display: 'block',
    margin: '0 auto 20px',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  return (
    <div style={cardStyle}>
      <h1 style={headerStyle}>Profile Page</h1>

      {/* Foto Profil */}
      <div>
        <img src="url_ke_foto_profil" alt="Foto Profil" style={profileImageStyle} />
      </div>

      {/* Form Isian Profil */}
      <form>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Nama Lengkap:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Nomor Telepon:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Situs Web:</label>
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Biodata:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            style={textareaStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Alamat:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={textareaStyle}
          />
        </div>
        <button type="button" onClick={handleSaveChanges} style={buttonStyle}>
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
};

export default Profile;
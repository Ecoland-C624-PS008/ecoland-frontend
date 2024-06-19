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

  return (
    <div>
      <h1>Profile Page</h1>

      {/* Foto Profil */}
      <div>
        <img src="url_ke_foto_profil" alt="Foto Profil" />
      </div>

      {/* Form Isian Profil */}
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Nama Lengkap:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Nomor Telepon:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Situs Web:</label>
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div>
          <label>Biodata:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div>
          <label>Alamat:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSaveChanges}>
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
};

export default Profile;

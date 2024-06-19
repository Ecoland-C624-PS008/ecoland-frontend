// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const FormEditLands = () => {
  const [nama_lahan, setNamaLahan] = useState("");
  const [nama_pemilik, setNamaPemilik] = useState("");
  const [harga_sewa, setHargaSewa] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [tanggal_awal, setTanggalAwal] = useState("");
  const [tanggal_selesai, setTanggalSelesai] = useState("");
  const [luas_lahan, setLuasLahan] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getLandById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/lands/${id}`
        );
        setNamaLahan(response.data.nama_lahan);
        setNamaPemilik(response.data.nama_pemilik);
        setHargaSewa(response.data.harga_sewa);
        setLokasi(response.data.lokasi);
        setTanggalAwal(response.data.tanggal_awal);
        setTanggalSelesai(response.data.tanggal_selesai);
        setLuasLahan(response.data.luas_lahan);
        setKeterangan(response.data.keterangan);
        setStatus(response.data.status);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getLandById();
  }, [id]);

  const updateLand = async (e) => {
    e.preventDefault();

    const data = {};
    if (nama_lahan) data.nama_lahan = nama_lahan;
    if (nama_pemilik) data.nama_pemilik = nama_pemilik;
    if (harga_sewa) data.harga_sewa = harga_sewa;
    if (lokasi) data.lokasi = lokasi;
    if (tanggal_awal) data.tanggal_awal = tanggal_awal;
    if (tanggal_selesai) data.tanggal_selesai = tanggal_selesai;
    if (luas_lahan) data.luas_lahan = luas_lahan;
    if (keterangan) data.keterangan = keterangan;
    if (status) data.status = status;

    try {
      await axios.patch(`http://localhost:5000/lands/${id}`, data);
      navigate("/lands-admin");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="p-6 mt-16 md:ml-[250px]">
      <div className="w-full mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Form Lahan</h2>
        <form onSubmit={updateLand}>
          <p className="has-text-centered">{msg}</p>
          {/* Nama Lahan */}
          <div className="mb-4">
            <label htmlFor="nama-lahan" className="block text-gray-700 text-sm font-bold mb-2">Nama Lahan</label>
            <input 
              id="nama-lahan" 
              type="text" 
              placeholder="Nama Lahan" 
              value={nama_lahan}
              onChange={(e) => setNamaLahan(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          
          {/* Nama Pemilik */}
          <div className="mb-4">
            <label htmlFor="nama-pemilik" className="block text-gray-700 text-sm font-bold mb-2">Nama Pemilik</label>
            <input 
              id="nama-pemilik" 
              type="text" 
              placeholder="Nama Pemilik"
              value={nama_pemilik}
              onChange={(e) => setNamaPemilik(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          
          {/* Harga Sewa */}
          <div className="mb-4">
            <label htmlFor="harga-sewa" className="block text-gray-700 text-sm font-bold mb-2">Harga Sewa (per hari)</label>
            <input 
              id="harga-sewa" 
              type="number" 
              placeholder="Harga Sewa"
              value={harga_sewa}
              onChange={(e) => setHargaSewa(e.target.value)} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          
          {/* Lokasi */}
          <div className="mb-4">
            <label htmlFor="lokasi" className="block text-gray-700 text-sm font-bold mb-2">Lokasi</label>
            <input 
              id="lokasi" 
              type="text" 
              placeholder="Lokasi"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          
          {/* Tanggal Awal Sewa */}
          <div className="mb-4">
            <label htmlFor="tanggal-awal-sewa" className="block text-gray-700 text-sm font-bold mb-2">Tanggal Awal Sewa</label>
            <input 
              id="tanggal-awal-sewa" 
              type="date"
              value={tanggal_awal}
              onChange={(e) => setTanggalAwal(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          
          {/* Tanggal Expired */}
          <div className="mb-4">
            <label htmlFor="tanggal-expired" className="block text-gray-700 text-sm font-bold mb-2">Tanggal Selesai</label>
            <input 
              id="tanggal-expired" 
              type="date"
              value={tanggal_selesai}
              onChange={(e) => setTanggalSelesai(e.target.value)}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          
          {/* Luas Lahan */}
          <div className="mb-4">
            <label htmlFor="luas-lahan" className="block text-gray-700 text-sm font-bold mb-2">Luas Lahan (m²)</label>
            <input 
              id="luas-lahan" 
              type="number" 
              placeholder="Luas Lahan"
              value={luas_lahan}
              onChange={(e) => setLuasLahan(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
          </div>
          
          {/* Keterangan */}
          <div className="mb-4">
            <label htmlFor="keterangan" className="block text-gray-700 text-sm font-bold mb-2">Keterangan</label>
            <textarea 
              id="keterangan" 
              placeholder="Keterangan"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none">
            </textarea>
          </div>

          {/* Status */}
          <div className="mb-4">
            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
            <select
              id="status"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="tersedia">tersedia</option>
              <option value="telah disewa">telah disewa</option>
            </select>
          </div>
          
          {/* Submit Button */}
          <div className="flex items-center justify-left">
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>

            <Link to="/lands-admin" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline">Batal</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEditLands;

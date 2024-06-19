// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/main/Navbar";

const DetailPage = () => {
  const [nama_lahan, setNamaLahan] = useState("");
  const [nama_pemilik, setNamaPemilik] = useState("");
  const [harga_sewa, setHargaSewa] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [tanggal_awal, setTanggalAwal] = useState("");
  const [tanggal_selesai, setTanggalSelesai] = useState("");
  const [luas_lahan, setLuasLahan] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [image, setImage] = useState(null);
  // eslint-disable-next-line no-unused-vars
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
        setImage(response.data.image);
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
    if (tanggal_awal) data.tanggal_awal = tanggal_awal;
    if (tanggal_selesai) data.tanggal_selesai = tanggal_selesai;

    try {
      await axios.patch(`http://localhost:5000/lands/${id}`, data);
      navigate("/lands/transactions");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
    <Navbar />
    <div className='w-full py-[10rem] px-4 bg-white flex flex-col sm:flex-col md:flex-row'>
      <div className='flex justify-center items-center h-full md:w-3/4'>
        <div className='px-5 bg-green-500 text-center rounded-lg text-white p-2'>
          <div className='border-b-8 p-2'>
            <h1 className='font-extrabold text-5xl pb-2'>Detail Lahan</h1>
            <img src={image} width='200px' alt='sewa' className='rounded-lg w-full' />
            <table className='mt-4 mx-auto border-4 text-4xl border-white font-bold '>
              <thead>
                <tr>
                  <th className='border-2 border-r text-left p-3'>Nama Lahan</th>
                  <th className='border-2 border-r text-left p-3'>{nama_lahan}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border-2 border-r text-left p-3'>Nama Pemilik</td>
                  <td className='border-2 border-r text-left p-3'>{nama_pemilik}</td>
                </tr>
                <tr>
                  <td className='border-2 border-r text-left p-3'>Harga Sewa (hari)</td>
                  <td className='border-2 border-r text-left p-3'>{harga_sewa}</td>
                </tr>
                <tr>
                  <td className='border-2 border-r text-left p-3'>Lokasi</td>
                  <td className='border-2 border-r text-left p-3'>{lokasi}</td>
                </tr>
                <tr>
                  <td className='border-2 border-r text-left p-3'>Luas Lahan</td>
                  <td className='border-2 border-r text-left p-3'>{luas_lahan} m²</td>
                </tr>
                <tr>
                  <td className='border-2 border-r text-left p-3'>Keterangan</td>
                  <td className='border-2 border-r text-left p-3'>{keterangan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='bg-green-500 rounded-lg md:w-1/4 mt-10 md:mt-0 md:ml-10'>
      <form onSubmit={updateLand}>
        <h1 className='text-center font-bold text-4xl p-2'>Sewa Lahan ini</h1>
        <div className="mb-4 text-left px-8 md:px-4">
          <label htmlFor="tanggal-awal-sewa" className="block text-white font-bold mb-2 text-2xl">Tanggal Awal Sewa</label>
          <input 
            id="tanggal-awal-sewa" 
            type="date"
            value={tanggal_awal}
            onChange={(e) => setTanggalAwal(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 text-left px-8 md:px-4">
          <label htmlFor="tanggal-akhir-sewa" className="block text-white font-bold mb-2 text-2xl">Tanggal Akhir Sewa</label>
          <input 
            id="tanggal-akhir-sewa" 
            type="date" 
            value={tanggal_selesai}
            onChange={(e) => setTanggalSelesai(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='flex justify-center'>
          <button className='w-full mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
            Sewa Lahan
          </button>
        </div>
        <div className='flex justify-center'>
        <Link to="/lands" className='w-full text-center mt-4 mx-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Kembali</Link>
        </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default DetailPage;

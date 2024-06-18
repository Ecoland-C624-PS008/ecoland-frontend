// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LandsList = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    getLands();
  }, []);

  const getLands = async () => {
    const response = await axios.get("https://submission-mgce-zaenalalfian-0.et.r.appspot.com/lands");
    setLands(response.data);
  };

  const deleteLand = async (landId) => {
    await axios.delete(`https://submission-mgce-zaenalalfian-0.et.r.appspot.com/${landId}`);
    getLands();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Lahan Sewa</h1>
      <Link
        to="/lands-admin/add"
        className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Tambah Lahan
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Nama Lahan</th>
              <th className="py-3 px-6 text-left">Nama Pemilik</th>
              <th className="py-3 px-6 text-left">Harga Sewa (perhari)</th>
              <th className="py-3 px-6 text-left">Dibuat oleh</th>
              <th className="py-3 px-6 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {lands.map((land, index) => (
              <tr key={land.uuid} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-3 px-6 text-left">{land.nama_lahan}</td>
                <td className="py-3 px-6 text-left">{land.nama_pemilik}</td>
                <td className="py-3 px-6 text-left">{land.harga_sewa}</td>
                <td className="py-3 px-6 text-left">{land.user.name}</td>
                <td className="py-3 px-6 text-left">
                  <Link
                    to={`/lands-admin/edit/${land.uuid}`}
                    className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteLand(land.uuid)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandsList;

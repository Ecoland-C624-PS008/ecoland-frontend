// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';

const LandAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} />
      <div className="flex-grow bg-gray-100">
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="p-6 mt-16 md:ml-[250px]">
          <div className="w-full mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Form Lahan</h2>
            <form>
              {/* Nama Lahan */}
              <div className="mb-4">
                <label htmlFor="nama-lahan" className="block text-gray-700 text-sm font-bold mb-2">Nama Lahan</label>
                <input id="nama-lahan" type="text" placeholder="Nama Lahan" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              
              {/* Nama Pemilik */}
              <div className="mb-4">
                <label htmlFor="nama-pemilik" className="block text-gray-700 text-sm font-bold mb-2">Nama Pemilik</label>
                <input id="nama-pemilik" type="text" placeholder="Nama Pemilik" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              
              {/* Harga Sewa */}
              <div className="mb-4">
                <label htmlFor="harga-sewa" className="block text-gray-700 text-sm font-bold mb-2">Harga Sewa (per hari)</label>
                <input id="harga-sewa" type="number" placeholder="Harga Sewa" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              
              {/* Lokasi */}
              <div className="mb-4">
                <label htmlFor="lokasi" className="block text-gray-700 text-sm font-bold mb-2">Lokasi</label>
                <input id="lokasi" type="text" placeholder="Lokasi" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              
              {/* Tanggal Awal Sewa */}
              <div className="mb-4">
                <label htmlFor="tanggal-awal-sewa" className="block text-gray-700 text-sm font-bold mb-2">Tanggal Awal Sewa</label>
                <input id="tanggal-awal-sewa" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              
              {/* Tanggal Expired */}
              <div className="mb-4">
                <label htmlFor="tanggal-expired" className="block text-gray-700 text-sm font-bold mb-2">Tanggal Expired</label>
                <input id="tanggal-expired" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              
              {/* Luas Lahan */}
              <div className="mb-4">
                <label htmlFor="luas-lahan" className="block text-gray-700 text-sm font-bold mb-2">Luas Lahan (m²)</label>
                <input id="luas-lahan" type="number" placeholder="Luas Lahan" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              
              {/* Keterangan */}
              <div className="mb-4">
                <label htmlFor="keterangan" className="block text-gray-700 text-sm font-bold mb-2">Keterangan</label>
                <textarea id="keterangan" placeholder="Keterangan" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"></textarea>
              </div>
              
              {/* Upload Image */}
              <div className="mb-4">
                <label htmlFor="upload-image" className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
                <input id="upload-image" type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              
              {/* Submit Button */}
              <div className="flex items-center justify-between">
                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandAdmin;

import React from 'react';

const DetailPage = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='flex justify-center items-center h-full'>
        <div className='px-5 bg-green-500 text-center rounded-lg text-white p-2'>
            <div className='border-b-8 p-2'>
          <h1 className='font-extrabold text-5xl pb-2'>Detail Lahan</h1>
          <img src='src/assets/lands.jpg' alt='sewa' className='rounded-lg' />

          {/* Table */}
          <table className='mt-4 mx-auto border-4 text-4xl border-white font-bold '>
            <thead>
              <tr>
                <th className='border-2  border-r text-left p-3'> Nama Lahan</th>
                <th className='border-2  border-r text-left p-3'> Lahan Fabil 1</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td className='border-2  border-r text-left p-3'>Nama Pemilik Lahan</td>
                <td className='border-2  border-r text-left p-3'>Muhammad Fabil</td>
              </tr>
              <tr >
                <td className='border-2  border-r text-left p-3'>Harga Sewa</td>
                <td className='border-2  border-r text-left p-3'>Rp200,000,000,00</td>
              </tr>
              <tr >
                <td className='border-2  border-r text-left p-3' >Lokasi</td>
                <td className='border-2  border-r text-left p-3'>Kota Bogor</td>
              </tr>
              <tr >
                <td className='border-2 border-r text-left p-3'>Luas Lahan</td>
                <td className='border-2  border-r text-left p-3'>100 ha</td>
              </tr>
              <tr >
                <td className='border-2  border-r text-left p-3'>keterangan</td>
                <td className='border-2  border-r text-left p-3'>keterangan</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div>
            <h1 className='text-center font-bold text-4xl p-2'>Sewa Lahan ini</h1>
            <div className="mb-4 text-left px-[500px]">
            <label htmlFor="tanggal-awal-sewa" className="block text-white  font-bold mb-2 text-3xl">Tanggal Awal Sewa</label>
            <input id="tanggal-awal-sewa" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
            <div className="mb-4 text-left px-[500px]">
            <label htmlFor="tanggal-akhir-sewa" className="block text-white  font-bold mb-2 text-3xl">Tanggal Akhir Sewa</label>
            <input id="tanggal-akhir-sewa" type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className='flex justify-center'>
  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
    Submit
  </button>
</div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default DetailPage;

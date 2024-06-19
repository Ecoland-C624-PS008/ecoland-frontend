// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TransactionsList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    const response = await axios.get("https://ecoland-backend-api.onrender.com/transactions");
    setTransactions(response.data);
  };

  const deleteTransaction = async (landId) => {
    await axios.delete(`https://ecoland-backend-api.onrender.com/transactions/${landId}`);
    getTransactions();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Transaksi</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">No</th>
              <th className="py-3 px-6 text-left">Tgl. Transaksi</th>
              <th className="py-3 px-6 text-left">Total Bayar</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Expired</th>
              <th className="py-3 px-6 text-left">Bukti Pembayaran</th>
              <th className="py-3 px-6 text-left">Nama Penyewa</th>
              <th className="py-3 px-6 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {transactions.map((transaction, index) => (
              <tr key={transaction.uuid} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-3 px-6 text-left">{transaction.tanggal_transaksi}</td>
                <td className="py-3 px-6 text-left">{transaction.total_harga_sewa}</td>
                <td className="py-3 px-6 text-left">{transaction.status_transaksi}</td>
                <td className="py-3 px-6 text-left">{transaction.sewa_expired}</td>
                <td className="py-3 px-6 text-left">{transaction.bukti_pembayaran}</td>
                <td className="py-3 px-6 text-left">{transaction.user.name}</td>
                <td className="py-3 px-6 text-left">
                  <Link
                    to={`/transactions/edit/${transaction.uuid}`}
                    className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                  >
                    Proses
                  </Link>
                  <button
                    onClick={() => deleteTransaction(transaction.uuid)}
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

export default TransactionsList;

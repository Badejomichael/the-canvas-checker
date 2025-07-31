'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { eligibleAddresses } from '@/utils/eligibleAddresses';
import Image from 'next/image';
import canvasLogo from '@/assets/canvas-logo.jpg';
import nftImage1 from '@/assets/nft-image-1.jpg';
import nftImage2 from '@/assets/nft-image-2.jpg';

export default function HomePage() {
  const [inputAddress, setInputAddress] = useState('');

  const handleCheck = () => {
    const normalized = inputAddress.trim().toLowerCase();

    if (!/^0x[a-fA-F0-9]{40}$/.test(normalized)) {
      toast.error('Invalid wallet address');
      return;
    }

    const isFound = eligibleAddresses.map(addr => addr.toLowerCase()).includes(normalized);

    isFound
      ? toast.success('Address is eligible!')
      : toast.error('Not eligible');
  };

  return (
    <main className="min-h-screen bg-[#0F0F1A] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden font-inter">
      {/* Background Glow + Art */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-500 opacity-20 rounded-full blur-3xl z-0" />

      {/* NFT Background Decor */}
      <Image
        src={nftImage1}
        alt="NFT Decor 1"
        className="absolute top-[-50px] left-[-50px] opacity-10 w-[180px] rotate-12 blur-sm z-0"
        priority
      />
      <Image
        src={nftImage2}
        alt="NFT Decor 2"
        className="absolute bottom-[-40px] right-[-40px] opacity-10 w-[180px] -rotate-12 blur-sm z-0"
        priority
      />

      {/* Header */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={canvasLogo}
          alt="The Canvas Logo"
          width={110}
          height={110}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-unica">The Canvas</h1>
        <p className="text-lg mt-2 text-gray-300">
          Are you one of the chosen few?
        </p>
      </motion.div>

      {/* Input + Button */}
      <motion.div
        className="mt-8 z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Enter your wallet address"
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
          className="w-full px-5 py-3 rounded-lg bg-[#1F1F2E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono shadow-sm"
        />
        <button
          onClick={handleCheck}
          className="mt-4 w-full px-5 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-200"
        >
          Check Eligibility
        </button>
      </motion.div>

    

      {/* Toast Notifications */}
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastStyle={{
          background: '#1F1F2E',
          color: '#fff',
          borderRadius: '10px',
          border: '1px solid #6B46C1',
          fontFamily: 'var(--font-inter)',
        }}
      />
    </main>
  );
}
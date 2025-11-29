/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-116px)] bg-[#f5f5dc] pb-14 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center flex flex-col items-center"
        dir="rtl"
      >
        {/* Logo */}
        <motion.img
          src="/logo.png"
          className="w-36 md:w-48 mb-6 drop-shadow-lg"
          alt="Logo"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#593f36] tracking-wide">
          أهلاً بكم في متجرنا
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 mt-3 text-base md:text-lg font-medium">
          يتم تطوير واجهة الموقع حالياً — موعد الإطلاق قريب جداً
        </p>

        {/* Decorative Divider */}
        <div className="mt-6 w-24 h-1 bg-[#593f36] rounded-full"></div>

        {/* Soft animation bubbles */}
        <div className="flex gap-2 mt-6">
          <div className="w-3 h-3 bg-[#593f36] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#593f36] rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-[#593f36] rounded-full animate-bounce delay-300"></div>
        </div>
      </motion.div>
    </div>
  );
}

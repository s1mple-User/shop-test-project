import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { motion } from 'framer-motion';

const Model = ({ setModel, model, dark }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1 }
  };

  const closeModel = () => {
    setModel(false);
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className={`relative w-96 h-96 rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center ${dark ? "bg-slate-900" : "bg-sky-300"}`}
        variants={containerVariants}
      >
        <button
          onClick={closeModel}
          className={`absolute top-4 right-4 text-2xl ${dark ? "text-white" : "text-gray-500"}`}
        >
          <ImCross />
        </button>


        <div className='ml-16'>
          <h2 className={`text-xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>This site is asking access for geolocation</h2>
          <p className={` mb-10 mt-1 ${dark ? "text-gray-300" : "text-gray-600"}`}>
            Do you want to give access?
          </p>
        </div>

        {/* Кнопки Yes/No с учетом dark mode */}
        <div className="flex items-center gap-x-8">
          <button
            className={`flex items-center bg-green-600 rounded-lg w-20 h-12 justify-center text-white ${dark ? "hover:bg-green-500" : "hover:bg-green-700"}`}
            onClick={() => setModel(!model)}
          >
            Yes
          </button>
          <button
            className={`flex items-center bg-red-700 rounded-lg w-20 h-12 justify-center text-white ${dark ? "hover:bg-red-600" : "hover:bg-red-800"}`}
            onClick={() => setModel(!model)}
          >
            No
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Model;

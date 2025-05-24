import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ data, loading, dark, filter }) => {

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1 },
  };

  const filteredData = filter
    ? data.filter(item => item.category === filter)
    : data;

  const addCard = (item) => {
    setCard((prev) => [...prev, item]);
  };

  return (
    <div>
      <motion.div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
           pt-32 ${filteredData.length <= 4 ? "h-screen" : "h-full"}
           ${dark ? "darkGradient" : "lightGradient"} ${!filteredData  ? "h-screen" : "h-full"}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {loading ? (
          <div className="w-16 h-16 border-4 border-t-transparent
           border-blue-500 rounded-full animate-spin mt-10 absolute left-2/4"></div>
        ) : (
          filteredData.map((item) => (
            <Link to={`/${item._id}`} key={item._id}>
              <div className={`border-none rounded-lg shadow-lg pt-9
               shadow-slate-600 ${dark ? "bg-slate-900" : "bg-slate-100"}`}>
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-4">
                  <h5 className={`text-lg ${dark ? "text-white" : "text-black"}`}>{item.title.slice(0, 30)}</h5>
                  <p className="text-sm text-gray-500">{item.description.slice(0, 30)}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-semibold text-lime-600">${item.price}</p>
                    <button
                      onClick={() => addCard(item)}
                      className={` text-slate-50 py-2 px-4 rounded-lg hover:scale-105 transition-all ${dark ? "darkGradient" : "bg-sky-600"}`}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default Card;

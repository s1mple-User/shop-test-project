import React from 'react';
import { motion } from 'framer-motion';
const Order = ({ copy, setCopy, dark,setModel,model }) => {
  const handleRemoveItem = (id) => {
  
    const updatedCart = [...copy];

    const itemIndex = updatedCart.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      updatedCart.splice(itemIndex, 1);
      setCopy(updatedCart); 
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <div
      className={`px-4 py-36 ${dark ? "darkGradient" : "lightGradient"}   flex items-center justify-center
       ${copy.length >= 5 ? "h-full" : "h-screen"}
       `}
    >
      {copy.length === 0 ? (
        <p className="text-xl text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 pt-1 w-8/12">
          {copy.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-grow ml-4">
                <h3 className="text-lg font-semibold text-white">{item.title.slice(0,70)}</h3>
                <p className="text-sm text-gray-600">
                  Price: <span className="font-semibold text-yellow-500">${item.price}</span>
                </p>
              </div>
              <button 
                onClick={() => handleRemoveItem(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="absolute right-1 mr-80">
            <button className={`p-2 w-40 rounded-md hover:scale-110 transition-all text-white ${dark ?"darkGradient":"bg-sky-600"}  ${dark ?"":"hover:bg-sky-500"}`} onClick={()=>setModel(!model)}>Active</button>
            </div>
        </div>
        
      )}
    </div>
  );
};

export default Order;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../componets/StarRating/StarRating';


const Slug = ({ dark, setCopy, copy }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { _id } = useParams();
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:3000/get/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data._id) {
          console.log(data);
          
          setProduct(data);
        } else {
          setError('Товар не найден');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке товара:", error);
        setError('Ошибка при загрузке товара');
        setLoading(false);
      });
  }, [_id]);

  const handleAddToCart = (product) => {
    setCopy((prevCopy) => {
      const updatedCart = [...prevCopy, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${dark ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className={`w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin`}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center text-xl font-semibold ${dark ? "text-gray-300" : "text-gray-700"} mt-10`}>
        {error}
      </div>
    );
  }
  if (!product) {
    return (
      <div className={`text-center text-xl font-semibold ${dark ? "text-gray-300" : "text-gray-700"} mt-10`}>
        Товар не найден
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-6 px-4 pt-52 ${dark ? "darkGradient text-white" : "lightGradient text-gray-800"}`}>
      <div className={`max-w-4xl mx-auto rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8 ${dark ? "bg-gray-900" : "bg-white"}`}>
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
            onError={(e) => e.target.src = '/default-image.jpg'} // Фолбек на картинку
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className={`text-3xl font-bold ${dark ? "text-white" : "text-gray-800"}`}>{product.title.slice(0, 100)}{product.title.length > 100 ? "..." : ""}</h1>
          <p className={`text-lg ${dark ? "text-gray-400" : "text-gray-500"} mt-4`}>
            {product.description.slice(0, 200)}{product.description.length > 200 ? "..." : ""}
          </p>
          <StarRating product={product} />
          <div className="flex items-center gap-4">
             <p className={`text-xl ${dark ? "text-gray-400" : "text-gray-600"} mt-4`}>
               Rating: <span className="text-2xl text-yellow-400">{product.rating.rate}</span>
             </p>
             <p className={`text-xl ${dark ? "text-gray-400" : "text-gray-600"} mt-4`}>
               Orders Count: <span className="text-2xl text-yellow-400">{product.rating.count}</span>
             </p>
           </div>
           <div className="mt-6 flex items-center justify-between">
             <p className={`text-2xl font-semibold ${dark ? "text-white" : "text-lime-600"}`}>${product.price}</p>
             <button
               className={`text-white py-3 px-6 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none ${dark ? "darkGradient" : "bg-sky-600"}`}
               onClick={() => handleAddToCart(product)}
             >
               Add
             </button>
           </div>
           
        </div>
      </div>
    </div>
  );
};

export default Slug;

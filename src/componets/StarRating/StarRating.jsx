import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ 
    count = 5,
    icon = FaStar, 
    activeStyle = { color: 'gold' }, 
    product 
}) {
    const [currentRating, setCurrentRating] = useState(product?.rating?.rate);
    const stars = Array(count).fill(0);


    return (
        <div className='flex items-center gap-1 mt-3'>
            {
                stars.map((_, index) => {
                    const currentStyle = index < currentRating ? activeStyle : {};
                    const IconComponent = icon; 

                    return (
                        <div
                            key={index} 
                            style={currentStyle} 
                        >
                            <IconComponent className='w-10 h-8' />
                        </div>
                    );
                })
            }
        </div>
    );
}

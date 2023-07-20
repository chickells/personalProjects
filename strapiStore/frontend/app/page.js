'use client'

import useFetch from "./hooks/useFetch";
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Home() {
  const { data, loading, error } = useFetch('http://localhost:1337/api/cars?populate=*');

  // Define initial animation state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.... </p>;

  console.log(data);

  

  return (
    <div>
      <motion.div
        initial={{ x: -100 }} // Initial position of the card
        animate={isVisible ? { x: 0 } : {}} // Slide in animation on initial render
        transition={{ duration: 0.5 }} // Animation duration
      >
        {data.data.map(review => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.attributes.rating}</div>
            <h2>{review.attributes.title}</h2>
            
            {review.attributes.categories.data.map(category => (
              <small key={category.id}>{category.attributes.name}</small>
            ))}

            <p>{review.attributes.body.substring(0, 200)}...</p>
            <Link href={`/reviews/${review.id}`}>Read more...</Link>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

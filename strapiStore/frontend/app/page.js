'use client'

import useFetch from "./hooks/useFetch"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/cars?populate=*');
        const data = await response.json();
        setReviews(data.data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const reviewCardsRef = useRef([]);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('invisible');
        observer.unobserve(entry.target); // Stop observing the card after it becomes visible
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    reviewCardsRef.current.forEach((cardRef) => {
      const observer = new IntersectionObserver(handleIntersection, options);
      cardRef.classList.add('invisible');
      observer.observe(cardRef);
      return () => {
        observer.disconnect();
      };
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error....</p>;

  return (
    <div>
      {reviews.map((review, index) => (
        <div 
          key={review.id}
          ref={(el) => (reviewCardsRef.current[index] = el)}
          className="review-card invisible"
        >
            <div className="rating">{review.attributes.rating}</div>
            <h2>{review.attributes.title}</h2>
            {review.attributes.categories.data.map((category) => (
              <small key={category.id}>{category.attributes.name}</small>
            ))}
            <p>{review.attributes.body.substring(0, 200)}...</p>
            <Link href={`/reviews/${review.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
}

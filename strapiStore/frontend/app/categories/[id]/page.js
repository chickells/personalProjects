'use client'

import { useParams } from 'next/navigation';
import useFetch from '../../hooks/useFetch'
import Link from 'next/link'

export default function CategoryPage() {
    const hostURL = 'http://localhost:1337'
    const { id } = useParams()
    const { loading, error, data } = useFetch(`${hostURL}/api/categories/${id}?populate=*`)
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    console.log(data);
  
    return (
      <div>
        <h2>{data.data.attributes.name}</h2>
        {data.data.attributes.cars.data.map(review => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.attributes.rating}</div>
            <h2>{review.attributes.title}</h2>

            {/* {review.attributes.categories.data.map(category => (
              <small key={category.id}>{category.attributes.name}</small>
            ))} */}

            <p>{review.attributes.body.substring(0, 200)}...</p>
            <Link href={`/reviews/${review.id}`}>Read more...</Link>
          </div>
        ))}
    </div>
    )
}


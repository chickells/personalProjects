'use client'

// async function getReviews() {
//     const response = await fetch('<! -- REPLACE WITH STRAPI URL -->');
//     return await response.json();

//     // GET DATA FROM STRAPI
// }

import { useParams } from 'next/navigation';
import useFetch from '../../hooks/useFetch'
import Link from 'next/link'

export default function CarPage() {
    const { id } = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/cars/' + id)
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
  
    console.log(data)
  
    return (
        <div className='review-card'>
            <div className="rating">{data.data.attributes.rating}</div>
            <h2>{data.data.attributes.title}</h2>
            <small>id equals {data.data.id}</small>

            <p>{data.data.attributes.body}</p>
            <small><Link href="/">(Go back home)</Link></small>
        </div>
    )
}


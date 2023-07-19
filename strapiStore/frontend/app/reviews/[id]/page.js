'use client'

import { useParams } from 'next/navigation';
import useFetch from '../../hooks/useFetch'
import Link from 'next/link'
import Image from 'next/image';

export default function CarPage() {
    const hostURL = 'http://localhost:1337'
    const { id } = useParams()
    const { loading, error, data } = useFetch(`${hostURL}/api/cars/${id}?populate=*`)
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
  
    // console.log(data)
    const photoURL = data.data.attributes.photo.data.attributes.url // Extracting the photo URL
    // console.log(photoURL);



    // const { image } = data.data.attributes;

    // if (!image) console.log('no image');
  
    return (
        <div className='review-card'>
            <div className="rating">{data.data.attributes.rating}</div>
            <h2>{data.data.attributes.title}</h2>
            <Image 
                src={`http://localhost:1337${photoURL}`} 
                layout='responsive'
                width={100} 
                height={200} 
                alt='asdf'/>
            <p>{data.data.attributes.body}</p>
            <small><Link href="/">(Go back home)</Link></small>
        </div>
    )
}


'use client'

import { useParams } from 'next/navigation';
import useFetch from '../../hooks/useFetch'
import Link from 'next/link'
import Image from 'next/image';

export default function CarPage() {
    const { id } = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/cars/' + id)
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
  
    console.log(data)

    const { image } = data.data.attributes;

    if (!image) console.log('no image');
  
    return (
        <div className='review-card'>
            <div className="rating">{data.data.attributes.rating}</div>
            <h2>{data.data.attributes.title}</h2>
            <small>id equals {data.data.id}</small>
            <Image src={`http://localhost:1337/api/upload/files/${id}`} width={200} height={200} alt='asdf'/>
            <p>{data.data.attributes.body}</p>
            <small><Link href="/">(Go back home)</Link></small>
        </div>
    )
}


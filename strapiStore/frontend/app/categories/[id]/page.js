'use client'

import { useParams } from 'next/navigation';
import useFetch from '../../hooks/useFetch'
import Link from 'next/link'

export default function CategoryPage() {
    const hostURL = 'http://localhost:1337'
    const { id } = useParams()
    const { loading, error, data } = useFetch(`${hostURL}/api/categories/${id}?populate=*`)
  
    console.log('category log');

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
  
  
    return (
      <div>
        <span>category page</span>
      </div>
    )
}


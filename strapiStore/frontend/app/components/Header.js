'use client'

import Link from 'next/link'
import React from 'react'
import useFetch from '../hooks/useFetch'

export default function Header() {
  const { data, loading, error } = useFetch('http://localhost:1337/api/categories');

  if (loading) return <p>Loading categories...</p>
  if (error) return <p>Error categories...</p>


  return (
    <div className="site-header">
        <Link href="/">
            <h1>Chase's Garage</h1>
        </Link>
        <nav className='categories'>
          <span>Filter by Category: </span>
          {data.data.map(category => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              {category.attributes.name}
            </Link>
          ))}
        </nav>
    </div>
  )
}

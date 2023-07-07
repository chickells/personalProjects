import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="site-header">
        <Link href="/">
            <h1>Chase's Garage</h1>
        </Link>
    </div>
  )
}

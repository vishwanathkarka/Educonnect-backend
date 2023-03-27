import React from 'react'
import { useRouter } from 'next/router'

export default function index() {
  const router = useRouter();
  const {products} = router.query
  return (
    <div>{products}</div>
  )
}

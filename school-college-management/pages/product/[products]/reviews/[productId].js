import React from 'react'
import {useRouter} from 'next/router'


export default function productId() {
    const router = useRouter()
  const {products,productId} =   router.query
  return (
    <div>{products + productId}</div>
  )
}

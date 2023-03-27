import React from 'react'
import { useRouter } from 'next/router'
export default function Param() {
const router = useRouter()
const {param=[]} = router.query
console.log(param)
  return (
    <div>Param document</div>
  )
}

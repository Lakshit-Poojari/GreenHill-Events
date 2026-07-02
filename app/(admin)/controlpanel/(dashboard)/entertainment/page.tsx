import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <div>Entertainment Dashboard
            <Link href={"entertainment/offering"}>offering</Link>
            <Link href={"entertainment/categories"}>Category</Link>
        </div>
    </>
  )
}

export default page
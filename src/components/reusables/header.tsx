import React from 'react'
import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { prefix } from '@/lib/utils'
  
function Header() {
  return (
    <Card className='w-full justify-center flex rounded-none shadow-md shadow-gray-300'>
  <CardContent>
    <Link  href={'/'}>
  <div className="relative w-48 max-sm:w-28 h-36 ">

<Image
  src={`${prefix}logo1.svg`}
  alt="Logo"
  layout="fill"
  objectFit="contain"
/>
</div>
    </Link>
  </CardContent>

</Card>

  )
}

export default Header
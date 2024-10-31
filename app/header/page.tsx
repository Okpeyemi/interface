import React from 'react'
import Scop from "@/public/assets/images/scop.png"
import SemeCity from "@/public/assets/images/seme city.png"
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex justify-between">
        <Image
            src={Scop}
            width={200}
            height={150}
            alt="Scrop"
        />
        <Image
            src={SemeCity}
            width={150}
            height={150}
            alt="Scrop"
        />
    </div>
  )
}

export default Header
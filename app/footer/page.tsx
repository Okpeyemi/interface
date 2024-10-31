import React from 'react'
import Image from 'next/image'
import Home from '@/public/assets/icons/home.png'
import User from '@/public/assets/icons/user.png'
import Exit from '@/public/assets/icons/exit.png'

const Footer = () => {
  return (
    <div className="flex justify-evenly">
        <a href="/acceuil">
            <Image
                className="m-10"
                src={Home}
                width={50}
                height={50}
                alt="Home"
            />
        </a>
        <a href="/connexion">
            <Image
                className="m-10"
                src={User}
                width={50}
                height={50}
                alt="User"
            />
        </a>
        <a href="/deconnexion">
            <Image
                className="m-10"
                src={Exit}
                width={50}
                height={50}
                alt="Exit"
            />
        </a>
    </div>
  )
}

export default Footer
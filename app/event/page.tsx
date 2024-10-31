import React from 'react'
import Image from 'next/image'
import Arrow from '@/public/assets/icons/Arrow.png'
import Footer from '../footer/page'

const Event = () => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-between">
        <div className="flex justify-between m-10">
            <a href="/inscription">
                <Image
                    src={Arrow}
                    width={50}
                    height={50}
                    alt="Scrop"
                />
            </a>
        </div>
        <div>
            <div className="flex flex-col items-center my-20">
                <h1 className="font-bold text-[50px] text-[#47C0B6]">EVENEMENTS EN COURS</h1>
                <p className="font-semibold text-[24px] text-[#FFC23F] mt-2">Le Parc d’Innovation Made in Africa n’attend que toi !</p>
            </div>
            <div className="flex justify-evenly my-20">
                <a href="/eventCode"><button className="font-bold text-white bg-[#004A96] p-10 text-[32px] rounded-[10px]">GAME PARTY</button></a>
                <a href="/eventCode"><button className="font-bold text-white bg-[#004A96] p-10 text-[32px] rounded-[10px]">HACKATON</button></a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Event
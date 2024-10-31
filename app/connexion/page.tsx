import React from 'react'
import Image from 'next/image'
import Footer from '../footer/page'
import Arrow from '@/public/assets/icons/Arrow.png'

const Connexion = () => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-between">
        <div className="flex justify-between m-10">
            <a href="/acceuil">
                <Image
                    src={Arrow}
                    width={50}
                    height={50}
                    alt="Scrop"
                />
            </a>
        </div>
        <div>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[50px] text-[#FFC23F]">CONNEXION</h1>
            </div>
            <div className="flex flex-col justify-between items-center">
                <div className="mb-20">
                    <div className="flex flex-col w-[900px] my-10">
                        <label htmlFor="" className="font-bold text-[20px]">Numéro d'identification (ID)</label>
                        <input 
                            type="text"
                            className="border border-black rounded-[5px] py-2 px-3"
                        />
                    </div>
                    <div className="flex flex-col w-[900px] my-10">
                        <label htmlFor="" className="font-bold text-[20px]">Numéro de bracelet</label>
                        <input 
                            type="text"
                            className="border border-black rounded-[5px] py-2 px-3"
                        />
                    </div>
                    <div className="flex flex-col w-[900px] my-10">
                        <label htmlFor="" className="font-bold text-[20px]">Motif</label>
                        <input 
                            type="text"
                            className="border border-black rounded-[5px] py-2 px-3"
                        />
                    </div>
                </div>
                <div className="flex">
                    <a href="/entree"><button className="font-bold text-[32px] text-white bg-[#004A96] px-10 py-2 rounded-[5px]">CONNECTER</button></a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Connexion
import React from 'react'
import Image from 'next/image'
import Arrow from '@/public/assets/icons/Arrow.png'

const Connexion2 = () => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-start">
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
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[32px] text-[#FFC23F]">FELICITATION ! Tu es enrégistré ton Numéro d’identification (ID) est 1234</h1>
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
    </div>
  )
}

export default Connexion2
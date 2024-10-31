import React from 'react'
import Image from 'next/image'
import Arrow from '@/public/assets/icons/Arrow.png'

const Inscription = () => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-start">
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
            <div className="flex flex-col justify-between items-center w-">
                <div className="mb-20 w-[80%]">
                    <div className="flex flex-col my-7">
                        <label htmlFor="" className="font-bold text-[20px]">Nom</label>
                        <input 
                            type="text"
                            className="border border-black rounded-[5px] py-3 px-3"
                        />
                    </div>
                    <div className="flex flex-col w-full my-7">
                        <label htmlFor="" className="font-bold text-[20px]">Prénom</label>
                        <input 
                            type="text"
                            className="border border-black rounded-[5px] py-3 px-3"
                        />
                    </div>
                    <div className="w-full flex justify-between my-7">
                        <div className="flex flex-col w-[47%]">
                            <label htmlFor="" className="font-bold text-[20px]">Tranche d'Age</label>
                            <input 
                                type="text"
                                className="border border-black rounded-[5px] py-3 px-3"
                            />
                        </div>
                        <div className="flex flex-col w-[47%]">
                            <label htmlFor="" className="font-bold text-[20px]">Sexe</label>
                            <input 
                                type="text"
                                className="border border-black rounded-[5px] py-3 px-3"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full my-7">
                        <label htmlFor="" className="font-bold text-[20px]">Numéro de téléphone</label>
                        <input 
                            type="text"
                            className="border border-black rounded-[5px] py-3 px-3"
                        />
                    </div>
                    <div className="flex flex-col w-full my-7">
                        <label htmlFor="" className="font-bold text-[20px]">Handicap ?</label>
                        <input 
                            type="text"
                            className="border border-black rounded-[5px] py-3 px-3"
                        />
                    </div>
                </div>
                <div className="flex">
                    <a href="/connexion2"><button className="font-bold text-[32px] text-white bg-[#004A96] px-10 py-2 rounded-[5px]">TERMINER</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Inscription
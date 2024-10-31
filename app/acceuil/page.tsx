import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'

const Acceuil = () => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-between">
        <Header />
        <div>
            <div className="flex flex-col items-center my-20">
                <h1 className="font-bold text-[50px] text-[#47C0B6]">BIENVENUE A SEME CITY OPEN PARK</h1>
                <p className="font-semibold text-[24px] text-[#FFC23F] mt-2">Le Parc d’Innovation Made in Africa n’attend que toi !</p>
            </div>
            <div className="flex justify-evenly my-20">
                <a href="/inscription"><button className="font-bold text-white bg-[#004A96] p-10 text-[32px] rounded-[10px]">NOUVEAU</button></a>
                <a href="/connexion"><button className="font-bold text-white bg-[#004A96] p-10 text-[32px] rounded-[10px]">USAGERS</button></a>
                <a href="/event"><button className="font-bold text-white bg-[#004A96] p-10 text-[32px] rounded-[10px]">EVENTS</button></a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Acceuil
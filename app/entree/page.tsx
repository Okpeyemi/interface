import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'

const Entree = () => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-between">
        <Header />
        <div>
            <div className="flex flex-col items-center">
                <h1 className="text-[96px] font-bold text-[#004A96] my-10">MERCI</h1>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[50px] text-[#47C0B6]">BIENVENUE A SEME CITY OPEN PARK</h1>
                    <p className="font-semibold text-[24px] mt-2">Le Parc d’Innovation Made in Africa n’attend que toi !</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Entree
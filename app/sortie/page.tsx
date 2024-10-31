import React from 'react'
import Header from '../header/page'
import Footer from '../footer/page'

const Sortie = () => {
  return (
    <div className="flex flex-col min-h-screen w-full justify-between">
        <Header />
        <div>
            <div className="flex flex-col items-center">
                <h1 className="text-[96px] font-bold text-[#004A96] my-10">MERCI</h1>
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-[40px] text-[#47C0B6]">Le SCOP,  vous remercie de votre passage </h1>
                    <p className="font-semibold text-[24px] mt-2">A LA PROCHAINE </p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Sortie
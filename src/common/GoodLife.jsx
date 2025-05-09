import React from 'react'
import place from '../assets/placeholder.jpg'
import play from '../assets/play.svg'

export const GoodLife = () => {
    const glfe = [
        {
            num: '1',
            content: 'Elit gravida lorem amet porta risus vitae at',
            more: 'Learn more'
        },
        {
            num: '2',
            content: 'Volutpat dui lacus scelerisque mi integer',
            more: 'Learn more'
        },
        {
            num: '3',
            content: 'Elementum faucibus netus gravida lacus lorem',
            more: 'Learn more'
        },
    ]
    return (

        <>
            <div className="rounded-xl relative overflow-hidden">
                <div
                    className={`py-16 md:py-24 bg-cover bg-center absolute inset-0 z-0`}
                    style={{
                        backgroundImage: `url('${place}')`,
                        backgroundColor: "rgba(0, 0, 0, 0.7)", 
                        backgroundBlendMode: "overlay",
                    }}
                ></div>
                <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 h-full text-center relative z-10">
                    <button className="rounded-full bg-white/20 backdrop-blur-lg p-3 md:p-4">
                        <img className="h-8 w-8 md:h-10 md:w-10" alt="play video" src={play} />
                    </button>
                    <h1 className="text-white font-bold text-3xl md:text-5xl mt-6 md:mt-8 leading-tight">
                        Good Life Begins With
                        <br />
                        A Good Company
                    </h1>
                </div>
                <div className="bg-black py-8 mt-12 relative z-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {glfe.map((entry, index) => (
                            <div className="flex items-start text-white" key={index}>
                                <div className="bg-[#309689] rounded-md w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                                    {entry.num}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{entry.content}</h3>
                                    <p className="text-[#309689] text-sm">{entry.more}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GoodLife;
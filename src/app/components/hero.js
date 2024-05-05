"use client";
import { useState, useEffect } from "react"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {

    return(
        <>
            <h1 className="text-[3.6rem] text-center w-[58rem] mx-auto leading-[4.6rem] mt-[2rem]">We make websites that look <span className="bg-gradient-to-r from-[#EC512B] to-[#F5BF49] bg-clip-text 
            text-transparent">great</span> and perform <span className="bg-gradient-to-r from-[#EC512B] to-[#F5BF49] bg-clip-text 
            text-transparent">even better</span></h1>

            <p className="text-[1.2rem] text-center w-[40rem] mx-auto mt-[1rem] leading-8 opacity-50">{"It's more than words and images. It's about creating a digital presence where your brand’s values and stories come to life."}</p>

            <div className="flex justify-center mt-[2rem] ">
                <button className="rounded-[1.5rem] bg-black px-[2.5rem] py-[.6rem] text-white text-center hover:bg-black/80 duration-200">View our work</button>
            </div>

            <div className="flex justify-center mt-[4rem] relative">
                <Image width={1100} height={1100} priority="true" alt="Images of website layouts" 
                className="w-auto h-aut z-[10]" src="/images/HeroProjects.png"></Image>

                <Image width={850} height={850} priority="true" alt="Orange glow circle" src="/images/OrangeGlow.png"
                className="absolute bottom-[16rem] left-[-2rem] z-[-1]"></Image>

                <Image width={850} height={850} priority="true" alt="Orange glow circle" src="/images/YellowGlow.png"
                className="absolute bottom-[24rem] right-[0rem] z-[-1]"></Image>
            </div>
        </>
    );
}
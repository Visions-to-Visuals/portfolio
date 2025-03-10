"use client";
import { useState, useEffect } from "react"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {

    return(
        <>
            <h1 className="text-[3.6rem] tablet-s:text-[2.5rem] mobile:text-[2.2rem] mobile:leading-[3rem] tablet-s:px-[2rem] mobile-s:px-[1rem] animate-fadeIn tablet-s:leading-[3.5rem] text-center w-[58rem] tablet-s:w-auto mx-auto leading-[4.6rem] mt-[2rem]">We make websites that look <span className="bg-gradient-to-r from-[#EC512B] to-[#F5BF49] bg-clip-text 
            text-transparent">great</span> and perform <span className="bg-gradient-to-r from-[#EC512B] to-[#F5BF49] bg-clip-text 
            text-transparent">even better</span></h1>

            <p className="text-[1.2rem] animate-fadeLess tablet-s:text-[1.1rem] text-center w-[40rem] tablet-s:w-[85%] mobile-s:w-[90%] tablet-s:px-[2rem] mobile:px-0 mx-auto mt-[1rem] leading-8 opacity-60 mobile:leading-[150%]">{"It's more than words and images. It's about creating a digital presence where your brand’s values and stories come to life."}</p>

            <div className="flex justify-center mt-[3rem] relative">
                <a href="https://cal.com/visions2visuals/discovery" target="_blank">
                    <button className="rounded-[1.5rem] animate-fadeIn2 bg-black px-[2.5rem] py-[.8rem] text-white text-center hover:bg-black/80 duration-200 mobile:text-[1.1rem]">Get a free evaluation</button>
                </a>

                <Image width={850} height={850} priority="true" alt="Orange glow circle" src="/images/HeroOrange.png"
                className="absolute w-[40rem] opacity-100 tablet-s:hidden h-auto bottom-[-28rem] left-[8rem] z-[-1] animate-fade"></Image>

                <Image width={850} height={850} priority="true" alt="Orange glow circle" src="/images/HeroYellow.png"
                className="absolute w-[40rem] opacity-80 tablet-s:hidden h-auto bottom-[-14rem] right-[5rem] z-[-1] animate-fade"></Image>
            </div>

            <div className="flex justify-center mt-[4rem]">
                <Image width={1000} height={1000} priority="true" alt="Images of website layouts" 
                className="w-[75rem] tablet-s:w-[92%] h-auto z-[10] animate-fadeIn3" src="/images/HeroPhoto.png"></Image>
            </div>
        </>
    );
}
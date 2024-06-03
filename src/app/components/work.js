"use client";
import { useState, useEffect } from "react"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Work() {

    function Description({header, text}){
        return(
            <div className="flex text-[1.2rem] gap-2 tablet-s:text-[1.1rem]">
                <h2 className="">{header}</h2>
                <p className="">{text}</p>
            </div>
        )
    }

    return(
        <div className="pt-[9rem] mb-[9rem] tablet-s:pt-[4rem]" id="work-section">
            <h1 className="text-[3.6rem] tablet-s:text-[2.5rem] text-center mx-auto leading-[4.6rem] mt-[2rem] text-white">Our stunning collection of websites</h1>

            <div className="flex justify-center items-start mt-[4rem] relative gap-[2.5rem] tablet-s:flex-wrap">
                <Image width={1000} height={1000} priority="true" alt="Images of website layouts" 
                className="w-[34rem] tablet-s:w-[80%] h-auto" src="/images/Club.png"></Image>
                <Image width={1000} height={1000} priority="true" alt="Images of website layouts" 
                className="w-[36rem] tablet-s:w-[80%] h-auto" src="/images/ClubSite.png"></Image>
            </div>

            <div className="flex flex-col items-center gap-[2.5rem] mt-[4rem] tablet-s:w-[80%] mx-auto">
                <Description header="Problem:" text={" The Student Center had a difficult time gathering all the paperwork for new student clubs and were overwhelmed."}></Description>
                <Description header="Solution:" text={"We developed a new portal that allows students to enter all their club information to streamline paperwork digitally."}></Description>
            </div>

            <div className="flex justify-center items-start mt-[9rem] relative">
                <Image width={1000} height={1000} priority="true" alt="Images of website layouts" 
                className="w-[66rem] tablet-s:w-[80%] h-auto" src="/images/Construction.png"></Image>
            </div>

            <div className="flex flex-col items-center gap-[2.5rem] mt-[4rem] tablet-s:w-[80%] mx-auto">
                <Description header="Problem:" text={"Timothy Schoolland wanted a new website for his business but wasn’t sure which colors and layouts he preferred."}></Description>
                <Description header="Solution:" text={"We created 3 designs to understand his brand by showcasing his construction work, his experience, and his team."}></Description>
            </div>

            <div className="flex justify-center items-start mt-[9rem] relative gap-[2.5rem] tablet-s:flex-wrap">
                <Image width={1000} height={1000} priority="true" alt="Images of website layouts" 
                className="w-[35rem] tablet-s:w-[80%] h-auto z-[10]" src="/images/WreckingWheels.png"></Image>
                <Image width={1000} height={1000} priority="true" alt="Images of website layouts" 
                className="w-[35rem] tablet-s:w-[80%] h-auto z-[10]" src="/images/BrendenThompson.png"></Image>
            </div>

            <div className="flex flex-col items-center gap-[2.5rem] mt-[4rem] tablet-s:w-[80%] mx-auto">
                <Description header="" text={"Video game designs, animator portfolios, anything and everything for your dream website. On-time, on-budget, and on-point."}></Description>
            </div>
        </div>
    );
}
"use client";
import { useState, useEffect } from "react"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Team() {

    function Member({image, name, role}) {
       return(
        <div className="mobile:flex mobile:flex-row mobile:gap-x-4">
            <Image width={500} height={500} alt="Images of website layouts"
                className="w-[18rem] h-auto tablet-s:w-[12rem] mobile:w-[10rem]" src={image}></Image>
            <div>
                <h2 className="mt-4 text-[1.2rem] mobile:text-[1.3rem]">{name}</h2>
                <p className="opacity-60 mobile:text-[1.1rem]">{role}</p>
            </div>
        </div>     
       );
    }

    return(
        <>
            <h1 id="team" className="text-center text-[3rem] tablet-s:text-[2.5rem] mobile:text-[2rem] tablet-s:px-[2rem] pt-[10rem] mobile:pt-[6rem] mobile:px-0 mobile:w-[85%] mobile:mx-auto">Working with you every step of the way</h1>

            <div className="flex justify-center gap-[4rem] mt-[3rem] tablet-s:gap-[2rem] tablet-s:flex-wrap tablet-s:px-[2rem] mobile:flex-col mobile:items-start">
                <Member image="/images/AdreanPic.png" name="Adrean Cajigas" role="Frontend Developer"></Member>
                <Member image="/images/Benny.png" name="Benjamin Schoolland" role="Backend Developer"></Member>
                <Member image="/images/KirillPic.png" name="Kirill Kovalenko" role="Client Developer"></Member>
            </div>

            <div className="flex justify-center mt-[3rem] gap-x-[7rem] tablet-s:gap-x-[4rem] items-end mb-[5rem] tablet-s:flex-wrap tablet-s:px-[2rem] mobile:w-[85%] mobile:mx-auto mobile:px-0 tablet-s:gap-y-8 mobile:gap-12">
                <p className="text-[1.2rem] tablet-s:text-[1rem] mobile:text-[1.1rem] mobile:leading-[200%] leading-8 w-[45rem] tablet-s:w-[26rem] mobile:w-auto tablet-s:leading-7">Since our first project at Modesto Junior College in 2022, our mission has been clear: to create websites that do more than just look good—they make your day easier, more efficient, and successful. Let us elevate your online presence and make an impact by transforming your vision into a visual experience.</p>

                <a href="https://cal.com/visions2visuals/discovery" target="_blank">
                    <button className="rounded-[1.5rem] bg-black px-[2.5rem] py-[.8rem] text-white text-center hover:bg-black/80 duration-200 mobile:text-[1.2rem]">Get a free evaluation</button>
                </a>
            </div>
        </>
    );
}
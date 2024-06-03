"use client";
import { useState, useEffect } from "react"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Team() {

    return(
        <>
            <h1 className="text-center text-[3rem] mt-[10rem]">Working with you every step of the way</h1>

            <div className="flex justify-center gap-[4rem] mt-[3rem]">
                <div className="flex-col">
                    <Image width={500} height={500} alt="Images of website layouts"
                        className="w-[18rem] h-auto" src="/images/AdreanPic.png"></Image>
                        <h2 className="mt-4 text-[1.2rem]">Adrean Cajigas</h2>
                        <p className="opacity-60">Frontend Developer</p>
                </div>
                <div>
                    <Image width={500} height={500} alt="Images of website layouts"
                        className="w-[18rem] h-auto" src="/images/BenPic.png"></Image>
                        <h2 className="mt-4 text-[1.2rem]">Benjamin Schoolland</h2>
                        <p className="opacity-60">Backend Developer</p>
                </div>
                <div>
                    <Image width={500} height={500} alt="Images of website layouts"
                        className="w-[18rem] h-auto" src="/images/KirillPic.png"></Image>
                        <h2 className="mt-4 text-[1.2rem]">Kirill Kovakuku</h2>
                        <p className="opacity-60">Client Developer</p>
                </div>
            </div>

            <div className="flex justify-center mt-[3rem] gap-x-[7rem] items-end mb-[5rem]">
                <p className="text-[1.2rem] leading-8 w-[45rem]">Since our first project at Modesto Junior College in 2022, our mission has been clear: to create websites that do more than just look good—they make your day easier, more efficient, and successful. Let us elevate your online presence and make an impact by transforming your vision into a visual experience.</p>

                <button className="rounded-[1.5rem] bg-black px-[2.5rem] py-[.6rem] text-white text-center hover:bg-black/80 duration-200">Contact us</button>
            </div>
        </>
    );
}
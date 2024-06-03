"use client";
import { useState, useEffect } from "react"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Design() {

    function List({text}) {
        return(
            <div className="flex items-center gap-3">
                <Image width={500} height={500} priority="true" alt="Checkmark icon" className="w-[1.1rem] h-[1rem]" src="/images/checkmark.png"></Image>
                <h2 className="text-[1.2rem] tablet-s:text-[1.1rem]">{text}</h2>
            </div>
        )
    }

    return(
    <>
        <div className="flex justify-center gap-[6.5rem] mt-[10rem] tablet-s:flex-wrap">
            <div>
                <h1 className="text-[3rem] mx-auto leading-[4.6rem] tablet-s:text-[2.5rem]">Website Design UI/UX</h1>

                <div className="hidden tablet-s:flex justify-start relative my-[1rem]">
                    <Image width={1000} height={1000} alt="Images of website layouts" 
                    className="w-[32rem] h-fit z-[10]" src="/images/Design.png"></Image>
                </div>

                <p className="text-[1.0rem] mt-[2rem] leading-8 opacity-60 w-[33rem]">{"Effective web design should not only capture your brand's values and your customers' needs, but also makes your site easy to use. Our crucial attention to UI helps visitors save time and enhances their overall experience. This not only attracts more customers but also boosts your credibility while significantly cutting down on unnecessary costs."}</p>

                <div className="flex flex-col gap-8 mt-[3rem]">
                    <List text="Understand your goals and pain points."></List>
                    <List text="Aesthetic color palettes and fonts."></List>
                    <List text="User-centric experience and strategy."></List>
                    <List text="Reflect your brand and unique values."></List>
                </div>

                <button className="rounded-[1.5rem] mt-[4rem] bg-black px-[2.5rem] py-[.6rem] text-white text-center hover:bg-black/80 duration-200 tablet-s:scale-95">Get a free evaluation</button>
            </div>
    
            <div className="flex justify-center relative tablet-s:hidden">
                <Image width={1000} height={1000} alt="Images of website layouts" 
                className="w-[32rem] h-fit z-[10]" src="/images/Design.png"></Image>
            </div>
        </div>

        <div className="flex justify-center gap-[6.5rem] mt-[10rem] tablet-s:flex-wrap">

            <div className="flex justify-center relative tablet-s:hidden">
                <Image width={1000} height={1000} alt="Images of website layouts" 
                className="w-[32rem] h-fit z-[10]" src="/images/Development.png"></Image>
            </div>

            <div>
                <h1 className="text-[3rem] mx-auto leading-[4.6rem] tablet-s:text-[2.5rem]">Website Development</h1>

                <div className="hidden tablet-s:flex justify-start relative my-[1rem]">
                    <Image width={1000} height={1000} alt="Images of website layouts" 
                    className="w-[32rem] h-fit z-[10]" src="/images/Development.png"></Image>
                </div>

                <p className="text-[1.0rem] mt-[2rem] leading-8 opacity-60 w-[34rem]">{"Our development services ensure your site is responsive and high-performing across all devices. By optimizing website speed and functionality, we enhance user engagement to directly contribute to your business’s success. No matter the complexity of the website, we'll find the best solution to keep you and your visitors happy."}</p>

                <div className="flex flex-col gap-8 mt-[3rem]">
                    <List text="Code and no-code solutions."></List>
                    <List text="Responsive across all devices."></List>
                    <List text="Databases, blogs, and newsletters."></List>
                    <List text="Optimized speed and performance."></List>
                    <List text="Search engine optimization."></List>
                    <List text="Web maintenance and support."></List>
                </div>
            </div>
        </div>
    </>
    );
}
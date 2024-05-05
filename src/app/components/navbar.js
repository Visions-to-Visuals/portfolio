"use client";
import { useState, useEffect } from "react"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);

    function NavItem( {text, page} ) {
        return (
            <a href={page}>
                <li className="text-[1.1rem] px-2 cursor-pointer duration-300 hover:text-accent">{text}</li>
            </a>
        )
    }

    return(
        <>
            {isMobile ? (
            <nav className="h-[6rem] w-[1rem] flex justify-between items-center px-[4vw] tablet-s:h-[4rem] sticky top-10 z-[100]">
                <div className={`fixed top-0 bottom-0 z-10 bg-accent
                duration-500 ease-in-out ${overlayVisible ? 'right-0' : '-right-[300px]'} w-[300px] mobile:w-[240px]`}>
                    <ul className="flex flex-col items-center justify-end px-4 gap-y-10 
                    text-secondary mt-[8rem] text-[1.2rem]">
                        <NavItem text="Home" page=""></NavItem>
                        <NavItem text="Projects" page=""></NavItem>
                        <NavItem text="About" page=""></NavItem>
                        <NavItem text="Contact" page=""></NavItem>
                    </ul>
                </div>

                <FontAwesomeIcon
                icon={overlayVisible ? faXmark : faBars}
                className="cursor-pointer text-3xl z-10"
                color="white"
                onClick={toggleOverlay}
                />
            </nav>

            ):( 
            <nav className="sticky z-[100] top-0 mx-auto right-0 left-0 py-[2.5rem] px-[4rem] bg-white max-w-[110rem]">

                <div className="flex justify-between">
                    <Image width={1000} height={100} alt="Visions to Visuals Logo" className="w-[15rem] h-full" src="/images/v2vlogo.png"></Image>

                    <ul className="flex items-center justify-center gap-[3rem]">
                        <NavItem text="Home" page=""></NavItem>
                        <NavItem text="Services" page=""></NavItem>
                        <NavItem text="Work" page=""></NavItem>
                        <NavItem text="FAQ" page=""></NavItem>
                        <NavItem text="Contact" page=""></NavItem>
                    </ul>
                </div>
            </nav>
            )}
        </>
    )
}
"use client";
import { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Logo Component
const Logo = memo(({ isAltTheme }) => (
    <Image
        width={1000}
        height={100}
        alt="Visions to Visuals Logo"
        className="w-[14rem] h-auto mobile:w-[13rem]"
        src={isAltTheme ? "/images/v2vinvert.png" : "/images/v2vlogo.png"}
    />
));

// NavItem Component
const NavItem = memo(({ text, page, target }) => (
    <a href={page} target={target}>
        <li className="text-[1.1rem] px-2 py-1 cursor-pointer hover:text-accent">{text}</li>
    </a>
));

// MobileNavItem Component
const MobileNavItem = memo(({ text, page, onClick }) => (
    <a href={page} onClick={onClick}>
        <h4 className="text-[1.5rem] tracking-wider px-2 py-1 cursor-pointer duration-300">{text}</h4>
    </a>
));

// MobileNavbar Component
const MobileNavbar = ({ isAltTheme, overlayVisible, toggleOverlay, closeMobileMenu }) => (
    <nav className={`navbar flex justify-between animate-fade2 items-center px-[4vw] h-[5rem] mobile:h-[4.2rem] sticky top-0 z-[100] transition-colors duration-[400ms]`}>
        <Logo isAltTheme={isAltTheme} />
        <FontAwesomeIcon
            icon={overlayVisible ? faXmark : faBars}
            className={`cursor-pointer text-3xl z-10 ${isAltTheme ? "text-white" : "text-black"} ${overlayVisible ? "text-white" : "text-black"}`}
            onClick={toggleOverlay}
        />
        <div className={`fixed top-0 left-0 w-full bg-softblack duration-[800ms] ease-in-out transform h-[100lvh] ${overlayVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <ul className={`flex flex-col gap-4 pl-[3rem] pt-[4rem] text-white font-[600] ${overlayVisible ? "fade-in" : "fade-out"}`}>
                <MobileNavItem text="Home" page="#home" onClick={closeMobileMenu} />
                <MobileNavItem text="Services" page="#services" onClick={closeMobileMenu} />
                <MobileNavItem text="Team" page="#team" onClick={closeMobileMenu} />
                <MobileNavItem text="Work" page="#work" onClick={closeMobileMenu} />
                {/* <MobileNavItem text="Pricing" page="#"></MobileNavItem> */}
                <MobileNavItem text="Free Evaluation" page="https://calendly.com/contact-cbnc/v2v" onClick={closeMobileMenu} />
            </ul>
        </div>
    </nav>
);

// DesktopNavbar Component
const DesktopNavbar = ({ isAltTheme }) => (
    <nav className={`navbar sticky z-[100] top-0 mx-auto right-0 left-0 py-[2rem] px-[6rem] backdrop-blur-lg transition-colors duration-[400ms]`}>
        <div className="flex justify-between items-center animate-fadeIn0">
            <Logo isAltTheme={isAltTheme} />
            <ul className="flex items-center justify-center gap-[3rem]">
                <NavItem text="Home" page="#home" target="" />
                <NavItem text="Services" page="#services" target="" />
                <NavItem text="Team" page="#team" target="" />
                <NavItem text="Work" page="#work" target="" />
                {/* <NavItem text="Pricing" page="" /> */}
                <NavItem text="Free Evaluation" page="https://calendly.com/contact-cbnc/v2v" target="_blank" />
            </ul>
        </div>
    </nav>
);

export default function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isAltTheme, setIsAltTheme] = useState(false);
    const [isMobile, setIsMobile] = useState(null);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = useCallback(() => setOverlayVisible(prev => !prev), []);
    const closeMobileMenu = useCallback(() => setOverlayVisible(false), []);

    const handleScroll = useCallback(() => {
        const currentScrollPosition = window.scrollY;
        setScrollPosition(currentScrollPosition);
    }, [scrollPosition]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        const handleIntersection = ([entry]) => setIsAltTheme(entry.isIntersecting);

        const workSection = document.getElementById('work');
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

        if (workSection) observer.observe(workSection);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        
        handleResize();

        return () => {
            if (workSection) observer.unobserve(workSection);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [handleScroll]);

    if (isMobile === null) {
        return (
            <nav className={`navbar flex justify-between items-center px-[4vw] h-[6.2rem] tablet-s:h-[5rem] mobile:h-[4.2rem] top-0 sticky z-[100] 
                ${isAltTheme ? "bg-softblack/80 duration-300 backdrop-blur-lg" : "bg-white/80 duration-300 backdrop-blur-lg"}`}>
            </nav>
        );
    }

    return (
        <>
            {isMobile ? (
                <MobileNavbar
                    isAltTheme={isAltTheme}
                    overlayVisible={overlayVisible}
                    toggleOverlay={toggleOverlay}
                    closeMobileMenu={closeMobileMenu}
                />
            ) : (
                <DesktopNavbar isAltTheme={isAltTheme} />
            )}
        </>
    );
}

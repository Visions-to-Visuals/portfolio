"use client";
import { useState, useEffect } from "react"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isAltTheme, setIsAltTheme] = useState(false);
    const [isMobile, setIsMobile] = useState(null);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => setOverlayVisible(!overlayVisible);
    const closeMobileMenu = () => setOverlayVisible(false);

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition > scrollPosition) {
            // Scrolling down
            setIsNavbarVisible(false);
        } else {
            // Scrolling up
            setIsNavbarVisible(true);
        }
        setScrollPosition(currentScrollPosition);
    };
    
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


    useEffect(() => {
        const workSection = document.getElementById('work-section');
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsAltTheme(true);
            } else {
              setIsAltTheme(false);
            }
          },
          {
            threshold: 0.1,
          }
        );
    
        if (workSection) {
          observer.observe(workSection);
        }
    
        return () => {
          if (workSection) {
            observer.unobserve(workSection);
          }
        };
      }, []);


      if (isMobile === null) {
        return (
            <nav className={`flex justify-between items-center px-[4vw] h-[6.2rem] tablet-s:h-[5rem] mobile:h-[4.2rem] top-0 sticky z-[100] 
            ${isAltTheme ? "bg-softblack/80 duration-300 backdrop-blur-lg": "bg-white/80 duration-300 backdrop-blur-lg"}`}>
            </nav>
        )
    }


    function NavItem( {text, page} ) {
        return (
            <a href={page}>
                <li className="text-[1.1rem] tablet-s:text-[1.5rem] px-2 py-1 cursor-pointer duration-300 hover:text-accent">{text}</li>
            </a>
        )
    }

    function MobileNavItem( {text, page} ) {
        return (
            <a href={page}>
                <h4 className="tablet-s:text-[1.5rem] px-2 py-1 cursor-pointer duration-300">{text}</h4>
            </a>
        )
    }

    return(
        <>
            {isMobile ? (
            <nav
            className={`flex justify-between animate-fade items-center px-[4vw] h-[5rem] mobile:h-[4.2rem] sticky top-0 z-[100] ${
              isAltTheme
                ? "bg-softblack/80 backdrop-blur-lg"
                : "bg-white/80 duration-300 backdrop-blur-lg"
            }`}
          >
            {isAltTheme ? (
              <Image
                width={1000}
                height={100}
                alt="Visions to Visuals Logo z-[1000]"
                className="w-[14rem] h-auto mobile:w-[13rem]"
                src="/images/v2vinvert.png"
              ></Image>
            ) : (
              <Image
                width={1000}
                height={100}
                alt="Visions to Visuals Logo z-[1000]"
                className="w-[14rem] h-auto mobile:w-[13rem]"
                src="/images/v2vlogo.png"
              ></Image>
            )}
  
            <FontAwesomeIcon
              icon={overlayVisible ? faXmark : faBars}
              className={`cursor-pointer text-3xl z-10 ${
                isAltTheme ? "text-white " : "text-black"
              } ${overlayVisible ? "text-white" : "text-black"}`}
              onClick={toggleOverlay}
            />
  
            <div
            className={`fixed top-0 left-0 w-full bg-softblack duration-[800ms] ease-in-out transform h-[100lvh] ${
              overlayVisible ? "translate-y-0" : "-translate-y-full"
            }`}
            >
                <ul
              className={`flex flex-col gap-4 pl-[3rem] pt-[4rem] text-white font-[600] ${
                overlayVisible ? "fade-in" : "fade-out"
              }`}
            >
                <MobileNavItem text="Home" page="#"></MobileNavItem>
                <MobileNavItem text="Services" page="#"></MobileNavItem>
                <MobileNavItem text="Work" page="#"></MobileNavItem>
                <MobileNavItem text="Pricing" page="#"></MobileNavItem>
                <MobileNavItem text="Contact" page="#"></MobileNavItem>
                </ul>
            </div>
          </nav>

            ):( 
            <nav className={`tablet-s:hidden animate-fade sticky z-[100] top-0 mx-auto right-0 left-0 py-[2rem] px-[6rem] max-w-[110rem] backdrop-blur-lg
            transition-opacity ${isAltTheme ? "bg-softblack/80 duration-300": "bg-white/80 duration-300"}`}>

                <div className="flex justify-between items-center">

                {isAltTheme ? 
                <Image width={1000} height={100} alt="Visions to Visuals Logo" className="w-[14rem] h-full" src="/images/v2vinvert.png"></Image>
                : 
                <Image width={1000} height={100} alt="Visions to Visuals Logo" className="w-[14rem] h-full" src="/images/v2vlogo.png"></Image>
                }

                    <ul className="flex items-center justify-center gap-[3rem]">
                        <NavItem text="Home" page=""></NavItem>
                        <NavItem text="Services" page=""></NavItem>
                        <NavItem text="Work" page=""></NavItem>
                        <NavItem text="Pricing" page=""></NavItem>
                        <NavItem text="Contact" page=""></NavItem>
                    </ul>
                </div>
            </nav>
            )}
        </>
    )
}
"use client"
import { useEffect } from 'react';
import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Design from "./components/design";
import Team from "./components/team";
import Work from "./components/work";
import Pricing from './components/pricing';
import Faq from './components/faq';

export default function Home() {

  useEffect(() => {
    const workSection = document.getElementById('work');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.documentElement.classList.add('alt-theme');
        } else {
          document.documentElement.classList.remove('alt-theme');
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

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Design></Design>
      <Team></Team>
      <Work></Work>
      {/* <Pricing></Pricing> */}
      {/* <Faq></Faq> */}
    </>
  );
}

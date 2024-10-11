"use client";
import Footer from "@/components/footer";
import Header from "../components/Header";
import Main from "@/components/main";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (()=>{
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    })
    AOS.refresh();
  }, [])
  
  return(
    <div>
      
      <Main/>
    
    </div>
  );
}

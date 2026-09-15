"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { cleaners } from "@/data/data";
import Button from "./Button";
import Image from "next/image";
import { useRef } from "react";

export default function TopCleaners() {

  const cleanersRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const titleSplit = SplitText.create(".cleaners-title", {
        type: "chars,lines",
        mask: "chars",
        linesClass: "text-line",
      });
      const textSplit = SplitText.create(".cleaners-text", {
        type: "chars,lines",
        mask: "chars",
        linesClass: "text-line",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cleanersRef.current,
          start: "top 60%",
        },
      });
      tl.from(titleSplit.chars, {
        xPercent: -150,
        duration: 0.5,
        stagger: 0.03,
        ease: "power2.inOut",
      }).from(textSplit.chars, {
        xPercent: -150,
        duration: 0.5,
        stagger: 0.01,
        ease: "power2.inOut",
      })
    },
    {scope: cleanersRef }
  )

  return (<>
    <section ref={cleanersRef} className="py-24">
      <div className="container">
        
        {/* TITLE */}
        <div className="flex items-center justify-between flex-wrap gap-9">
          <div className="max-w-4xl space-y-3">
            <h2 className="section-title cleaners-title">Experts for Every Task</h2>
            <p className="cleaners-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, cumque!</p>
          </div>
          <Button label="Explore All" />
        </div>

        {/* WRAPPER */}
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {cleaners.map((cleaner) => (
            <div key={cleaner.id} className="bg-cardClr-1 card shadow-cardClr-2 border-cardClr-2! rounded-xl px-6 py-8">
              
              {/* IMAGE */}
              <div className="max-w-max mx-auto">
                <Image
                  src={cleaner.img}
                  alt={cleaner.name}
                  width={304}
                  height={224}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-6 space-y-2.5">
                <h3 className="font-bold text-2xl sm:text-3xl text-cardClr-2">{cleaner.name}</h3>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/icon-brush.svg"}
                    alt="service title"
                    width={25}
                    height={25}
                  />
                  <p className="text-cardClr-2">{cleaner.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/icon-star.svg"}
                    alt="rating"
                    width={25}
                    height={25}
                  />
                  <p className="text-cardClr-2">{cleaner.rate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  </>)
}

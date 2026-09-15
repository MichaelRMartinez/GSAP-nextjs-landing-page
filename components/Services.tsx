"use client";

import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { tagsItems } from "@/data/data";
import Button from "./Button";
import { useRef } from "react";

export default function Services() {

  const servicesRef = useRef<HTMLElement | null>(null);
  useGSAP(
    () => {
      const titleSplit = SplitText.create(".services-title", {
        type: "chars,lines",
        mask: "chars",
        linesClass: "text-line",
      });
      const textSplit = SplitText.create(".services-text", {
        type: "chars,lines",
        mask: "chars",
        linesClass: "text-line",
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
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
    {scope: servicesRef}
  )

  return (<>
    <section ref={servicesRef}>
      <div className="container">
        
        {/* TITLE */}
        <div className="flex flex-col gap-9 lg:flex-row lg:justify-between lg:items-center">
          <div>
            <h2 className="section-title services-title">Discover All Services</h2>
            <p className="services-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolor quasi voluptates tempore.</p>
          </div>
          <Button label="Explore All" />
        </div>

        {/* TAGS */}
        <div className="flex items-center flex-wrap gap-6 justify-center my-14">
          {tagsItems.map((item) => (
              <div key={item.id} className="flex items-center p-1 border-3 rounded-lg gap-2 px-8 btn">
                {/* ICON */}
                <span className="shrink-0">
                  <img src={item.icon} alt={item.label} />
                </span>
                {/* LABEL */}
                <p>{item.label}</p>
              </div>
            ))}
        </div>
        
      </div>
    </section>
  </>)
}

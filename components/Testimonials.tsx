"use client";
import { gsap, useGSAP, SplitText } from "@/lib/gsap";
import { testiItems } from "@/data/data";
import Image from "next/image";
import { useRef } from "react";

export default function Testimonials() {

  const testiRef = useRef<HTMLElement | null>(null);
  const testiWrapper = useRef<HTMLDivElement | null>(null);
  
  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".testi-card");
      
      gsap.from(cards, {
        scale: 0.7,
        ease: "elastic.out(1,0.8)",
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
          trigger: testiWrapper.current,
          start: "top center",
        },
      });
      gsap.from(".testi-sec-img", {
        scale: 0.7,
        rotate: "12deg",
        ease: "bounce.out",
        duration: 1,
        scrollTrigger: {
          trigger: testiWrapper.current,
          start: "top 25%",
        }
      });
    },
    {scope: testiWrapper });
  
  return (<>
    <section className="py-24" ref={testiRef}>
      <div className="container">

        {/* WRAPPER */}
        <div className="bg-secClr cust-border shadow rounded-4xl p-5 sm:p-8 lg:p-12 grid gap-16 lg:gap-18 lg:grid-cols-2 relative" ref={testiWrapper}>

          {/* CONTENT */}
          <div className="max-w-117 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold testi-title text-black/75">Hear From Our Happy Clients</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias obcaecati eligendi deleniti incidunt facere, soluta error molestiae! Nulla commodi veniam ex illo explicabo itaque, provident molestiae mollitia quasi modi.</p>
          </div>

          {/* CARDS */}
          <div className="space-y-8">
            {testiItems.map((item) => (
              // CARD
              <div className="bg-cardClr-3 py-8 pr-8 flex flex-col lg:flex-row items-center gap-6 card testi-card" key={item.id}>
                {/* ICON */}
                <div className="-mt-20 lg:-ml-16 shrink-0">
                  <img src={item.icon} alt={item.author} />
                </div>
                {/* CONTENT */}
                <div className="text-black/75 px-4 space-y-2">
                  <p>{item.text}</p>
                  <p className="font-bold text-2xl">{item.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SECTION IMAGE */}
          <Image
            src='/images/testimonials-sec-img.svg'
            alt=""
            width={712}
            height={608}
            className="absolute bottom-8 -left-4 testi-sec-img origin-bottom-right hidden lg:block"
          />
        </div>
      </div>
    </section>
  </>)
}

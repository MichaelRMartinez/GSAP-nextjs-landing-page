"use client";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/data";
import Button from "./Button";
import { RiCloseLine, RiMenu4Line } from "@remixicon/react";
import { useState } from "react";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (<>
    <header className="sticky top-0 left-0 w-full mt-8 bg-transparent backdrop-blur-xl py-2 z-50">
      <div className="container flex items-center justify-between mx-auto">

        {/* LOGO */}
        <Link href={'/'} className="flex items-center gap-4 size-18">
          <Image src='/images/logo.svg' alt="logo" width={94} height={94} />
          <p className="text-2xl font-bold">TaskNest</p>
        </Link>

        {/* MOBILE MENU */}
        <nav className={`lg:hidden absolute top-full left-0 bg-white backdrop-blur-3xl h-0 overflow-y-hidden w-full ${isOpen && "h-auto"}`} >
          
          {/* WRAPPER */}
          <div className="py-10 px-8 space-y-4">
            {/* LIST */}
            <ul className="space-y-1.5 text-xl focus:text-secondary">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="font-bold hover:text-pink-700 focus:text-pink-700 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>

            <Button label='Try Us Today' />
          </div>
        </nav>

        {/* MENU BUTTON */}
        <button className="btn lg:hidden size-10 bg-secondary flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <RiCloseLine /> : <RiMenu4Line />}
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center flex-1">
          {/* LIST */}
          <ul className="flex items-center mx-auto gap-7">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="font-bold text-lg decoration-2 underline-offset-2 hover:text-pink-700 transition-colors hover:underline focus:text-pink-700 focus:underline ">{item.label}</Link>
              </li>
            ))}
          </ul>

          <Button label='Try Us Today' />
        </nav>
      
      </div>
    </header>
  </>)
}

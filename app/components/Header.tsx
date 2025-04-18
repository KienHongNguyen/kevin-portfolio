"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const navItems = ["Home", "About", "Play", "Notes", "Contact"];

export default function Header() {
  const pathname = usePathname();
  const current =
    pathname === "/"
      ? "Home"
      : pathname.split("/")[1].charAt(0).toUpperCase() +
        pathname.split("/")[1].slice(1);
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
  useEffect(() => {
    const index = navItems.findIndex((item) => item === current);
    const el = tabRefs.current[index];
    if (el) {
      setHighlightStyle({
        left: el.offsetLeft,
        width: el.offsetWidth
      });
    }
  }, [current]);

  return (
    <header className='sticky top-8 z-99'>
      <div className='relative flex gap-4 py-3 px-4 my-8 mx-auto w-fit bg-white rounded-full'>
        <div
          className='absolute top-1/2 h-[60%] rounded-full transition-all duration-300 -translate-y-1/2 bg-[#f2f4e9] pointer-events-none'
          style={{
            left: highlightStyle.left,
            width: highlightStyle.width
          }}
        ></div>

        {navItems.map((item, i) => (
          <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            ref={(el: HTMLAnchorElement | null) => {
              tabRefs.current[i] = el;
            }}
            className={`z-10 flex items-center gap-2 text-xl px-4 py-2 rounded-full transition ${
              current === item ? "font-semibold" : "text-forest"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
}

// {isActive && item === "Home" && (
// <kbd className='text-xl italic'>/</kbd>)}

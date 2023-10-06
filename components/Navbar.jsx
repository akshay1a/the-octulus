"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black flex justify-between items-center p-5">
      <div>
        <Link href="/" className="text-3xl ">
          The <span className="font-bold">OCTULUS</span>
        </Link>
      </div>
      <div className="flex flex-row gap-7 text-md md:text-xl">
        <Link href="/" className="hidden md:block ">
          Home
        </Link>
        <Link href="/movies"><i className="fas fa-heart" />Movies</Link>
        <Link href="/tv-shows">TV Shows</Link>
      </div>
    </nav>
  );
}

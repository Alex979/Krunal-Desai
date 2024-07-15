"use client";

import signatureLight from "@/images/signature-light.png";
import signatureDark from "@/images/signature-dark.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  theme: "light" | "dark";
}

export default function Navbar({ theme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="absolute w-full flex h-16 sm:h-20 z-10">
        <div className="flex items-center">
          <Link href="/">
            <Image
              className="mx-2 w-44 sm:mx-5 sm:w-64"
              src={theme === "light" ? signatureLight : signatureDark}
              alt="signature"
            />
          </Link>
        </div>
        <div className="grow px-5 flex items-center justify-end space-x-6 hidden md:flex">
          <Link
            href="/map"
            className="text-white hover:text-gray-300 transition text-lg"
          >
            Map
          </Link>
          <Link
            href="/gallery"
            className="text-white hover:text-gray-300 transition text-lg"
          >
            Gallery
          </Link>
          <Link
            href="/biography"
            className="text-white hover:text-gray-300 transition text-lg"
          >
            Biography
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-gray-300 transition text-lg"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-gray-300 transition text-lg"
          >
            Contact
          </Link>
          <div className="mx-5"></div>
          <Link href="https://www.instagram.com/_krunaldesai_/">
            <svg
              className="w-6 h-6 text-white hover:text-gray-300 transition"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </Link>
        </div>
        <div className="grow px-5 flex items-center justify-end space-x-6 flex md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={
          "fixed inset-0 bg-stone-100 z-10 transition " +
          (menuOpen ? "" : "translate-x-full")
        }
      >
        <div className="absolute top-8 right-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-slate-600"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center space-y-6">
          <Link href="/map" className="text-slate-600 text-3xl">
            Map
          </Link>
          <Link href="/gallery" className="text-slate-600 text-3xl">
            Gallery
          </Link>
          <Link href="/biography" className="text-slate-600 text-3xl">
            Biography
          </Link>
          <Link href="/blog" className="text-slate-600 text-3xl">
            Blog
          </Link>
          <Link href="/contact" className="text-slate-600 text-3xl">
            Contact
          </Link>
          <div className="my-5"></div>
          <Link href="https://www.instagram.com/_krunaldesai_/">
            <svg
              className="w- h-8 text-slate-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

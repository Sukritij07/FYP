"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";

const Header = ({ logo }) => {
  const [isUserButtonLoaded, setIsUserButtonLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const SkeletonLoader = () => (
    <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUserButtonLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const path = usePathname();

  return (
    <div className="bg-gradient-to-r from-[#102820] via-[#24513A] to-[#3C6E51] shadow-md font-['Playfair_Display'] text-[#FDFCF9]">
      <div className="w-[90%] m-auto flex gap-4 items-center justify-between py-2">
        <Link className="hidden md:block" href="/dashboard">
          <Image
            src="/ilablogo.jpg"
            width={80}
            height={80}
            alt="logo"
            className="rounded-full"
          />
        </Link>
        <ul className="hidden md:flex gap-12 text-2xl font-medium tracking-wider">
          <Link href="/dashboard">
            <li
              className={`hover:text-[#D1FAE5] transition-all cursor-pointer ${
                path == "/dashboard" && "text-[#D1FAE5] underline decoration-2"
              }`}
            >
              Dashboard
            </li>
          </Link>
          <Link href="/dashboard/question">
            <li
              className={`hover:text-[#D1FAE5] transition-all cursor-pointer ${
                path == "/dashboard/question" &&
                "text-[#D1FAE5] underline decoration-2"
              }`}
            >
              Questions
            </li>
          </Link>
          <Link href="/dashboard/upgrade">
            <li
              className={`hover:text-[#D1FAE5] transition-all cursor-pointer ${
                path == "/dashboard/upgrade" &&
                "text-[#D1FAE5] underline decoration-2"
              }`}
            >
              Upgrade
            </li>
          </Link>
          <Link href="/dashboard/howit">
            <li
              className={`hover:text-[#D1FAE5] transition-all cursor-pointer ${
                path == "/dashboard/howit" &&
                "text-[#D1FAE5] underline decoration-2"
              }`}
            >
              How it works?
            </li>
          </Link>
        </ul>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <div className="bg-[#FDFCF9] text-black rounded-md">
            <ModeToggle />
          </div>
          {isUserButtonLoaded ? <UserButton /> : <SkeletonLoader />}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-4 text-xl font-medium tracking-wide">
            <Link href="/dashboard">
              <li
                className={`hover:text-[#D1FAE5] transition-all cursor-pointer ${
                  path == "/dashboard" &&
                  "text-[#D1FAE5] underline decoration-double decoration-2"
                }`}
              >
                Dashboard
              </li>
            </Link>
            <Link href="/dashboard/question">
              <li
                className={`hover:text-[#D1FAE5] transition-all cursor-pointer ${
                  path == "/dashboard/question" &&
                  "text-[#D1FAE5] underline decoration-double decoration-2"
                }`}
              >
                Questions
              </li>
            </Link>
            <Link href="/dashboard/upgrade">
              <li
                className={`hover:text-[#D1FAE5] transition-all cursor-pointer ${
                  path == "/dashboard/upgrade" &&
                  "text-[#D1FAE5] underline decoration-double decoration-2"
                }`}
              >
                Upgrade
              </li>
            </Link>
            <Link href="/dashboard/howit">
              <li
                className={`hover:text-[#D1FAE5] transition-all cursor-pointer ${
                  path == "/dashboard/howit" &&
                  "text-[#D1FAE5] underline decoration-double decoration-2"
                }`}
              >
                How it works?
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;

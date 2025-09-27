"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
  activePage?: string;
}

export default function Header({ activePage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/press", label: "Press" },
    { href: "/writing", label: "Writing" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout: Logo left, Nav right */}
        <div className="hidden md:flex items-center justify-between py-6">
          {/* Logo on the left */}
          <Link href="/" className="block">
            <Image
              src="/media/dpsignature.PNG"
              alt="Derek Pethel Signature"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          
          {/* Navigation on the right */}
          <div className="flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  (activePage || pathname) === item.href
                    ? "text-white border-b border-white pb-1"
                    : "text-gray-400 hover:text-white hover:border-b hover:border-gray-400 pb-1"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile Layout: Centered logo and hamburger */}
        <div className="md:hidden">
          {/* Centered signature */}
          <div className="flex justify-center py-6">
            <Link href="/" className="block">
              <Image
                src="/media/dpsignature.PNG"
                alt="Derek Pethel Signature"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Centered hamburger menu */}
          <div className="flex justify-center pb-6">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isOpen && (
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium tracking-wide transition-all ${
                    (activePage || pathname) === item.href
                      ? "text-white bg-gray-800"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

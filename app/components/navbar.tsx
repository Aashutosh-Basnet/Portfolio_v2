"use client";
import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const lastScrollYRef = useRef(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { y: currentScrollY } = useWindowScroll();
  const navContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { title: "Home", path: "home", isRoute: false },
    { title: "Projects", path: "project", isRoute: true },
    { title: "About", path: "about", isRoute: false },
    { title: "Skills", path: "skills", isRoute: false },
    { title: "Contact", path: "contact", isRoute: false },
  ];

  useEffect(() => {
    const lastScrollY = lastScrollYRef.current;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    lastScrollYRef.current = currentScrollY;
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
    });
  }, [isNavVisible]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (path: string, isRoute: boolean) => {
    setActiveSection(path);
    setIsMenuOpen(false);

    if (isRoute) {
      router.push(`/${path}`);
    } else {
      if (pathname !== "/") {
        router.push(`/#${path}`);
      } else {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          history.pushState(null, "", `/#${path}`);
        }
      }
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-0 z-50 h-20 border-none transition-all duration-700 bg-black/90 backdrop-blur-sm"
    >
      <header className="relative top-1/2 w-full -translate-y-1/2 rounded-lg bg-transparent shadow-sm">
        <nav className="flex size-full items-center justify-between px-6 py-4">
          <Link
            href={"/"}
            onClick={() => handleNavClick("home", false)}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent transition-all duration-300 hover:opacity-80"
          >
            aashu.dev
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.isRoute ? `/${item.path}` : `#${item.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path, item.isRoute);
                }}
                className={`relative text-sm group ${
                  activeSection === item.path ? "text-white" : "text-gray-400"
                }`}
              >
                {item.title}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 ${
                    activeSection === item.path ? "w-full" : "w-0"
                  } group-hover:w-full`}
                />
              </a>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64 border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.isRoute ? `/${item.path}` : `#${item.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path, item.isRoute);
                }}
                className={`relative w-fit text-sm group ${
                  activeSection === item.path ? "text-white" : "text-gray-400"
                }`}
              >
                {item.title}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 ${
                    activeSection === item.path ? "w-full" : "w-0"
                  } group-hover:w-full`}
                />
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
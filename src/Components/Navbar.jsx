import { href } from "react-router-dom";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { MenuIcon, X } from "lucide-react";

const Navlist = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact Us", href: "#ContactUs" },
  { name: "Projects", href: "#projects" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-6"
      )}
    >
      <div className="container flex items-center justify-around">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-gradient text-foreground">Amit's</span>{" "}Portfolio
          </span>
        </a>
        {/* Desktop */}
        <div className="hidden md:flex space-x-6 ">
          {Navlist.map((list, key) => (
            <a
              key={key}
              href={list.href}
              className="text-foreground/90 hover:text-primary transition-colors duration-300 font-medium"
            >
              {list.name}
            </a>
          ))}
        </div>

        {/* Mobile device */}

        <button
          onClick={() => setisMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "CloseMenu" : "OpenMenu"}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col item-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {Navlist.map((list, key) => (
              <a
                key={key}
                href={list.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setisMenuOpen(true)}
              >
                {list.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

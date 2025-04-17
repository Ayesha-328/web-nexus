// Note: Must add resiable-navbar.jsx file in the component/ui folder
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
  } from "@/components/ui/resizable-navbar";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  import DarkModeToggle from './DarkModeToggle';
  
  export function Header() {
    const navItems = [
      {
        name: "Quiz",
        link: "/quiz",
      },
      {
        name: "Contact",
        link: "/contact",
      },
      {
        name: "Gallery",
        link: "/gallery",
      },
    ];
  
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    return (
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            {/* <NavItems items={navItems} /> */}
            <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="secondary"
                  className="w-full">
                  <Link to="/contact">Contact</Link>
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="secondary"
                  className="w-full">
                  <Link to="/gallery">Gallery</Link>
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="secondary"
                  className="w-full">
                  <Link to="/meme">Meme</Link>
                </NavbarButton>
            <div className="flex items-center gap-4">
              <NavbarButton className="hidden lg:flex" variant="secondary">
            <DarkModeToggle className="w-full" />
              </NavbarButton>

              <NavbarButton variant="primary">Generate Meme</NavbarButton>
            </div>
          </NavBody>
  
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </MobileNavHeader>
  
            <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  to={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300">
                  <span className="block">{item.name}</span>
                </Link>
              ))}
              <div className="flex w-full flex-col gap-4">
                <DarkModeToggle className="w-full" />
                
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full">
                  generate Meme
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
    );
  }
  
  
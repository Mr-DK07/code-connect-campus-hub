import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Code, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img
            src="\public\logo.jpg"
            alt="PTSC"
            style={{ width: "50px", height: "40px" }}
          />
          <div className="flex items-center"></div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/team"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </Link>
              <Link
                to="/events"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Events
              </Link>
              <Link
                to="/resources"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Resources
              </Link>
              <Link
                to="/gallery"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                to="/join"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium"
              >
                Join Us
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="mr-2"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" onClick={toggleMenu} size="icon">
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/team"
              className="hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link
              to="/events"
              className="hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              to="/resources"
              className="hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Resources
            </Link>
            <Link
              to="/gallery"
              className="hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/join"
              className="bg-primary text-primary-foreground block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

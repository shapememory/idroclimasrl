
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <img 
                alt="Idroclima SRL Logo" 
                className="w-[200px] h-[87px] md:w-[300px] md:h-[130px] object-contain" 
                src="/lovable-uploads/483a00f8-ccaa-44d5-ad2f-eca1afc91320.png" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map(item => <Link key={item.text} to={item.href} className="text-gray-600 hover:text-primary transition-colors duration-200">
                {item.text}
              </Link>)}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(item => <Link key={item.text} to={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200" onClick={() => isMobile && setIsOpen(false)}>
              {item.text}
            </Link>)}
        </div>
      </div>
    </nav>;
};

const navItems = [{
  text: "Home",
  href: "/"
}, {
  text: "Chi Siamo",
  href: "/chi-siamo"
}, {
  text: "Servizi",
  href: "/servizi"
}, {
  text: "Contatti",
  href: "/contatti"
}];

export default Navbar;

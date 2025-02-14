
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
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
            <Link 
              to="/" 
              className="text-gray-600 hover:text-primary transition-colors duration-200 text-lg font-medium"
            >
              Home
            </Link>
            <Link 
              to="/chi-siamo" 
              className="text-gray-600 hover:text-primary transition-colors duration-200 text-lg font-medium"
            >
              Chi Siamo
            </Link>
            
            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg font-medium">
                    Servizi
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[240px] p-3 bg-white">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md text-gray-700 hover:text-primary transition-colors"
                        >
                          {service.text}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              to="/contatti" 
              className="text-gray-600 hover:text-primary transition-colors duration-200 text-lg font-medium"
            >
              Contatti
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <Link 
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
            onClick={() => isMobile && setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/chi-siamo"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
            onClick={() => isMobile && setIsOpen(false)}
          >
            Chi Siamo
          </Link>
          <div className="px-3 py-2">
            <div className="font-medium text-gray-600">Servizi</div>
            <div className="pl-4 space-y-1 mt-2">
              {serviceItems.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  {service.text}
                </Link>
              ))}
            </div>
          </div>
          <Link 
            to="/contatti"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
            onClick={() => isMobile && setIsOpen(false)}
          >
            Contatti
          </Link>
        </div>
      </div>
    </nav>
  );
};

const serviceItems = [
  { text: "Climatizzatori", href: "/servizi/climatizzatori" },
  { text: "Termoidraulica", href: "/servizi/termoidraulica" },
  { text: "Caldaie", href: "/caldaie" },
  { text: "Addolcitori", href: "/servizi/addolcitori" },
  { text: "Ristrutturazione Bagni", href: "/servizi/ristrutturazione-bagni" },
];

export default Navbar;

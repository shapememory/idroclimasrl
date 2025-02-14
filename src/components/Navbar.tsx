
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Chi Siamo", path: "/chi-siamo" },
    {
      title: "Servizi",
      path: "/servizi",
      submenu: [
        { title: "Climatizzazione", path: "/servizi/climatizzatori" },
        { title: "Termoidraulica", path: "/servizi/termoidraulica" },
        { title: "Caldaie", path: "/caldaie" },
        { title: "Addolcitori", path: "/servizi/addolcitori" },
        { title: "Ristrutturazione Bagni", path: "/servizi/ristrutturazione-bagni" },
        { title: "Richiesta Incentivi", path: "/incentivi" },
      ],
    },
    { title: "Contatti", path: "/contatti" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800">
            IdroclimaPro
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.submenu ? (
                  <div
                    className="flex items-center text-gray-600 hover:text-primary cursor-pointer transition-colors duration-200"
                    onMouseEnter={() => setShowServicesMenu(true)}
                    onMouseLeave={() => setShowServicesMenu(false)}
                  >
                    {item.title}
                    <ChevronDown className="ml-1 w-4 h-4" />
                    {showServicesMenu && (
                      <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-1 animate-fade-in">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.path}
                            to={subitem.path}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                          >
                            {subitem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-primary transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-lg">
            {menuItems.map((item) => (
              <div key={item.path}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setShowServicesMenu(!showServicesMenu)}
                      className="w-full text-left px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200 flex items-center justify-between"
                    >
                      {item.title}
                      <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${showServicesMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {showServicesMenu && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.path}
                            to={subitem.path}
                            className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowRight, Droplet, Wrench, ThermometerSun, Building2, Clock, Award } from "lucide-react";
import { Facebook, MessageCircle, Phone, Mail } from "lucide-react";

const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-48 md:pt-56 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Soluzioni Professionali per il Tuo Comfort
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Servizi di alta qualità per riscaldamento, climatizzazione e idraulica
            </p>
            <Link to="/contatti" className="inline-flex items-center px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200">
              Richiedi Preventivo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={service.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-up" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.path} className="text-primary hover:text-primary/80 inline-flex items-center">
                  Scopri di più
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Azienda</h3>
              <p className="text-gray-400 mb-4">
                IDROCLIMA SRL<br />
                via Lugagnano 17/B<br />
                37066 Sommacampagna (VR)<br />
                P.IVA 04705490235
              </p>
              <a href="/contatti" className="text-primary hover:text-primary/80 transition-colors duration-200">
                Contattaci
              </a>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">I Nostri Servizi</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/servizi/climatizzatori" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Climatizzatori
                  </a>
                </li>
                <li>
                  <a href="/servizi/termoidraulica" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Termoidraulica
                  </a>
                </li>
                <li>
                  <a href="/caldaie" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Caldaie
                  </a>
                </li>
                <li>
                  <a href="/servizi/addolcitori" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Addolcitori
                  </a>
                </li>
                <li>
                  <a href="/servizi/ristrutturazione-bagni" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Ristrutturazione Bagni
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="tel:+390458582372" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    +39 045 8582372
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/393406878511" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    +39 340 687 8511
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@idroclimaverona.it" 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    info@idroclimaverona.it
                  </a>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Orari</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Lunedì - Venerdì:</li>
                <li className="text-gray-400">8:00 - 18:00</li>
                <li className="text-gray-400">Sabato:</li>
                <li className="text-gray-400">8:00 - 12:00</li>
                <li className="text-gray-400">Domenica:</li>
                <li className="text-gray-400">Chiuso</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://wa.me/393406878511" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Idroclima SRL. Tutti i diritti riservati.</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="/cookie-policy" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://wa.me/393406878511"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>;
};

const services = [{
  title: "Climatizzazione",
  description: "Soluzioni complete per il comfort climatico della tua casa",
  icon: <ThermometerSun className="w-6 h-6 text-primary" />,
  path: "/servizi/climatizzatori"
}, {
  title: "Termoidraulica",
  description: "Servizi professionali per tutti i tuoi impianti idraulici",
  icon: <Wrench className="w-6 h-6 text-primary" />,
  path: "/servizi/termoidraulica"
}, {
  title: "Caldaie",
  description: "Installazione e manutenzione di sistemi di riscaldamento moderni ed efficienti",
  icon: <Droplet className="w-6 h-6 text-primary" />,
  path: "/caldaie"
}, {
  title: "Ristrutturazione Bagni",
  description: "Rinnova il tuo bagno con soluzioni moderne e funzionali",
  icon: <Building2 className="w-6 h-6 text-primary" />,
  path: "/servizi/ristrutturazione-bagni"
}, {
  title: "Pronto Intervento",
  description: "Servizio di emergenza 24/7 per ogni necessità",
  icon: <Clock className="w-6 h-6 text-primary" />,
  path: "/contatti"
}, {
  title: "Richiesta Incentivi",
  description: "Supporto completo per accedere agli incentivi statali",
  icon: <Award className="w-6 h-6 text-primary" />,
  path: "/incentivi"
}];

export default Index;

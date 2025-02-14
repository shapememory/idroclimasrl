
import Navbar from "../components/Navbar";
import { Award, Users, Target, Building2 } from "lucide-react";

const ChiSiamo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Chi Siamo
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Da oltre 20 anni, IdroclimaPro è sinonimo di eccellenza nel settore termoidraulico a Verona e provincia
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">La Nostra Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Offriamo soluzioni all'avanguardia per il comfort abitativo, garantendo efficienza energetica e rispetto per l'ambiente. Il nostro impegno è fornire servizi di alta qualità per soddisfare le esigenze dei nostri clienti.
              </p>
              <p className="text-lg text-gray-600">
                Siamo specializzati in installazione e manutenzione di impianti termoidraulici, climatizzazione e energie rinnovabili, con un focus particolare sulla sostenibilità e l'innovazione tecnologica.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-6 bg-accent rounded-xl hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">La Nostra Esperienza</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Due decenni di esperienza ci hanno permesso di sviluppare una profonda comprensione delle esigenze dei nostri clienti e delle migliori soluzioni disponibili sul mercato.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/88ba3752-3de0-426e-92d0-a34661ac2026.png" 
                  alt="Idroclima SRL Logo" 
                  className="h-12 w-auto filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Via Antonio Salieri<br />
                37135 Verona VR<br />
                P.IVA: 12345678901<br />
                REA: VR-123456
              </p>
              <a 
                href="/contatti"
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                Contattaci
              </a>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">I Nostri Servizi</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/servizi/climatizzatori" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Climatizzatori
                  </a>
                </li>
                <li>
                  <a 
                    href="/servizi/termoidraulica" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Termoidraulica
                  </a>
                </li>
                <li>
                  <a 
                    href="/caldaie" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Caldaie
                  </a>
                </li>
                <li>
                  <a 
                    href="/servizi/addolcitori" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Addolcitori
                  </a>
                </li>
                <li>
                  <a 
                    href="/servizi/ristrutturazione-bagni" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
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
                    href="tel:+391234567890" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Tel: +39 123 456 7890
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@example.com" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Email: info@example.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/391234567890"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    WhatsApp: +39 123 456 7890
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
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Idroclima SRL. Tutti i diritti riservati.</p>
            <div className="mt-2 space-x-4">
              <a 
                href="/privacy-policy" 
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a 
                href="/cookie-policy" 
                className="hover:text-white transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const values = [
  {
    title: "Professionalità",
    description: "Team qualificato e costantemente aggiornato sulle ultime tecnologie",
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    title: "Qualità",
    description: "Utilizzo esclusivo di materiali e prodotti certificati",
    icon: <Award className="w-6 h-6 text-primary" />,
  },
  {
    title: "Affidabilità",
    description: "Interventi puntuali e garanzia sui lavori eseguiti",
    icon: <Target className="w-6 h-6 text-primary" />,
  },
  {
    title: "Esperienza",
    description: "Oltre 20 anni di attività nel settore termoidraulico",
    icon: <Building2 className="w-6 h-6 text-primary" />,
  },
];

const stats = [
  {
    title: "Anni di Esperienza",
    value: "20+",
  },
  {
    title: "Clienti Soddisfatti",
    value: "1000+",
  },
  {
    title: "Progetti Completati",
    value: "2500+",
  },
  {
    title: "Tecnici Qualificati",
    value: "15+",
  },
];

export default ChiSiamo;

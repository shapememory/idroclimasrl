
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowRight, Droplet, Wrench } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Soluzioni Professionali per il Tuo Comfort
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Servizi di alta qualità per riscaldamento, climatizzazione e idraulica
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
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
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.path}
                  className="text-primary hover:text-primary/80 inline-flex items-center"
                >
                  Scopri di più
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">IdroclimaPro</h3>
              <p className="text-gray-400">
                Soluzioni professionali per il tuo comfort abitativo
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contatti</h3>
              <p className="text-gray-400">
                Email: info@idroclimaverona.it<br />
                Tel: +39 123 456 7890
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Orari</h3>
              <p className="text-gray-400">
                Lun - Ven: 8:00 - 18:00<br />
                Sab: 8:00 - 12:00
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} IdroclimaPro. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const services = [
  {
    title: "Caldaie e Riscaldamento",
    description: "Installazione e manutenzione di sistemi di riscaldamento moderni ed efficienti",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    path: "/caldaie",
  },
  {
    title: "Climatizzazione",
    description: "Soluzioni complete per il comfort climatico della tua casa",
    icon: <Droplet className="w-6 h-6 text-primary" />,
    path: "/climatizzazione",
  },
  {
    title: "Idraulica",
    description: "Servizi professionali per tutti i tuoi bisogni idraulici",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    path: "/idraulica",
  },
];

export default Index;

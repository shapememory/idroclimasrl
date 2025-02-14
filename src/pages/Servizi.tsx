
import { Link } from "react-router-dom";
import ServicesLayout from "../components/ServicesLayout";
import { Wrench, Thermometer, Droplet, Building2, Tool, Award } from "lucide-react";

const Servizi = () => {
  return (
    <ServicesLayout 
      title="I Nostri Servizi"
      description="Scopri la nostra gamma completa di servizi professionali per il tuo comfort abitativo"
    >
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.path}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
};

const services = [
  {
    title: "Climatizzatori",
    description: "Riparazione, manutenzione e sostituzione di climatizzatori per il massimo comfort",
    icon: <Thermometer className="w-6 h-6 text-primary" />,
    path: "/servizi/climatizzatori",
  },
  {
    title: "Termoidraulica",
    description: "Servizi professionali per impianti termoidraulici e riscaldamento",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    path: "/servizi/termoidraulica",
  },
  {
    title: "Caldaie",
    description: "Installazione e manutenzione di caldaie moderne ed efficienti",
    icon: <Tool className="w-6 h-6 text-primary" />,
    path: "/caldaie",
  },
  {
    title: "Addolcitori",
    description: "Soluzioni per il trattamento dell'acqua e la protezione degli impianti",
    icon: <Droplet className="w-6 h-6 text-primary" />,
    path: "/servizi/addolcitori",
  },
  {
    title: "Ristrutturazione Bagni",
    description: "Ristrutturazioni complete e parziali di bagni e ambienti sanitari",
    icon: <Building2 className="w-6 h-6 text-primary" />,
    path: "/servizi/ristrutturazione-bagni",
  },
  {
    title: "Incentivi",
    description: "Supporto e consulenza per l'accesso agli incentivi statali",
    icon: <Award className="w-6 h-6 text-primary" />,
    path: "/incentivi",
  },
];

export default Servizi;

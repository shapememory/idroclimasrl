
import ServicesLayout from "../../components/ServicesLayout";
import { Droplet, Filter, Gauge, Wave, Settings, ShieldCheck } from "lucide-react";

const Addolcitori = () => {
  return (
    <ServicesLayout
      title="Addolcitori"
      description="Soluzioni professionali per il trattamento dell'acqua a Verona e provincia"
    >
      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-lg text-gray-600">
              Gli addolcitori sono sistemi essenziali per migliorare la qualità 
              dell'acqua nella tua casa, proteggere gli impianti dal calcare e 
              garantire un'acqua più pura per te e la tua famiglia. Offriamo 
              soluzioni personalizzate per ogni esigenza.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Vantaggi di un Addolcitore
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((group, groupIndex) => (
                <div key={groupIndex} className="space-y-4">
                  {group.map((benefit, index) => (
                    <div 
                      key={benefit}
                      className="flex items-center space-x-3 animate-fade-up"
                      style={{ animationDelay: `${(index + groupIndex * 5) * 100}ms` }}
                    >
                      <Droplet className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Info */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Manutenzione e Assistenza
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenance.map((item, index) => (
                <div 
                  key={item.title}
                  className="p-4 border border-gray-100 rounded-lg animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vuoi migliorare la qualità dell'acqua nella tua casa?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita e scopri quale soluzione 
              è più adatta alle tue esigenze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+391234567890"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                Chiama Ora
              </a>
              <a 
                href="/contatti"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/5 transition-colors duration-200"
              >
                Richiedi Preventivo
              </a>
            </div>
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
};

const services = [
  {
    title: "Analisi Acqua",
    description: "Analisi professionale della durezza e qualità dell'acqua per identificare la soluzione ideale.",
    icon: <Wave className="w-6 h-6 text-primary" />,
  },
  {
    title: "Installazione",
    description: "Installazione professionale di addolcitori domestici e industriali di ultima generazione.",
    icon: <Settings className="w-6 h-6 text-primary" />,
  },
  {
    title: "Manutenzione",
    description: "Servizio di manutenzione periodica per garantire l'efficienza del tuo addolcitore.",
    icon: <Filter className="w-6 h-6 text-primary" />,
  },
  {
    title: "Monitoraggio",
    description: "Controllo costante dei parametri dell'acqua e dell'efficienza del sistema.",
    icon: <Gauge className="w-6 h-6 text-primary" />,
  },
  {
    title: "Assistenza",
    description: "Supporto tecnico e interventi rapidi in caso di necessità.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Ricambi",
    description: "Fornitura di sale, resine e componenti originali per il tuo addolcitore.",
    icon: <Droplet className="w-6 h-6 text-primary" />,
  },
];

const benefits = [
  [
    "Protezione degli elettrodomestici dal calcare",
    "Riduzione dei consumi energetici",
    "Risparmio sui prodotti per la pulizia",
    "Migliore efficienza degli impianti",
    "Acqua più dolce e piacevole",
  ],
  [
    "Pelle più morbida dopo la doccia",
    "Capelli più luminosi e setosi",
    "Stoviglie senza aloni di calcare",
    "Maggiore durata degli elettrodomestici",
    "Rispetto dell'ambiente",
  ],
];

const maintenance = [
  {
    title: "Controllo Periodico",
    description: "Verifica dei parametri di funzionamento e della qualità dell'acqua ogni 6 mesi.",
  },
  {
    title: "Pulizia Sistema",
    description: "Pulizia completa del sistema e sostituzione dei filtri quando necessario.",
  },
  {
    title: "Ricarica Sale",
    description: "Controllo e ricarica del sale per garantire una corretta rigenerazione delle resine.",
  },
  {
    title: "Analisi Prestazioni",
    description: "Verifica dell'efficienza e ottimizzazione dei cicli di rigenerazione.",
  },
  {
    title: "Sanitizzazione",
    description: "Disinfezione periodica del sistema per garantire la massima igiene.",
  },
  {
    title: "Assistenza Tecnica",
    description: "Supporto tecnico specializzato per qualsiasi necessità o emergenza.",
  },
];

export default Addolcitori;

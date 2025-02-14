
import ServicesLayout from "../../components/ServicesLayout";
import { Check, Wrench, ThermometerSun, ShieldCheck, Gauge, HeartPulse } from "lucide-react";

const Caldaie = () => {
  return (
    <ServicesLayout
      title="Caldaie"
      description="Installazione, manutenzione e riparazione di caldaie a Verona e provincia"
    >
      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-lg text-gray-600">
              Offriamo servizi completi per caldaie di ogni marca e modello, 
              garantendo efficienza, sicurezza e risparmio energetico. I nostri 
              tecnici specializzati sono certificati per intervenire su tutte le 
              principali marche di caldaie.
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

          {/* Benefits and Features */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Vantaggi delle Caldaie Moderne
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={benefit}
                      className="flex items-center space-x-3 animate-fade-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maintenance Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Manutenzione Periodica
                </h3>
                <div className="space-y-4">
                  {maintenance.map((item, index) => (
                    <div 
                      key={item}
                      className="flex items-center space-x-3 animate-fade-up"
                      style={{ animationDelay: `${(index + benefits.length) * 100}ms` }}
                    >
                      <HeartPulse className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Hai bisogno di assistenza con la tua caldaia?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita. I nostri tecnici sono 
              pronti ad aiutarti con qualsiasi necessità.
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
    title: "Installazione Caldaie",
    description: "Installazione professionale di caldaie di ultima generazione con massima efficienza energetica.",
    icon: <Wrench className="w-6 h-6 text-primary" />,
  },
  {
    title: "Manutenzione Ordinaria",
    description: "Controlli periodici e manutenzione programmata per garantire sicurezza e prestazioni ottimali.",
    icon: <HeartPulse className="w-6 h-6 text-primary" />,
  },
  {
    title: "Pronto Intervento",
    description: "Servizio di assistenza rapida per emergenze e riparazioni urgenti.",
    icon: <Gauge className="w-6 h-6 text-primary" />,
  },
  {
    title: "Certificazione Energetica",
    description: "Analisi e certificazione dell'efficienza energetica del tuo impianto.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Ottimizzazione Consumi",
    description: "Soluzioni e consigli per ridurre i consumi e massimizzare il risparmio.",
    icon: <ThermometerSun className="w-6 h-6 text-primary" />,
  },
  {
    title: "Assistenza Tecnica",
    description: "Supporto tecnico specializzato per ogni marca e modello di caldaia.",
    icon: <Wrench className="w-6 h-6 text-primary" />,
  },
];

const benefits = [
  "Maggiore efficienza energetica e riduzione dei consumi",
  "Minore impatto ambientale e emissioni ridotte",
  "Comfort ottimale e temperatura costante",
  "Sistema di controllo intelligente",
  "Integrazione con sistemi domotici",
];

const maintenance = [
  "Controllo annuale obbligatorio",
  "Pulizia e verifica componenti",
  "Analisi dei fumi e sicurezza",
  "Aggiornamento libretto impianto",
  "Verifica efficienza energetica",
];

export default Caldaie;

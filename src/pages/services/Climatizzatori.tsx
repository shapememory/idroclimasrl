
import ServicesLayout from "../../components/ServicesLayout";
import { Check, Clock, Shield, Zap, ThermometerSun, Wrench } from "lucide-react";

const Climatizzatori = () => {
  return (
    <ServicesLayout
      title="Climatizzatori"
      description="Servizi professionali di installazione, manutenzione e riparazione climatizzatori a Verona e provincia"
    >
      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Main Content */}
            <div className="animate-fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Servizi Professionali per il Tuo Comfort
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Offriamo una gamma completa di servizi per climatizzatori, 
                  garantendo comfort ottimale e efficienza energetica per la tua 
                  casa o il tuo ufficio. I nostri tecnici specializzati sono 
                  certificati e costantemente aggiornati sulle ultime tecnologie.
                </p>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div 
                      key={service.title}
                      className="flex items-start space-x-3 animate-fade-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-6 h-6 text-primary mt-1">
                        <Check className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hai bisogno di assistenza con il tuo climatizzatore?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contattaci per una consulenza gratuita e scopri come possiamo aiutarti 
            a migliorare il comfort del tuo ambiente
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
      </section>
    </ServicesLayout>
  );
};

const services = [
  {
    title: "Installazione Climatizzatori",
    description: "Installazione professionale di climatizzatori di ogni marca e modello, con consulenza sulla scelta migliore per le tue esigenze.",
  },
  {
    title: "Manutenzione Ordinaria",
    description: "Servizio di manutenzione periodica per garantire efficienza e durata nel tempo del tuo impianto di climatizzazione.",
  },
  {
    title: "Riparazione e Assistenza",
    description: "Interventi rapidi e professionali per risolvere qualsiasi problema del tuo climatizzatore.",
  },
  {
    title: "Sostituzione e Upgrade",
    description: "Valutazione e sostituzione di impianti obsoleti con soluzioni moderne ed efficienti.",
  },
];

const benefits = [
  {
    title: "Interventi Rapidi",
    description: "Risposta tempestiva alle tue richieste di assistenza e intervento",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Massima Qualità",
    description: "Utilizzo esclusivo di ricambi originali e materiali certificati",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
  {
    title: "Efficienza Energetica",
    description: "Soluzioni ottimizzate per il risparmio energetico",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    title: "Assistenza Completa",
    description: "Supporto tecnico e consulenza per ogni esigenza",
    icon: <Wrench className="w-6 h-6 text-primary" />,
  },
];

export default Climatizzatori;

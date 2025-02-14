
import ServicesLayout from "../../components/ServicesLayout";
import { Check, Droplet, Wrench, ShieldCheck, Gauge, HeartPulse } from "lucide-react";

const Termoidraulica = () => {
  return (
    <ServicesLayout
      title="Termoidraulica"
      description="Soluzioni complete per impianti idraulici e termici a Verona e provincia"
    >
      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-lg text-gray-600">
              Da oltre 20 anni, offriamo servizi professionali di termoidraulica, 
              garantendo soluzioni affidabili ed efficienti per ogni esigenza 
              impiantistica. La nostra esperienza ci permette di affrontare con 
              competenza qualsiasi tipo di intervento.
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

          {/* Features List */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Perché Sceglierci
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={feature}
                      className="flex items-center space-x-3 animate-fade-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Le Nostre Garanzie
                </h3>
                <div className="space-y-4">
                  {guarantees.map((guarantee, index) => (
                    <div 
                      key={guarantee}
                      className="flex items-center space-x-3 animate-fade-up"
                      style={{ animationDelay: `${(index + features.length) * 100}ms` }}
                    >
                      <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Hai bisogno di un intervento idraulico?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita. I nostri esperti sono 
              pronti ad aiutarti con qualsiasi necessità impiantistica.
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
    title: "Impianti Idraulici",
    description: "Progettazione, installazione e manutenzione di impianti idraulici per abitazioni e attività commerciali.",
    icon: <Droplet className="w-6 h-6 text-primary" />,
  },
  {
    title: "Riparazioni e Interventi",
    description: "Pronto intervento per riparazioni urgenti e manutenzione ordinaria degli impianti.",
    icon: <Wrench className="w-6 h-6 text-primary" />,
  },
  {
    title: "Manutenzione Programmata",
    description: "Piani di manutenzione periodica per prevenire problemi e garantire l'efficienza degli impianti.",
    icon: <HeartPulse className="w-6 h-6 text-primary" />,
  },
  {
    title: "Efficienza Energetica",
    description: "Soluzioni per ottimizzare i consumi e ridurre i costi energetici del tuo impianto.",
    icon: <Gauge className="w-6 h-6 text-primary" />,
  },
  {
    title: "Ristrutturazioni",
    description: "Interventi di ristrutturazione e ammodernamento di impianti esistenti.",
    icon: <Wrench className="w-6 h-6 text-primary" />,
  },
  {
    title: "Certificazioni",
    description: "Rilascio certificazioni e documentazione tecnica secondo le normative vigenti.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
];

const features = [
  "Esperienza ventennale nel settore",
  "Tecnici qualificati e costantemente aggiornati",
  "Interventi rapidi e puntuali",
  "Preventivi trasparenti e dettagliati",
  "Utilizzo di materiali di prima qualità",
];

const guarantees = [
  "Garanzia su tutti gli interventi effettuati",
  "Assistenza post-intervento",
  "Rispetto delle normative vigenti",
  "Massima attenzione alla sicurezza",
  "Prezzi competitivi e trasparenti",
];

export default Termoidraulica;


import ServicesLayout from "../../components/ServicesLayout";
import { EuroIcon, FileText, PercentIcon, Calculator, ShieldCheck, Clock } from "lucide-react";

const Incentivi = () => {
  return (
    <ServicesLayout
      title="Richiesta Incentivi"
      description="Ottieni il massimo dai bonus statali per l'efficientamento energetico"
    >
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-lg text-gray-600">
              Ti aiutiamo a navigare tra le diverse opportunità di incentivi statali
              per la riqualificazione energetica della tua casa. Il nostro team di
              esperti ti guiderà in ogni fase del processo.
            </p>
          </div>

          {/* Available Incentives */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {incentives.map((incentive, index) => (
              <div
                key={incentive.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {incentive.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{incentive.title}</h3>
                <p className="text-gray-600 mb-4">{incentive.description}</p>
                <p className="text-primary font-semibold">{incentive.percentage}</p>
              </div>
            ))}
          </div>

          {/* Services Process */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Come Ti Aiutiamo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-white p-6 rounded-xl shadow-sm animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Required */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Documenti Necessari
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <div
                  key={doc}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vuoi Saperne di Più?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita e scopri come accedere agli incentivi
              per il tuo progetto di efficientamento energetico.
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
                Richiedi Informazioni
              </a>
            </div>
          </div>
        </div>
      </section>
    </ServicesLayout>
  );
};

const incentives = [
  {
    title: "Superbonus 110%",
    description: "Incentivo per interventi di efficientamento energetico e antisismici.",
    percentage: "Detrazione fino al 110%",
    icon: <PercentIcon className="w-6 h-6 text-primary" />,
  },
  {
    title: "Ecobonus",
    description: "Detrazioni per interventi di risparmio energetico sugli edifici.",
    percentage: "Detrazione dal 50% al 65%",
    icon: <EuroIcon className="w-6 h-6 text-primary" />,
  },
  {
    title: "Bonus Casa",
    description: "Agevolazioni per ristrutturazioni edilizie e interventi di recupero.",
    percentage: "Detrazione del 50%",
    icon: <Calculator className="w-6 h-6 text-primary" />,
  },
];

const services = [
  {
    title: "Consulenza Iniziale",
    description: "Valutiamo la fattibilità e identifichiamo gli incentivi più adatti al tuo caso.",
    icon: <Calculator className="w-6 h-6 text-primary" />,
  },
  {
    title: "Gestione Pratiche",
    description: "Ci occupiamo di tutta la documentazione necessaria per accedere agli incentivi.",
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
  {
    title: "Assistenza Continua",
    description: "Ti supportiamo durante tutto l'iter, dalla richiesta all'ottenimento del bonus.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
];

const documents = [
  "Documento di identità",
  "Codice fiscale",
  "Visura catastale dell'immobile",
  "Documentazione tecnica dell'intervento",
  "Preventivi dei lavori",
  "APE pre-intervento",
  "Titolo di proprietà dell'immobile",
  "Delibera assembleare (per condomini)",
];

export default Incentivi;

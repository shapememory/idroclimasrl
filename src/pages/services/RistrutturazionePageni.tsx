
import ServicesLayout from "../../components/ServicesLayout";
import { Tool, Ruler, Palette, Bath, Brush, Building2 } from "lucide-react";

const RistrutturazionePageni = () => {
  return (
    <ServicesLayout
      title="Ristrutturazione Bagni"
      description="Trasforma il tuo bagno in uno spazio moderno e funzionale"
    >
      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <p className="text-lg text-gray-600">
              Offriamo soluzioni complete per la ristrutturazione del tuo bagno, 
              dalla progettazione alla realizzazione. Il nostro team di esperti 
              ti guiderà nella scelta dei materiali e delle finiture migliori per 
              creare il bagno dei tuoi sogni.
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

          {/* Process Section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Il Nostro Processo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div 
                  key={step.title}
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Caratteristiche dei Nostri Servizi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex items-start space-x-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto a trasformare il tuo bagno?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contattaci per una consulenza gratuita e un preventivo dettagliato 
              per il tuo progetto di ristrutturazione.
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
    title: "Progettazione",
    description: "Progettazione personalizzata con soluzioni su misura per ogni spazio e esigenza.",
    icon: <Ruler className="w-6 h-6 text-primary" />,
  },
  {
    title: "Demolizione",
    description: "Rimozione professionale di vecchi sanitari, piastrelle e impianti.",
    icon: <Tool className="w-6 h-6 text-primary" />,
  },
  {
    title: "Impiantistica",
    description: "Installazione e rifacimento di impianti idraulici ed elettrici a norma.",
    icon: <Building2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Rivestimenti",
    description: "Posa di pavimenti e rivestimenti con materiali di alta qualità.",
    icon: <Brush className="w-6 h-6 text-primary" />,
  },
  {
    title: "Sanitari",
    description: "Installazione di sanitari, box doccia e arredo bagno delle migliori marche.",
    icon: <Bath className="w-6 h-6 text-primary" />,
  },
  {
    title: "Finiture",
    description: "Finiture di pregio e dettagli personalizzati per un risultato unico.",
    icon: <Palette className="w-6 h-6 text-primary" />,
  },
];

const process = [
  {
    title: "Sopralluogo",
    description: "Visita tecnica per valutare lo spazio e le tue esigenze specifiche.",
  },
  {
    title: "Progettazione",
    description: "Sviluppo del progetto e scelta dei materiali più adatti.",
  },
  {
    title: "Realizzazione",
    description: "Esecuzione dei lavori con professionisti qualificati.",
  },
  {
    title: "Consegna",
    description: "Verifica finale e consegna del tuo nuovo bagno.",
  },
];

const features = [
  {
    title: "Qualità Garantita",
    description: "Utilizziamo solo materiali e prodotti certificati delle migliori marche.",
    icon: <Tool className="w-6 h-6 text-primary" />,
  },
  {
    title: "Tempistiche Certe",
    description: "Rispettiamo rigorosamente i tempi di consegna concordati.",
    icon: <Building2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Design Personalizzato",
    description: "Progetti su misura che rispecchiano il tuo stile e le tue esigenze.",
    icon: <Palette className="w-6 h-6 text-primary" />,
  },
  {
    title: "Assistenza Completa",
    description: "Ti seguiamo in ogni fase, dalla progettazione alla realizzazione.",
    icon: <Bath className="w-6 h-6 text-primary" />,
  },
];

export default RistrutturazionePageni;


import ServicesLayout from "../components/ServicesLayout";
import { MapPin, Phone, Mail, Clock, Building, MessageCircle } from "lucide-react";

const Contatti = () => {
  return (
    <ServicesLayout
      title="Contatti"
      description="Siamo qui per aiutarti. Contattaci per qualsiasi informazione."
    >
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                {info.items.map((item, i) => (
                  <div key={i} className="text-gray-600 mb-2">
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="hover:text-primary transition-colors duration-200"
                        target={item.newTab ? "_blank" : undefined}
                        rel={item.newTab ? "noopener noreferrer" : undefined}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p>{item.text}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.534456362776!2d10.975296776676766!3d45.39957837107385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f3fd1d96ee9%3A0xc916b35c63341bc!2sVia%20Antonio%20Salieri%2C%2037135%20Verona%20VR!5e0!3m2!1sit!2sit!4v1709906327044!5m2!1sit!2sit"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Orari di Apertura
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {businessHours.map((day, index) => (
                <div 
                  key={day.day}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="font-medium text-gray-900">{day.day}</span>
                  <span className="text-gray-600">{day.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Hai bisogno di assistenza?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Il nostro team è pronto ad aiutarti. Contattaci per una consulenza gratuita 
              o per richiedere un preventivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+391234567890"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Chiama Ora
              </a>
              <a 
                href="https://wa.me/391234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#25D366] hover:bg-[#25D366]/90 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
              <a 
                href="mailto:info@example.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/5 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Invia Email
              </a>
            </div>
          </div>

          {/* Fixed WhatsApp Button */}
          <a
            href="https://wa.me/391234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#25D366]/90 transition-colors duration-200"
            aria-label="Contattaci su WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </section>
    </ServicesLayout>
  );
};

const contactInfo = [
  {
    title: "Indirizzo",
    icon: <MapPin className="w-6 h-6 text-primary" />,
    items: [
      { text: "Via Antonio Salieri", link: null },
      { text: "37135 Verona VR", link: null },
    ],
  },
  {
    title: "Contatti",
    icon: <Phone className="w-6 h-6 text-primary" />,
    items: [
      { text: "+39 123 456 7890", link: "tel:+391234567890" },
      { text: "info@example.com", link: "mailto:info@example.com" },
      { 
        text: "Scrivici su WhatsApp", 
        link: "https://wa.me/391234567890",
        newTab: true 
      },
    ],
  },
  {
    title: "Azienda",
    icon: <Building className="w-6 h-6 text-primary" />,
    items: [
      { text: "P.IVA: 12345678901", link: null },
      { text: "REA: VR-123456", link: null },
    ],
  },
];

const businessHours = [
  { day: "Lunedì", hours: "8:00 - 18:00" },
  { day: "Martedì", hours: "8:00 - 18:00" },
  { day: "Mercoledì", hours: "8:00 - 18:00" },
  { day: "Giovedì", hours: "8:00 - 18:00" },
  { day: "Venerdì", hours: "8:00 - 18:00" },
  { day: "Sabato", hours: "Chiuso" },
  { day: "Domenica", hours: "Chiuso" },
];

export default Contatti;

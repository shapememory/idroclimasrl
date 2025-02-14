
import Navbar from "./Navbar";

interface ServicesLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const ServicesLayout = ({ children, title, description }: ServicesLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </div>
      </section>

      {children}

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

export default ServicesLayout;

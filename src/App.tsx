
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Servizi from "./pages/Servizi";
import Climatizzatori from "./pages/services/Climatizzatori";
import Termoidraulica from "./pages/services/Termoidraulica";
import Caldaie from "./pages/services/Caldaie";
import Addolcitori from "./pages/services/Addolcitori";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/servizi/climatizzatori" element={<Climatizzatori />} />
          <Route path="/servizi/termoidraulica" element={<Termoidraulica />} />
          <Route path="/caldaie" element={<Caldaie />} />
          <Route path="/servizi/addolcitori" element={<Addolcitori />} />
          <Route path="/servizi/ristrutturazione-bagni" element={<NotFound />} />
          <Route path="/incentivi" element={<NotFound />} />
          <Route path="/contatti" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

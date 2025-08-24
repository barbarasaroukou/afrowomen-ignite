import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import Index from "./pages/Index";
import QuiSommesNous from "./pages/QuiSommesNous";
import NosProgrammes from "./pages/NosProgrammes";
import NosPiliers from "./pages/NosPiliers";
import PourquoiAWW from "./pages/PourquoiAWW";
import NousRejoindre from "./pages/NousRejoindre";
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
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/nos-programmes" element={<NosProgrammes />} />
          <Route path="/nos-piliers" element={<NosPiliers />} />
          <Route path="/pourquoi-aww" element={<PourquoiAWW />} />
          <Route path="/nous-rejoindre" element={<NousRejoindre />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

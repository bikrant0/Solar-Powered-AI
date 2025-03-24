
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PowerPredictions from "./pages/PowerPredictions";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { UnitPreferencesProvider } from "./contexts/UnitPreferencesContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <UnitPreferencesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/power-predictions" element={<PowerPredictions />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UnitPreferencesProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

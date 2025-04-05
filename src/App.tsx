import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/context/AppContext";
import { Toaster } from "@/components/ui/toaster";
import { Sonner } from "@/components/ui/sonner";

// Los componentes que antes eran rutas
import Dashboard from "@/pages/Dashboard";
import Donadores from "@/pages/Donadores";
import Donaciones from "@/pages/Donaciones";
import Inventario from "@/pages/Inventario";
import Empleados from "@/pages/Empleados";
import NotFound from "./pages/NotFound";

const App = () => {
  const [currentPage, setCurrentPage] = useState("dashboard"); // El estado para manejar la vista actual

  // Manejadores para navegar entre las "páginas"
  const navigateTo = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "donadores":
        return <Donadores />;
      case "donaciones":
        return <Donaciones />;
      case "inventario":
        return <Inventario />;
      case "empleados":
        return <Empleados />;
      default:
        return <NotFound />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppProvider>
          <Toaster />
          <Sonner />
          <div>
            {/* Navbar o botones de navegación */}
            <nav>
              <button onClick={() => navigateTo("dashboard")}>Dashboard</button>
              <button onClick={() => navigateTo("donadores")}>Donadores</button>
              <button onClick={() => navigateTo("donaciones")}>
                Donaciones
              </button>
              <button onClick={() => navigateTo("inventario")}>
                Inventario
              </button>
              <button onClick={() => navigateTo("empleados")}>Empleados</button>
            </nav>

            {/* Aquí renderizas la "página" correspondiente */}
            {renderPage()}
          </div>
        </AppProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

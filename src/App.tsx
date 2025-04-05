import { useState } from "react";
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
    <div>
      <nav>
        <button onClick={() => navigateTo("dashboard")}>Dashboard</button>
        <button onClick={() => navigateTo("donadores")}>Donadores</button>
        <button onClick={() => navigateTo("donaciones")}>Donaciones</button>
        <button onClick={() => navigateTo("inventario")}>Inventario</button>
        <button onClick={() => navigateTo("empleados")}>Empleados</button>
      </nav>

      {renderPage()}
    </div>
  );
};

export default App;

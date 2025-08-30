import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import PcRepair from "./pages/PcRepair";
import LaptopRepair from "./pages/LaptopRepair";
import TabletRepair from "./pages/TabletRepair";
import DataRecovery from "./pages/DataRecovery";
import VirusRemoval from "./pages/VirusRemoval";
import HardwareUpgrade from "./pages/HardwareUpgrade";
import Diagnostics from "./pages/Diagnostics";
import Prices from "./pages/Prices";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Order from "./pages/Order";
import Emergency from "./pages/Emergency";
import PrinterRepair from "./pages/PrinterRepair";
import NetworkSetup from "./pages/NetworkSetup";
import SoftwareInstallation from "./pages/SoftwareInstallation";
import Maintenance from "./pages/Maintenance";
import ServerSetup from "./pages/ServerSetup";
import WebcamRepair from "./pages/WebcamRepair";
import Warranty from "./pages/Warranty";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Consultation from "./pages/Consultation";
import LeaveReview from "./pages/LeaveReview";
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
          <Route path="/services" element={<Services />} />
          <Route path="/pc-repair" element={<PcRepair />} />
          <Route path="/laptop-repair" element={<LaptopRepair />} />
          <Route path="/tablet-repair" element={<TabletRepair />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/virus-removal" element={<VirusRemoval />} />
          <Route path="/hardware-upgrade" element={<HardwareUpgrade />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/order" element={<Order />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/printer-repair" element={<PrinterRepair />} />
          <Route path="/network-setup" element={<NetworkSetup />} />
          <Route path="/software-installation" element={<SoftwareInstallation />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/server-setup" element={<ServerSetup />} />
          <Route path="/webcam-repair" element={<WebcamRepair />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/leave-review" element={<LeaveReview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
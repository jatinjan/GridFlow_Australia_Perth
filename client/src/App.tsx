import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ChatbotWidget from "@/components/ChatbotWidget";
import Home from "@/pages/home";
import About from "@/pages/about";
import Team from "@/pages/team";
import Services from "@/pages/services";
import PowerSystems from "@/pages/power-systems";
import LinesCables from "@/pages/lines-cables";
import AutomationControl from "@/pages/automation-control";
import ConstructionSupport from "@/pages/construction-support";
import CaseStudies from "@/pages/case-studies";
import News from "@/pages/news";
import ContactPage from "@/pages/contact";
import Privacy from "@/pages/privacy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/services" component={Services} />
      <Route path="/services/power-systems" component={PowerSystems} />
      <Route path="/services/lines-cables" component={LinesCables} />
      <Route path="/services/automation-control" component={AutomationControl} />
      <Route path="/services/construction-support" component={ConstructionSupport} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ChatbotWidget 
          position="bottom-right"
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

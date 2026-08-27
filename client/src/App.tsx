import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { QuoteCartProvider } from "./contexts/QuoteCartContext";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import SculptureDetail from "./pages/SculptureDetail";
import Process from "./pages/Process";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import StoreHeader from "./components/StoreHeader";
import StoreFooter from "./components/StoreFooter";
import CartDrawer from "./components/CartDrawer";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/collection"} component={Collection} />
      <Route path={"/sculptures/:slug"}>{params => <SculptureDetail slug={params.slug} />}</Route>
      <Route path={"/process"} component={Process} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/services"} component={Services} />
      <Route path={"/portfolio"} component={Portfolio} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <QuoteCartProvider>
            <div className="app-shell"><StoreHeader /><Router /><StoreFooter /><CartDrawer /></div>
          </QuoteCartProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

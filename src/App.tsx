import { Footer } from "./components/layout/footer";
import { Navbar } from "./components/layout/navbar";
import { Separator } from "./components/ui/separator";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="flex flex-col bg-blue w-full h-screen overflow-x-hidden">
      <Navbar />
      <Separator  />
      <Home />
      <Separator />
      <Footer />
    </div>
  );
}

export default App

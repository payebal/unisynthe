import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RequestAccess from "./pages/RequestAccess";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AcceptableUse from "./pages/AcceptableUse";
import MessagingPolicy from "./pages/MessagingPolicy";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-access" element={<RequestAccess />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/acceptable-use" element={<AcceptableUse />} />
          <Route path="/messaging-policy" element={<MessagingPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

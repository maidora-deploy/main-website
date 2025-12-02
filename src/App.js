import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import News from "./pages/News";
import CaseStudy from "./pages/CaseStudy";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Partners from "./pages/Partners";
import BlogDetail from "./components/BlogDetail";
import NewsDetail from "./components/NewsDetail";
import CaseStudyDetail from "./components/CaseStudyDetail";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";
import MaidRegister from "./pages/auth/MaidRegister";
import AgenetRegister from "./pages/auth/AgentRegister";
import ClientRegister from "./pages/auth/ClientRegister";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditons";
import Disclamier from "./pages/Disclamier";
import Support from "./pages/Support";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/service" element={<Service />} />
            <Route path="/news" element={<News />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/maid-register" element={<MaidRegister />} />
            <Route path="/agent-register" element={<AgenetRegister />} />
            <Route path="/client-register" element={<ClientRegister />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclamier" element={<Disclamier />} />
            <Route path="/support" element={<Support />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

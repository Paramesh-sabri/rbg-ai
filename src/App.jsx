import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Enterprise from "./pages/Enterprise";
import Pricing from "./pages/Pricing";
import SpeechToText from "./components/products/SpeechToText";
import TextToSpeech from "./components/products/TextToSpeech";
import VoiceAgent from "./components/products/VoiceAgents";
import AudioIntelligence from "./components/products/AudioIntelligence";
import ContactCenters from "./components/solutions/ContactCenters";
import ConvAi from "./components/solutions/ConvAi";
import SpeechAnalytics from "./components/solutions/SpeechAnalytics";
import MediaTranscription from "./components/solutions/MediaTranscription";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />   {/* 👈 THIS IS THE MAGIC */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/speech_to_text" element={<SpeechToText />} />
        <Route path="/text_to_speech" element={<TextToSpeech />} />
        <Route path="/voice_agents" element={<VoiceAgent />} />
        <Route path="/audio_intelligence" element={<AudioIntelligence />} />
        <Route path="/contactcenters" element={<ContactCenters />} />
        <Route path="/convai" element={<ConvAi />} />
        <Route path="/speechanalytics" element={<SpeechAnalytics />} />
        <Route path="/mediatranscription" element={<MediaTranscription/>} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

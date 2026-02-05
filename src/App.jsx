import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Enterprise from "./pages/Enterprise";
import Pricing from "./pages/Pricing"

import SpeechToText from "./components/products/SpeechToText"
import TextToSpeech from "./components/products/TextToSpeech";
import VoiceAgent from "./components/products/VoiceAgents";
import AudioIntelligence from "./components/products/AudioIntelligence";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/speech_to_text" element={<SpeechToText />}/>
        <Route path="/text_to_speech" element={<TextToSpeech />}/>
        <Route path="/voice_agents" element={<VoiceAgent />}/>
        <Route path="/audio_intelligence" element={<AudioIntelligence />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

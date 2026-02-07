import { useState, useRef, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";


import {
  Mic,
  Github,
  FileAudio,
  MessageCircle,
  Headphones,
  BarChart3,
  Phone,
  HeartPulse,
  FileText,
  MessageSquare,
  Utensils,
  Play,
  User,
  Users,
  Rocket,
  BookOpen,
  Layers,
  Info,
  Briefcase,
  Book,
  GraduationCap,
  Activity,
  Server,
  HelpCircle,
  Sparkles,
} from "lucide-react";

import logo from "../assets/rbg-logo.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    if (!query.trim()) return;

    window.find(query);

    // close search after finding
    setQuery("");
    setSearchOpen(false);
  };
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);


  const [productOpen, setProductOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [devsOpen, setDevsOpen] = useState(false);

  const timeouts = useRef({});

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const closeAll = () => {
    Object.values(timeouts.current).forEach(clearTimeout);
    setProductOpen(false);
    setSolutionsOpen(false);
    setResourcesOpen(false);
    setDevsOpen(false);
  };

  const delayedClose = (setter, key) => {
    timeouts.current[key] = setTimeout(() => setter(false), 200);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white ">
      {/* TOP BAR */}
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="flex h-16 items-center justify-between ">

          {/* Logo */}
          <img
          src={logo}
          alt="RBG AI"
          className="h-10 w-10 cursor-pointer"
          onClick={() => {
            setMobileOpen(false);

            if (location.pathname === "/" || location.pathname === "/home") {
              // already on home → scroll to top
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              // not on home → navigate
              navigate("/");
            }
          }}
        />


          {/* DESKTOP NAV (UNCHANGED) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <NavItem label="Products" open={productOpen}
              onEnter={() => { closeAll(); setProductOpen(true); }}
              onLeave={() => delayedClose(setProductOpen, "product")}
            >
              <ProductDropdown />
            </NavItem>

            <NavItem label="Solutions" open={solutionsOpen}
              onEnter={() => { closeAll(); setSolutionsOpen(true); }}
              onLeave={() => delayedClose(setSolutionsOpen, "solutions")}
            >
              <SolutionsDropdown />
            </NavItem>

            <NavItem label="Resources" open={resourcesOpen}
              onEnter={() => { closeAll(); setResourcesOpen(true); }}
              onLeave={() => delayedClose(setResourcesOpen, "resources")}
            >
              <ResourcesDropdown />
            </NavItem>

            <NavItem label="Devs" open={devsOpen}
              onEnter={() => { closeAll(); setDevsOpen(true); }}
              onLeave={() => delayedClose(setDevsOpen, "devs")}
            >
              <DevsDropdown />
            </NavItem>

            <button 
            onClick={
              () => navigate("/enterprise")
            }
            className="hover:text-blue-600">Enterprise</button>

            <button onClick={()=> navigate("/pricing")} className="hover:text-blue-600">Pricing</button>
          </nav>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-3">

            {/* Search */}
            <div className="relative flex items-center">
              {/* INPUT */}
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search page..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className={`
                  h-9 text-sm outline-none
                  border border-slate-300 rounded-md
                  transition-all duration-300 ease-in-out
                  px-3
                  ${searchOpen ? "w-40 opacity-100 mr-2" : "w-0 opacity-0 px-0 border-transparent"}
                `}
              />

              {/* ICON */}
              <Search
                onClick={() => setSearchOpen((prev) => !prev)}
                className="
                  h-5 w-5 cursor-pointer
                  text-slate-600
                  transition-all duration-200
                  hover:text-blue-600
                  hover:scale-105
                "
              />
            </div>


            {/* Contact Us */}
            <button
              onClick={() => {
                setMobileOpen(false);
                navigate("/contact");
              }}
              className="
                border border-blue-600
                px-4 py-2 rounded-md
                text-blue-600
                transition-all duration-200 ease-out
                hover:-translate-y-0.5
                hover:shadow-md
                hover:bg-blue-50
              "
            >
              Contact Us
            </button>


            <button
              onClick={() => navigate("/login")}
              className="
                border border-slate-300
                px-4 py-2 rounded-md
                hover:bg-slate-50
              "
            >
              Log In
            </button>


            {/* Sign Up Free */}
            <button
              onClick={() => navigate("/signup")}
              className="
                bg-blue-600
                px-4 py-2 rounded-md
                text-white
                transition-all duration-200 ease-out
                hover:-translate-y-0.5
                hover:shadow-lg
                hover:bg-blue-700
              "
            >
              Sign Up Free
            </button>

          </div>


          {/* MOBILE TOGGLE */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* ===== MOBILE FULLSCREEN OVERLAY ===== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-white md:hidden">
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <img src={logo} alt="RBG AI" className="h-8 w-auto" />
            <button onClick={() => setMobileOpen(false)}>
              <X />
            </button>
          </div>

          <div className="overflow-y-auto px-4 py-4 space-y-4">

            {/* HOME */}
            <button
              onClick={() => {
                setMobileOpen(false);
                navigate("/");
              }}
              className="w-full text-left py-3 font-medium text-slate-800"
            >
              Home
            </button>

            <MobileSection title="Products">
              <MobileProduct />
            </MobileSection>

            <MobileSection title="Solutions">
              <MobileSolutions />
            </MobileSection>

            <MobileSection title="Resources">
              <MobileResources />
            </MobileSection>

            <MobileSection title="Devs">
              <MobileDevs />
            </MobileSection>

            {/* STATIC LINKS */}
            <button
              className="w-full text-left py-3 font-medium text-slate-800"
            >
              Enterprise
            </button>

            <button
              className="w-full text-left py-3 font-medium text-slate-800"
            >
              Pricing
            </button>

            <button
              onClick={() => {
                setMobileOpen(false);
                navigate("/contact");
              }}
              className="w-full text-left py-3 font-medium text-blue-600"
            >
              Contact Us
            </button>

            {/* AUTH */}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  navigate("/login");
                }}
                className="w-full border rounded-md py-2"
              >
                Log In
              </button>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  navigate("/signup");
                }}
                className="w-full bg-blue-600 text-white rounded-md py-2"
              >
                Sign Up Free
              </button>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}

/* ================= SHARED ================= */

function NavItem({ label, open, onEnter, onLeave, children }) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button className="flex items-center gap-1 hover:text-blue-600">
        {label}
        <span className={`text-xs ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && children}
    </div>
  );
}

/* ================= DESKTOP DROPDOWNS ================= */

function ProductDropdown() {
  const navigate = useNavigate();
  return (
    <div className="absolute top-full left-0 mt-3 w-80 rounded-xl bg-white p-4 shadow-lg ring-1 ring-black/5 z-50">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
        Products
      </p>
      <div className="space-y-1 ">
        <div
          className="cursor-pointer"
          onClick={() => navigate("/speech_to_text")}
        >
          <ProductItem
            icon={Mic}
            title="Speech-to-Text"
            desc="Real-time transcription"
          />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => navigate("/text_to_speech")}>
          <ProductItem icon={MessageCircle} title="Conversational AI" desc="Voice-first experiences" />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => navigate("/voice_agents")}>
          <ProductItem icon={Headphones} title="Voice Agents" desc="Automated voice support" />
        </div>
        <div
         className="cursor-pointer"
         onClick={() => navigate("/audio_intelligence")}>
          <ProductItem icon={FileAudio} title="Audio Intelligence" desc="Understand audio at scale" />
        </div>
      </div>
    </div>
  );
}

function ProductItem({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-lg px-3 py-2 hover:bg-slate-100 cursor-pointer">
      <Icon className="mt-1 h-5 w-5 text-slate-500" />
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>
    </div>
  );
}
// -----------------------solutiondropdown--------------
function SolutionsDropdown() {
  const navigate = useNavigate();
  return (
    <div className="absolute top-9 left-0 w-[40vw] max-w-5xl -translate-x-1/2 
    rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 z-50">
      <div className="grid grid-cols-[1fr_1fr] gap-8 divide-x divide-slate-100">

        {/* LEFT COLUMN */}
        <div>
          <p className="mb-4 text-sm font-semibold text-slate-500">
            Use Cases
          </p>

          <div className="space-y-2">

            <SolutionItem onClick={()=>navigate("/contactcenters")} icon={Phone} label="Contact Centers" />
            <SolutionItem icon={HeartPulse} label="Healthcare Voice AI" />
            <SolutionItem icon={FileText} label="Medical Transcription" />
            <SolutionItem onClick={()=>navigate("/convai")} icon={MessageSquare} label="Conversational AI" />
            <SolutionItem icon={Utensils} label="Restaurants" />
            <SolutionItem icon={BarChart3} label="Speech Analytics" />
            <SolutionItem icon={Play} label="Media Transcription" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-4 pl-6">
          <SolutionCard icon={Sparkles} title="Powered by RBG" />
          <SolutionCard icon={User} title="Customers" />
          <SolutionCard icon={Users} title="Partners" />
          <SolutionCard icon={Rocket} title="Startup Program" />
        </div>

      </div>
    </div>
  );
}
const SolutionItem = ({ icon: Icon, label, onClick }) => (

    <div onClick={onClick} className="flex items-center gap-3 rounded-lg px-3 py-2 cursor-pointer hover:bg-slate-100">
    <Icon className="h-5 w-5 text-slate-500" />
    <span className="text-sm font-medium text-slate-900">
      {label}
    </span>
  </div>
);


const SolutionCard = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 cursor-pointer hover:bg-slate-100">
    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white border">
      <Icon className="h-5 w-5 text-slate-600" />
    </div>
    <span className="text-sm font-medium text-slate-900">
      {title}
    </span>
  </div>
);


function ResourcesDropdown() {
  return (
    <div className="absolute left-1/2 top-full mt-4 w-[460px] -translate-x-1/2 rounded-2xl border bg-white shadow-xl z-50">
      <div className="grid grid-cols-2 gap-6 p-6">
        <ul className="space-y-3">
          <ResourceItem icon={BookOpen} label="Blog" />
          <ResourceItem icon={Mic} label="Podcast" />
          <ResourceItem icon={Layers} label="Resource Hub" />
          <ResourceItem icon={Info} label="AI Glossary" />
          <ResourceItem icon={Briefcase} label="Careers" />
        </ul>

        <div className="grid gap-4">
          <ResourceCard title="AI Minds" desc="Insights from AI leaders." />
          <ResourceCard title="AI Voice Generator" desc="Create realistic AI voices." />
          <ResourceCard title="Transcription Tool" desc="Speech to text instantly." />
        </div>
      </div>
    </div>
  );
}

const ResourceItem = ({ icon: Icon, label }) => (
  <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 cursor-pointer">
    <Icon className="h-5 w-5 text-slate-500" />
    <span>{label}</span>
  </li>
);

const ResourceCard = ({ title, desc }) => (
  <div className="p-4 border rounded-xl hover:shadow-md cursor-pointer">
    <p className="font-medium">{title}</p>
    <p className="text-sm text-slate-500">{desc}</p>
  </div>
);

function DevsDropdown() {
  return (
    <div className="fixed left-1/2 top-16 w-[55vw] max-w-4xl -translate-x-1/2 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 z-50">
      <div className="grid grid-cols-[150px_230px_200px] gap-8">

        <div className="space-y-3">
          <DevItem icon={Book} label="Documentation" />
          <DevItem icon={GraduationCap} label="Tutorials" />
          <DevItem icon={Activity} label="Status" />
        </div>

        <div className="space-y-3">
          <DevItem icon={FileText} label="Changelog" />
          <DevItem icon={Server} label="Self-Hosted Deployment" />
          <DevItem icon={HelpCircle} label="Help" />
        </div>

        <div className="space-y-4">
          <DevCard icon={Sparkles} title="Playground" highlight />
          <div onClick={() => window.open("https://github.com/rbg-research", "_blank")}>
            <DevCard
            icon={Github}
            title="Community"
          />
          </div>
          

        </div>

      </div>
    </div>
  );
}

const DevItem = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 cursor-pointer">
    <Icon className="h-5 w-5 text-slate-500" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const DevCard = ({ icon: Icon, title, highlight }) => (
  <div
    className={`flex items-center gap-4 rounded-xl border p-4 hover:shadow-md cursor-pointer ${
      highlight
        ? "border-blue-500/30 bg-blue-50 text-blue-700"
        : "border-slate-200 bg-slate-50"
    }`}
  >
    <Icon className="h-6 w-6" />
    <span className="font-semibold">{title}</span>
  </div>
);

/* ================= MOBILE ================= */

function MobileSection({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between py-4 font-medium"
      >
        {title}
        <span className={`${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && <div className="pb-4 space-y-2">{children}</div>}
    </div>
  );
}

function MobileItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <Icon className="h-5 w-5 text-slate-500" />
      <span>{label}</span>
    </div>
  );
}

function MobileProduct() {
  return (
    <>
      <MobileItem icon={Mic} label="Speech-to-Text" />
      <MobileItem icon={FileAudio} label="Audio Intelligence" />
      <MobileItem icon={MessageCircle} label="Conversational AI" />
      <MobileItem icon={Headphones} label="Voice Agents" />
    </>
  );
}

function MobileSolutions() {
  return (
    <>
      <MobileItem icon={Phone} label="Contact Centers" />
      <MobileItem icon={HeartPulse} label="Healthcare Voice AI" />
      <MobileItem icon={Utensils} label="Restaurants" />
    </>
  );
}

function MobileResources() {
  return (
    <>
      <MobileItem icon={BookOpen} label="Blog" />
      <MobileItem icon={Mic} label="Podcast" />
      <MobileItem icon={Layers} label="Resource Hub" />
    </>
  );
}

function MobileDevs() {
  return (
    <>
      <MobileItem icon={Book} label="Documentation" />
      <MobileItem icon={GraduationCap} label="Tutorials" />
      <MobileItem icon={Sparkles} label="Playground" />
    </>
  );
}

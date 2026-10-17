import { useNavigate } from 'react-router-dom';
import {
  Globe, Camera, Building2, CloudRain, TrendingUp,
  MapPin, Cpu, ArrowRight
} from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    { icon: MapPin, title: 'Satellite GIS Map', desc: 'Full Raipur satellite imagery with roads, gullies, buildings and farmland layers.' },
    { icon: Camera, title: 'Dashcam Road AI', desc: 'Live public bus dashcam feeds detecting potholes and archiving accident footage.' },
    { icon: Building2, title: 'Buildings & Land-Use', desc: 'Commercial, private, farmland and waterbody registry for the entire city.' },
    { icon: CloudRain, title: 'Flood Prediction', desc: 'Ward-level monsoon risk heatmaps backed by drain sensor telemetry.' },
    { icon: Cpu, title: 'AI Approval Engine', desc: 'Intelligent vendor comparison and one-click municipal repair authorisation.' },
    { icon: TrendingUp, title: 'Budget Prioritisation', desc: 'Data-driven capital allocation scored by impact, equity and dashcam evidence.' },
  ];

  return (
    <div className="min-h-screen bg-[#eef2e3] text-[#000000] font-sans flex flex-col overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcfcfc]/90 backdrop-blur-md border-b border-[#000000]/10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="h-8 w-8 rounded-[4px] bg-[#043f2e] flex items-center justify-center">
            <Globe className="h-4 w-4 text-[#c8f169]" />
          </div>
          <span className="font-serif text-lg text-[#043f2e] tracking-tight font-normal">AuraCity Raipur</span>
        </div>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-[#c8f169] hover:bg-[#b5e054] text-[#000000] text-sm font-medium px-5 py-2.5 rounded-[4px] transition flex items-center space-x-2 shadow-sm"
        >
          <span>Open Dashboard</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-8 bg-[#eef2e3] flex-1">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#fcfcfc] border border-[#000000]/10 text-[#043f2e] text-xs font-mono px-4 py-1.5 rounded-[9999px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8f169] animate-ping inline-block"></span>
            <span>BOTANICAL-EDITORIAL BI · RAIPUR DIGITAL TWIN v3.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-normal text-[#043f2e] tracking-tight leading-[0.95]">
            Raipur. Smarter.<br />
            <span className="italic text-[#2a6f2b]">Every street, every day.</span>
          </h1>

          <p className="text-lg text-[#242423] max-w-2xl mx-auto leading-relaxed font-sans">
            AuraCity is an AI-powered urban intelligence platform for Raipur Municipal Corporation — combining satellite GIS mapping, public bus dashcam road monitoring, Bhulekh CG land record verification, and data-driven budget allocation.
          </p>

          <div className="flex items-center justify-center space-x-4 pt-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-[#c8f169] hover:bg-[#b5e054] text-[#000000] font-medium px-7 py-3 rounded-[4px] text-sm transition flex items-center space-x-2 shadow-sm"
            >
              <span>Get Access to Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Hero stat card stack */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '70+', label: 'Municipal Wards' },
            { value: '45', label: 'Dashcam Buses' },
            { value: '42.8K+', label: 'Assets Mapped' },
            { value: '99.7%', label: 'Bhulekh Integrity' },
          ].map((s, i) => (
            <div key={i} className="bg-[#043f2e] text-[#fcfcfc] rounded-[16px] p-6 text-center shadow-sm">
              <div className="text-3xl font-serif text-[#c8f169]">{s.value}</div>
              <div className="text-xs text-[#eef2e3]/80 mt-1 font-sans">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-8 bg-[#fcfcfc] border-t border-[#000000]/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs font-mono text-[#242423] uppercase tracking-widest mb-2">SYSTEM MODULES</div>
            <h2 className="text-3xl font-serif font-normal text-[#043f2e]">Everything the city needs, in one place.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-[#eef2e3] rounded-[16px] p-6 border border-[#000000]/10 transition hover:-translate-y-1">
                  <div className="h-10 w-10 rounded-[4px] bg-[#c8f169] text-[#000000] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#043f2e] mb-1">{f.title}</h3>
                  <p className="text-xs text-[#242423] leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#043f2e] text-[#fcfcfc] py-12 px-8 text-center text-xs">
        <div className="max-w-xl mx-auto space-y-3">
          <div className="font-serif text-lg text-[#c8f169]">AuraCity Raipur</div>
          <p className="text-[#eef2e3]/70">Sunlit Greenhouse Editorial BI · Raipur Municipal Corporation</p>
        </div>
      </footer>
    </div>
  );
}

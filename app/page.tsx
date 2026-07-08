"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A2A2A] to-[#3A3A3A] text-[#E8E0D8]">
      <nav className="fixed top-0 w-full z-50 bg-[#2A2A2A]/80 backdrop-blur-xl border-b border-[#C47A4E]/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif text-xl font-bold">⟡ <span style={{color:'#D4A853'}}>payswift</span></span>
          <div className="flex gap-6 items-center">
            <a href="#features" className="text-sm text-[#8A8278] hover:text-[#E8E0D8]">Features</a>
            <a href="/api" className="text-sm text-[#8A8278] hover:text-[#E8E0D8]">API</a>
            <a href="#cta" className="text-sm bg-[#C47A4E] text-white px-5 py-2 rounded-full hover:bg-[#D8976E]">Get Started</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.05]" style={{background:'#D4A853',filter:'blur(100px)',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8A8278]">✦ Next-Gen Payment Infrastructure</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-6 mb-8">
            payswift<br />
            <span style={{background:'linear-gradient(135deg,#D4A853,color-mix(in srgb,#D4A853 60%,white))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>
              Next Generation
            </span>
          </h1>
          <p className="text-lg text-[#8A8278] max-w-xl mx-auto mb-10">Enterprise-grade platform engineered by Raymora. Production ready, fully documented, API-first.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/api" className="bg-[#C47A4E] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#D8976E] hover:scale-105 transition-all shadow-lg">API Docs →</Link>
            <a href="#features" className="border border-[#C47A4E]/30 text-[#E8E0D8] px-8 py-3 rounded-full text-sm hover:bg-[#C47A4E]/10">Explore</a>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A8278]">✦ Features</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Why <span style={{color:'#D4A853'}}>payswift</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] transition-all">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-xl" style="background:#D4A85315;color:#D4A853">✦</div>
              <h3 class="text-lg font-semibold mb-2 capitalize">accounts</h3>
              <p class="text-sm text-[#8A8278]">Enterprise-grade accounts management with full CRUD, search, and analytics.</p>
            </div>
            <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] transition-all">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-xl" style="background:#D4A85315;color:#D4A853">✦</div>
              <h3 class="text-lg font-semibold mb-2 capitalize">transactions</h3>
              <p class="text-sm text-[#8A8278]">Enterprise-grade transactions management with full CRUD, search, and analytics.</p>
            </div>
            <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] transition-all">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-xl" style="background:#D4A85315;color:#D4A853">✦</div>
              <h3 class="text-lg font-semibold mb-2 capitalize">merchants</h3>
              <p class="text-sm text-[#8A8278]">Enterprise-grade merchants management with full CRUD, search, and analytics.</p>
            </div>
            <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] transition-all">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-xl" style="background:#D4A85315;color:#D4A853">✦</div>
              <h3 class="text-lg font-semibold mb-2 capitalize">payouts</h3>
              <p class="text-sm text-[#8A8278]">Enterprise-grade payouts management with full CRUD, search, and analytics.</p>
            </div>
            <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] transition-all">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-xl" style="background:#D4A85315;color:#D4A853">✦</div>
              <h3 class="text-lg font-semibold mb-2 capitalize">webhooks</h3>
              <p class="text-sm text-[#8A8278]">Enterprise-grade webhooks management with full CRUD, search, and analytics.</p>
            </div>

        </div>
      </section>

      <section className="py-24 px-6 bg-[#333]/50 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A8278]">✦ API</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">RESTful <span style={{color:'#D4A853'}}>Endpoints</span></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <div class="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/[0.04] font-mono text-sm">
              <span class="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 font-semibold">GET</span>
              <span style="color:#D4A853">/api/accounts</span>
              <span class="text-[#8A8278] ml-auto">→ List all accounts records</span>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/[0.04] font-mono text-sm -mt-3">
              <span class="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400 font-semibold">POST</span>
              <span style="color:#D4A853">/api/accounts</span>
              <span class="text-[#8A8278] ml-auto">→ Create new accounts entry</span>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/[0.04] font-mono text-sm">
              <span class="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 font-semibold">GET</span>
              <span style="color:#D4A853">/api/transactions</span>
              <span class="text-[#8A8278] ml-auto">→ List all transactions records</span>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/[0.04] font-mono text-sm -mt-3">
              <span class="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400 font-semibold">POST</span>
              <span style="color:#D4A853">/api/transactions</span>
              <span class="text-[#8A8278] ml-auto">→ Create new transactions entry</span>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/[0.04] font-mono text-sm">
              <span class="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 font-semibold">GET</span>
              <span style="color:#D4A853">/api/merchants</span>
              <span class="text-[#8A8278] ml-auto">→ List all merchants records</span>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/[0.04] font-mono text-sm -mt-3">
              <span class="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400 font-semibold">POST</span>
              <span style="color:#D4A853">/api/merchants</span>
              <span class="text-[#8A8278] ml-auto">→ Create new merchants entry</span>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/[0.04] font-mono text-sm">
              <span class="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 font-semibold">GET</span>
              <span style="color:#D4A853">/api/payouts</span>
              <span class="text-[#8A8278] ml-auto">→ List all payouts records</span>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/[0.04] font-mono text-sm -mt-3">
              <span class="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400 font-semibold">POST</span>
              <span style="color:#D4A853">/api/payouts</span>
              <span class="text-[#8A8278] ml-auto">→ Create new payouts entry</span>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/[0.04] font-mono text-sm">
              <span class="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 font-semibold">GET</span>
              <span style="color:#D4A853">/api/webhooks</span>
              <span class="text-[#8A8278] ml-auto">→ List all webhooks records</span>
            </div>
            <div class="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/[0.04] font-mono text-sm -mt-3">
              <span class="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400 font-semibold">POST</span>
              <span style="color:#D4A853">/api/webhooks</span>
              <span class="text-[#8A8278] ml-auto">→ Create new webhooks entry</span>
            </div>

        </div>
      </section>

      <section id="cta" className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Ship?</h2>
          <p className="text-lg text-[#8A8278] mb-10">payswift is built and ready for production. Deploy in minutes.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://github.com/panelmakerr/payswift" target="_blank" className="bg-[#C47A4E] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#D8976E]">GitHub Repo →</a>
            <Link href="/api" className="border border-[#C47A4E]/30 text-[#E8E0D8] px-8 py-3 rounded-full text-sm hover:bg-[#C47A4E]/10">API Docs</Link>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/[0.04] text-center">
        <p className="text-sm text-[#8A8278]">© 2026 <a href="https://github.com/panelmakerr/payswift" className="hover:underline" style={{color:'#D4A853'}}>payswift</a></p>
        <p className="text-xs text-[#8A8278]/60 mt-2 font-serif">Built by <span style={{color:'#D4A853'}}>Raymora</span> — Premium Web Engineering</p>
      </footer>
    </div>
  );
}

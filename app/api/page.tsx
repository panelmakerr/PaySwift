'use client';
import Link from 'next/link';

export default function APIDocs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2A2A2A] to-[#3A3A3A] text-[#E8E0D8] p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-[#C47A4E] hover:underline text-sm mb-8 inline-block">← Back to Home</Link>
        <h1 className="font-serif text-4xl mb-8">payswift API</h1>
        <p className="text-[#8A8278] mb-12">RESTful API endpoints for Next-Gen Payment Infrastructure. All endpoints return JSON.</p>
        <div className="space-y-8">
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/accounts</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/accounts → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/accounts → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/accounts/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/accounts/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/transactions</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/transactions → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/transactions → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/transactions/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/transactions/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/merchants</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/merchants → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/merchants → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/merchants/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/merchants/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/payouts</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/payouts → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/payouts → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/payouts/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/payouts/[id] → Delete</span></div>
            </div>
          </div>
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <h2 class="text-xl font-semibold mb-4 capitalize">/webhooks</h2>
            <div class="space-y-2 font-mono text-sm">
              <div class="flex gap-4 items-center"><span class="text-green-400 w-12">GET</span><span>/webhooks → List</span></div>
              <div class="flex gap-4 items-center"><span class="text-blue-400 w-12">POST</span><span>/webhooks → Create</span></div>
              <div class="flex gap-4 items-center"><span class="text-yellow-400 w-12">PUT</span><span>/webhooks/[id] → Update</span></div>
              <div class="flex gap-4 items-center"><span class="text-red-400 w-12">DEL</span><span>/webhooks/[id] → Delete</span></div>
            </div>
          </div>

        </div>
        <footer className="mt-16 pt-8 border-t border-white/[0.04] text-center text-sm text-[#8A8278]">
          <p>Built by <span style={{color:'#D4A853'}}>Raymora</span> — Premium Web Engineering</p>
        </footer>
      </div>
    </div>
  );
}

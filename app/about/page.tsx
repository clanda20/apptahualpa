import Link from 'next/link';
import { ApptahualpaLogo } from '@/components/Logo';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] pt-16">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="text-sm hover:underline">← Back to home</Link>

        <h1 className="text-5xl font-semibold tracking-tight mt-8 mb-8">About Apptahualpa</h1>

        <div className="prose prose-lg text-[#6B5F52]">
          <p className="text-xl">
            Apptahualpa was founded with a clear purpose: to use games and technology as 
            powerful tools for cultural preservation and education.
          </p>

          <h3 className="text-[#3F2E1E]">The Founder</h3>
          <p>
            Apptahualpa was created by a developer born to Andean parents who migrated to 
            the diaspora. Growing up between two worlds, they witnessed how quickly ancestral 
            knowledge can fade when younger generations no longer see it reflected in the 
            modern tools they use every day.
          </p>

          <p>
            After working for several years in the mainstream games industry, they became 
            frustrated by how Andean and Indigenous cultures were either ignored or reduced 
            to stereotypes. They decided to build something different — games and educational 
            experiences made *with* the communities, not just *about* them.
          </p>

          <p>
            The name Apptahualpa comes from Atahualpa, the last Inca emperor. It is both 
            a tribute and a statement: that the spirit of Andean resistance and creativity 
            continues today through new forms — including code and play.
          </p>

          <h3 className="text-[#3F2E1E]">Our Approach</h3>
          <ul>
            <li>Every project involves cultural consultants and elders from the regions we represent.</li>
            <li>We prioritize cultural accuracy and community benefit over commercial appeal.</li>
            <li>A portion of all revenue supports free educational tools in rural Andean schools.</li>
            <li>We believe culture is alive — it evolves, and digital media can be part of that evolution.</li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-[#3F2E1E]/10">
          <Link href="/contact" className="text-[#C45C3B] hover:underline">
            Interested in collaborating? →
          </Link>
        </div>

        {/* Brand Identity */}
        <div className="mt-20 pt-10 border-t border-[#3F2E1E]/10">
          <h3 className="text-2xl font-semibold mb-6">Brand Identity</h3>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="text-sm text-[#C45C3B] tracking-widest mb-2">PRIMARY LOGO</div>
              <div className="border border-[#3F2E1E]/10 p-8 rounded-2xl bg-white">
                <ApptahualpaLogo />
              </div>
              <p className="text-xs text-[#6B5F52] mt-3">
                The logo combines stepped terraces (a symbol of Andean agriculture and architecture) 
                with the sun (Inti), representing the connection between earth and cosmos.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-sm text-[#C45C3B] tracking-widest mb-2">COLOR SYSTEM</div>
                <div className="grid grid-cols-4 gap-3">
                  <div className="h-16 rounded-xl bg-[#3F2E1E]" title="Earth" />
                  <div className="h-16 rounded-xl bg-[#C45C3B]" title="Terracotta" />
                  <div className="h-16 rounded-xl bg-[#C9A227]" title="Gold" />
                  <div className="h-16 rounded-xl bg-[#1E3A5F]" title="Deep Blue" />
                </div>
              </div>

              <div>
                <div className="text-sm text-[#C45C3B] tracking-widest mb-2">TYPOGRAPHY</div>
                <div className="text-3xl font-semibold tracking-tight">Apptahualpa</div>
                <div className="text-sm text-[#6B5F52] mt-1">Geist Sans — Clean, modern, and highly legible across languages.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

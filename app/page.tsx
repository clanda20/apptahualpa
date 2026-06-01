import Link from "next/link";
import { ApptahualpaLogo } from "@/components/Logo";

export default function Apptahualpa() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#3F2E1E] pt-16">

      {/* Hero */}
      <section className="pt-20 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="scale-90">
            {/* Using the new logo component */}
            <ApptahualpaLogo />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
          Games and learning<br />rooted in the Andes.
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-[#6B5F52] mb-10">
          Apptahualpa creates meaningful digital experiences that celebrate and preserve 
          the rich cultures of the Inca Empire and the Andean world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#apps" 
            className="px-8 py-4 rounded-full bg-[#3F2E1E] text-[#F9F6F0] text-lg hover:bg-[#C45C3B] transition-colors"
          >
            Explore Our Apps
          </Link>
          <Link 
            href="#mission" 
            className="px-8 py-4 rounded-full border border-[#3F2E1E] text-lg hover:bg-[#3F2E1E] hover:text-[#F9F6F0] transition-colors"
          >
            Our Mission
          </Link>
        </div>

        <div className="mt-12 text-xs tracking-[0.15em] text-[#6B5F52]/70">
          PERU • BOLIVIA • ECUADOR • COLOMBIA • CHILE • ARGENTINA
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="section-padding border-t border-[#3F2E1E]/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-[#C45C3B] text-sm tracking-[0.1em] mb-3">OUR PURPOSE</div>
            <h2 className="text-5xl tracking-tight font-semibold mb-8">
              We create games and educational experiences that honor living cultures.
            </h2>
            <p className="text-xl text-[#6B5F52]">
              Apptahualpa develops digital tools that make the wisdom, stories, and traditions 
              of the Inca world accessible and engaging for new generations — especially for 
              communities across the Andes and the diaspora.
            </p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section id="regions" className="section-padding bg-[#F5F0E6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-[#C45C3B] text-sm tracking-[0.1em] mb-3">THE ANDEAN WORLD</div>
            <h2 className="text-5xl tracking-tight font-semibold">Cultures we honor</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { country: "Peru", desc: "Heart of the Inca Empire — Cusco, Machu Picchu, and the Sacred Valley." },
              { country: "Bolivia", desc: "Highland traditions, Lake Titicaca, and Aymara heritage." },
              { country: "Ecuador", desc: "Northern reaches of Tawantinsuyu and rich Kichwa culture." },
              { country: "Colombia", desc: "Southern Andean regions and Muisca + Inca intersections." },
              { country: "Chile", desc: "Northern Atacama and the southern expansion of the empire." },
              { country: "Argentina", desc: "Northwestern Andean valleys and the Qhapaq Ñan routes." },
            ].map((region, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-[#3F2E1E]/10">
                <div className="font-semibold text-2xl mb-3">{region.country}</div>
                <p className="text-[#6B5F52]">{region.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section id="apps" className="section-padding">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="text-[#C45C3B] text-sm tracking-[0.1em] mb-3">OUR WORK</div>
              <h2 className="text-5xl tracking-tight font-semibold">Featured Apps & Games</h2>
            </div>
            <Link href="/apps" className="text-sm underline hover:no-underline">
              View all projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* App 1 */}
            <div className="group border border-[#3F2E1E]/10 rounded-3xl overflow-hidden hover:border-[#C45C3B] transition-colors">
              <div className="h-48 bg-[#3F2E1E] flex items-center justify-center">
                <div className="text-center text-[#F9F6F0]">
                  <div className="text-5xl mb-2">🦙</div>
                  <div className="font-medium">Qhapaq Ñan</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-3 py-1 bg-[#C45C3B]/10 text-[#C45C3B] rounded-full">Game</span>
                  <span className="text-xs text-[#6B5F52]">Ages 10+</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Qhapaq Ñan: The Royal Road</h3>
                <p className="text-[#6B5F52] text-sm mb-4">
                  An adventure game where players walk the Inca road system, solving challenges 
                  using traditional Andean knowledge.
                </p>
                <div className="text-xs text-[#C45C3B]">Peru • Bolivia • Argentina</div>
              </div>
            </div>

            {/* App 2 */}
            <div className="group border border-[#3F2E1E]/10 rounded-3xl overflow-hidden hover:border-[#C45C3B] transition-colors">
              <div className="h-48 bg-[#1E3A5F] flex items-center justify-center">
                <div className="text-center text-[#F9F6F0]">
                  <div className="text-5xl mb-2">🌾</div>
                  <div className="font-medium">Andean Seeds</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-3 py-1 bg-[#C45C3B]/10 text-[#C45C3B] rounded-full">Education</span>
                  <span className="text-xs text-[#6B5F52]">Ages 8–14</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Andean Seeds</h3>
                <p className="text-[#6B5F52] text-sm mb-4">
                  Educational game teaching traditional Andean agriculture, terrace farming, 
                  and crop diversity through interactive storytelling.
                </p>
                <div className="text-xs text-[#C45C3B]">Peru • Ecuador • Bolivia</div>
              </div>
            </div>

            {/* App 3 */}
            <div className="group border border-[#3F2E1E]/10 rounded-3xl overflow-hidden hover:border-[#C45C3B] transition-colors">
              <div className="h-48 bg-[#5C6B4A] flex items-center justify-center">
                <div className="text-center text-[#F9F6F0]">
                  <div className="text-5xl mb-2">🏔️</div>
                  <div className="font-medium">Inti Raymi VR</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-3 py-1 bg-[#C45C3B]/10 text-[#C45C3B] rounded-full">Experience</span>
                  <span className="text-xs text-[#6B5F52]">All ages</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Inti Raymi: Festival of the Sun</h3>
                <p className="text-[#6B5F52] text-sm mb-4">
                  Immersive VR experience of the most important Inca festival. Learn rituals, 
                  astronomy, and Quechua through participation.
                </p>
                <div className="text-xs text-[#C45C3B]">Peru • All Regions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories from the Andes */}
      <section className="section-padding bg-[#F5F0E6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <div className="text-[#C45C3B] text-sm tracking-[0.1em] mb-3">THE ARCHIVE</div>
            <h2 className="text-5xl tracking-tight font-semibold mb-4">Stories from the Andes</h2>
            <p className="max-w-2xl text-[#6B5F52]">
              Every app we build begins with a story. Here are some of the living narratives 
              that inspire our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-[#3F2E1E]/10">
              <div className="text-[#C45C3B] text-xs tracking-[0.1em] mb-3">PERU • QUECHUA</div>
              <h3 className="font-semibold text-xl mb-3">The Weaving of Time</h3>
              <p className="text-[#6B5F52] text-sm">
                In the high Andes, women still weave the patterns of the stars into textiles. 
                These are not just clothes — they are maps of the cosmos and family histories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#3F2E1E]/10">
              <div className="text-[#C45C3B] text-xs tracking-[0.1em] mb-3">BOLIVIA • AYMARA</div>
              <h3 className="font-semibold text-xl mb-3">The Lake That Remembers</h3>
              <p className="text-[#6B5F52] text-sm">
                Lake Titicaca is said to hold the memory of the first Incas. Elders tell that 
                the lake itself teaches the children how to read the weather and the seasons.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#3F2E1E]/10">
              <div className="text-[#C45C3B] text-xs tracking-[0.1em] mb-3">ECUADOR • KICHWA</div>
              <h3 className="font-semibold text-xl mb-3">The Mountains That Speak</h3>
              <p className="text-[#6B5F52] text-sm">
                In the Ecuadorian Andes, mountains are not scenery — they are living beings. 
                Communities still hold conversations with the peaks through offerings and song.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-[#3F2E1E] text-[#F9F6F0]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight font-semibold mb-6">
            We don’t just represent culture.<br />We collaborate with it.
          </h2>
          <p className="text-xl text-[#F9F6F0]/80 max-w-xl mx-auto">
            Every project is developed with deep respect for the communities whose knowledge 
            and stories we help share. We work with cultural advisors, historians, and 
            Indigenous creators across the Andes.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[#C45C3B] text-sm tracking-[0.1em] mb-3">THE FOUNDER</div>
          <h2 className="text-5xl tracking-tight font-semibold mb-8">About Apptahualpa</h2>
          
          <div className="prose prose-lg text-[#6B5F52] max-w-2xl">
            <p>
              Apptahualpa was founded by a developer passionate about using technology to 
              preserve and share the living heritage of the Andean world. With roots in 
              the diaspora and deep respect for the original peoples of Tawantinsuyu, 
              the studio creates games and educational tools that treat culture with care 
              and creativity.
            </p>
            <p>
              We believe that the wisdom of the Andes — from agricultural knowledge to 
              storytelling traditions — has profound value for the modern world, and that 
              interactive media is one of the most powerful ways to keep it alive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding border-t border-[#3F2E1E]/10 bg-[#F5F0E6]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-4xl tracking-tight font-semibold mb-4">Let’s build together</h2>
          <p className="text-[#6B5F52] mb-8">
            Whether you’re an educator, a cultural organization, or a fellow creator, 
            we’d love to hear from you.
          </p>
          <a 
            href="mailto:hello@apptahualpa.com" 
            className="inline-block px-8 py-4 rounded-full bg-[#3F2E1E] text-[#F9F6F0] hover:bg-[#C45C3B] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#3F2E1E]/10 py-12 px-6 text-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-y-8">
            <div>
              <div className="font-semibold text-lg tracking-tight">Apptahualpa</div>
              <div className="text-[#6B5F52] mt-1">Honoring the Andes through play.</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 text-[#6B5F52]">
              <div>
                <div className="font-medium text-[#3F2E1E] mb-2">Explore</div>
                <div className="space-y-1.5">
                  <div>Our Apps</div>
                  <div>Regions</div>
                  <div>Research</div>
                </div>
              </div>
              <div>
                <div className="font-medium text-[#3F2E1E] mb-2">Company</div>
                <div className="space-y-1.5">
                  <Link href="/about">About Us</Link>
                  <div>Philosophy</div>
                  <div>Contact</div>
                </div>
              </div>
              <div>
                <div className="font-medium text-[#3F2E1E] mb-2">Connect</div>
                <div className="space-y-1.5">
                  <a href="#" className="block hover:text-[#C45C3B]">Instagram</a>
                  <a href="#" className="block hover:text-[#C45C3B]">YouTube</a>
                  <a href="#" className="block hover:text-[#C45C3B]">Newsletter</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#3F2E1E]/10 text-xs text-[#6B5F52]">
            © {new Date().getFullYear()} Apptahualpa. Created with deep respect for the original peoples of Tawantinsuyu.
          </div>
        </div>
      </footer>
    </div>
  );
}

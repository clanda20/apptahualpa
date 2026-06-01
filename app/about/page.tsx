import Link from 'next/link';

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
            The studio was created by a developer with deep personal and ancestral connections 
            to the Andean region. After years working in the games industry, they realized that 
            most representations of Inca culture in media were either stereotypical or created 
            without meaningful collaboration with the communities themselves.
          </p>

          <p>
            Apptahualpa was born from the belief that digital experiences can be a bridge — 
            not just for outsiders to learn about Andean cultures, but also as tools that 
            communities can use to pass knowledge to younger generations in ways that feel 
            alive and relevant today.
          </p>

          <h3 className="text-[#3F2E1E]">Our Approach</h3>
          <ul>
            <li>Every project involves cultural consultants from the regions we represent.</li>
            <li>We prioritize educational accuracy over entertainment when the two conflict.</li>
            <li>Revenue from commercial projects helps fund free or low-cost tools for schools in the Andes.</li>
            <li>We believe culture is living — not a museum piece.</li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-[#3F2E1E]/10">
          <Link href="/contact" className="text-[#C45C3B] hover:underline">
            Interested in collaborating? →
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function AppsPage() {
  const apps = [
    {
      id: 1,
      title: "Qhapaq Ñan: The Royal Road",
      type: "Game",
      age: "Ages 10+",
      regions: "Peru, Bolivia, Argentina",
      description: "An adventure game where players walk the Inca road system, solving challenges using traditional Andean knowledge, astronomy, and community values.",
      status: "In Development"
    },
    {
      id: 2,
      title: "Andean Seeds",
      type: "Educational",
      age: "Ages 8–14",
      regions: "Peru, Ecuador, Bolivia",
      description: "Learn traditional Andean agriculture, terrace farming systems, and crop diversity through interactive storytelling and simulation.",
      status: "Released"
    },
    {
      id: 3,
      title: "Inti Raymi VR",
      type: "Experience",
      age: "All ages",
      regions: "Peru",
      description: "Immersive VR experience of the Festival of the Sun. Participate in rituals, learn Quechua phrases, and understand Inca cosmology.",
      status: "In Development"
    },
    {
      id: 4,
      title: "The Language of the Mountains",
      type: "Education",
      age: "Ages 7–12",
      regions: "All Andean Regions",
      description: "An interactive way to learn basic Quechua and Aymara through games, songs, and stories from the Andes.",
      status: "Released"
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0] pt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/" className="text-sm hover:underline">← Back to home</Link>
        
        <h1 className="text-5xl font-semibold tracking-tight mt-6 mb-4">All Apps & Games</h1>
        <p className="max-w-2xl text-[#6B5F52] text-lg mb-12">
          Digital experiences designed to celebrate, teach, and preserve the living cultures of the Inca world.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <div key={app.id} className="border border-[#3F2E1E]/10 rounded-3xl p-8 hover:border-[#C45C3B] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-[#C45C3B] text-sm mb-1">{app.type}</div>
                  <h3 className="text-2xl font-semibold">{app.title}</h3>
                </div>
                <div className="text-xs px-3 py-1 border border-[#3F2E1E]/20 rounded-full text-[#6B5F52]">
                  {app.status}
                </div>
              </div>
              
              <p className="text-[#6B5F52] mb-6">{app.description}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-[#6B5F52]">Ages: </span>
                  <span>{app.age}</span>
                </div>
                <div className="text-[#C45C3B]">{app.regions}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { WhyChooseUs } from "@/components/why-choose-us"
import { SmoothBgShader } from "@/components/ui/hero-section-with-smooth-bg-shader"
import { IconGrid, IconGridItem } from "@/components/ui/icon-set"
import { Navbar } from "@/components/navbar"

// Helper to create an icon component with consistent styling
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="h-6 w-6 text-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
    {children}
  </div>
);

const socialIcons: IconGridItem[] = [
  { 
    id: "instagram", 
    icon: (
      <IconWrapper>
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </IconWrapper>
    ), 
    name: "Instagram", 
    href: "https://www.instagram.com/novahaus.pmc?igsh=MXB3ODd1NmZkZjY0YQ==" 
  },
];

export default function Home() {
  return (
    <main className="bg-white text-gray-800 antialiased font-sans">
      <Navbar lang="en" activePath="/" />

      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center bg-gray-900 overflow-hidden pt-20">
          <img src="/images/hero.webp" alt="House" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="relative z-10 px-8 lg:px-24 max-w-4xl text-white mt-12">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">NovaHaus Property Management</h1>
              <p className="text-lg lg:text-xl font-bold mb-8 max-w-xl">Connecting Students with Quality Living</p>
              <a href="#available-units" className="bg-[#34a0a4] hover:bg-[#2a8286] text-white px-8 py-3 rounded-full font-semibold transition inline-block">Explore Property &rarr;</a>
          </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 px-8 lg:px-24 bg-[#ead7c7]">
          <div className="flex flex-col lg:flex-row gap-12 justify-between items-start mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 max-w-lg leading-tight lg:leading-tight">About NovaHaus Property Management</h2>
              <div className="max-w-xl">
                  <p className="text-lg text-gray-800 font-medium mb-12">Founded in 2023 by Eric Ng and Simon Chong, we provide premium, fully furnished student housing in Sunway and Subang. With over 200 satisfied residents, we go beyond accommodation to create secure, designer homes that foster academic success and personal growth.</p>
                  <div className="grid grid-cols-3 gap-8">
                      <div><h3 className="text-3xl font-bold text-[#34a0a4] mb-1">+112</h3><p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Unit Already</p></div>
                      <div><h3 className="text-3xl font-bold text-[#34a0a4] mb-1">+500</h3><p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Customer</p></div>
                      <div><h3 className="text-3xl font-bold text-[#34a0a4] mb-1">99%</h3><p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Satisfied</p></div>
                  </div>
              </div>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 h-[400px] lg:h-64">
              <img src="/images/about1.jpg.png" className="w-full h-full object-cover rounded-xl" alt="Property" />
              <img src="/images/about2.jpg" className="w-full h-full object-cover rounded-xl lg:mt-8" alt="Property" />
              <img src="/images/about3.jpg" className="w-full h-full object-cover rounded-xl lg:-mt-8" alt="Property" />
              <img src="/images/about4.jpg" className="w-full h-full object-cover rounded-xl" alt="Property" />
          </div>
      </section>

      {/* Replaced Why Choose Us Section*/}
      <WhyChooseUs />

      {/* Discover Available Units Section */}
      <section 
          id="available-units"
          className="relative py-24 px-8 lg:px-24 overflow-hidden flex flex-col items-center z-0"
          style={{
              backgroundImage: "radial-gradient(100% 100% at 50% 50%, #ffffff 0%, #ead7c7 100%)",
              backgroundSize: "100% 100%",
          }}
      >
          <div className="relative z-10 w-full">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34a0a4] to-teal-700">Discover Available Units</h2>
                  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Explore our premium selection of student accommodations across prime locations in Sunway and Subang.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                  { name: "Aera Residence", image: "/images/Aera-Residence.jpeg" },
                  { name: "Kenwingston Skyloft USJ1", image: "/images/Kenwingston-Skylofts.jpeg" },
                  { name: "Verando Residence", image: "/images/verando-residence.webp" },
                  { name: "Grand Subang SS15", image: "/images/grand-subang-15.jpg" },
                  { name: "Grand Subang SS13", image: "/images/grand-subang-13.jpeg" }
              ].map((project, i) => (
                  <a key={i} href={`https://wa.me/60186667116?text=${encodeURIComponent(`Hi, I'm interested to rent ${project.name}.`)}`} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
                      <div className="h-56 bg-gray-200 overflow-hidden">
                          <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#34a0a4] transition-colors">{project.name}</h3>
                          <p className="text-sm text-gray-500 mb-4">Premium fully furnished units ready for move-in.</p>
                          <span className="text-[#34a0a4] font-semibold flex items-center gap-1">
                              View Details <span aria-hidden="true">&rarr;</span>
                          </span>
                      </div>
                  </a>
              ))}
              </div>
          </div>
      </section>

      {/* Our Services Section */}
      <SmoothBgShader className="py-20 px-8 lg:px-24">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34a0a4] to-teal-700">Our Services</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Tailored solutions to make university life stress-free for tenants, and property management effortless for landlords.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                  <div className="h-64 w-full bg-gray-200">
                      <img src="/images/dbb044b8b3.jpg" alt="Tenant Services" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-10 flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Tenant</h3>
                      <p className="text-gray-600 leading-relaxed">
                          At NovaHaus, we understand the unique needs of students. That’s why we offer fully furnished rooms in well-maintained properties with premium interior designs. Our accommodations come with added perks such as a free shuttle bus service to schools (excluding weekends), ensuring convenience and comfort for our tenants. Whether you’re new to the area or searching for a new place to call home, we help you find the perfect space to make your university life stress-free and enjoyable.
                      </p>
                  </div>
              </div>
              <div className="bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                  <div className="h-64 w-full bg-gray-200">
                      <img src="/images/b3feb6c46b.jpg" alt="Landlord Services" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-10 flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Landlords</h3>
                      <p className="text-gray-600 leading-relaxed">
                          At NovaHaus, we understand the unique needs of students. That’s why we offer fully furnished rooms in well-maintained properties with premium interior designs. Our accommodations come with added perks such as a free shuttle bus service to schools (excluding weekends), ensuring convenience and comfort for our tenants. Whether you’re new to the area or searching for a new place to call home, we help you find the perfect space to make your university life stress-free and enjoyable.
                      </p>
                  </div>
              </div>
          </div>
          <div className="mt-16 text-center">
              <a href="https://wa.me/60186667116?text=Hi%2C%20I%20want%20to%20know%20more%20about%20NovaHaus%20Property%20Management%20Services." target="_blank" rel="noopener noreferrer" className="bg-[#34a0a4] hover:bg-[#2a8286] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                  Enquiry Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
              </a>
          </div>
      </SmoothBgShader>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1a4a4c] to-[#34a0a4] text-white/90 pt-24 pb-12 px-8 lg:px-24 border-t border-[#34a0a4]/50 mt-0 relative overflow-hidden">
          {/* Subtle background glow for luxury feel */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#ead7c7] opacity-10 blur-[120px] pointer-events-none rounded-full"></div>

          <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                  {/* Brand Column */}
                  <div className="lg:col-span-4 pr-0 lg:pr-8">
                      <div className="mb-8">
                          <img src="/logo.png" alt="NovaHaus Logo" className="h-16 object-contain" />
                      </div>
                      <p className="text-sm font-light text-white/80 leading-relaxed mb-10">
                          We specialize in offering fully furnished units with premium interior designs in Sunway & Subang area, ensuring students have a comfortable and secure living space while pursuing their studies.
                      </p>
                      <div className="flex gap-4">
                          <IconGrid items={socialIcons} className="grid-cols-1" />
                      </div>
                  </div>
                  
                  {/* Empty Spacer Column for Desktop Layout */}
                  <div className="hidden lg:block lg:col-span-2"></div>
                  
                  {/* Links Column */}
                  <div className="lg:col-span-3">
                      <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">Discover Space</h4>
                      <ul className="space-y-4 text-sm font-light">
                          <li><a href="/#available-units" className="hover:text-[#ead7c7] transition-colors duration-300">Available Unit</a></li>
                          <li><a href="/career#work-together" className="hover:text-[#ead7c7] transition-colors duration-300">Join Our Team</a></li>
                      </ul>
                  </div>
                  
                  {/* Contact / Concierge Column */}
                  <div className="lg:col-span-3">
                      <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">Concierge</h4>
                      <ul className="space-y-6 text-sm font-light">
                          <li className="flex flex-col gap-2">
                              <span className="text-white/60 text-xs tracking-widest uppercase">Enquiries</span>
                              <a href="https://wa.me/60186667116?text=Hi%2C%20I'm%20interested%20to%20know%20more%20about%20NovaHaus%20Property%20Management%20Services." target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#ead7c7] transition-colors duration-300">Eric: 018-6667116</a>
                              <a href="https://wa.me/601137830010?text=Hi%2C%20I'm%20interested%20to%20know%20more%20about%20NovaHaus%20Property%20Management%20Services." target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#ead7c7] transition-colors duration-300">Simon: 011-37830010</a>
                          </li>
                      </ul>
                  </div>
              </div>
              
              {/* Bottom Copyright and Legal */}
              <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light text-white/60">
                  <p>© {new Date().getFullYear()} NovaHaus Property. All rights reserved.</p>
              </div>
          </div>
      </footer>
    </main>
  )
}

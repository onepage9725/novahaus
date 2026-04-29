"use client";
import { SmoothBgShader } from "@/components/ui/hero-section-with-smooth-bg-shader"
import { TeamSection, TeamMember } from "@/components/ui/team-section-1"
import { Link, Mail, MessageSquare } from "lucide-react"
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

export default function Career() {
  const teamMembers: TeamMember[] = [
    {
      name: "Eric Ng",
      designation: "Marketing Team",
      imageSrc: "/images/Eric.png", 
      href: "https://wa.me/60186667116?text=Hi%2C%20I'm%20interested%20to%20join%20NovaHaus%20Property%20Management%20Marketing%20Team.",
    },
    {
      name: "Simon Chong",
      designation: "Customer Service and Sales",
      imageSrc: "/images/Simon.png", 
      href: "https://wa.me/601137830010?text=Hi%2C%20I'm%20interested%20to%20join%20NovaHaus%20Property%20Management%20Sales%20team.",
    },
  ];

  return (
    <main className="bg-white text-gray-800 antialiased font-sans">
      <Navbar lang="en" activePath="/career" />

      {/* Luxury Hero Section for Career */}
      <SmoothBgShader 
          className="relative min-h-screen w-full flex items-center justify-center pt-20"
          colors={["#1a4a4c", "#34a0a4", "#ead7c7", "#ffffff", "#2a8286", "#1e1e1e"]}
          veilOpacity="bg-black/40"
      >
          <div className="relative z-10 px-8 lg:px-24 max-w-5xl text-center text-white mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
                  Design Your Future <br/>
                  <span className="text-[#ead7c7] font-serif italic">With NovaHaus</span>
              </h1>
              <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-white/90">
                  Join a dynamic team redefining premium student living. Discover a culture of growth, mentorship, and rewarding opportunities.
              </p>
              <a href="#work-together" className="bg-[#ead7c7] hover:bg-white text-[#1a4a4c] px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 inline-block">
                  Explore Opportunities
              </a>
          </div>
      </SmoothBgShader>

      {/* Why Join Us Section */}
      <section id="why-join-us" className="py-24 px-8 lg:px-24 bg-gray-50">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                  <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#34a0a4] mb-4">The NovaHaus Advantage</h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Why Join Us?</h3>
                  <div className="w-24 h-1 bg-[#ead7c7] mx-auto mt-8"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                  {/* Point 01 */}
                  <div className="relative flex gap-8">
                      <div className="text-6xl font-black text-gray-200 absolute -top-10 -left-6 z-0 pointer-events-none">01</div>
                      <div className="relative z-10 pt-2">
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">Flexible Working Environment</h4>
                          <p className="text-gray-600 leading-relaxed text-lg">
                              Choose to work from home or in the office – the choice is yours!
                          </p>
                      </div>
                  </div>

                  {/* Point 02 */}
                  <div className="relative flex gap-8">
                      <div className="text-6xl font-black text-gray-200 absolute -top-10 -left-6 z-0 pointer-events-none">02</div>
                      <div className="relative z-10 pt-2">
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Training</h4>
                          <p className="text-gray-600 leading-relaxed text-lg">
                              No prior experience needed. As long as you’re disciplined and eager to learn, we’ll help you succeed.
                          </p>
                      </div>
                  </div>

                  {/* Point 03 */}
                  <div className="relative flex gap-8">
                      <div className="text-6xl font-black text-gray-200 absolute -top-10 -left-6 z-0 pointer-events-none">03</div>
                      <div className="relative z-10 pt-2">
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">Fast Commission Payouts</h4>
                          <p className="text-gray-600 leading-relaxed text-lg">
                              You’ll earn commissions quickly, with payments made within 7 days once a tenant moves in.
                          </p>
                      </div>
                  </div>

                  {/* Point 04 */}
                  <div className="relative flex gap-8">
                      <div className="text-6xl font-black text-gray-200 absolute -top-10 -left-6 z-0 pointer-events-none">04</div>
                      <div className="relative z-10 pt-2">
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">Mentorship</h4>
                          <p className="text-gray-600 leading-relaxed text-lg">
                              Receive 1-to-1 lessons from our leadership team to ensure you succeed in closing cases and earning your commission.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* What's In It For You Section */}
      <section className="py-24 bg-gradient-to-br from-white to-[#ead7c7] relative">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
              <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight drop-shadow-md">What's in it for you?</h2>
              </div>
              <div className="mb-16 w-full">
                  <img 
                      src="/images/novacareer.jpg" 
                      alt="What's in it for you" 
                      className="w-full h-[500px] md:h-[600px] object-cover rounded-xl shadow-2xl border border-black/5"
                  />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start w-full">
                  <div className="md:col-span-7">
                      <h3 className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-medium">
                          Enjoy lucrative commissions, the opportunity to work from anywhere, and the chance to advance quickly based on meeting targets. With a fast-paced, rewarding environment, your success story starts with us.
                      </h3>
                  </div>
                  <div className="md:col-span-5">
                      <p className="text-lg text-gray-700 leading-relaxed">
                          Take the leap and join a dynamic team where your growth is our priority. Whether you’re a student or someone looking for a new career path, we provide the platform for you to <span className="text-gray-900 font-extrabold text-xl">earn, learn, and succeed.</span>
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Let's Work Together Section */}
      <TeamSection
        id="work-together"
        title="Let's Work together"
        description="At NovaHaus Property Management, we believe in providing opportunities for growth, learning and earning. We are looking for passionate individuals to join our team, whether you're a student or looking for a fresh start in the property management industry. We offer flexible working arrangements, comprehensive training and a commission-based earning structure to help you reach your full potential."
        members={teamMembers}
        className="bg-gradient-to-br from-[#ead7c7] to-[#194a4c] py-32 border-b border-white/10"
      />

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
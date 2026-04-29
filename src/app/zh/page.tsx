import { WhyChooseUsZh } from "@/components/why-choose-us-zh"
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

export default function HomeZh() {
  return (
    <main className="bg-white text-gray-800 antialiased font-sans overflow-x-hidden">
      <Navbar lang="zh" activePath="/zh" />

      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center bg-gray-900 overflow-hidden pt-20">
          <img src="/images/hero.webp" alt="House" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="relative z-10 px-8 lg:px-24 max-w-4xl text-white mt-12">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">NovaHaus 物业管理</h1>
              <p className="text-lg lg:text-xl font-bold mb-8 max-w-xl">为学生提供优质的居住体验</p>
              <a href="#available-units" className="bg-[#34a0a4] hover:bg-[#2a8286] text-white px-8 py-3 rounded-full font-semibold transition inline-block">探索房源 &rarr;</a>
          </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 px-8 lg:px-24 bg-[#ead7c7]">
          <div className="flex flex-col lg:flex-row gap-12 justify-between items-start mb-16">
              <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 max-w-lg leading-tight lg:leading-tight">关于 NovaHaus 物业管理</h2>
              <div className="max-w-xl">
                  <p className="text-lg text-gray-800 font-medium mb-12">由 Eric Ng 和 Simon Chong 于 2023 年创立，我们在双威 (Sunway) 和梳邦 (Subang) 为广大学生提供优质且设施齐全的全装配学生公寓。凭借超过 200 名满意的住户，我们不仅只提供简单的住宿服务，更致力于为您打造安全、有设计感的家，助力学术上的成功与个人层面的成长。</p>
                  <div className="grid grid-cols-3 gap-8">
                      <div><h3 className="text-3xl font-bold text-[#34a0a4] mb-1">+112</h3><p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">套房源</p></div>
                      <div><h3 className="text-3xl font-bold text-[#34a0a4] mb-1">+500</h3><p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">位客户</p></div>
                      <div><h3 className="text-3xl font-bold text-[#34a0a4] mb-1">99%</h3><p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">满意度</p></div>
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
      <WhyChooseUsZh />

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
                  <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34a0a4] to-teal-700">探索现有房源</h2>
                  <p className="text-gray-600 mt-4 max-w-2xl mx-auto">了解我们在双威 (Sunway) 和梳邦 (Subang) 各处黄金地段为您精选的优质租房。</p>
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
                          <p className="text-sm text-gray-500 mb-4">随时拎包入住的高端配置，满足您对生活质量的需求。</p>
                          <span className="text-[#34a0a4] font-semibold flex items-center gap-1">
                              查看详情 <span aria-hidden="true">&rarr;</span>
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
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34a0a4] to-teal-700">我们的服务全景</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">专为您量身制定的解决方案，让租客在体验无忧无惧的同时，更让房东卸下管理的后顾之忧。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                  <div className="h-64 w-full bg-gray-200">
                      <img src="/images/dbb044b8b3.jpg" alt="Tenant Services" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-10 flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">租客</h3>
                      <p className="text-gray-600 leading-relaxed">
                          在 NovaHaus 开始一段不一样的居住体验吧！我们无比理解留学生的特殊租房偏好与各种细致需求，我们在拥有高端设计的优秀物业中，配置了随时准备入住且品质优良的住宿选择。更额外提供学校往返交通便利巴士接送服务（周末除外），务求带给您便捷无负担的愉快大学生活。不用再忧虑任何事情，今天就为您安设完美的在校之 "家" 吧。
                      </p>
                  </div>
              </div>
              <div className="bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                  <div className="h-64 w-full bg-gray-200">
                      <img src="/images/b3feb6c46b.jpg" alt="Landlord Services" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-10 flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">房东</h3>
                      <p className="text-gray-600 leading-relaxed">
                          还在担忧物业收租慢、环境折旧以及管理繁琐带来的焦虑吗？把这些抛给我们即可。在 NovaHaus 物业，作为房产拥有者的您将全权感受到绝对专业的长期回报收益提升计划以及有担保的按时资金流保障机制。我们会帮助打理内环境设计装修改建、把关维修进度并在找寻理想高质素学生准客户租后接管等方面，完全实现真正的“托管”自由。
                      </p>
                  </div>
              </div>
          </div>
          <div className="mt-16 text-center">
              <a href="https://wa.me/60186667116?text=Hi%2C%20I%20want%20to%20know%20more%20about%20NovaHaus%20Property%20Management%20Services." target="_blank" rel="noopener noreferrer" className="bg-[#34a0a4] hover:bg-[#2a8286] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                  立即咨询
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
                          我们专注于在双威 (Sunway) 和梳邦 (Subang) 地区提供配备优质室内设计的全包式带家具单位，确保学生在求学期间拥有一处舒适且安全的居住空间。
                      </p>
                      <div className="flex gap-4">
                          <IconGrid items={socialIcons} className="grid-cols-1" />
                      </div>
                  </div>
                  
                  {/* Empty Spacer Column for Desktop Layout */}
                  <div className="hidden lg:block lg:col-span-2"></div>
                  
                  {/* Links Column */}
                  <div className="lg:col-span-3">
                      <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">探索空间</h4>
                      <ul className="space-y-4 text-sm font-light">
                          <li><a href="/zh/#available-units" className="hover:text-[#ead7c7] transition-colors duration-300">可选单位</a></li>
                          <li><a href="/zh/career#work-together" className="hover:text-[#ead7c7] transition-colors duration-300">加入团队</a></li>
                      </ul>
                  </div>
                  
                  {/* Contact / Concierge Column */}
                  <div className="lg:col-span-3">
                      <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">客服中心</h4>
                      <ul className="space-y-6 text-sm font-light">
                          <li className="flex flex-col gap-2">
                              <span className="text-white/60 text-xs tracking-widest uppercase">联系与咨询</span>
                              <a href="https://wa.me/60186667116?text=Hi%2C%20I'm%20interested%20to%20know%20more%20about%20NovaHaus%20Property%20Management%20Services." target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#ead7c7] transition-colors duration-300">Eric: 018-6667116</a>
                              <a href="https://wa.me/601137830010?text=Hi%2C%20I'm%20interested%20to%20know%20more%20about%20NovaHaus%20Property%20Management%20Services." target="_blank" rel="noopener noreferrer" className="text-lg hover:text-[#ead7c7] transition-colors duration-300">Simon: 011-37830010</a>
                          </li>
                      </ul>
                  </div>
              </div>
              
              {/* Bottom Copyright and Legal */}
              <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light text-white/60">
                  <p>© {new Date().getFullYear()} NovaHaus Property. 保留所有权利。</p>
              </div>
          </div>
      </footer>
    </main>
  )
}
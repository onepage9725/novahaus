"use client";
import { SmoothBgShader } from "@/components/ui/hero-section-with-smooth-bg-shader"
import { TeamSection, TeamMember } from "@/components/ui/team-section-1"
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

export default function CareerZh() {
  const teamMembers: TeamMember[] = [
    {
      name: "Eric Ng",
      designation: "营销团队",
      imageSrc: "/images/Eric.png", 
      href: "https://wa.me/60186667116?text=Hi%2C%20I'm%20interested%20to%20join%20NovaHaus%20Property%20Management%20Marketing%20Team.",
    },
    {
      name: "Simon Chong",
      designation: "客户服务与销售",
      imageSrc: "/images/Simon.png", 
      href: "https://wa.me/601137830010?text=Hi%2C%20I'm%20interested%20to%20join%20NovaHaus%20Property%20Management%20Sales%20team.",
    },
  ];

  return (
    <main className="bg-white text-gray-800 antialiased font-sans overflow-x-hidden">
      <Navbar lang="zh" activePath="/zh/career" />

      {/* Luxury Hero Section for Career */}
      <SmoothBgShader 
          className="relative min-h-screen w-full flex items-center justify-center pt-20"
          colors={["#1a4a4c", "#34a0a4", "#ead7c7", "#ffffff", "#2a8286", "#1e1e1e"]}
          veilOpacity="bg-black/40"
      >
          <div className="relative z-10 px-8 lg:px-24 max-w-5xl text-center text-white mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
                  描绘你的未来 <br/>
                  <span className="text-[#ead7c7] font-serif italic">在 NovaHaus 起航</span>
              </h1>
              <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-white/90">
                  加入一个充满活力的团队，我们正在重新定义高端学生住宿体验。在这里，发现关于成长、指导和回报丰厚的文化氛围。
              </p>
              <a href="#work-together" className="bg-[#ead7c7] hover:bg-white text-[#1a4a4c] px-10 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 inline-block">
                  探索机会
              </a>
          </div>
      </SmoothBgShader>

      {/* Why Join Us Section */}
      <section id="why-join-us" className="py-24 px-8 lg:px-24 bg-gray-50">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                  <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#34a0a4] mb-4">NovaHaus 优势</h2>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900">为何加入我们？</h3>
                  <div className="w-24 h-1 bg-[#ead7c7] mx-auto mt-8"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                  {/* Point 01 */}
                  <div className="relative flex gap-8">
                      <div className="text-6xl font-black text-gray-200 absolute -top-10 -left-6 z-0 pointer-events-none">01</div>
                      <div className="relative z-10 pt-2">
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">灵活的工作环境</h4>
                          <p className="text-gray-600 leading-relaxed text-lg">
                              自由选择居家办公还是在办公室办公 —— 一切由你决定！
                          </p>
                      </div>
                  </div>

                  {/* Point 02 */}
                  <div className="relative flex gap-8">
                      <div className="text-6xl font-black text-gray-200 absolute -top-10 -left-6 z-0 pointer-events-none">02</div>
                      <div className="relative z-10 pt-2">
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">全面的培训</h4>
                          <p className="text-gray-600 leading-relaxed text-lg">
                              无需任何经验。只要你遵守纪律并渴望学习，我们就会帮助你取得成功。
                          </p>
                      </div>
                  </div>

                  {/* Point 03 */}
                  <div className="relative flex gap-8">
                      <div className="text-6xl font-black text-gray-200 absolute -top-10 -left-6 z-0 pointer-events-none">03</div>
                      <div className="relative z-10 pt-2">
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">快速拿到佣金</h4>
                          <p className="text-gray-600 leading-relaxed text-lg">
                              你可以快速赚取佣金，只要租户入住，佣金会在 7 天内支付。
                          </p>
                      </div>
                  </div>

                  {/* Point 04 */}
                  <div className="relative flex gap-8">
                      <div className="text-6xl font-black text-gray-200 absolute -top-10 -left-6 z-0 pointer-events-none">04</div>
                      <div className="relative z-10 pt-2">
                          <h4 className="text-2xl font-bold text-gray-900 mb-4">师徒制指导</h4>
                          <p className="text-gray-600 leading-relaxed text-lg">
                              接收领导团队一对一的指导，确保能助你成功签单拿提成。
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
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight drop-shadow-md">你能得到什么？</h2>
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
                          享受丰厚的佣金，随处办公的机遇，还有达到目标后可以获得快速晋升的机会。处于快节奏又有高回报的环境下，你的成功之路即将从我们这里起跑。
                      </h3>
                  </div>
                  <div className="md:col-span-5">
                      <p className="text-lg text-gray-700 leading-relaxed">
                          迈出这一步，加入一个充满活力的团队，把你的成长放在首位。无论你是在校学生还是寻求新职业发展的人，我们为你提供平台带你<span className="text-gray-900 font-extrabold text-xl">边干、边学、走向成功。</span>
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Let's Work Together Section */}
      <TeamSection
        id="work-together"
        title="加入我们"
        description="在 NovaHaus 物业管理团队，我们坚信会为你提供成长、学习和收益成正比的机会。我们正在寻找充满激情的人士加入我们的团队，无论您是一名学生还是一名期待在物业管理行业重新开始的人。我们提供弹性的工作安排、完善的培训和基于佣金收益架构来帮助你实现全部潜能。"
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

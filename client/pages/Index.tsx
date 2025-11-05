import { Download, Globe, Clock, CloudSun, Github, Linkedin, Mail, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: string]: boolean }>({
    core: true,
    research: false,
    tools: false
  });

  const toggleSkill = (key: string) => {
    setExpandedSkills(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .transition-all {
          transition: all 0.3s ease-out;
        }
        
        button:hover {
          transform: translateY(-2px);
          transition: all 0.2s ease-out;
        }
      `}</style>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_950px] gap-0">
        {/* Left Side - Profile */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-[33px] bg-white animate-slide-in-left">
          <div className="w-full max-w-[570px] mx-auto flex flex-col gap-6 sm:gap-7">
            {/* Header */}
            <div className="flex flex-col gap-4 w-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4">
                <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 whitespace-nowrap transition-all hover:bg-[rgba(41,41,41,0.12)]">
                  <Download className="w-4 h-4 text-[#3D3D3D] flex-shrink-0" />
                  <span className="text-xs font-normal text-[#3D3D3D]" style={{ fontFamily: 'Geist, sans-serif' }}>Download My Resume</span>
                </button>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-wrap w-full sm:w-auto">
                  <span className="text-xs text-[#7C7C7C] flex-shrink-0" style={{ fontFamily: 'Geist, sans-serif' }}>Currently at:</span>
                  <div className="flex items-center gap-1 flex-wrap">
                    <div className="flex items-end gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(41,41,41,0.12)]">
                      <span className="text-sm flex-shrink-0">🌍</span>
                      <span className="text-xs text-[#3D3D3D] whitespace-nowrap" style={{ fontFamily: 'Geist, sans-serif' }}>Surat</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(41,41,41,0.12)]">
                      <span className="text-sm flex-shrink-0">⏰</span>
                      <span className="text-xs text-[#3D3D3D] whitespace-nowrap" style={{ fontFamily: 'Geist, sans-serif' }}>10:04 AM</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(41,41,41,0.12)]">
                      <span className="text-sm flex-shrink-0">🌤️</span>
                      <span className="text-xs text-[#3D3D3D] whitespace-nowrap" style={{ fontFamily: 'Geist, sans-serif' }}>14°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="flex flex-col gap-5 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-xl border border-[#DCDCDC] bg-[rgba(255,255,255,0)] shadow-[0_18px_88px_-4px_rgba(73,73,73,0.10)] p-4 sm:p-5 transition-all hover:shadow-[0_24px_120px_-6px_rgba(73,73,73,0.15)]">
                {/* Profile Header */}
                <div className="flex justify-between items-center gap-3 sm:gap-4 mb-5">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/4f19dbe61b9a3cd0fcc12dc10eef3a7e39f18e96?width=120" 
                    alt="Profile"
                    className="w-[60px] h-[60px] rounded-full shadow-[0_0_14.308px_0_rgba(0,0,0,0.32)_inset] flex-shrink-0 transition-all hover:scale-105"
                  />
                  
                  <div className="flex items-center gap-2 flex-wrap flex-shrink-0 sm:flex-nowrap">
                    <div className="flex items-center gap-1">
                      <button className="flex h-[30px] items-center justify-center px-3 sm:px-4 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(41,41,41,0.12)]">
                        <Github className="w-4 sm:w-5 h-4 sm:h-5 text-[#3D3D3D]" />
                      </button>
                      <button className="flex h-[30px] items-center justify-center px-3 sm:px-4 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(41,41,41,0.12)]">
                        <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-[#3D3D3D]" />
                      </button>
                      <button className="flex h-[30px] items-center justify-center px-3 sm:px-4 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[rgba(41,41,41,0.12)]">
                        <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-[#3D3D3D]" />
                      </button>
                    </div>
                    <div className="rounded-md bg-gradient-to-b from-[#111113] to-[#5B5B63] p-[1px] shadow-[0_0_0_1px_#1F1F22] flex-shrink-0 transition-all hover:shadow-[0_0_0_1px_#3D3D3D]">
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded-[5px] bg-gradient-to-b from-[#404045] to-[#1A1A1C] whitespace-nowrap text-sm">
                        <Mail className="w-4 h-4 text-white flex-shrink-0" />
                        <span className="font-medium text-white hidden sm:inline" style={{ fontFamily: 'Geist, sans-serif' }}>Contact Me</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg sm:text-xl font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '26px' }}>Ghanshyam Pandav</h1>
                    <p className="text-xs sm:text-sm text-[rgba(23,23,23,0.46)]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '18px' }}>UX/UI Designer & Product Designer</p>
                  </div>

                  {/* About Section */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px]" style={{ fontFamily: 'Geist Mono, monospace', lineHeight: '16px' }}>// About me</span>
                    </div>
                    <div className="text-xs sm:text-sm font-light text-[#171717] text-justify" style={{ fontFamily: 'Geist, sans-serif' }}>
                      <p className="mb-2 sm:mb-3">For me, design goes beyond visuals — it's about solving real problems. I craft clean, modern, human-centered experiences that connect people with brands and make technology feel effortless.</p>
                      <p className="mb-2 sm:mb-3">With nearly 5 years of experience as a Senior UX/UI Designer, I've built digital products that put people first — blending clean aesthetics, thoughtful interactions, and meaningful impact.</p>
                      <p>I also leverage AI to boost productivity and accelerate iteration — from copywriting and user research to rapid prototyping and design automation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px]" style={{ fontFamily: 'Geist Mono, monospace', lineHeight: '16px' }}>// Skills</span>
                </div>

                <div className="rounded-xl border border-[#DCDCDC] bg-[rgba(255,255,255,0)] shadow-[0_18px_88px_-4px_rgba(73,73,73,0.10)] p-4 sm:p-5 flex flex-col gap-4 transition-all hover:shadow-[0_24px_120px_-6px_rgba(73,73,73,0.15)]">
                  {/* Core Skills */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs sm:text-sm font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif' }}>Core Skills</span>
                      <button 
                        onClick={() => toggleSkill('core')}
                        className="flex h-[26px] items-center justify-center px-3 sm:px-4 rounded-full bg-[rgba(41,41,41,0.08)] backdrop-blur-sm transition-all hover:bg-[rgba(41,41,41,0.12)]"
                      >
                        {expandedSkills.core ? <Minus className="w-4 sm:w-5 h-4 sm:h-5" /> : <Plus className="w-4 sm:w-5 h-4 sm:h-5" />}
                      </button>
                    </div>
                    {expandedSkills.core && (
                      <div className="space-y-0 transition-all">
                        <div className="flex gap-0 flex-wrap">
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC] transition-all hover:bg-[#F6F6F6]">
                            <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4 whitespace-nowrap" style={{ fontFamily: 'Geist Mono, monospace' }}>🧩UI/UX Design</span>
                          </div>
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC] transition-all hover:bg-[#F6F6F6]">
                            <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4 whitespace-nowrap" style={{ fontFamily: 'Geist Mono, monospace' }}>🎨Visual Design</span>
                          </div>
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC] transition-all hover:bg-[#F6F6F6]">
                            <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4 whitespace-nowrap" style={{ fontFamily: 'Geist Mono, monospace' }}>🧱Design Systems</span>
                          </div>
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC] transition-all hover:bg-[#F6F6F6]">
                            <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4 whitespace-nowrap" style={{ fontFamily: 'Geist Mono, monospace' }}>🧾Wireframming</span>
                          </div>
                        </div>
                        <div className="flex gap-0 flex-wrap">
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC] transition-all hover:bg-[#F6F6F6]">
                            <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4 whitespace-nowrap" style={{ fontFamily: 'Geist Mono, monospace' }}>⚙️Prototyping</span>
                          </div>
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC] transition-all hover:bg-[#F6F6F6]">
                            <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4 whitespace-nowrap" style={{ fontFamily: 'Geist Mono, monospace' }}>🔁Interaction Design</span>
                          </div>
                          <div className="px-2.5 py-2.5 rounded-full border border-[#DCDCDC] transition-all hover:bg-[#F6F6F6]">
                            <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px] leading-4 whitespace-nowrap" style={{ fontFamily: 'Geist Mono, monospace' }}>🗂️Information Arch</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Research & Strategy */}
                  <div className="border-t border-[rgba(0,0,0,0.10)] pt-3">
                    <div className="flex justify-between items-center cursor-pointer transition-all hover:opacity-70" onClick={() => toggleSkill('research')}>
                      <span className="text-xs sm:text-sm font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif' }}>Research & Strategy</span>
                      <button className="w-5 h-5 transition-transform">
                        {expandedSkills.research ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Tools & Technology */}
                  <div className="border-t border-[rgba(0,0,0,0.10)] pt-3">
                    <div className="flex justify-between items-center cursor-pointer transition-all hover:opacity-70" onClick={() => toggleSkill('tools')}>
                      <span className="text-xs sm:text-sm font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif' }}>Tools & Technology</span>
                      <button className="w-5 h-5 transition-transform">
                        {expandedSkills.tools ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px]" style={{ fontFamily: 'Geist Mono, monospace', lineHeight: '16px' }}>// Experiences</span>
                </div>

                <div className="flex flex-col rounded-xl border border-[#DCDCDC] bg-[rgba(255,255,255,0)] shadow-[0_18px_88px_-4px_rgba(73,73,73,0.10)] overflow-hidden transition-all hover:shadow-[0_24px_120px_-6px_rgba(73,73,73,0.15)]">
                  {/* Experience 1 */}
                  <div className="flex items-center gap-3 p-3 sm:p-4 border-b border-[rgba(0,0,0,0.10)] transition-all hover:bg-[rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/365f3f998ff4d9d1270faaff655f1802255b7959?width=107" 
                        alt="MobiOffice"
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-[#DCDCDC] backdrop-blur-[21.5px] flex-shrink-0 transition-all hover:scale-105"
                      />
                      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                        <p className="text-xs text-[#7C7C7C] truncate" style={{ fontFamily: 'Geist, sans-serif' }}>MobiOffice Software Innovations Pvt Ltd</p>
                        <p className="text-sm sm:text-base font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '22.4px' }}>Sr. UX/UI Designer - Surat</p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-light text-[#7C7C7C] flex-shrink-0 whitespace-nowrap" style={{ fontFamily: 'Geist Mono, monospace' }}>Jan,2023 - Present</span>
                  </div>

                  {/* Experience 2 */}
                  <div className="flex items-center gap-3 p-3 sm:p-4 border-b border-[rgba(0,0,0,0.10)] transition-all hover:bg-[rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/4ebf8bb3eef43fb4ff10c0f03ed9c2ef478764cc?width=99" 
                        alt="Byond.Studio"
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-[#DCDCDC] backdrop-blur-[21.5px] flex-shrink-0 transition-all hover:scale-105"
                      />
                      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                        <p className="text-xs text-[#7C7C7C]" style={{ fontFamily: 'Geist, sans-serif' }}>Byond.Studio</p>
                        <p className="text-sm sm:text-base font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '22.4px' }}>UX/UI Designer - Surat</p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-light text-[#7C7C7C] flex-shrink-0 whitespace-nowrap" style={{ fontFamily: 'Geist Mono, monospace' }}>Jan,2021 - Dec,2022</span>
                  </div>

                  {/* Experience 3 */}
                  <div className="flex items-center gap-3 p-3 sm:p-4 transition-all hover:bg-[rgba(0,0,0,0.02)]">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <img 
                        src="https://api.builder.io/api/v1/image/assets/TEMP/b68dd5ac20b0500773cf6cc58b83d7913ab6ec8a?width=112" 
                        alt="ProEX Advisor LLP"
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-[#DCDCDC] backdrop-blur-[21.5px] flex-shrink-0 transition-all hover:scale-105"
                      />
                      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                        <p className="text-xs text-[#7C7C7C]" style={{ fontFamily: 'Geist, sans-serif' }}>ProEX Advisor LLP</p>
                        <p className="text-sm sm:text-base font-medium text-[#171717]" style={{ fontFamily: 'Geist, sans-serif', lineHeight: '22.4px' }}>Internship, Graphics Designer - Ahmedabad</p>
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-light text-[#7C7C7C] flex-shrink-0 whitespace-nowrap" style={{ fontFamily: 'Geist Mono, monospace' }}>Nov,2020 - Dec,2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Portfolio */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-[33px] bg-gradient-to-b from-[#EBEBEB] to-[#EBEBEB] lg:bg-[#EBEBEB] lg:border-l lg:border-[#DCDCDC] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="w-full max-w-[550px] mx-auto flex flex-col gap-6 sm:gap-7">
            <div className="flex items-center gap-3">
              <span className="text-[10px] sm:text-[11px] text-[#7C7C7C] uppercase tracking-[1.32px]" style={{ fontFamily: 'Geist Mono, monospace', lineHeight: '16px' }}>// sELECTED wORK</span>
            </div>

            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Project 1 */}
              <ProjectCard
                url="Stock.ai"
                title="AI Investment Platform"
                image="https://api.builder.io/api/v1/image/assets/TEMP/1679745e2a064970ed0aebce6c9889bcdf2e840e?width=865"
              />

              {/* Project 2 */}
              <ProjectCard
                url="TaskRio.com"
                title="AI-powered Task Automation Tool"
                image="https://api.builder.io/api/v1/image/assets/TEMP/5b39d1380b87784d13682daf309f7178611fa930?width=865"
              />

              {/* Project 3 */}
              <ProjectCard
                url="TaskRio.com"
                title=""
                image="https://api.builder.io/api/v1/image/assets/TEMP/5b39d1380b87784d13682daf309f7178611fa930?width=865"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ url, title, image }: { url: string; title: string; image: string }) {
  return (
    <div className="rounded-2xl bg-white p-1 pb-1 transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in-up">
      <div className="p-3 flex items-center justify-between gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#F6F6F6] backdrop-blur-sm flex-shrink-0 transition-all hover:bg-[#EFEFEF]">
            <Globe className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#737373] flex-shrink-0" />
            <div className="flex items-center gap-1 min-w-0">
              <span className="text-[8px] sm:text-[9px] text-[#B5B5B5] uppercase tracking-[0.72px] flex-shrink-0" style={{ fontFamily: 'Geist Mono, monospace' }}>https://</span>
              <span className="text-xs text-[#404040] truncate" style={{ fontFamily: 'Geist, sans-serif' }}>{url}</span>
            </div>
          </div>
          {title && (
            <span className="text-xs text-[#404040] whitespace-nowrap truncate hidden sm:inline" style={{ fontFamily: 'Geist, sans-serif' }}>{title}</span>
          )}
        </div>
        <button className="flex items-center justify-center p-2 sm:p-2.5 rounded-full border border-[#EFEFEF] backdrop-blur-sm flex-shrink-0 transition-all hover:border-[#DCDCDC] hover:bg-[rgba(0,0,0,0.02)]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12L12 4M12 4H6.66667M12 4V9.33333" stroke="#404040" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="rounded-xl bg-[#F6F6F6] p-[2px] sm:p-[3px] pt-6 sm:pt-10">
        <div className="rounded-t-xl bg-white max-w-[438.36px] mx-auto">
          <div className="flex items-center gap-0.5 p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]"></div>
          </div>
          <img 
            src={image} 
            alt="Project preview" 
            className="w-full h-48 sm:h-60 md:h-80 object-cover rounded-t-xl transition-all hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
}

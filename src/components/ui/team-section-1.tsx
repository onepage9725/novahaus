"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for class concatenation

// Define interfaces for props
interface SocialLink {
  icon: React.ElementType; // For Shadcn icons or any SVG component
  href: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  imageSrc: string;
  href?: string; // Adding clickability to profile component
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  members: TeamMember[];
  registerLink?: string;
  logo?: React.ReactNode; // For a custom logo, or you can use a string src
  socialLinksMain?: SocialLink[]; // Main social links for the company/section
}

// TeamSection Component
export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      description,
      members,
      registerLink,
      logo,
      socialLinksMain,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden bg-background py-12 md:py-24 lg:py-32",
          className
        )}
        {...props}
      >
        <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
          {/* Background Grid - for visual appeal */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern
                  id="grid"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 0L0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-muted-foreground"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Header Section */}
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start md:text-left lg:gap-8">
            <div className="grid gap-2 text-center md:text-left w-full">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                <span className="text-[#34a0a4] block text-xl sm:text-2xl md:text-3xl font-medium tracking-[0.3em] uppercase mb-4">
                  NovaHaus Property Management
                </span>
                {title}
              </h1>
              <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {description}
              </p>
            </div>
            {(logo || registerLink) && (
              <div className="flex flex-col items-center gap-4 md:items-end">
                {logo && <div className="text-2xl font-bold text-white">{logo}</div>}
                {registerLink && (
                  <a
                    href={registerLink}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#34a0a4] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#2a8286] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    REGISTER NOW
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Main Social Links */}
          {socialLinksMain && socialLinksMain.length > 0 && (
            <div className="relative z-10 flex w-full items-center justify-center gap-4 py-4 md:justify-center">
              {socialLinksMain.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#34a0a4] transition-colors"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
              <span className="text-gray-400 text-sm">
                www.novahaus.com
              </span>
            </div>
          )}

          {/* Team Members Grid */}
          <div className="relative z-10 mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 pt-8">
            {members.map((member, index) => (
              <a
                href={member.href || "#"}
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-xl bg-[#1e293b]/40 backdrop-blur-xl border border-white/10 p-8 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "white",
                }}
              >
                {/* Background wave animation */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t from-[#34a0a4]/40 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />

                {/* Member Image with mask and border animation */}
                <div
                  className="relative z-10 h-40 w-40 overflow-hidden rounded-full border-4 border-white/10 bg-black/20 transition-all duration-500 ease-out group-hover:border-[#34a0a4] group-hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                <h3 className="relative z-10 mt-6 text-2xl font-bold text-white tracking-wide">
                  {member.name}
                </h3>
                <p className="relative z-10 text-md text-[#ead7c7] font-medium mt-1 uppercase tracking-widest text-xs">
                  {member.designation}
                </p>

                {/* Social Links for individual members */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-6 flex gap-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    {member.socialLinks.map((link, linkIndex) => (
                      <div
                        key={linkIndex}
                        onClick={(e) => {
                          e.preventDefault(); // Stop click from propagating up to the parent anchor
                          window.open(link.href, "_blank");
                        }}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <link.icon className="h-5 w-5" />
                      </div>
                    ))}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";
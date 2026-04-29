"use client";

import { StickyFeatureSection, StickyFeature } from "@/components/ui/sticky-scroll-cards-section"

const LANDLORD_PHASES: StickyFeature[] = [
  {
    prefix: "01",
    title: "专业的物业管理",
    description:
      "我们专门管理双威 (Sunway) 和梳邦 (Subang) 附近的学生住宿，提供高端、省心的体验。我们的综合服务包括优质租客匹配、物业维护和新单位查收。",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
  {
    prefix: "02",
    title: "房东租金保障计划",
    description:
      "我们的租金保障计划可确保租金按时到账，让您的租赁收入高枕无忧。​",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-stone-50",
    textColor: "text-gray-600"
  },
  {
    prefix: "03",
    title: "室内设计与维护",
    description:
      "我们通过高端室内设计、持续的单位维护以及针对新房源的缺陷检查，来帮助您的物业发挥最大潜力。",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
  {
    prefix: "04",
    title: "可靠且透明的服务",
    description:
      "在我们这里，您将体验到快速、可靠且透明的服务，确保您的物业得到良好维护，您的租客也能感到满意。",
    imageUrl: "/images/rts.jpg",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
]

const TENANT_PHASES: StickyFeature[] = [
  {
    prefix: "01",
    title: "便捷的学生宿舍",
    description:
      "我们提供家具齐全、室内设计高端的单位，以确保住宿的舒适、安全和便利。我们的宿舍致力于营造一种如家般的居住体验，助力学生顺利完成学业。",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
  {
    prefix: "02",
    title: "免费去往学校的接驳车",
    description:
      "租客可以享受去往学校的免费校车服务（周末除外），让日常通勤变得轻松便捷。",
    imageUrl: "/images/freeshuttle.jpg",
    bgColor: "bg-stone-50",
    textColor: "text-gray-600"
  },
  {
    prefix: "03",
    title: "快速透明的办理流程",
    description:
      "从入住咨询到拎包入住，我们会确保流程的便捷高效，一切条款都沟通清晰。",
    imageUrl: "/images/fast.jpg",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
  {
    prefix: "04",
    title: "为留学生量身定制的支持",
    description:
      "我们的团队竭诚为广大学生找到最完美的住处，并同时提供相关的建议和保障，保证每一位同学的租房体验舒适无压力。",
    imageUrl: "/images/support.jpg",
    bgColor: "bg-white",
    textColor: "text-gray-600"
  },
]

export const WhyChooseUsZh = () => {
  return (
    <div className="flex flex-col">
      <StickyFeatureSection 
        title={<>为何选择我们: <span className="text-[#34a0a4]">房东篇</span></>}
        subtitle="NovaHaus 物业管理在此为您提供无忧的托管方案。马上探索我们的完整服务，让你的房屋出租过程变得无比顺利。"
        features={LANDLORD_PHASES}
      />
      <div className="h-20 bg-[#ead7c7]" /> {/* Spacer between sections */}
      <StickyFeatureSection 
        title={<>为何选择我们: <span className="text-[#34a0a4]">租客篇</span></>}
        subtitle="我们专注于确保我们的学生拥有一个舒适且保障全面的理想住处。在此抛开烦恼，专注于学业吧，居住体验请放心地交给我们。"
        features={TENANT_PHASES}
      />
    </div>
  )
}

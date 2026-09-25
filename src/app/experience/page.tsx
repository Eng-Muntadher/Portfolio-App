import AnimationWrapper from "@/app/_components/AnimationWrapper";
import SectionHeader from "@/app/_components/SectionHeader";
import { Metadata } from "next";
import { BriefcaseBusiness, CalendarRange, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
};

const experienceItems = [
  "Refactored and maintained the company’s HR management system.",
  "Integrated APIs with Odoo’s cloud ERP services to sync employee and business data between systems.",
  "Improved application performance through refactoring and optimization.",
  "Shipped new features and UI/UX improvements to enhance the overall app experience.",
  "Also worked on the company’s CRM application, fixing and improving UI/UX and updating functionalities across the app.",
];

function ExperiencePage() {
  return (
    <>
      <SectionHeader
        text="My"
        highlight="Experience"
        paragraphText="A snapshot of my professional work and impact"
        addedClasses="text-6xl mb-10 max-lg:text-5xl max-md:text-4xl"
      />

      <div className="max-w-5xl mx-auto pb-4">
        <AnimationWrapper
          as="article"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[1rem] border border-(--border-color) bg-(--custom-bg-2) p-8 shadow-xl delay max-md:p-6"
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-(--orange-text)" />

          <div className="pl-5">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-(--border-color) pb-5">
              <div>
                <div className="mb-3 flex items-center gap-2 text-(--orange-text)">
                  <BriefcaseBusiness aria-hidden="true" size={18} />
                  <span className="text-sm font-medium uppercase tracking-[0.12em]">
                    Professional Role
                  </span>
                </div>

                <h2 className="text-3xl text-(--text-color) max-md:text-2xl">
                  Frontend Developer <span className="text-(--orange-text)">— Noor Al Nibras</span>
                </h2>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-(--border-color) bg-(--gray-bg) px-4 py-2 text-sm text-(--text-color-secondary)">
                <CalendarRange aria-hidden="true" size={16} className="text-(--orange-text)" />
                August 2026 – Present
              </div>
            </div>

            <div className="mb-6 flex items-center gap-3 text-(--gray-text)">
              <Building2 aria-hidden="true" size={18} className="text-(--orange-text)" />
              <span className="text-base">Noor Al Nibras</span>
            </div>

            <ul className="space-y-4">
              {experienceItems.map((item, index) => (
                <AnimationWrapper
                  as="li"
                  key={item}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex gap-3 text-(--text-color-secondary)"
                >
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-(--orange-text)" />
                  <span className="text-lg leading-relaxed max-md:text-base">{item}</span>
                </AnimationWrapper>
              ))}
            </ul>
          </div>
        </AnimationWrapper>
      </div>
    </>
  );
}

export default ExperiencePage;

import MiniLesson from "./MiniLesson";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Playground() {
  return (
    <section id="playground" className="section relative overflow-hidden bg-ink text-cream">
      <div aria-hidden className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#FBF5EA_1.2px,transparent_1.2px)] [background-size:22px_22px]" />
      <div className="container-site relative">
        <SectionHeader
          tone="dark"
          index="02"
          eyebrow="Playground"
          title={
            <>
              Don&apos;t take my word for it. <span className="text-sun">Play a lesson.</span>
            </>
          }
          aside="Three real-life situations, thirty seconds. Then flip to the notes and see the design decisions working behind each screen."
        />
        <div className="mt-12 text-ink">
          <MiniLesson />
        </div>
      </div>
    </section>
  );
}

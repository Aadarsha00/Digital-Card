import { CheckFat } from "@phosphor-icons/react/dist/ssr";
import { SectionLabel, SectionTitle, SectionSub } from "@/components/ui/SectionHeading";
import clsx from "clsx";

interface DiffBullet {
  title: string;
  description: string;
}

const BULLETS: DiffBullet[] = [
  {
    title: "Identity + Links + Contact saving",
    description:
      "Most tools do one. bitsfolio.page does all three in a single, unified experience.",
  },
  {
    title: "Built for real contact exchange",
    description:
      "Linktree is for clicks. bitsfolio.page is for connections — visitors can save your number directly to their phone.",
  },
  {
    title: "Free, fast, zero learning curve",
    description:
      "No clunky templates, no paywalled basics. Open it, build it, share it — done.",
  },
];

type TagStatus = "has" | "no";

interface CompetitorRow {
  name: string;
  active?: boolean;
  tags: { label: string; status: TagStatus }[];
}

const COMPETITORS: CompetitorRow[] = [
  {
    name: "🟢 bitsfolio.page",
    active: true,
    tags: [
      { label: "Identity", status: "has" },
      { label: "Links", status: "has" },
      { label: "Contact", status: "has" },
    ],
  },
  {
    name: "Linktree",
    tags: [
      { label: "Identity", status: "no" },
      { label: "Links", status: "has" },
      { label: "Contact", status: "no" },
    ],
  },
  {
    name: "Digital biz card",
    tags: [
      { label: "Identity", status: "has" },
      { label: "Links", status: "no" },
      { label: "Contact", status: "has" },
    ],
  },
  {
    name: "vCard",
    tags: [
      { label: "Identity", status: "has" },
      { label: "Links", status: "no" },
      { label: "Contact", status: "has" },
    ],
  },
  {
    name: "Portfolio site",
    tags: [
      { label: "Identity", status: "has" },
      { label: "Links", status: "has" },
      { label: "Contact", status: "no" },
    ],
  },
];

function Tag({ label, status }: { label: string; status: TagStatus }) {
  return (
    <span
      className={clsx("rounded-full px-2.5 py-[3px] text-[0.7rem] font-bold", {
        "bg-lime/15 text-lime": status === "has",
        "bg-white/[0.06] text-white/30": status === "no",
      })}
    >
      {label}
    </span>
  );
}

export function ComparisonSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-5 md:px-10 py-20 max-w-6xl mx-auto fade-up">
      {/* Left — bullets */}
      <div>
        <SectionLabel>Why bitsfolio</SectionLabel>
        <SectionTitle>
          Not just a
          <br />
          link-in-bio tool.
        </SectionTitle>
        <SectionSub className="mb-2">
          We combined the best of three categories — and stripped away everything else.
        </SectionSub>

        <div className="mt-9 flex flex-col gap-5">
          {BULLETS.map(({ title, description }) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded-lg bg-lime flex-shrink-0 flex items-center justify-center mt-0.5">
                <CheckFat size={14} weight="fill" className="text-pitch" />
              </div>
              <div>
                <strong className="font-syne font-bold block mb-1">{title}</strong>
                <p className="text-sm text-[#666] leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — diff visual */}
      <div className="bg-pitch rounded-[28px] p-10 relative overflow-hidden diff-glow">
        <h4 className="font-syne font-bold text-white text-[0.9rem] mb-1">
          How bitsfolio stacks up
        </h4>
        <p className="text-[0.75rem] text-white/30 mb-5">
          Identity · Links · Contact saving · Free
        </p>

        <div className="flex flex-col gap-3">
          {COMPETITORS.map(({ name, active, tags }) => (
            <div
              key={name}
              className={clsx(
                "flex items-center gap-2.5 rounded-[14px] px-4 py-3.5 text-sm border",
                active
                  ? "bg-lime/[0.06] border-lime/20"
                  : "bg-white/[0.04] border-white/[0.06]"
              )}
            >
              <span
                className={clsx(
                  "text-[0.78rem] min-w-[110px]",
                  active ? "text-white font-semibold" : "text-white/45"
                )}
              >
                {name}
              </span>
              <div className="flex gap-1.5 ml-auto flex-wrap justify-end">
                {tags.map((tag) => (
                  <Tag key={tag.label} {...tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

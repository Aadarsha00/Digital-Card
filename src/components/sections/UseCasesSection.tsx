import { SectionLabel, SectionTitle } from "@/components/ui/SectionHeading";

interface UseCase {
  emoji: string;
  title: string;
  description: string;
}

const USE_CASES: UseCase[] = [
  {
    emoji: "🚀",
    title: "Founders & Developers",
    description:
      "Replace your fragmented online presence with one link that shows who you are, what you've built, and how to reach you.",
  },
  {
    emoji: "🎨",
    title: "Freelancers & Creators",
    description:
      "Link your portfolio, social channels, and booking page — and let clients contact you or save your number in one tap.",
  },
  {
    emoji: "🤝",
    title: "Event & Conference Networking",
    description:
      "Show the QR code instead of handing out a card. Attendees scan, save your contact, and you stay in touch forever.",
  },
  {
    emoji: "💼",
    title: "Sales Professionals",
    description:
      "Drop your bitsfolio link in every email signature and WhatsApp message. Never chase someone to save your number again.",
  },
  {
    emoji: "🎓",
    title: "Students & Job Seekers",
    description:
      "Put it in your resume and email. Recruiters get your LinkedIn, portfolio, GitHub, and contact — instantly.",
  },
  {
    emoji: "🛍️",
    title: "Small Business Owners",
    description:
      "Connect your Instagram, website, eSewa, and phone number. Customers reach you the way they prefer, every time.",
  },
];

function UseCaseCard({ emoji, title, description }: UseCase) {
  return (
    <div className="rounded-[20px] p-7 border-[1.5px] border-gray-light flex flex-col gap-3 transition-all duration-200 hover:border-lime-dim hover:-translate-y-0.5 group">
      <div className="text-[1.8rem] leading-none">{emoji}</div>
      <h3 className="font-syne font-bold text-base text-pitch">{title}</h3>
      <p className="text-sm text-[#666] leading-relaxed">{description}</p>
    </div>
  );
}

export function UseCasesSection() {
  return (
    <section id="usecases" className="px-5 md:px-10 pb-20 max-w-6xl mx-auto">
      <SectionLabel>Built for everyone</SectionLabel>
      <SectionTitle>Who uses bitsfolio?</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {USE_CASES.map((uc, i) => (
          <div
            key={uc.title}
            className="fade-up"
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
          >
            <UseCaseCard {...uc} />
          </div>
        ))}
      </div>
    </section>
  );
}

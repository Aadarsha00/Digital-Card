import {
  Phone,
  EnvelopeSimple,
  MapPin,
  XLogo,
  LinkedinLogo,
  GithubLogo,
  DownloadSimple,
} from "@phosphor-icons/react/dist/ssr";

interface SocialPillProps {
  icon: React.ReactNode;
  label: string;
}

function SocialPill({ icon, label }: SocialPillProps) {
  return (
    <div className="flex items-center gap-1.5 bg-off-white rounded-full px-3 py-1.5 text-xs font-semibold text-pitch">
      {icon}
      {label}
    </div>
  );
}

export function ProfileCardMockup() {
  return (
    <div className="w-[280px] sm:w-[300px] bg-white rounded-[28px] shadow-[0_40px_80px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05)] overflow-hidden animate-float">
      {/* Header */}
      <div className="bg-pitch px-6 pt-8 pb-12 text-center relative">
        <div className="card-header-bg absolute inset-0" />
        <div className="w-[72px] h-[72px] rounded-full bg-lime mx-auto mb-3 flex items-center justify-center font-syne font-extrabold text-2xl text-pitch relative z-10 border-[3px] border-white/20">
          AB
        </div>
        <div className="font-syne font-bold text-white text-lg relative z-10">
          Abiral Bhandari
        </div>
        <div className="text-white/45 text-xs mt-0.5 relative z-10">@abiral</div>
        <div className="inline-block bg-lime/15 text-lime rounded-full px-3 py-1 text-[0.72rem] font-semibold mt-2.5 relative z-10">
          Founder · Developer
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pb-6 -mt-5">
        <div className="bg-white rounded-[18px] p-5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
          {/* Contact rows */}
          {[
            {
              icon: <Phone size={16} weight="bold" />,
              iconBg: "bg-lime",
              label: "Phone",
              value: "+977 98XX XXXXXX",
            },
            {
              icon: <EnvelopeSimple size={16} weight="bold" />,
              iconBg: "bg-pitch text-white",
              label: "Email",
              value: "abiral@ctrlbits.com",
            },
            {
              icon: <MapPin size={16} weight="bold" />,
              iconBg: "bg-gray-light",
              label: "Location",
              value: "Kathmandu, Nepal",
            },
          ].map(({ icon, iconBg, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 py-2.5 border-b border-gray-light last:border-0"
            >
              <div
                className={`w-[34px] h-[34px] rounded-[10px] flex items-center justify-center flex-shrink-0 ${iconBg}`}
              >
                {icon}
              </div>
              <div>
                <div className="text-[0.7rem] text-muted">{label}</div>
                <div className="font-semibold text-[0.82rem] text-pitch">{value}</div>
              </div>
            </div>
          ))}

          {/* Socials */}
          <div className="flex gap-2 mt-4 flex-wrap">
            <SocialPill icon={<XLogo size={12} />} label="Twitter" />
            <SocialPill icon={<LinkedinLogo size={12} />} label="LinkedIn" />
            <SocialPill icon={<GithubLogo size={12} />} label="GitHub" />
          </div>

          {/* CTA */}
          <button className="w-full mt-4 bg-pitch text-white rounded-[14px] py-3.5 font-syne font-bold text-sm flex items-center justify-center gap-2 cursor-pointer hover:bg-[#222] transition-colors">
            <DownloadSimple size={16} weight="bold" />
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
}

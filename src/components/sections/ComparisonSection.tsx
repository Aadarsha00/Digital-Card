import {
  CheckFat,
  User,
  LinkSimple,
  AddressBook,
  Palette,
  ChartBar,
  DeviceMobile,
  AppWindow,
  CurrencyDollar,
} from "@phosphor-icons/react/dist/ssr";
import {
  SectionLabel,
  SectionTitle,
  SectionSub,
} from "@/components/ui/SectionHeading";
import clsx from "clsx";

interface DiffBullet {
  title: string;
  description: string;
}

const FEATURES = [
  { label: "Identity", icon: <User size={18} weight="bold" /> },
  { label: "Links", icon: <LinkSimple size={18} weight="bold" /> },
  { label: "Contact saving", icon: <AddressBook size={18} weight="bold" /> },
  { label: "Customizable profile", icon: <Palette size={18} weight="bold" /> },
  { label: "Analytics", icon: <ChartBar size={18} weight="bold" /> },
  { label: "Mobile-first", icon: <DeviceMobile size={18} weight="bold" /> },
  { label: "No app required", icon: <AppWindow size={18} weight="bold" /> },
  { label: "Free", icon: <CurrencyDollar size={18} weight="bold" /> },
];

const COMPETITORS = [
  {
    name: "bitsfolio.page",
    active: true,
    features: [true, true, true, true, true, true, true, true],
  },
  {
    name: "Linktree",
    features: [false, true, false, false, false, true, true, false],
  },
  {
    name: "Digital biz card",
    features: [true, false, true, false, false, false, false, false],
  },
  {
    name: "vCard",
    features: [true, false, true, false, false, false, false, true],
  },
  {
    name: "Portfolio site",
    features: [true, true, false, true, false, true, true, false],
  },
];

export function ComparisonSection() {
  return (
    <div className="flex flex-col gap-20 items-center px-5 md:px-10 py-20 max-w-6xl mx-auto fade-up font-satoshi">
      {/* Bullets */}
      <div className="w-full  mx-auto">
        <SectionLabel>Why bitsfolio</SectionLabel>
        <div className="flex align-bottom justify-between w-4/5 gap-10">
          <SectionTitle className="w-1/2">
            Not just a
            <br />
            link-in-bio tool.
          </SectionTitle>
          <SectionSub className="w-2/3">
            We combined the best of three categories — and stripped away
            everything else.
          </SectionSub>
        </div>
      </div>

      {/* Table-based horizontal feature comparison */}
      <div className="w-full overflow-x-auto mt-10">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="text-left px-3 py-2 text-gray-700 font-bold bg-white/80 rounded-tl-xl">
                {""}
              </th>
              {FEATURES.map((feature) => (
                <th
                  key={feature.label}
                  className="px-3 py-2 text-center font-semibold text-gray-700 bg-white/80"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span>{feature.icon}</span>
                    <span className="text-xs whitespace-nowrap">
                      {feature.label}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPETITORS.map((comp, ridx) => (
              <tr
                key={comp.name}
                className={clsx(
                  comp.active ? "bg-lime-50" : "bg-white/70",
                  "rounded-full border border-gray-200",
                )}
              >
                <td
                  className={clsx(
                    "px-3 py-2 font-bold text-left whitespace-nowrap",
                    comp.active ? "text-lime-700" : "text-gray-800",
                  )}
                >
                  {comp.name.replace("bitsfolio.page", "bitsfolio")}
                </td>
                {comp.features.map(
                  (has: boolean | null | undefined, i: number) => (
                    <td key={i} className="text-center px-2">
                      {has === true ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-lime-500 text-white mx-auto">
                          <CheckFat size={15} weight="fill" />
                        </span>
                      ) : has === false ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-300 text-gray-500 mx-auto">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 6L14 14M14 6L6 14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400 mx-auto">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 10H15"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      )}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

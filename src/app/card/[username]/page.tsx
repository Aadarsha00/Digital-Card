import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCard } from "@/lib/getCard";
import ProfileCard from "@/components/profile-card";

interface PageProps {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { username } = await params;
  const card = await getCard(username);
  if (!card) return { title: "Card Not Found" };
  return {
    title: `${card.name} — ${card.company}`,
    description: `${card.role} at ${card.company}`,
  };
}

export default async function CardPage({ params }: PageProps) {
  const { username } = await params;
  const card = await getCard(username);

  if (!card) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-4 py-10">
      <ProfileCard card={card} />
      <p className="mt-6 text-xs text-slate-400 text-center">
        Powered by <span className="font-medium text-slate-500">{card.company}</span>
      </p>
    </main>
  );
}

import { CardData } from "@/types/card";
import cardsData from "@/data/cards.json";

export async function getCard(username: string): Promise<CardData | null> {
  const cards = cardsData as Record<string, CardData>;
  return cards[username.toLowerCase()] ?? null;
}
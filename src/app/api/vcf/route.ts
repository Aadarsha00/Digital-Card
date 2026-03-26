import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const card = await req.json();

  let photoLine = "";

  if (card.avatar) {
    const res = await fetch(card.avatar);
    const buffer = Buffer.from(await res.arrayBuffer());
    const base64 = buffer.toString("base64");

    photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${base64}`;
  }

  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${card.name}`,
    `N:${card.name.split(" ").slice(1).join(" ")};${card.name.split(" ")[0]};;;`,
    `TITLE:${card.role}`,
    `ORG:${card.company}`,
    `EMAIL:${card.email}`,
    `TEL;TYPE=CELL:${card.phone}`,
    photoLine,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n");

  return new NextResponse(vcf, {
    headers: {
      "Content-Type": "text/vcard",
      "Content-Disposition": `attachment; filename="${card.name}.vcf"`,
    },
  });
}
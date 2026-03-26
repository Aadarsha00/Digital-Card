import { NextResponse } from "next/server";

function foldLine(line: string): string {
  // VCF spec: fold lines at 75 chars, continuation lines start with a space
  const maxLen = 75;
  if (line.length <= maxLen) return line;

  let folded = "";
  let i = 0;
  folded += line.slice(0, maxLen);
  i = maxLen;
  while (i < line.length) {
    folded += "\r\n " + line.slice(i, i + 74);
    i += 74;
  }
  return folded;
}

function detectOS(req: Request): "ios" | "android" | "other" {
  const ua = req.headers.get("user-agent") || "";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  if (/android/i.test(ua)) return "android";
  return "other";
}

export async function POST(req: Request) {
  const card = await req.json();
  const os = detectOS(req);

  let photoLine = "";

  if (card.avatar) {
    try {
      const res = await fetch(card.avatar);
      const buffer = Buffer.from(await res.arrayBuffer());
      const base64 = buffer.toString("base64");

      if (os === "ios") {
        // iOS requires folded lines and VERSION:3.0 with proper PHOTO syntax
        photoLine = foldLine(`PHOTO;ENCODING=b;TYPE=JPEG:${base64}`);
      } else {
        // Android handles unfolded lines fine
        photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${base64}`;
      }
    } catch {
      // skip photo if fetch fails
    }
  }

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${card.name}`,
    `N:${card.name.split(" ").slice(1).join(" ")};${card.name.split(" ")[0]};;;`,
    `TITLE:${card.role}`,
    `ORG:${card.company}`,
    `EMAIL;TYPE=INTERNET,PREF:${card.email}`,
    `TEL;TYPE=CELL,VOICE:${card.phone}`,
    card.portfolio ? `URL:${card.portfolio}` : "",
    card.linkedin  ? `X-SOCIALPROFILE;TYPE=linkedin:${card.linkedin}` : "",
    card.github    ? `X-SOCIALPROFILE;TYPE=github:${card.github}` : "",
    card.instagram ? `X-SOCIALPROFILE;TYPE=instagram:${card.instagram}` : "",
    `NOTE:${card.role} at ${card.company}`,
    photoLine,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\r\n") + "\r\n";

  return new NextResponse(lines, {
    headers: {
      "Content-Type": "text/vcard;charset=utf-8",
      "Content-Disposition": `attachment; filename="${card.name.replace(/\s+/g, "_")}.vcf"`,
    },
  });
}
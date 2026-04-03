import { NextResponse } from "next/server";
import { marked } from "marked";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "profile-public.md");

  if (!fs.existsSync(filePath)) {
    return new NextResponse("Profile not found.", { status: 404 });
  }

  const markdown = fs.readFileSync(filePath, "utf-8");
  const content = await marked(markdown);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jurisdiction Profile | ClearSign</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    @page { size: letter; margin: 0.75in; }

    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .no-print { display: none !important; }
      a::after { content: none; }
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: #fff;
      color: #1a1a2e;
      font-size: 14px;
      line-height: 1.7;
      max-width: 800px;
      margin: 0 auto;
      padding: 48px 48px 64px;
    }

    /* Header bar */
    .doc-header {
      background: #0A1628;
      margin: -48px -48px 40px;
      padding: 28px 48px 24px;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .doc-header-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .logo-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .wordmark-block {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
    }
    .wordmark {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      letter-spacing: -0.3px;
    }
    .wordmark span { color: #00E87B; }
    .tagline {
      font-size: 8px;
      font-weight: 600;
      color: rgba(0,232,123,0.6);
      letter-spacing: 1.4px;
      text-transform: uppercase;
    }
    .doc-label {
      font-size: 10px;
      font-weight: 600;
      color: #00E87B;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
    .doc-header h1 {
      font-size: 30px;
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.5px;
      border: none;
      padding: 0;
      margin: 0 0 4px;
    }
    .doc-header .subtitle {
      color: rgba(255,255,255,0.45);
      font-size: 12px;
    }

    /* Print button */
    .print-bar {
      background: #f4f6f9;
      margin: -48px -48px 40px;
      padding: 12px 48px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      border-bottom: 1px solid #e5e7eb;
    }
    .print-btn {
      background: #0A1628;
      color: #fff;
      border: none;
      font-size: 13px;
      font-weight: 600;
      padding: 8px 18px;
      border-radius: 6px;
      cursor: pointer;
    }
    .print-hint {
      font-size: 12px;
      color: #6b7280;
    }

    /* Markdown content */
    h1 { font-size: 22px; font-weight: 700; color: #0A1628; margin: 32px 0 10px; padding-bottom: 8px; border-bottom: 2px solid #00E87B; }
    h2 { font-size: 16px; font-weight: 700; color: #0A1628; margin: 28px 0 8px; }
    h3 { font-size: 14px; font-weight: 600; color: #1B3A6B; margin: 20px 0 6px; }
    p { margin-bottom: 10px; color: #374151; }
    ul, ol { padding-left: 20px; margin-bottom: 12px; }
    li { margin-bottom: 4px; color: #374151; }
    strong { color: #0A1628; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
    th { background: #0A1628; color: #fff; text-align: left; padding: 8px 12px; font-weight: 600; font-size: 12px; }
    td { padding: 8px 12px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
    tr:nth-child(even) td { background: #f9fafb; }
    code { background: #f3f4f6; padding: 1px 5px; border-radius: 3px; font-size: 12px; font-family: monospace; }
    blockquote { border-left: 3px solid #00E87B; padding-left: 16px; color: #6b7280; margin: 16px 0; font-style: italic; }
    hr { border: none; border-top: 1px solid #e5e7eb; margin: 24px 0; }
  </style>
</head>
<body>
  <div class="doc-header">
    <div class="doc-header-top">
      <div class="logo-row">
        <svg width="28" height="32" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="pl"><rect x="0" y="0" width="20" height="46"/></clipPath>
            <clipPath id="pr"><rect x="20" y="0" width="20" height="46"/></clipPath>
          </defs>
          <path d="M20 2L4 9V23c0 9 7 16.5 16 19 9-2.5 16-10 16-19V9L20 2z" fill="#0A1628" clip-path="url(#pl)"/>
          <path d="M20 2L4 9V23c0 9 7 16.5 16 19 9-2.5 16-10 16-19V9L20 2z" fill="#1B3A6B" clip-path="url(#pr)"/>
          <path d="M20 2L4 9V23c0 9 7 16.5 16 19 9-2.5 16-10 16-19V9L20 2z" stroke="#00E87B" stroke-width="2.5" stroke-linejoin="round"/>
          <path d="M11 23l6 6 12-14" stroke="#00E87B" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="wordmark-block">
          <div class="wordmark">Clear<span>Sign</span></div>
          <div class="tagline">Agent-Powered Signage Permitting</div>
        </div>
      </div>
      <div class="doc-label">Jurisdiction Profile</div>
    </div>
  </div>

  <div class="print-bar no-print">
    <span class="print-hint">Save as PDF using your browser's print dialog</span>
    <button class="print-btn" onclick="window.print()">Save as PDF</button>
  </div>

  ${content}
</body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

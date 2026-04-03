"use client";

import { useState } from "react";

function ClearSignLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ClearSign">
      <defs>
        <clipPath id="shield-left"><rect x="0" y="0" width="20" height="46"/></clipPath>
        <clipPath id="shield-right"><rect x="20" y="0" width="20" height="46"/></clipPath>
      </defs>
      {/* Left half — dark */}
      <path d="M20 2L4 9V23c0 9 7 16.5 16 19 9-2.5 16-10 16-19V9L20 2z" fill="#0A1628" clipPath="url(#shield-left)"/>
      {/* Right half — lighter blue */}
      <path d="M20 2L4 9V23c0 9 7 16.5 16 19 9-2.5 16-10 16-19V9L20 2z" fill="#1B3A6B" clipPath="url(#shield-right)"/>
      {/* Outline */}
      <path d="M20 2L4 9V23c0 9 7 16.5 16 19 9-2.5 16-10 16-19V9L20 2z" stroke="#00E87B" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Check */}
      <path d="M11 23l6 6 12-14" stroke="#00E87B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Clean SVG icons — no emoji
function IconMap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
      <path d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setSubmitStatus("error");
      } else {
        setSubmitStatus("success");
        setFormData({ name: "", company: "", email: "", message: "" });
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A1628] text-white">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A1628]/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <ClearSignLogo className="w-8 h-8" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-tight">
                Clear<span className="text-[#00E87B]">Sign</span>
              </span>
              <span className="text-[#00E87B]/60 text-[9px] font-medium tracking-wide uppercase">Agent-Powered Signage Permitting</span>
            </div>
          </div>
          <a
            href="#contact"
            className="bg-[#00E87B] text-[#0A1628] font-semibold text-sm px-5 py-2 rounded hover:bg-[#00C96A] transition-colors"
          >
            Get a Free Permit Package
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-balance">
            Sign Permits.{" "}
            <span className="text-[#00E87B]">Done.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-4 text-balance">
            Other tools tell you the rules. We handle the permit.
          </p>
          <p className="text-base text-white/40 max-w-xl mx-auto mb-10">
            Powered by AI agents, not contractors.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#00E87B] text-[#0A1628] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#00C96A] transition-colors"
          >
            Get a Free Permit Package →
          </a>
          <p className="mt-4 text-white/30 text-sm">No pitch. No call required. We just do the work.</p>
        </div>
      </section>

      {/* Problem — white section to break up the dark/dark alternation */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0A1628]">
              Signage Permitting Is a{" "}
              <span className="text-[#00C96A]">Broken Process</span>
            </h2>
            <p className="text-[#0A1628]/50 text-lg max-w-2xl mx-auto">
              Every jurisdiction has different rules. Most franchise teams handle this manually, one city at a time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <IconMap />,
                title: "Different Rules Everywhere",
                desc: "Height limits, setback requirements, illumination restrictions, overlay districts — every city is different and the codes aren't organized for you.",
              },
              {
                icon: <IconClock />,
                title: "Permits Take Weeks",
                desc: "A single review cycle takes 2–6 weeks. A rejection sends you back to the start. Opening timelines slip. Revenue is delayed.",
              },
              {
                icon: <IconLayers />,
                title: "Manual & Repetitive",
                desc: "Most teams pull codes by hand, build packets in Word, and track status in spreadsheets. It doesn't scale.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#F4F6F9] border border-[#0A1628]/5 rounded-xl p-8"
              >
                <div className="text-[#00C96A] mb-5 w-10 h-10 flex items-center justify-center bg-[#00E87B]/10 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#0A1628]">{item.title}</h3>
                <p className="text-[#0A1628]/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How <span className="text-[#00E87B]">ClearSign</span> Works
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Give us a location. We handle everything from code research to a ready-to-submit packet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Jurisdiction Research",
                desc: "We pull the actual sign codes for your city and county — height limits, setback rules, illumination restrictions, overlay districts, and review timelines.",
              },
              {
                step: "02",
                title: "Compliance Check",
                desc: "We run your sign spec against local requirements. Pass/fail on every dimension, with plain-English fix notes if anything needs adjustment.",
              },
              {
                step: "03",
                title: "Permit Packet",
                desc: "A complete, ready-to-submit permit packet tailored to that jurisdiction. Forms filled, requirements met, nothing missing.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#0D1F3C] border border-white/5 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[#00E87B] font-black text-4xl leading-none opacity-40 select-none">
                    {item.step}
                  </span>
                  <div className="h-px flex-1 bg-[#00E87B]/20" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Output */}
      <section className="py-24 px-6 bg-[#0D1F3C]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See What You <span className="text-[#00E87B]">Actually Get</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Every permit package includes a full jurisdiction profile. Here&apos;s a real one — Denver, CO.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Mock document header */}
            <div className="bg-[#0A1628] px-8 py-6 flex items-center justify-between border-b border-white/10">
              <div>
                <p className="text-[#00E87B] text-xs font-semibold tracking-widest uppercase mb-1">Jurisdiction Profile</p>
                <p className="text-white text-2xl font-extrabold tracking-tight">Denver, CO</p>
                <p className="text-white/40 text-sm mt-0.5">Denver Community Planning and Development · Zoning Code Art. 10, §10.10.3</p>
              </div>
              <a
                href="/api/permit-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00E87B] text-[#0A1628] font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#00C96A] transition-colors whitespace-nowrap"
              >
                View Full Profile →
              </a>
            </div>
            {/* Mock data rows */}
            <div className="bg-[#071422] divide-y divide-white/5">
              {[
                { label: "Max Sign Height", value: "At roofline / parapet height", note: "No fixed ft limit — cannot exceed roofline or parapet; verify by zone", status: "warn" },
                { label: "Max Sign Area", value: "200 sq ft (primary frontage)", note: "1.5 sq ft per LF of frontage — 40 LF frontage = 60 sq ft", status: "clear" },
                { label: "Illumination", value: "Allowed — static only, no animation", note: null, status: "note" },
                { label: "Setback from ROW", value: "Verify by zone", note: null, status: "warn" },
                { label: "Overlay District", value: "Downtown Design Review required", note: null, status: "warn" },
                { label: "Review Timeline", value: "15–30 business days (estimated)", note: null, status: "warn" },
              ].map((row) => (
                <div key={row.label} className="flex items-start justify-between px-8 py-3.5">
                  <span className="text-white/50 text-sm">{row.label}</span>
                  <div className="flex items-start gap-3 text-right max-w-xs">
                    <div>
                      <span className="text-white text-sm font-medium">{row.value}</span>
                      {row.note && <p className="text-white/30 text-xs mt-0.5 leading-snug">{row.note}</p>}
                    </div>
                    <span className={`w-2 h-2 rounded-full shrink-0 mt-1 ${
                      row.status === "clear" ? "bg-[#00E87B]" :
                      row.status === "warn" ? "bg-amber-400" : "bg-white/30"
                    }`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#071422] px-8 py-4 border-t border-white/5">
              <p className="text-white/25 text-xs">Sample only — full profile includes compliance check, fee schedule, required forms, and submission instructions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 px-6 bg-[#071A0E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for <span className="text-[#00E87B]">Operators</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              If sign permits are part of your job, ClearSign was built for you.
            </p>
            <p className="text-white/30 text-sm max-w-xl mx-auto mt-3">
              We&apos;ve profiled jurisdictions across 14 states — Denver, Austin, Phoenix, Nashville, Atlanta, and more.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Franchise Development Teams",
                desc: "Managing multi-site rollouts across dozens of jurisdictions. Every opening has a sign permit. ClearSign handles the permit layer so your team can focus on the opening.",
                tag: "10–100 locations",
              },
              {
                title: "Sign Companies",
                desc: "Fabricators and installers handling multi-site programs. Permits are part of the job — ClearSign makes them faster, fewer rejections, and easier to quote.",
                tag: "Multi-site installs",
              },
              {
                title: "Franchise Consultants",
                desc: "Development firms managing rollouts for multiple brands simultaneously. ClearSign gives you a permit operation that scales with your client load.",
                tag: "Multi-brand programs",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0A1F0F] border border-white/5 rounded-xl p-8 flex flex-col"
              >
                <span className="inline-block bg-[#00E87B]/10 text-[#00E87B] text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                  {item.tag}
                </span>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, <span className="text-[#00E87B]">Transparent Pricing</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              No retainers required. Start with one location.
            </p>
            <p className="text-[#00E87B]/70 text-sm max-w-xl mx-auto mt-2">
              Complete permit packages — not just code lookups.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Per Location",
                price: "$250",
                unit: "per permit",
                desc: "Ideal for one-off projects or testing ClearSign on your first location.",
                features: [
                  "Full jurisdiction code profile",
                  "Compliance check on your spec",
                  "Ready-to-submit permit packet",
                  "Delivered within 5 business days",
                ],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Rollout Bundle",
                price: "$1,500",
                unit: "10 locations",
                desc: "Best for active rollouts. Lock in 10 permits at a discount.",
                features: [
                  "Everything in Per Location",
                  "Priority turnaround",
                  "Bulk discount (vs. $2,500 individual)",
                  "Dedicated point of contact",
                ],
                cta: "Get Started",
                highlight: true,
              },
              {
                name: "Monthly Retainer",
                price: "$2,000",
                unit: "per month",
                desc: "For teams with ongoing permit needs. Up to 20 locations per month.",
                features: [
                  "Everything in Rollout Bundle",
                  "Up to 20 locations/month",
                  "Ongoing compliance monitoring",
                  "Rollover unused locations",
                ],
                cta: "Contact Us",
                highlight: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-8 flex flex-col ${
                  tier.highlight
                    ? "bg-[#00E87B]/10 border-2 border-[#00E87B]"
                    : "bg-[#0D1F3C] border border-white/5"
                }`}
              >
                {tier.highlight && (
                  <span className="text-[#00E87B] text-xs font-bold uppercase tracking-widest mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold mb-1">{tier.name}</h3>
                <div className="mb-1">
                  <span className="text-4xl font-extrabold">{tier.price}</span>
                  <span className="text-white/40 text-sm ml-2">{tier.unit}</span>
                </div>
                <p className="text-white/50 text-sm mb-6">{tier.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="text-[#00E87B] mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`text-center font-semibold py-3 rounded-lg transition-colors ${
                    tier.highlight
                      ? "bg-[#00E87B] text-[#0A1628] hover:bg-[#00C96A]"
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-[#0D1F3C]" id="contact">
        <div className="max-w-2xl mx-auto">
          {submitStatus === "success" ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <svg viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-28">
                  <defs>
                    <clipPath id="success-shield-left"><rect x="0" y="0" width="20" height="46"/></clipPath>
                    <clipPath id="success-shield-right"><rect x="20" y="0" width="20" height="46"/></clipPath>
                    <style>{`@keyframes draw-check { to { stroke-dashoffset: 0; } }`}</style>
                  </defs>
                  <path d="M20 2L4 9V23c0 9 7 16.5 16 19 9-2.5 16-10 16-19V9L20 2z" fill="#0A1628" clipPath="url(#success-shield-left)"/>
                  <path d="M20 2L4 9V23c0 9 7 16.5 16 19 9-2.5 16-10 16-19V9L20 2z" fill="#1B3A6B" clipPath="url(#success-shield-right)"/>
                  <path d="M20 2L4 9V23c0 9 7 16.5 16 19 9-2.5 16-10 16-19V9L20 2z" stroke="#00E87B" strokeWidth="2.5" strokeLinejoin="round"/>
                  <path d="M11 23l6 6 12-14" stroke="#00E87B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="30" strokeDashoffset="30" style={{animation: "draw-check 0.4s ease 0.3s forwards"}}/>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We&apos;re on it.
              </h2>
              <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed">
                Request received. Expect our intake form in your inbox shortly.
              </p>
              <button
                onClick={() => setSubmitStatus(null)}
                className="mt-10 border border-white/20 text-white/60 hover:text-white hover:border-white/40 font-medium px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get a <span className="text-[#00E87B]">Free Permit Package</span>
                </h2>
                <p className="text-white/50 text-lg">
                  Tell us about a location where you need a permit. We&apos;ll run it through our system and deliver a complete package — no strings attached.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A1628] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E87B]/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Company</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0A1628] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E87B]/50 transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0A1628] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E87B]/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">Tell us about your project</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-[#0A1628] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E87B]/50 transition-colors resize-none"
                    placeholder="How many locations? What type of signage? Any specific cities or states?"
                  />
                </div>
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm text-center">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00E87B] text-[#0A1628] font-bold py-4 rounded-lg hover:bg-[#00C96A] transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending…" : "Request Free Permit Package →"}
                </button>
                <p className="text-center text-white/30 text-sm">
                  No sales call. No contract. We&apos;ll follow up within 1 business day.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ClearSignLogo className="w-6 h-6" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold">Clear<span className="text-[#00E87B]">Sign</span></span>
              <span className="text-[#00E87B]/60 text-[8px] font-medium tracking-wide uppercase">Agent-Powered Signage Permitting</span>
            </div>
          </div>

          <p className="text-white/30 text-sm">We get your signs approved. © 2026</p>
        </div>
      </footer>

    </main>
  );
}

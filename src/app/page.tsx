"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("ClearSign — Free Permit Package Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hello@clearsign.io?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#0A1628] text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A1628]/90 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#00E87B] font-bold text-xl tracking-tight">Clear</span>
            <span className="text-white font-bold text-xl tracking-tight">Sign</span>
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
          <div className="inline-flex items-center gap-2 bg-[#00E87B]/10 border border-[#00E87B]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00E87B] animate-pulse" />
            <span className="text-[#00E87B] text-sm font-medium">Agent-Powered Signage Permitting</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-balance">
            Stop Letting Sign Permits{" "}
            <span className="text-[#00E87B]">Slow Your Rollout</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 text-balance">
            ClearSign handles multi-jurisdiction signage permitting for franchise operators and sign companies. 
            Jurisdiction research, compliance checks, and ready-to-submit permit packets — delivered fast.
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

      {/* Problem */}
      <section className="py-24 px-6 bg-[#0D1F3C]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Signage Permitting Is a{" "}
              <span className="text-[#00E87B]">Broken Process</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Every jurisdiction has different rules. Most franchise teams handle this manually, one city at a time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📍",
                title: "Different Rules Everywhere",
                desc: "Height limits, setback requirements, illumination restrictions, overlay districts — every city is different and the codes aren't organized for you.",
              },
              {
                icon: "⏳",
                title: "Permits Take Weeks",
                desc: "A single review cycle takes 2–6 weeks. A rejection sends you back to the start. Opening timelines slip. Revenue is delayed.",
              },
              {
                icon: "🔁",
                title: "Manual & Repetitive",
                desc: "Most teams pull codes by hand, build packets in Word, and track status in spreadsheets. It doesn't scale.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0A1628] border border-white/5 rounded-xl p-8"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
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
              <div key={item.step} className="relative">
                <div className="text-[#00E87B]/20 font-black text-6xl absolute -top-4 -left-2 select-none">
                  {item.step}
                </div>
                <div className="relative bg-[#0D1F3C] border border-white/5 rounded-xl p-8 pt-10">
                  <h3 className="text-lg font-semibold mb-3 text-[#00E87B]">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 px-6 bg-[#0D1F3C]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for <span className="text-[#00E87B]">Operators</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              If sign permits are part of your job, ClearSign was built for you.
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
                className="bg-[#0A1628] border border-white/5 rounded-xl p-8 flex flex-col"
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
            <button
              type="submit"
              className="w-full bg-[#00E87B] text-[#0A1628] font-bold py-4 rounded-lg hover:bg-[#00C96A] transition-colors text-lg"
            >
              Request Free Permit Package →
            </button>
            <p className="text-center text-white/30 text-sm">
              No sales call. No contract. We&apos;ll follow up within 1 business day.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="text-[#00E87B] font-bold">Clear</span>
            <span className="text-white font-bold">Sign</span>
            <span className="text-white/30 text-sm ml-3">© 2026</span>
          </div>
          <p className="text-white/30 text-sm">We get your signs approved.</p>
        </div>
      </footer>
    </main>
  );
}

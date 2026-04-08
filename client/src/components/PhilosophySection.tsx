/*
 * DESIGN SYSTEM: Pharmaceutical Brutalism
 * Component: PhilosophySection
 * Style: Full-bleed warm stone background, asymmetric text layout,
 *        large italic display serif headline, editorial paragraph structure.
 */

export default function PhilosophySection() {
  const pillars = [
    {
      number: "01",
      title: "Single Origin",
      body: "Every product traces back to a named farm, a specific cultivar, and a documented harvest date. We believe provenance is not a marketing claim — it is a commitment to accountability.",
    },
    {
      number: "02",
      title: "Small Batch",
      body: "We process in quantities that allow for individual attention. No automation, no shortcuts. Each batch is reviewed by our head cultivator before it leaves the facility.",
    },
    {
      number: "03",
      title: "Third-Party Verified",
      body: "Every product is independently tested for potency, terpene profile, pesticides, and heavy metals. The certificate of analysis is printed on every label.",
    },
  ];

  return (
    <section
      id="philosophy"
      style={{ backgroundColor: "oklch(0.93 0.006 80)", borderTop: "1px solid oklch(0.87 0.008 75)" }}
    >
      {/* Top: Large editorial statement */}
      <div
        className="container py-20 lg:py-28"
        style={{ borderBottom: "1px solid oklch(0.87 0.008 75)" }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Label */}
          <div className="lg:col-span-3 lg:pt-3">
            <span
              className="label-text reveal"
              style={{ color: "oklch(0.27 0.045 140)" }}
            >
              Our Philosophy
            </span>
          </div>

          {/* Right: Statement */}
          <div className="lg:col-span-9">
            <h2
              className="font-display reveal"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "oklch(0.12 0.008 70)",
              }}
            >
              Cannabis is a plant with a{" "}
              <em style={{ fontStyle: "italic" }}>history</em> as rich as any
              botanical used in fine perfumery or traditional medicine.
              We treat it accordingly.
            </h2>
          </div>
        </div>
      </div>

      {/* Bottom: Three pillars */}
      <div className="container py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className="reveal py-8 lg:py-10"
              style={{
                borderRight: i < pillars.length - 1 ? "1px solid oklch(0.87 0.008 75)" : "none",
                paddingRight: i < pillars.length - 1 ? "2.5rem" : "0",
                paddingLeft: i > 0 ? "2.5rem" : "0",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="label-text"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "oklch(0.27 0.045 140)",
                    fontSize: "0.65rem",
                    marginTop: "0.1rem",
                  }}
                >
                  {pillar.number}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "oklch(0.12 0.008 70)",
                  }}
                >
                  {pillar.title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "oklch(0.38 0.01 70)",
                  fontWeight: 300,
                }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

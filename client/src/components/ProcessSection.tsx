/*
 * DESIGN SYSTEM: Pharmaceutical Brutalism
 * Component: ProcessSection
 * Style: Full-bleed image on left, numbered process steps on right.
 *        Thin rules between steps, monospaced step numbers.
 */

const steps = [
  {
    number: "01",
    title: "Source",
    body: "We work exclusively with licensed farms in Humboldt and Mendocino counties. Each farm is visited in person before any agreement is made. We look for soil health, cultivation practices, and the farmer's relationship to the land.",
  },
  {
    number: "02",
    title: "Harvest",
    body: "Flower is hand-trimmed at peak terpene expression, typically in the third week of October. Harvest dates are documented and printed on every product label.",
  },
  {
    number: "03",
    title: "Process",
    body: "We use cold-press extraction for tinctures and ice-water separation for concentrates. No solvents, no heat above 45°C. The goal is to preserve the complete terpene and cannabinoid profile of the original plant.",
  },
  {
    number: "04",
    title: "Verify",
    body: "Every batch is sent to an independent ISO-accredited laboratory. We test for potency, terpene profile, pesticides, heavy metals, and microbials. Results are published on our website and printed on the label.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="flex flex-col lg:flex-row"
      style={{ borderTop: "1px solid oklch(0.87 0.008 75)" }}
    >
      {/* Left: Full-bleed image */}
      <div
        className="lg:w-[45%] min-h-[50vh] lg:min-h-0 relative overflow-hidden"
        style={{ borderRight: "1px solid oklch(0.87 0.008 75)" }}
      >
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663527151709/CkLzZ3MGwrPXR8kw5Y8SUG/product-collection-Kpo3k7amB3XA9FKrhMWwMq.webp"
          alt="TerraGreenOak product collection"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
        {/* Thin border frame overlay */}
        <div
          className="absolute inset-4 pointer-events-none"
          style={{ border: "1px solid rgba(20,20,16,0.12)" }}
        />
      </div>

      {/* Right: Process steps */}
      <div className="lg:w-[55%] flex flex-col">
        {/* Header */}
        <div
          className="container py-12 lg:py-14"
          style={{ borderBottom: "1px solid oklch(0.87 0.008 75)" }}
        >
          <span
            className="label-text block mb-3 reveal"
            style={{ color: "oklch(0.27 0.045 140)" }}
          >
            From Field to Label
          </span>
          <h2
            className="font-display reveal"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "oklch(0.12 0.008 70)",
              lineHeight: 1.15,
            }}
          >
            The Process
          </h2>
        </div>

        {/* Steps */}
        <div className="flex-1">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="container py-8 reveal"
              style={{
                borderBottom: i < steps.length - 1 ? "1px solid oklch(0.87 0.008 75)" : "none",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="flex gap-6">
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    color: "oklch(0.27 0.045 140)",
                    marginTop: "0.35rem",
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </span>
                <div>
                  <h3
                    className="font-display mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "oklch(0.12 0.008 70)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8125rem",
                      lineHeight: 1.7,
                      color: "oklch(0.38 0.01 70)",
                      fontWeight: 300,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

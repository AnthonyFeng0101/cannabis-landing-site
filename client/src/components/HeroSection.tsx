/*
 * DESIGN SYSTEM: Pharmaceutical Brutalism
 * Component: HeroSection
 * Style: Full-viewport split — left: large product photo with thin border frame.
 *        Right: dense typographic composition with display serif + label-style info block.
 */

export default function HeroSection() {
  return (
    <section
      className="min-h-screen pt-14 flex flex-col lg:flex-row"
      style={{ backgroundColor: "oklch(0.984 0.003 90)" }}
    >
      {/* Left: Product Image */}
      <div
        className="relative lg:w-[55%] min-h-[60vh] lg:min-h-screen overflow-hidden"
        style={{ borderRight: "1px solid oklch(0.87 0.008 75)" }}
      >
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663527151709/CkLzZ3MGwrPXR8kw5Y8SUG/hero-botanical-VufaZxPfe4MgtHCqsuyrxS.webp"
          alt="Cannabis botanical specimen"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        {/* Thin border frame overlay */}
        <div
          className="absolute inset-4 pointer-events-none"
          style={{ border: "1px solid rgba(20,20,16,0.15)" }}
        />
        {/* Lot label overlay */}
        <div
          className="absolute bottom-8 left-8 right-8"
        >
          <div
            className="inline-block px-3 py-2"
            style={{
              backgroundColor: "rgba(250,250,247,0.92)",
              border: "1px solid oklch(0.87 0.008 75)",
            }}
          >
            <p className="label-text" style={{ color: "oklch(0.52 0.012 70)" }}>
              Specimen No. 001 · Cannabis Sativa · Humboldt County, CA
            </p>
          </div>
        </div>
      </div>

      {/* Right: Typographic Composition */}
      <div className="lg:w-[45%] flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0">
        {/* Category label */}
        <div className="mb-8">
          <span
            className="label-text"
            style={{ color: "oklch(0.27 0.045 140)" }}
          >
            Est. 2019 · Premium Cannabis
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-display mb-6 leading-none"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3.5rem, 7vw, 6rem)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "oklch(0.12 0.008 70)",
          }}
        >
          Cultivated
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 300 }}>with</em>
          <br />
          Intention.
        </h1>

        {/* Thin rule */}
        <hr className="rule mb-6" />

        {/* Product label block — Le Labo style */}
        <div className="mb-8 space-y-1">
          <p className="label-text" style={{ color: "oklch(0.52 0.012 70)" }}>
            Verdant Cannabis Co. · San Francisco, CA 94103
          </p>
          <p className="label-text" style={{ color: "oklch(0.52 0.012 70)" }}>
            Full-spectrum · Small-batch · Third-party tested
          </p>
          <p className="label-text" style={{ color: "oklch(0.52 0.012 70)" }}>
            Lot 2024-A · Prepared on date of order · For adult use only
          </p>
        </div>

        {/* Body text */}
        <p
          className="mb-10 leading-relaxed"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9375rem",
            color: "oklch(0.38 0.01 70)",
            maxWidth: "36ch",
            fontWeight: 300,
          }}
        >
          We source single-origin cannabis from small farms in Northern California,
          processed with the same care a perfumer gives to a rare botanical extract.
          Each product is a document of its origin.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#products"
            className="inline-block border border-foreground px-8 py-3.5 text-foreground hover:bg-foreground hover:text-background transition-all duration-200 text-center"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Explore Products
          </a>
          <a
            href="#philosophy"
            className="inline-block px-8 py-3.5 text-center link-underline"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "oklch(0.52 0.012 70)",
            }}
          >
            Our Philosophy
          </a>
        </div>

        {/* Bottom stat row */}
        <div
          className="mt-16 pt-8 grid grid-cols-3 gap-4"
          style={{ borderTop: "1px solid oklch(0.87 0.008 75)" }}
        >
          {[
            { value: "100%", label: "Organic" },
            { value: "3rd", label: "Party Tested" },
            { value: "12+", label: "Cultivars" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="font-display mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                  color: "oklch(0.12 0.008 70)",
                }}
              >
                {stat.value}
              </p>
              <p className="label-text">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

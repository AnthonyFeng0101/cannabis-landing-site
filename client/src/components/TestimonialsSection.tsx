/*
 * DESIGN SYSTEM: Pharmaceutical Brutalism
 * Component: TestimonialsSection
 * Style: Dark forest green background (inverted section), large italic display serif quotes,
 *        attribution in monospaced small caps. Editorial, not testimonial-widget.
 */

const testimonials = [
  {
    quote:
      "The Reserve Tincture is unlike anything I have encountered. The terpene profile is complex and the effect is precise. It reads like a well-edited sentence.",
    author: "M. Holloway",
    detail: "San Francisco, CA · Customer since 2021",
  },
  {
    quote:
      "TerraGreenOak treats cannabis the way a good wine merchant treats a Burgundy. The provenance matters. The label is honest. The product delivers.",
    author: "T. Nakamura",
    detail: "Portland, OR · Customer since 2022",
  },
  {
    quote:
      "I appreciate that the certificate of analysis is printed on the box. It is a small thing, but it signals a different kind of seriousness.",
    author: "R. Osei",
    detail: "Los Angeles, CA · Customer since 2020",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      style={{
        backgroundColor: "oklch(0.27 0.045 140)",
        borderTop: "1px solid oklch(0.87 0.008 75)",
      }}
    >
      {/* Header */}
      <div
        className="container py-12 lg:py-14"
        style={{ borderBottom: "1px solid rgba(250,250,247,0.15)" }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span
              className="label-text block mb-3 reveal"
              style={{ color: "rgba(250,250,247,0.5)" }}
            >
              Customer Accounts
            </span>
            <h2
              className="font-display reveal"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "oklch(0.984 0.003 90)",
                lineHeight: 1.1,
              }}
            >
              What Our Customers Say
            </h2>
          </div>
        </div>
      </div>

      {/* Testimonials grid */}
      <div className="container py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-0">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal py-8 lg:py-10"
              style={{
                borderRight: i < testimonials.length - 1 ? "1px solid rgba(250,250,247,0.15)" : "none",
                paddingRight: i < testimonials.length - 1 ? "2.5rem" : "0",
                paddingLeft: i > 0 ? "2.5rem" : "0",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              {/* Opening mark */}
              <p
                className="font-display mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "3rem",
                  lineHeight: 1,
                  color: "rgba(250,250,247,0.25)",
                  fontWeight: 300,
                }}
              >
                "
              </p>

              {/* Quote */}
              <blockquote
                className="font-display mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.125rem",
                  fontStyle: "italic",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "oklch(0.92 0.004 90)",
                }}
              >
                {t.quote}
              </blockquote>

              {/* Attribution */}
              <div>
                <p
                  className="label-text mb-0.5"
                  style={{ color: "oklch(0.984 0.003 90)" }}
                >
                  {t.author}
                </p>
                <p
                  className="label-text"
                  style={{ color: "rgba(250,250,247,0.45)", fontSize: "0.6rem" }}
                >
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

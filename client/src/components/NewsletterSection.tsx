/*
 * DESIGN SYSTEM: Pharmaceutical Brutalism
 * Component: NewsletterSection
 * Style: Full-width warm stone section, large editorial serif headline,
 *        minimal email input with 1px border, no rounded corners.
 */

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      style={{
        backgroundColor: "oklch(0.93 0.006 80)",
        borderTop: "1px solid oklch(0.87 0.008 75)",
        borderBottom: "1px solid oklch(0.87 0.008 75)",
      }}
    >
      <div className="container py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Label + Headline */}
          <div className="lg:col-span-6">
            <span
              className="label-text block mb-4 reveal"
              style={{ color: "oklch(0.27 0.045 140)" }}
            >
              Dispatch
            </span>
            <h2
              className="font-display reveal"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.25rem, 4vw, 3.75rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "oklch(0.12 0.008 70)",
                lineHeight: 1.1,
              }}
            >
              Notes on Cannabis,
              <br />
              <em style={{ fontStyle: "italic" }}>Cultivation & Culture.</em>
            </h2>
          </div>

          {/* Right: Form + Description */}
          <div className="lg:col-span-6 lg:pt-2">
            <p
              className="mb-8 reveal"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "oklch(0.38 0.01 70)",
                fontWeight: 300,
                maxWidth: "42ch",
              }}
            >
              Occasional dispatches on new harvests, the farms we work with,
              and the broader culture of thoughtful cannabis use. No promotions,
              no frequency commitments. Unsubscribe at any time.
            </p>

            {submitted ? (
              <div
                className="reveal"
                style={{
                  border: "1px solid oklch(0.27 0.045 140)",
                  padding: "1.25rem 1.5rem",
                }}
              >
                <p
                  className="label-text"
                  style={{ color: "oklch(0.27 0.045 140)" }}
                >
                  Received. You will hear from us when there is something worth saying.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="reveal">
                <div
                  className="flex"
                  style={{ border: "1px solid oklch(0.87 0.008 75)" }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-3.5 bg-transparent outline-none"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8125rem",
                      color: "oklch(0.12 0.008 70)",
                      borderRight: "1px solid oklch(0.87 0.008 75)",
                    }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-foreground text-background hover:bg-primary transition-colors duration-200"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      backgroundColor: "oklch(0.12 0.008 70)",
                      color: "oklch(0.984 0.003 90)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
                <p
                  className="mt-2 label-text"
                  style={{ color: "oklch(0.65 0.01 70)", fontSize: "0.6rem" }}
                >
                  By subscribing you agree to our Privacy Policy. For adult use only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

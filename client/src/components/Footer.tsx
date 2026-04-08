/*
 * DESIGN SYSTEM: Pharmaceutical Brutalism
 * Component: Footer
 * Style: Dark near-black background, monospaced label text, thin rules,
 *        Le Labo-style address and legal text. Minimal, precise.
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: ["Tinctures", "Extracts", "Pre-Rolls", "Sets & Bundles"],
    Company: ["Our Philosophy", "The Process", "Farm Partners", "Lab Results"],
    Support: ["FAQ", "Shipping & Returns", "Contact", "Store Locator"],
  };

  return (
    <footer
      style={{
        backgroundColor: "oklch(0.12 0.008 70)",
        color: "oklch(0.984 0.003 90)",
      }}
    >
      {/* Main footer content */}
      <div
        className="container py-16 lg:py-20"
        style={{ borderBottom: "1px solid rgba(250,250,247,0.1)" }}
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="mb-4">
            <div className="flex items-center gap-3">
              <img src="/logo-icon.png" alt="TerraGreenOak icon" className="w-auto brightness-0 invert" style={{ height: "24px" }} />
              <img src="/logo-wordmark.png" alt="TerraGreenOak" className="w-auto brightness-0 invert" style={{ height: "24px" }} />
            </div>
            </div>
            <p
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.8125rem",
                lineHeight: 1.7,
                color: "rgba(250,250,247,0.5)",
                fontWeight: 300,
                maxWidth: "32ch",
              }}
            >
              Single-origin cannabis products, cultivated with intention and
              documented with honesty. San Francisco, California.
            </p>

            {/* Address block — Le Labo style */}
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.08em",
                lineHeight: 1.8,
                color: "rgba(250,250,247,0.3)",
              }}
            >
              <p>TerraGreenOak Cannabis Co.</p>
              <p>1234 Valencia Street</p>
              <p>San Francisco, CA 94110</p>
              <p>James@TerraGreenOak.com</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-2">
              <p
                className="mb-5"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(250,250,247,0.4)",
                }}
              >
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="link-underline"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8125rem",
                        color: "rgba(250,250,247,0.65)",
                        fontWeight: 300,
                        textDecoration: "none",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Age verification notice */}
          <div className="lg:col-span-2">
            <p
              className="mb-5"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(250,250,247,0.4)",
              }}
            >
              Notice
            </p>
            <div
              style={{
                border: "1px solid rgba(250,250,247,0.15)",
                padding: "1rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.06em",
                  lineHeight: 1.8,
                  color: "rgba(250,250,247,0.35)",
                }}
              >
                For adult use only.
                <br />
                Must be 21+ to purchase.
                <br />
                Available where legal.
                <br />
                Keep out of reach of children.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container py-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              color: "rgba(250,250,247,0.25)",
            }}
          >
            © {currentYear} TerraGreenOak Cannabis Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                  color: "rgba(250,250,247,0.25)",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

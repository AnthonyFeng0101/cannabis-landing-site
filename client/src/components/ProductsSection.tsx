/*
 * DESIGN SYSTEM: Pharmaceutical Brutalism
 * Component: ProductsSection
 * Style: Product cards with 1px border frames, Le Labo-style lot/batch detail lines,
 *        hover reveals green border. Asymmetric grid layout.
 */

import { useState } from "react";

const products = [
  {
    id: "001",
    name: "Reserve Tincture",
    variant: "Full Spectrum · 1000mg CBD",
    lot: "LOT 2024-A · Humboldt County, CA · 22.4% THC",
    price: "$88",
    category: "Tinctures",
    description:
      "Cold-pressed from single-origin flower. Notes of pine resin, black pepper, and fresh earth. Prepared in small batches of 200 units.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663527151709/CkLzZ3MGwrPXR8kw5Y8SUG/hero-product-dfAEjqLgoHRV6ALXZki2UW.webp",
    badge: "Best Seller",
  },
  {
    id: "002",
    name: "Botanical Extract",
    variant: "Full Spectrum · 1g",
    lot: "LOT 2024-B · Mendocino County, CA · 18.7% THC",
    price: "$62",
    category: "Extracts",
    description:
      "A concentrated botanical extract from our Mendocino harvest. Earthy, resinous, with a long-lasting profile suited for evening use.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663527151709/CkLzZ3MGwrPXR8kw5Y8SUG/product-single-es8TiS3SA6CykzXXchQuCM.webp",
    badge: null,
  },
  {
    id: "003",
    name: "The Collection",
    variant: "Tincture · Extract · Pre-Roll",
    lot: "LOT 2024-C · Curated Selection · Multi-Origin",
    price: "$195",
    category: "Sets",
    description:
      "Three products. Three origins. One philosophy. Our introductory set for those who wish to understand the breadth of what single-origin cannabis can express.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663527151709/CkLzZ3MGwrPXR8kw5Y8SUG/product-collection-Kpo3k7amB3XA9FKrhMWwMq.webp",
    badge: "New",
  },
];

function ProductCard({ product, large = false }: { product: typeof products[0]; large?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="product-card group flex flex-col"
      style={{
        borderColor: hovered ? "oklch(0.27 0.045 140)" : "oklch(0.87 0.008 75)",
        transition: "border-color 200ms ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: large ? "4/3" : "1/1",
          backgroundColor: "oklch(0.93 0.006 80)",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {/* Badge */}
        {product.badge && (
          <div
            className="absolute top-4 left-4 px-2.5 py-1"
            style={{
              backgroundColor: "oklch(0.27 0.045 140)",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "oklch(0.984 0.003 90)",
            }}
          >
            {product.badge}
          </div>
        )}
        {/* Hover VIEW label */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <span
            className="px-4 py-2"
            style={{
              backgroundColor: "rgba(250,250,247,0.92)",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "oklch(0.12 0.008 70)",
              border: "1px solid oklch(0.87 0.008 75)",
            }}
          >
            View
          </span>
        </div>
      </div>

      {/* Info area */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category */}
        <span
          className="label-text mb-2 block"
          style={{ color: "oklch(0.27 0.045 140)" }}
        >
          {product.category} · No. {product.id}
        </span>

        {/* Name */}
        <h3
          className="font-display mb-1"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "1.375rem",
            fontWeight: 500,
            color: "oklch(0.12 0.008 70)",
          }}
        >
          {product.name}
        </h3>

        {/* Variant */}
        <p
          className="label-text mb-3"
          style={{ color: "oklch(0.52 0.012 70)" }}
        >
          {product.variant}
        </p>

        {/* Thin rule */}
        <hr className="rule mb-3" />

        {/* Lot line */}
        <p
          className="label-text mb-4"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            color: "oklch(0.65 0.01 70)",
            lineHeight: 1.6,
          }}
        >
          {product.lot}
        </p>

        {/* Description */}
        <p
          className="mb-5 flex-1"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8125rem",
            lineHeight: 1.65,
            color: "oklch(0.38 0.01 70)",
            fontWeight: 300,
          }}
        >
          {product.description}
        </p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto">
          <span
            className="font-display"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 400,
              color: "oklch(0.12 0.008 70)",
            }}
          >
            {product.price}
          </span>
          <button
            className="border border-foreground px-5 py-2 hover:bg-foreground hover:text-background transition-all duration-200"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      style={{ borderTop: "1px solid oklch(0.87 0.008 75)" }}
    >
      {/* Section header */}
      <div
        className="container py-12 lg:py-16"
        style={{ borderBottom: "1px solid oklch(0.87 0.008 75)" }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span
              className="label-text block mb-3 reveal"
              style={{ color: "oklch(0.27 0.045 140)" }}
            >
              Current Catalogue
            </span>
            <h2
              className="font-display reveal"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: "oklch(0.12 0.008 70)",
                lineHeight: 1.1,
              }}
            >
              Selected Formulations
            </h2>
          </div>
          <a
            href="#"
            className="label-text link-underline reveal self-start md:self-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "oklch(0.52 0.012 70)",
              paddingBottom: "0.25rem",
            }}
          >
            View All Products →
          </a>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "oklch(0.87 0.008 75)" }}>
          {products.map((product) => (
            <div key={product.id} style={{ backgroundColor: "oklch(0.984 0.003 90)" }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

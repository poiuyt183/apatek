"use client";

import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  client: string;
  author?: string;
  quote: string;
  image: string;
};

type SolutionCard = {
  id: string;
  name: string;
  description: string;
  image: string;
};

type Props = {
  solutions: SolutionCard[];
  testimonials: Testimonial[];
  tabSolutions: string;
  tabCustomers: string;
};

export default function ReferencesTabs({
  solutions,
  testimonials,
  tabSolutions,
  tabCustomers,
}: Props) {
  const [activeTab, setActiveTab] = useState<"solutions" | "customers">("solutions");

  return (
    <section className="ref-tabs-section">
      <div className="container">
        <div className="ref-tabs-nav" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "solutions"}
            className={`ref-tab${activeTab === "solutions" ? " ref-tab--active" : ""}`}
            onClick={() => setActiveTab("solutions")}
          >
            {tabSolutions}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "customers"}
            className={`ref-tab${activeTab === "customers" ? " ref-tab--active" : ""}`}
            onClick={() => setActiveTab("customers")}
          >
            {tabCustomers}
          </button>
        </div>

        {activeTab === "solutions" && (
          <div className="ref-solutions-grid" role="tabpanel">
            {solutions.map((item) => (
              <article key={item.id} className="ref-solution-card">
                <div className="ref-solution-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="ref-solution-body">
                  <h2 className="ref-solution-name">{item.name}</h2>
                  <p className="ref-solution-desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === "customers" && (
          <div className="ref-customers-grid" role="tabpanel">
            {testimonials.map((item) => (
              <blockquote key={item.client} className="ref-customer-card">
                <div className="ref-customer-image">
                  <Image
                    src={item.image}
                    alt={item.client}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="ref-customer-body">
                  <h2 className="ref-customer-name">{item.client}</h2>
                  <p className="ref-customer-quote">&ldquo;{item.quote}&rdquo;</p>
                  {item.author && (
                    <footer className="ref-customer-author">{item.author}</footer>
                  )}
                </div>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

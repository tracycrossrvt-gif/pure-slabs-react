import { pricing } from "../data/pricing";

function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <p className="section__eyebrow">General Pricing</p>

        <h2 className="section__title">
          A starting point before we talk details.
        </h2>

        <p className="section__text">
          Final pricing depends on wood species, size, finish, materials, and
          project complexity. These ranges are intended to help clients plan.
        </p>

        <div className="pricing__grid">
          {pricing.map((item) => (
            <article key={item.id} className="pricing-card">
              <h3 className="pricing-card__title">{item.item}</h3>
              <p className="pricing-card__range">{item.range}</p>
            </article>
          ))}
        </div>

        <div className="pricing__cta">
          <p>Want something you don’t see?</p>
          <a href="#quote" className="button button--dark">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
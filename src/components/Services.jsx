import { services } from "../data/services";

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services__header">
          <p className="section__eyebrow">What We Build</p>

          <h2 className="section__title">
            Custom work shaped around the material and the client.
          </h2>

          <p className="section__text">
            Every project begins with a conversation about the piece, the
            space, and how it needs to function.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <span className="service-card__number">
                {String(service.id).padStart(2, "0")}
              </span>

              <h3 className="service-card__title">{service.title}</h3>

              <p className="service-card__description">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
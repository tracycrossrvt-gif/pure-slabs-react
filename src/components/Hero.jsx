import { businessInfo } from "../data/businessInfo";

function Hero() {
  return (
    <header id="landing" className="hero">
      <div className="container hero__row">
        <div className="hero__content">
          <p className="hero__eyebrow">{businessInfo.tagline}</p>

          <h1 className="hero__title">
            {businessInfo.headline.split("\n").map((line) => (
              <span key={line} className="hero__title-line">
                {line}
              </span>
            ))}
          </h1>

          <p className="hero__text">{businessInfo.description}</p>

          <a href="#quote" className="button button--dark">
            Request a Quote
          </a>
        </div>

        <aside className="hero__offerings">
          <p className="hero__offerings-eyebrow">Currently Offering</p>

          <ul className="hero__offerings-list">
            <li>Coffee tables</li>
            <li>Console tables</li>
            <li>Desks</li>
            <li>Mantels</li>
            <li>Wall hangings</li>
            <li>Coat racks</li>
            <li>Small bar tops</li>
            <li>Bookshelves</li>
          </ul>

          <div className="hero__offerings-cta">
            <p>Want something you don’t see?</p>

            <a href="#quote">Request a custom quote →</a>
          </div>
        </aside>
      </div>
    </header>
  );
}

export default Hero;
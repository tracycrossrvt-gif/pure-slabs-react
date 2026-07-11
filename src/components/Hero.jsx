import { businessInfo } from "../data/businessInfo";

function Hero() {
  return (
    <header id="landing" className="hero">
      <div className="container hero__row">
        <div className="hero__content">
          <p className="hero__eyebrow">{businessInfo.tagline}</p>

          <h1 className="hero__title">{businessInfo.headline}</h1>

          <p className="hero__text">{businessInfo.description}</p>

          <div className="hero__buttons">
            <a href="#quote" className="button button--dark">
              Request a Quote
            </a>

            <a href="#gallery" className="button button--light">
              View Completed Work
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__wood-shape hero__wood-shape--one"></div>
          <div className="hero__wood-shape hero__wood-shape--two"></div>
          <div className="hero__wood-shape hero__wood-shape--three"></div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
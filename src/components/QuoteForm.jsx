import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

function QuoteForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Quote request:", formData);

    setIsSubmitted(true);
    setFormData(initialFormData);
  }

  return (
    <section id="quote" className="quote section">
      <div className="container quote__row">
        <div className="quote__content">
          <p className="section__eyebrow">Start a Project</p>

          <h2 className="section__title">
            Have an idea for a custom piece?
          </h2>

          <p className="section__text">
            Tell us what you have in mind. Rough dimensions, preferred wood,
            inspiration photos, timeline, and budget range are all helpful
            starting points.
          </p>

          <div className="quote__details">
            <p>
              <strong>What happens next?</strong>
            </p>

            <p>
              We’ll review the request, ask any follow-up questions, and discuss
              materials, timing, and an estimated quote before work begins.
            </p>
          </div>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form__row">
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="quote-form__row">
            <div className="form-group">
              <label htmlFor="phone">
                Phone <span className="form-label__optional">(optional)</span>
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 555-5555"
                autoComplete="tel"
              />
            </div>

            <div className="form-group">
              <label htmlFor="projectType">Project Type</label>

              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select one</option>
                <option value="custom-furniture">Custom Furniture</option>
                <option value="live-edge">Live Edge Piece</option>
                <option value="repurposed">Repurposed or Salvaged Build</option>
                <option value="other">Something Else</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="budget">
              Budget Range{" "}
              <span className="form-label__optional">(optional)</span>
            </label>

            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select a range</option>
              <option value="under-500">Under $500</option>
              <option value="500-1000">$500–$1,000</option>
              <option value="1000-2500">$1,000–$2,500</option>
              <option value="2500-plus">$2,500+</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details</label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the piece, size, material, style, timeline, and anything else we should know."
              rows="6"
              required
            />
          </div>

          <button type="submit" className="button quote-form__button">
            Send Quote Request
          </button>

          {isSubmitted && (
            <p className="quote-form__success" role="status">
              Your quote request has been recorded for this demo. Email delivery
              will be connected before launch.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default QuoteForm;
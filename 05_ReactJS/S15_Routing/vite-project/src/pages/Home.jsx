import React from "react";

function Home() {
  return (
    <div>
      <section className="bg-dark text-white py-2 text-center">
        <div className="container">
          <small className="text-uppercase letter-spacing-2">
            Launch special:
          </small>
          <span className="ms-2">
            Get 30% off all premium plans through June 2026.
          </span>
        </div>
      </section>

      <section className="bg-primary text-white py-5 hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-5 fw-bold">
                Build fast, scalable web experiences with confidence.
              </h1>
              <p className="lead mt-3">
                Empower your business with modern design, reliable tools, and
                launch-ready components crafted for growth.
              </p>
              <div className="mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <a
                  href="#contact"
                  className="btn btn-light btn-lg text-primary"
                >
                  Start a Project
                </a>
                <a href="#pricing" className="btn btn-outline-light btn-lg">
                  View Pricing
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="card bg-white text-dark shadow-lg border-0 hero-card p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="badge bg-primary rounded-pill py-2 px-3">
                    Trusted by fast teams
                  </div>
                  <span className="text-muted">1000+ projects delivered</span>
                </div>
                <div className="row text-center">
                  <div className="col-4 border-end">
                    <h3 className="mb-0">24/7</h3>
                    <p className="text-muted mb-0">Support</p>
                  </div>
                  <div className="col-4 border-end">
                    <h3 className="mb-0">98%</h3>
                    <p className="text-muted mb-0">Satisfaction</p>
                  </div>
                  <div className="col-4">
                    <h3 className="mb-0">3x</h3>
                    <p className="text-muted mb-0">Faster launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="features">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-secondary text-uppercase mb-3">
              Features
            </span>
            <h2 className="fw-bold">
              Everything you need for powerful digital products.
            </h2>
            <p className="text-muted">
              Design systems, analytics, collaboration, and launch support all
              in one platform.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="icon-circle bg-primary text-white mb-3">
                    <i className="bi bi-speedometer2 fs-4"></i>
                  </div>
                  <h5>Performance-first design</h5>
                  <p className="text-muted">
                    Fast loading pages, optimized workflows, and clean
                    interfaces for every visitor.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="icon-circle bg-primary text-white mb-3">
                    <i className="bi bi-cloud-arrow-up-fill fs-4"></i>
                  </div>
                  <h5>Cloud-ready deployment</h5>
                  <p className="text-muted">
                    Scale effortlessly with modern hosting and dependable build
                    pipelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="icon-circle bg-primary text-white mb-3">
                    <i className="bi bi-people-fill fs-4"></i>
                  </div>
                  <h5>Built for collaboration</h5>
                  <p className="text-muted">
                    Share progress, review assets, and move faster with your
                    team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5" id="services">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-4">
                <span className="badge bg-primary text-uppercase">
                  Services
                </span>
                <h2 className="fw-bold mt-3">
                  Custom services for every stage of your product lifecycle.
                </h2>
              </div>
              <p className="text-muted">
                From strategy to launch, our team helps you define goals, build
                modern UI, and ship exceptional digital experiences.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <h6 className="text-primary">Product Strategy</h6>
                    <p className="mb-0 text-muted">
                      Market-fit planning, user journeys, and roadmap
                      consulting.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <h6 className="text-primary">UX / UI Design</h6>
                    <p className="mb-0 text-muted">
                      Craft polished interfaces that convert and delight users.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <h6 className="text-primary">Web Development</h6>
                    <p className="mb-0 text-muted">
                      Modern React apps, responsive pages, and fast front-end
                      execution.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <h6 className="text-primary">Support & Growth</h6>
                    <p className="mb-0 text-muted">
                      Ongoing optimization, analytics, and roadmap support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="about">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80"
                alt="Team collaboration"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-lg-6">
              <span className="badge bg-secondary text-uppercase">
                About us
              </span>
              <h2 className="fw-bold mt-3">
                A trusted partner for ambitious digital teams.
              </h2>
              <p className="text-muted">
                We combine creative strategy, engineering expertise, and focused
                execution to deliver products that move businesses forward.
              </p>
              <ul className="list-unstyled text-muted mt-4">
                <li className="mb-2">
                  <strong>Rapid delivery:</strong> launch faster with a proven
                  process.
                </li>
                <li className="mb-2">
                  <strong>Clear communication:</strong> every milestone
                  delivered on time.
                </li>
                <li className="mb-2">
                  <strong>Results-focused:</strong> design and development
                  always aligned to goals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-5" id="pricing">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-white text-primary text-uppercase mb-3">
              Pricing
            </span>
            <h2 className="fw-bold">
              Choose the plan that fits your growth goals.
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-dark">
                <div className="card-body p-4">
                  <h5 className="card-title">Starter</h5>
                  <p className="display-6 fw-bold">$49</p>
                  <p className="text-muted">
                    Perfect for early projects and landing pages.
                  </p>
                  <ul className="list-unstyled mb-4 text-muted">
                    <li>Responsive design</li>
                    <li>3 pages included</li>
                    <li>Email support</li>
                  </ul>
                  <a href="#contact" className="btn btn-outline-primary w-100">
                    Choose Starter
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-dark active-plan p-4">
                <div className="card-body">
                  <h5 className="card-title">Growth</h5>
                  <p className="display-6 fw-bold">$129</p>
                  <p className="text-muted">
                    Our most popular plan for scaling teams.
                  </p>
                  <ul className="list-unstyled mb-4 text-muted">
                    <li>Up to 10 pages</li>
                    <li>Design system included</li>
                    <li>Priority support</li>
                  </ul>
                  <a
                    href="#contact"
                    className="btn btn-light w-100 text-primary"
                  >
                    Choose Growth
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-dark">
                <div className="card-body p-4">
                  <h5 className="card-title">Enterprise</h5>
                  <p className="display-6 fw-bold">$249</p>
                  <p className="text-muted">
                    Advanced solutions for established brands.
                  </p>
                  <ul className="list-unstyled mb-4 text-muted">
                    <li>Full product roadmap</li>
                    <li>Dedicated team</li>
                    <li>Custom integrations</li>
                  </ul>
                  <a href="#contact" className="btn btn-outline-primary w-100">
                    Choose Enterprise
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="testimonials">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-secondary text-uppercase mb-3">
              Testimonials
            </span>
            <h2 className="fw-bold">What our clients say.</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <p className="text-muted">
                  "The team delivered a beautiful product faster than expected
                  and kept communication crystal clear throughout the project."
                </p>
                <div className="mt-3">
                  <h6 className="mb-0">Aisha Khan</h6>
                  <small className="text-muted">Product Director</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <p className="text-muted">
                  "Our website now feels premium, and the onboarding process was
                  exceptionally smooth."
                </p>
                <div className="mt-3">
                  <h6 className="mb-0">Ravi Patel</h6>
                  <small className="text-muted">Startup Founder</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <p className="text-muted">
                  "Excellent strategic guidance and clean execution. The results
                  exceeded our expectations."
                </p>
                <div className="mt-3">
                  <h6 className="mb-0">Sara Lee</h6>
                  <small className="text-muted">Marketing Lead</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5" id="faq">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-primary text-uppercase mb-3">FAQ</span>
            <h2 className="fw-bold">Frequently asked questions.</h2>
          </div>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How long does a typical project take?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Most projects launch in 4–8 weeks, depending on scope and
                  complexity. We work with your team to define a clear timeline.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Do you provide support after launch?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Yes, we offer retained support packages for optimization,
                  monitoring, and feature expansion after launch.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Can you help with brand and UX strategy?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Absolutely. We can support brand direction, UX research,
                  design systems, and launch planning as part of our service
                  packages.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-5" id="contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="fw-bold">
                Ready to accelerate your next digital launch?
              </h2>
              <p className="lead text-white-75">
                Let’s plan your project, define your roadmap, and deliver an
                exceptional product together.
              </p>
            </div>
            <div className="col-lg-5">
              <form className="row g-3">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your name"
                    aria-label="Your name"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email address"
                    aria-label="Email address"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-light btn-lg w-100">
                    Request a Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

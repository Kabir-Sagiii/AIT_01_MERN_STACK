import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="profile-page">
      <section className="bg-danger text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bold">Anjali Sharma</h1>
              <p className="lead text-white-75 mb-4">
                Product designer and frontend developer crafting modern digital
                experiences for ambitious brands.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge bg-white text-primary p-3">
                  UI/UX Strategy
                </span>
                <span className="badge bg-white text-primary p-3">
                  React & Bootstrap
                </span>
                <Link to="/tl">
                  <span className="badge bg-white text-primary p-3">
                    Team Leadership
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 text-center mt-4 mt-lg-0">
              <div
                className="profile-avatar mx-auto bg-white rounded-circle shadow d-inline-flex align-items-center justify-content-center"
                style={{ width: "160px", height: "160px" }}
              >
                <span className="fs-1 text-primary">AS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold">About Me</h2>
              <p className="text-muted">
                I specialize in designing user-first interfaces and building
                responsive web applications that help teams launch products
                faster. My work spans product design, frontend development, and
                brand storytelling.
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">
                  <strong>Location:</strong> Mumbai, India
                </li>
                <li className="mb-2">
                  <strong>Experience:</strong> 7 years in digital product design
                </li>
                <li className="mb-2">
                  <strong>Availability:</strong> Open for freelance and contract
                  work
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-graph-up text-primary fs-3"></i>
                      <div className="ms-3">
                        <h6 className="mb-0">Growth-driven</h6>
                      </div>
                    </div>
                    <p className="mb-0 text-muted">
                      Design decisions that support measurable business goals
                      and user retention.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-phone text-primary fs-3"></i>
                      <div className="ms-3">
                        <h6 className="mb-0">Responsive-first</h6>
                      </div>
                    </div>
                    <p className="mb-0 text-muted">
                      Elegant experiences optimized for all screens from mobile
                      to desktop.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-people text-primary fs-3"></i>
                      <div className="ms-3">
                        <h6 className="mb-0">Collaborative</h6>
                      </div>
                    </div>
                    <p className="mb-0 text-muted">
                      Works closely with product, engineering, and marketing
                      teams to align goals and delivery.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-lightbulb text-primary fs-3"></i>
                      <div className="ms-3">
                        <h6 className="mb-0">Creative</h6>
                      </div>
                    </div>
                    <p className="mb-0 text-muted">
                      Brings fresh ideas and clear visual direction to each
                      project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-secondary text-uppercase mb-2">
              Expertise
            </span>
            <h2 className="fw-bold">Core Skills</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <h5>Product Design</h5>
                <p className="text-muted">
                  User flows, wireframes, prototypes, and polished visual
                  systems that scale with your product.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <h5>Frontend Development</h5>
                <p className="text-muted">
                  React, Bootstrap, and modern CSS for fast, maintainable
                  interfaces.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 p-4">
                <h5>Design Systems</h5>
                <p className="text-muted">
                  Reusable components and consistent branding across every user
                  touchpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold">Professional Experience</h2>
              <p className="text-muted">
                I have partnered with startups and enterprises to deliver
                intuitive digital products, from landing pages to full product
                launches.
              </p>
              <div className="timeline">
                <div className="timeline-item mb-4">
                  <h6 className="mb-1">Lead Product Designer</h6>
                  <small className="text-muted">2023 - Present</small>
                  <p className="mb-0 text-muted">
                    Steering cross-functional teams to build customer-centric
                    SaaS experiences.
                  </p>
                </div>
                <div className="timeline-item mb-4">
                  <h6 className="mb-1">Senior UI Engineer</h6>
                  <small className="text-muted">2020 - 2023</small>
                  <p className="mb-0 text-muted">
                    Built responsive, reusable UI systems in React and
                    Bootstrap.
                  </p>
                </div>
                <div className="timeline-item">
                  <h6 className="mb-1">Creative Designer</h6>
                  <small className="text-muted">2017 - 2020</small>
                  <p className="mb-0 text-muted">
                    Delivered branding and digital campaigns for fast-growing
                    companies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100 p-4 text-center">
                    <h3 className="display-6 mb-1">7+</h3>
                    <p className="mb-0 text-muted">Years Experience</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100 p-4 text-center">
                    <h3 className="display-6 mb-1">120+</h3>
                    <p className="mb-0 text-muted">Projects Delivered</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100 p-4 text-center">
                    <h3 className="display-6 mb-1">95%</h3>
                    <p className="mb-0 text-muted">Client Satisfaction</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border-0 shadow-sm h-100 p-4 text-center">
                    <h3 className="display-6 mb-1">20+</h3>
                    <p className="mb-0 text-muted">Collaborations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold">
                Let’s collaborate on your next product.
              </h2>
              <p className="text-muted">
                Whether you need a full launch or a refreshed brand presence, I
                can help bring your digital vision to life.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a
                href="mailto:anjali@example.com"
                className="btn btn-primary btn-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;

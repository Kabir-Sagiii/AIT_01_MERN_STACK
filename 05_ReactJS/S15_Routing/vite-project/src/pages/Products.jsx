import React from "react";

function Products() {
  return (
    <div className="products-page">
      <section className="bg-dark text-white py-5 product-hero">
        <div className="container bg-dark p-5">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-white text-primary mb-3">
                New collection
              </span>
              <h1 className="display-5 fw-bold">
                Powerful products that simplify your workflow.
              </h1>
              <p className="lead text-white-75 mb-4">
                Discover the tools built for teams who want performance,
                clarity, and fast iteration.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="#catalog"
                  className="btn btn-light btn-lg text-primary"
                >
                  Browse Products
                </a>
                <a href="#compare" className="btn btn-outline-light btn-lg">
                  Why choose us
                </a>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center">
              <div className="bg-white rounded-4 shadow-lg product-hero-card p-4">
                <h3 className="h4 text-primary">Best seller</h3>
                <p className="text-muted">
                  All-in-one toolkit for digital teams ready to ship faster.
                </p>
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <div>
                    <h4 className="mb-0">$99</h4>
                    <small className="text-muted">per month</small>
                  </div>
                  <button className="btn btn-primary">Get started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="features">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-secondary product-badge mb-2">
              Features
            </span>
            <h2 className="fw-bold">Designed for modern product teams.</h2>
            <p className="text-muted">
              From launch-ready components to analytics dashboards, every
              product is built to scale.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="feature-icon bg-primary text-white mb-3">
                  <i className="bi bi-speedometer2 fs-4"></i>
                </div>
                <h5>Performance-ready</h5>
                <p className="text-muted">
                  Fast interfaces with optimized assets and best-practice build
                  pipelines.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="feature-icon bg-primary text-white mb-3">
                  <i className="bi bi-grid-3x3-gap-fill fs-4"></i>
                </div>
                <h5>Component library</h5>
                <p className="text-muted">
                  Reusable UI building blocks for consistent product
                  experiences.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="feature-icon bg-primary text-white mb-3">
                  <i className="bi bi-bar-chart-line-fill fs-4"></i>
                </div>
                <h5>Actionable analytics</h5>
                <p className="text-muted">
                  Insights that help your team prioritize improvements and ship
                  faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5" id="catalog">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-secondary product-badge mb-2">
              Catalog
            </span>
            <h2 className="fw-bold">Featured products</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card product-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Launch Kit</h5>
                    <span className="badge bg-primary">Popular</span>
                  </div>
                  <p className="text-muted">
                    Everything you need to launch a polished site quickly.
                  </p>
                  <p className="display-6 fw-bold mb-3">$49</p>
                  <ul className="list-unstyled text-muted mb-4">
                    <li>Starter templates</li>
                    <li>Basic analytics</li>
                    <li>Email support</li>
                  </ul>
                  <button className="btn btn-outline-primary w-100">
                    View product
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card product-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Growth Suite</h5>
                    <span className="badge bg-primary">Best value</span>
                  </div>
                  <p className="text-muted">
                    A complete toolkit for expanding your user base and
                    improving conversions.
                  </p>
                  <p className="display-6 fw-bold mb-3">$129</p>
                  <ul className="list-unstyled text-muted mb-4">
                    <li>Advanced workflows</li>
                    <li>Conversion tracking</li>
                    <li>Priority support</li>
                  </ul>
                  <button className="btn btn-primary w-100">
                    View product
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card product-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="mb-0">Scale Dashboard</h5>
                    <span className="badge bg-primary">Enterprise</span>
                  </div>
                  <p className="text-muted">
                    Insights, controls, and integrations for large teams and
                    complex workflows.
                  </p>
                  <p className="display-6 fw-bold mb-3">$249</p>
                  <ul className="list-unstyled text-muted mb-4">
                    <li>Custom reports</li>
                    <li>Team permissions</li>
                    <li>Premium support</li>
                  </ul>
                  <button className="btn btn-outline-primary w-100">
                    View product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="compare">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="badge bg-primary product-badge mb-3">
                Benefits
              </span>
              <h2 className="fw-bold">Why customers choose these products.</h2>
              <p className="text-muted">
                High adoption, fast onboarding, and powerful integrations make
                these solutions a reliable choice for teams who need results.
              </p>
              <div className="row g-3 mt-4">
                <div className="col-6">
                  <div className="border rounded-4 p-3 text-center">
                    <h3 className="mb-1">99%</h3>
                    <p className="mb-0 text-muted">Uptime</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="border rounded-4 p-3 text-center">
                    <h3 className="mb-1">24/7</h3>
                    <p className="mb-0 text-muted">Support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm p-4">
                <h5 className="mb-3">Fast setup</h5>
                <p className="text-muted">
                  Get started in minutes, not days, with guided onboarding and
                  prebuilt templates.
                </p>
                <h5 className="mb-3">Flexible plans</h5>
                <p className="text-muted">
                  Choose the product that matches your team size, budget, and
                  launch goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold">
                Ready to choose the right product for your team?
              </h2>
              <p className="text-white-75">
                Speak with our specialists and see how these solutions can
                simplify your next launch.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a
                href="mailto:sales@example.com"
                className="btn btn-light btn-lg text-primary"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;

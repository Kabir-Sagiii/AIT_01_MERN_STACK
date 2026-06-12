import React from "react";

const teamLeaders = [
  {
    id: 1,
    name: "John Anderson",
    role: "Chief Executive Officer",
    image: "https://via.placeholder.com/300x300",
    description: "Leading the company with strategic vision and innovation.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Technical Director",
    image: "https://via.placeholder.com/300x300",
    description: "Driving technology initiatives and product excellence.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Operations Manager",
    image: "https://via.placeholder.com/300x300",
    description: "Ensuring seamless operations and team collaboration.",
  },
];

const TeamLeaders = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Leadership Team</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Meet the experienced professionals leading our organization toward
            growth, innovation, and success.
          </p>
        </div>

        {/* Team Cards */}
        <div className="row g-4">
          {teamLeaders.map((leader) => (
            <div className="col-md-6 col-lg-4" key={leader.id}>
              <div className="card border-0 shadow-sm h-100 text-center">
                <div className="card-body p-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="rounded-circle mb-3"
                    width="120"
                    height="120"
                    style={{ objectFit: "cover" }}
                  />

                  <h5 className="fw-bold mb-1">{leader.name}</h5>
                  <p className="text-primary small fw-semibold mb-3">
                    {leader.role}
                  </p>

                  <p className="text-muted small">{leader.description}</p>

                  {/* Social Links */}
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <a href="#" className="text-secondary">
                      <i className="bi bi-linkedin fs-5"></i>
                    </a>
                    <a href="#" className="text-secondary">
                      <i className="bi bi-twitter-x fs-5"></i>
                    </a>
                    <a href="#" className="text-secondary">
                      <i className="bi bi-envelope-fill fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLeaders;

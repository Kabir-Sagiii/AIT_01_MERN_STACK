import React from "react";

const ContactUs = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="fw-bold">Contact Us</h1>
            <p className="text-muted fs-5">
              We'd love to hear from you. Get in touch with our team for any
              questions, support, or business inquiries.
            </p>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <div className="row g-5">
                {/* Contact Form */}
                <div className="col-md-7">
                  <h4 className="mb-4">Send us a Message</h4>

                  <form>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter subject"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Write your message..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary px-4">
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="col-md-5">
                  <div className="bg-light rounded p-4 h-100">
                    <h4 className="mb-4">Contact Information</h4>

                    <div className="mb-4">
                      <h6 className="fw-semibold mb-1">Email</h6>
                      <p className="text-muted mb-0">support@yourcompany.com</p>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-semibold mb-1">Phone</h6>
                      <p className="text-muted mb-0">+1 (123) 456-7890</p>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-semibold mb-1">Address</h6>
                      <p className="text-muted mb-0">
                        123 Business Street
                        <br />
                        New York, NY 10001
                      </p>
                    </div>

                    <div>
                      <h6 className="fw-semibold mb-1">Business Hours</h6>
                      <p className="text-muted mb-0">
                        Monday - Friday
                        <br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Map Placeholder */}
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body p-0">
              <div
                className="bg-light d-flex align-items-center justify-content-center rounded"
                style={{ height: "250px" }}
              >
                <span className="text-muted">Google Map / Location Embed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

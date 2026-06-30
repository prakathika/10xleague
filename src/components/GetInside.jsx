import React, { useState } from 'react';
import './GetInside.css';

export default function GetInside() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    revenue: '',
    bottleneck: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.revenue) {
      alert("Please fill out all required fields.");
      return;
    }
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', revenue: '', bottleneck: '' });
    }, 1500);
  };

  return (
    <section id="get-inside" className="section get-inside-section">
      <div className="spotlight spotlight-bottom-right"></div>
      
      <div className="container get-inside-container">
        {/* Section Header */}
        <div className="get-inside-header">
          <span className="section-label">Get Inside</span>
          <h2 className="get-inside-heading gradient-text">
            Request Invitation to the Syndicate
          </h2>
          <p className="get-inside-subheading">
            Admissions to the 10x League are highly selective. Submit your details below, and our team will contact you to discuss alignment.
          </p>
        </div>

        {/* Form Container */}
        <div className="form-wrapper">
          {!submitted ? (
            <form className="application-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Business Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Monthly Revenue Selector */}
              <div className="form-group">
                <label htmlFor="revenue" className="form-label">Current Monthly Revenue *</label>
                <div className="select-wrapper">
                  <select
                    id="revenue"
                    name="revenue"
                    className="form-input form-select"
                    value={formData.revenue}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select your scale...</option>
                    <option value="under-10k">Under $10,000 / month</option>
                    <option value="10k-50k">$10,000 – $50,000 / month</option>
                    <option value="50k-200k">$50,000 – $200,000 / month</option>
                    <option value="over-200k">$200,000+ / month</option>
                  </select>
                  <div className="select-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottleneck Input */}
              <div className="form-group">
                <label htmlFor="bottleneck" className="form-label">Primary Scaling Bottleneck</label>
                <textarea
                  id="bottleneck"
                  name="bottleneck"
                  className="form-input form-textarea"
                  placeholder="Describe what is holding your business back from 10x scale..."
                  value={formData.bottleneck}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                className="btn-primary form-submit-btn" 
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success State */
            <div className="success-card">
              <div className="success-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="success-title">Application Submitted</h3>
              <p className="success-desc">
                Thank you for applying. An admissions partner will review your current scale and bottleneck details, and follow up via email within 24 hours.
              </p>
              <button className="btn-secondary success-reset-btn" onClick={() => setSubmitted(false)}>
                Submit another request
              </button>
            </div>
          )}
        </div>

        {/* Footer info */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} 10x League. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

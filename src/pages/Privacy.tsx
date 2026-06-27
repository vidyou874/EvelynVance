import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Privacy.css';

const Privacy: React.FC = () => {
  return (
    <div className="policy-page container animate-fade-in-up">
      <div className="policy-back-btn">
        <Link to="/" className="btn-back">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="card-glass policy-card">
        <div className="policy-header">
          <div className="policy-icon-box">
            <Shield size={32} />
          </div>
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-updated">Last Updated: June 2026</p>
        </div>

        <div className="policy-body">
          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when filling out the consultation booking form or subscribing to academic updates. This may include:
            </p>
            <ul>
              <li>Parent/Student Name</li>
              <li>Email Address</li>
              <li>Subject of interest and academic goals</li>
              <li>Any message content or class specifications provided</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>
              The information we collect is used strictly for organizing tutoring schedules, preparing student diagnostics, and managing communications. Specifically:
            </p>
            <ul>
              <li>To reply to inquiries and schedule trial sessions.</li>
              <li>To customize monthly learning packages and curricula.</li>
              <li>To send academic progress reports and optional session updates.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We value your academic and private data. We do not sell, rent, trade, or share any personal student or parent details with third-party marketers. Data is only accessible by Dr. Evelyn Vance for educational logistics.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Data Retention and Security</h2>
            <p>
              We implement industry-standard administrative and electronic security measures to safeguard your information from unauthorized access. Student notes and contact records are retained securely and can be removed upon written request.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, please reach out via email at: <strong>dr.vance@evelyncoaching.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

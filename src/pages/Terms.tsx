import React from 'react';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Privacy.css'; // Reuse CSS styles for consistent presentation

const Terms: React.FC = () => {
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
            <BookOpen size={32} />
          </div>
          <h1 className="policy-title">Terms of Service</h1>
          <p className="policy-updated">Last Updated: June 2026</p>
        </div>

        <div className="policy-body">
          <section className="policy-section">
            <h2>1. Tutoring Services and Packages</h2>
            <p>
              Dr. Evelyn Vance provides personalized science, math, and computer science coaching. Packages are customized using the session estimator. Booking a trial or monthly package reserves recurring slots on the weekly calendar.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Cancellation and Rescheduling Policy</h2>
            <p>
              We request that cancellations and scheduling updates be submitted at least 24 hours prior to the slot. Sessions cancelled or rescheduled within 24 hours of the start time will be billed at the full session rate.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Payment and Fees</h2>
            <p>
              Monthly tutoring statements are issued on the 1st of each month and are due within 7 business days. Payments can be settled via bank transfer, check, or online billing.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Intellectual Property</h2>
            <p>
              All curriculum worksheets, formulas sheets, diagnostic templates, and study blueprints provided during tuition sessions are the proprietary intellectual property of Dr. Evelyn Vance and are licensed solely for private study use.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Limitation of Liability</h2>
            <p>
              While we utilize evidence-based teaching methodologies to optimize student grades and test performance, academic outcomes depend on individual student participation, study habits, and effort. We do not guarantee specific scores or admissions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;

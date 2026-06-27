import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import './Contact.css';

interface FAQItem {
  question: string;
  answer: string;
}

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subjectFocus, setSubjectFocus] = useState('calculus');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Pre-fill form if redirected from estimator
  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    const freqParam = searchParams.get('freq');
    const lenParam = searchParams.get('len');

    if (subjectParam) {
      setSubjectFocus(subjectParam);
      
      let subjectLabel = '';
      if (subjectParam === 'calculus') subjectLabel = 'AP Calculus AB/BC';
      else if (subjectParam === 'physics') subjectLabel = 'College Physics & Mechanics';
      else if (subjectParam === 'cs') subjectLabel = 'Data Structures & Algorithms';
      else if (subjectParam === 'sat') subjectLabel = 'SAT/ACT Math Prep';
      else if (subjectParam === 'ib') subjectLabel = 'IB Mathematics (HL/SL)';

      const freqText = freqParam ? `${freqParam}x/week` : 'weekly';
      const lenText = lenParam ? `${lenParam} hr` : '1.5 hr';

      setMessage(`Hi Dr. Vance, I would like to book a monthly tuition package for ${subjectLabel} (${freqText} sessions, ${lenText} per session). Please let me know your available slots.`);
    }
  }, [searchParams]);

  const faqs: FAQItem[] = [
    {
      question: 'Do you offer a trial session?',
      answer: 'Yes. I offer a 45-minute online trial/consultation session for $50. This session is used to evaluate the student\'s conceptual foundation, review their syllabus, and draft a progress blueprint.'
    },
    {
      question: 'What is your cancellation and rescheduling policy?',
      answer: 'Sessions can be cancelled or rescheduled up to 24 hours in advance without charge. Cancellations within 24 hours of the slot are subject to the full session fee.'
    },
    {
      question: 'Do you coordinate with high school classroom teachers?',
      answer: 'If requested by the parents, I am happy to sync with the student\'s school teacher to align homework, study guidelines, and target weak areas before exams.'
    },
    {
      question: 'Are sessions online or in person?',
      answer: 'I offer highly interactive online tutoring via Zoom (using high-definition webcams, professional whiteboards, and digital note exports) as well as in-person sessions at my learning studio in San Francisco.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setSubjectFocus('calculus');
    setMessage('');
  };

  const handleToggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="contact-page animate-fade-in-up">
      {/* Background Glows */}
      <div className="glow-bg contact-glow-1" style={{ top: '20%', left: '5%', width: '350px', height: '350px', background: 'rgba(73, 187, 189, 0.12)' }}></div>
      <div className="glow-bg contact-glow-2" style={{ bottom: '20%', right: '10%', width: '380px', height: '380px', background: 'rgba(255, 145, 77, 0.08)' }}></div>

      {/* Header */}
      <section className="contact-header-section">
        <div className="container text-center">
          <h1 className="contact-title">Let's coordinate classes.</h1>
          <p className="contact-subtitle">
            Submit an inquiry to book a trial session, reserve weekly slots, or design custom monthly package blueprints.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-body-section">
        <div className="container contact-split">
          <div className="contact-info-side">
            <h2 className="info-title">Studio Details</h2>
            <p className="info-desc">Feel free to reach out via phone, email, or visit the Sutter Street learning studio.</p>
            
            <ul className="info-list">
              <li>
                <div className="info-icon-box"><MapPin size={20} /></div>
                <div>
                  <span className="info-lbl">STUDIO LOCATION</span>
                  <span className="info-val">450 Sutter St, Suite 1200, San Francisco, CA 94108</span>
                </div>
              </li>
              <li>
                <div className="info-icon-box"><Phone size={20} /></div>
                <div>
                  <span className="info-lbl">DIRECT LINE</span>
                  <span className="info-val">(415) 555-8901</span>
                </div>
              </li>
              <li>
                <div className="info-icon-box"><Mail size={20} /></div>
                <div>
                  <span className="info-lbl">EMAIL SUPPORT</span>
                  <span className="info-val">dr.vance@evelyncoaching.com</span>
                </div>
              </li>
            </ul>

            {/* Map Mockup */}
            <div className="map-mockup card-glass">
              <div className="map-pin-circle animate-pulse"></div>
              <span className="map-label">Union Square, San Francisco</span>
            </div>
          </div>

          <div className="contact-form-side card-glass">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-box">
                  <Send size={32} />
                </div>
                <h3 className="success-title">Inquiry Sent!</h3>
                <p className="success-desc">
                  Thank you for reaching out. Dr. Vance has received your student inquiry and will respond within 24 hours to schedule your consultation call.
                </p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-actual-form">
                <h3 className="form-box-title">Student Profile & Booking</h3>
                
                <div className="form-group">
                  <label htmlFor="contactName">Parent or Student Name *</label>
                  <input 
                    id="contactName"
                    type="text" 
                    placeholder="e.g. Sarah Jenkins" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactEmail">Email Address *</label>
                  <input 
                    id="contactEmail"
                    type="email" 
                    placeholder="e.g. sarah@example.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectTypeSelect">Primary Subject Focus</label>
                  <select 
                    id="projectTypeSelect"
                    value={subjectFocus} 
                    onChange={(e) => setSubjectFocus(e.target.value)}
                  >
                    <option value="calculus">AP Calculus AB/BC</option>
                    <option value="physics">College Physics & Mechanics</option>
                    <option value="cs">Data Structures & Algorithms</option>
                    <option value="sat">SAT/ACT Math Prep</option>
                    <option value="ib">IB Mathematics (HL/SL)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contactMessage">Message / Goals *</label>
                  <textarea 
                    id="contactMessage"
                    rows={5} 
                    placeholder="Describe student academic history, target exams, and any current struggles..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Submit Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="faq-section">
        <div className="container faq-inner">
          <div className="section-header text-center">
            <h2 className="section-title">Common Inquiries</h2>
            <p className="section-subtitle">Common queries about schedule bookings, trials, and billing.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`faq-item-card card-glass ${isOpen ? 'open' : ''}`}
                  onClick={() => handleToggleFaq(idx)}
                >
                  <div className="faq-question-row">
                    <h3 className="faq-question-text">{faq.question}</h3>
                    <div className="faq-arrow-box">
                      <ChevronDown size={18} className="faq-arrow" />
                    </div>
                  </div>
                  <div className="faq-answer-container">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

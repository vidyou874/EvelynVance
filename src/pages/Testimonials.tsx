import React, { useState } from 'react';
import { Star, Quote, User, GraduationCap, CheckCircle2 } from 'lucide-react';
import './Testimonials.css';

interface TestimonialItem {
  id: number;
  name: string;
  role: string; // e.g. Parent, Student, University Freshman
  company: string; // e.g. School name, College name
  rating: number;
  content: string;
  avatarLetter: string;
}

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Parent of Lowell HS Senior',
      company: 'Lowell High School',
      rating: 5,
      content: 'Dr. Vance transformed my daughter\'s attitude toward math. She was struggling with AP Calculus BC concepts and failing tests. After three months of coaching, she got a 5 on her AP exam and was accepted into Cornell Engineering. Evelyn\'s structured review sheets are absolute gold.',
      avatarLetter: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Princeton Freshman',
      company: 'Princeton University',
      rating: 5,
      content: 'I worked with Dr. Vance during my senior year for College Physics and SAT Math prep. Her sessions do not just help you pass; they teach you how to think. The interactive digital whiteboard whitepapers she sent after every session made studying for finals incredibly straightforward. Raised my math SAT by 130 points!',
      avatarLetter: 'MC'
    },
    {
      id: 3,
      name: 'Sophia Rodriguez',
      role: 'Parent of AP Physics Student',
      company: 'St. Ignatius College Prep',
      rating: 5,
      content: 'Evelyn is an extraordinary educator. She has an innate ability to explain complex kinematics and vector calculations without making students feel overwhelmed. My son went from dreading physics homework to scoring an A- in his class.',
      avatarLetter: 'SR'
    }
  ]);

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState(''); // e.g. Parent, Student
  const [company, setCompany] = useState(''); // e.g. School name
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) return;

    const newTestimonial: TestimonialItem = {
      id: Date.now(),
      name,
      role: role || 'Student',
      company: company || 'High School',
      rating,
      content,
      avatarLetter: name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmitted(true);

    // Reset fields
    setName('');
    setRole('');
    setCompany('');
    setRating(5);
    setContent('');

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="testimonials-page animate-fade-in-up">
      {/* Background Glows */}
      <div className="glow-bg test-glow-1" style={{ top: '15%', right: '5%', width: '300px', height: '300px', background: 'rgba(73, 187, 189, 0.12)' }}></div>
      <div className="glow-bg test-glow-2" style={{ bottom: '25%', left: '10%', width: '380px', height: '380px', background: 'rgba(255, 145, 77, 0.08)' }}></div>

      {/* Header */}
      <section className="testimonials-header-section">
        <div className="container text-center">
          <h1 className="testimonials-title">Success & Testimonial Stories</h1>
          <p className="testimonials-subtitle">
            Real outcomes from students who raised their scores, mastered difficult curricula, and secured university placements.
          </p>
        </div>
      </section>

      {/* Grid Display */}
      <section className="testimonials-list-section">
        <div className="container testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="card-glass testimonial-card-block animate-fade-in-up">
              <div className="quote-icon-container">
                <Quote size={28} className="quote-mark" />
              </div>
              
              <div className="rating-row">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < item.rating ? '#f59e0b' : 'transparent'} 
                    color={i < item.rating ? '#f59e0b' : 'var(--text-muted)'} 
                  />
                ))}
              </div>

              <p className="test-content">"{item.content}"</p>

              <div className="test-client-row">
                <div className="client-avatar">{item.avatarLetter}</div>
                <div className="client-info">
                  <span className="client-name">{item.name}</span>
                  <span className="client-position">{item.role}, {item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Write a Testimonial Form */}
      <section className="write-testimonial-section">
        <div className="container">
          <div className="card-glass write-testimonial-box">
            <div className="form-info-side">
              <h2 className="section-title">Submit a Testimony</h2>
              <p className="section-subtitle">
                Are you a current or past student/parent? Let me know how your learning timeline went. Your feedback helps refine future session material.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="form-fields-side">
              {submitted && (
                <div className="submission-alert">
                  <CheckCircle2 size={18} className="alert-success-icon" />
                  <span>Thank you! Your testimonial has been submitted successfully and added below.</span>
                </div>
              )}

              <div className="form-row-double">
                <div className="form-group">
                  <label htmlFor="clientName">Your Name *</label>
                  <div className="input-wrapper">
                    <User size={16} className="input-icon" />
                    <input 
                      id="clientName"
                      type="text" 
                      placeholder="e.g. Sarah Jenkins" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="ratingSelect">Rating *</label>
                  <select 
                    id="ratingSelect"
                    value={rating} 
                    onChange={(e) => setRating(Number(e.target.value))}
                  >
                    <option value={5}>5 Stars (Excellent)</option>
                    <option value={4}>4 Stars (Very Good)</option>
                    <option value={3}>3 Stars (Average)</option>
                    <option value={2}>2 Stars (Poor)</option>
                    <option value={1}>1 Star (Unacceptable)</option>
                  </select>
                </div>
              </div>

              <div className="form-row-double">
                <div className="form-group">
                  <label htmlFor="clientRole">Connection *</label>
                  <input 
                    id="clientRole"
                    type="text" 
                    placeholder="e.g. Parent, Student, Alum" 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)} 
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="clientCompany">School or College</label>
                  <div className="input-wrapper">
                    <GraduationCap size={16} className="input-icon" />
                    <input 
                      id="clientCompany"
                      type="text" 
                      placeholder="e.g. Lowell High School" 
                      value={company} 
                      onChange={(e) => setCompany(e.target.value)} 
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="clientReview">Your Testimony *</label>
                <textarea 
                  id="clientReview"
                  rows={4} 
                  placeholder="Share details of your physics, math, or computer science class collaboration..." 
                  value={content} 
                  onChange={(e) => setContent(e.target.value)} 
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

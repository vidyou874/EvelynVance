import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, BookOpen, Award, ArrowRight, Calendar, ChevronDown, Star
} from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Philosophy Cards
  const philosophyData = [
    {
      icon: <GraduationCap size={28} />,
      title: "Rigorous Foundations",
      desc: "We ditch rote memorization to focus on deep conceptual understanding. Students learn the 'why' behind the formulas, making advanced math and physics intuitive."
    },
    {
      icon: <BookOpen size={28} />,
      title: "Active Problem Solving",
      desc: "Sessions are interactive. Students tackle challenging problems under guidance, performing real-time error analysis to build critical cognitive habits."
    },
    {
      icon: <Award size={28} />,
      title: "Academic Stamina",
      desc: "Specialized coaching in exam strategies, time management, and anxiety reduction. Designed to help students perform peak-efficiency under exam pressure."
    }
  ];

  // FAQ Accordion
  const faqs = [
    {
      question: "What grades and levels do you coach?",
      answer: "I specialize in high school (AP, IB, A-Level) and college-level Mathematics, Physics, and Computer Science, alongside SAT/ACT Math prep."
    },
    {
      question: "Where do the tutoring sessions take place?",
      answer: "Sessions are held online via Zoom (equipped with interactive digital whiteboards) or in person at my private learning studio in San Francisco."
    },
    {
      question: "How do you track and report student progress?",
      answer: "Parents receive a digital summary report after every session details topics covered, homework performance, areas of friction, and target milestones."
    },
    {
      question: "Do you offer customizable coaching packages?",
      answer: "Yes. Using the Tuition Session Estimator on the Subjects page, you can customize session lengths and weekly frequencies to design a package that fits your goals."
    }
  ];

  const handleToggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Trigger underline draw animation on scroll entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-underline');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.underline-yellow');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page light-theme">
      {/* Glow backgrounds */}
      <div className="glow-bg home-glow-1" style={{ top: '10%', left: '5%', width: '400px', height: '400px', background: 'rgba(73, 187, 189, 0.12)' }}></div>
      <div className="glow-bg home-glow-2" style={{ top: '50%', right: '5%', width: '380px', height: '380px', background: 'rgba(255, 145, 77, 0.08)' }}></div>

      {/* 1. HERO SECTION */}
      <section className="hero-section container">
        <div className="hero-grid-split">
          <div className="hero-text-block animate-fade-in-up">
            <div className="hero-badge">
              <GraduationCap size={16} />
              <span>ELITE INDIVIDUAL TUITION</span>
            </div>
            <h1 className="hero-title">
              Unlocking mathematical and scientific <span className="underline-yellow">
                excellence.
                <svg className="svg-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M2 8 C 30 2, 70 2, 98 8" stroke="var(--accent-secondary)" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="hero-subtitle">
              Personalized private tutoring in AP Calculus, College Physics, and Advanced Computer Science. Grounded in rigorous concepts, active study habits, and exam confidence.
            </p>
          </div>

          <div className="hero-actions-row animate-fade-in-up">
            <Link to="/contact" className="btn btn-primary btn-cta">Schedule Consultation</Link>
            <Link to="/subjects" className="btn btn-secondary btn-cta">Explore Subjects</Link>
          </div>

          <div className="hero-visual-block animate-fade-in-up">
            <div className="tutor-portrait-wrapper">
              <div className="visual-bg-circle-outline"></div>
              {/* Overlapping offset card backing */}
              <div className="visual-accent-card" style={{ transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.02}px)` }}></div>
              
              {/* Tutor Portrait */}
              <div className="visual-circle-portrait">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Dr. Evelyn Vance" 
                  className="portrait-img"
                />
              </div>

              {/* Floating Widgets inspired by Figma design */}
              <div className="floating-widget-wrapper fw-1" style={{ transform: `translateY(${scrollY * -0.04}px)` }}>
                <div className="floating-widget">
                  <div className="fw-icon-box pink"><Award size={20} /></div>
                  <div>
                    <span className="fw-val">98% Success</span>
                    <span className="fw-lbl">Grade Improvement</span>
                  </div>
                </div>
              </div>

              <div className="floating-widget-wrapper fw-2" style={{ transform: `translateY(${scrollY * 0.03}px)` }}>
                <div className="floating-widget">
                  <div className="fw-icon-box teal"><Calendar size={20} /></div>
                  <div>
                    <span className="fw-val">10+ Years</span>
                    <span className="fw-lbl">Teaching Experience</span>
                  </div>
                </div>
              </div>

              <div className="floating-widget-wrapper fw-3" style={{ transform: `translateY(${scrollY * -0.02}px)` }}>
                <div className="floating-widget">
                  <div className="fw-icon-box yellow"><Star size={20} fill="#f59e0b" color="#f59e0b" /></div>
                  <div>
                    <span className="fw-val">AP & IB Specialist</span>
                    <span className="fw-lbl">Advanced Curriculum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="stats-section">
        <div className="container stats-inner-box card-glass">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">10+</h3>
              <p className="stat-label">Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">Grade Improvement</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">150+</h3>
              <p className="stat-label">Ivy League Admissions</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">5,000+</h3>
              <p className="stat-label">Hours Tutored</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METHODOLOGY SECTION */}
      <section className="methodology-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">How I help students succeed</h2>
            <p className="section-subtitle">
              A structured, evidence-based pedagogical approach designed to build long-term confidence and academic capability.
            </p>
          </div>

          <div className="philosophy-grid">
            {philosophyData.map((item, idx) => (
              <div key={idx} className="card-glass philosophy-card-item">
                <div className="philosophy-icon-container">{item.icon}</div>
                <h3 className="philosophy-card-title">{item.title}</h3>
                <p className="philosophy-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OVERVIEW SECTION */}
      <section className="overview-cta-section container">
        <div className="card-glass overview-cta-box">
          <div className="overview-text">
            <h2 className="cta-title">Looking for tailored study support?</h2>
            <p className="cta-desc">
              Whether you are preparing for AP Exams, tackling college physics problem sets, or aiming to raise your SAT Math scores, I provide individual, structured blueprints mapped to your syllabus.
            </p>
            <div className="overview-btn-row">
              <Link to="/about" className="btn btn-primary">Learn About Me <ArrowRight size={16} /></Link>
              <Link to="/subjects" className="btn btn-secondary">Explore Subjects</Link>
            </div>
          </div>
          <div className="overview-graphic-side">
            <div className="mini-roster card-glass">
              <h4 className="roster-title">Weekly Slots Available</h4>
              <div className="roster-item active">
                <span className="roster-day">Mon / Wed</span>
                <span className="roster-time">4:00 PM - 5:30 PM (AP Calc)</span>
                <span className="roster-status badge-status green">Booked</span>
              </div>
              <div className="roster-item active">
                <span className="roster-day">Tue / Thu</span>
                <span className="roster-time">5:00 PM - 6:30 PM (Physics)</span>
                <span className="roster-status badge-status green">Booked</span>
              </div>
              <div className="roster-item">
                <span className="roster-day">Friday Only</span>
                <span className="roster-time">3:30 PM - 5:00 PM (CS Prep)</span>
                <span className="roster-status badge-status teal">1 Slot Open</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4.5 TESTIMONIALS PREVIEW SECTION */}
      <section className="home-testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">What parents & students say</h2>
            <p className="section-subtitle">
              Real results and academic success stories from Lowell High, Princeton, Cornell, and local families.
            </p>
          </div>

          <div className="home-testimonials-grid">
            <div className="card-glass home-testimonial-card">
              <div className="rating-row">
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
              </div>
              <p className="testimonial-text">
                "Dr. Vance completely transformed my daughter's attitude toward mathematics. She went from struggling with AP Calculus BC to scoring a 5 on her AP exam and is now at Cornell Engineering!"
              </p>
              <div className="testimonial-author">
                <span className="author-name">Sarah J.</span>
                <span className="author-lbl">Parent of Lowell HS Senior</span>
              </div>
            </div>

            <div className="card-glass home-testimonial-card">
              <div className="rating-row">
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
              </div>
              <p className="testimonial-text">
                "Evelyn is an extraordinary physics tutor. She makes complex kinematics and vector calculations extremely simple. Raised my college physics final grade to an A!"
              </p>
              <div className="testimonial-author">
                <span className="author-name">Michael C.</span>
                <span className="author-lbl">Princeton University Student</span>
              </div>
            </div>

            <div className="card-glass home-testimonial-card">
              <div className="rating-row">
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
              </div>
              <p className="testimonial-text">
                "Her structured session review sheets and diagnostic tracking gave us complete clarity. The SAT Math prep raised my son's score by 130 points!"
              </p>
              <div className="testimonial-author">
                <span className="author-name">Sophia R.</span>
                <span className="author-lbl">Parent of SAT Student</span>
              </div>
            </div>
          </div>
          
          <div className="text-center testimonial-more-btn-row">
            <Link to="/testimonials" className="btn btn-secondary">Read All Testimonials</Link>
          </div>
        </div>
      </section>

      {/* 5. FAQs SECTION */}
      <section className="faq-section">
        <div className="container faq-inner">
          <div className="section-header text-center">
            <h2 className="section-title">Common Questions</h2>
            <p className="section-subtitle">Everything you need to know about setting up sessions and custom packages.</p>
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

      {/* 6. BOTTOM CTA SECTION */}
      <section className="bottom-cta-section">
        <div className="container">
          <div className="bottom-cta-card">
            <h2 className="cta-title">Ready to elevate your grades?</h2>
            <p className="cta-desc">
              Get in touch today to discuss your academic goals, structure a personalized study timeline, and reserve your weekly coaching slots.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Consultation Class <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

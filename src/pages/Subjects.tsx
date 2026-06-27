import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Compass, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import './Subjects.css';

interface SubjectItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  hourlyRate: number;
  timeEstimate: string;
  description: string;
  features: string[];
}

const Subjects: React.FC = () => {
  const subjectsList: SubjectItem[] = [
    {
      id: 'calculus',
      icon: <Compass size={28} />,
      title: 'AP Calculus AB/BC',
      hourlyRate: 110,
      timeEstimate: '1.5 hrs / session',
      description: 'Comprehensive preparation for the AP Exam. In-depth focus on limits, derivatives, integrals, and series expansions.',
      features: ['Syllabus-aligned weekly plans', 'Official AP classroom review sets', 'Full-length practice exams', 'Error analysis logs']
    },
    {
      id: 'physics',
      icon: <BookOpen size={28} />,
      title: 'College Physics & Mechanics',
      hourlyRate: 120,
      timeEstimate: '1.5 hrs / session',
      description: 'Mastering classical mechanics, electromagnetism, and thermodynamics. Ideal for engineering and pre-med majors.',
      features: ['Problem-set walkthroughs', 'Mathematical derivation notes', 'Vector calculus integration', 'Lab report review']
    },
    {
      id: 'cs',
      icon: <Code size={28} />,
      title: 'Data Structures & Algorithms',
      hourlyRate: 130,
      timeEstimate: '2.0 hrs / session',
      description: 'Structuring logical solutions in Python, Java, and C++. Preparing students for university courses and coding interviews.',
      features: ['Complexity (Big O) mapping', 'Hands-on live coding sessions', 'LeetCode pattern practices', 'Recursion & tree walkthroughs']
    },
    {
      id: 'sat',
      icon: <Sparkles size={28} />,
      title: 'SAT/ACT Math Prep',
      hourlyRate: 95,
      timeEstimate: '1.0 hr / session',
      description: 'Strategic coaching designed to maximize standardized math scores. Focus on speed, pattern detection, and time tactics.',
      features: ['Diagnostic score tracking', 'Trick-question breakdowns', 'Formula sheets & shortcuts', 'Simulated testing drills']
    },
    {
      id: 'ib',
      icon: <Compass size={28} />,
      title: 'IB Mathematics (HL/SL)',
      hourlyRate: 115,
      timeEstimate: '1.5 hrs / session',
      description: 'Support for IB Analysis & Approaches or Applications & Interpretation. Dedicated guidance for the Internal Assessment (IA).',
      features: ['IA topic brainstorming & feedback', 'Mathematical exploration formatting', 'Past paper drill banks', 'Graphing calculator (TI-84) tips']
    }
  ];

  // Tuition Estimator State
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('calculus');
  const [sessionLength, setSessionLength] = useState<number>(1.5); // hours: 1, 1.5, 2
  const [frequencyPerWeek, setFrequencyPerWeek] = useState<number>(2); // 1x, 2x, 3x

  const selectedSubject = subjectsList.find(s => s.id === selectedSubjectId) || subjectsList[0];
  
  // Calculations
  const sessionsPerMonth = frequencyPerWeek * 4;
  const hoursPerMonth = sessionsPerMonth * sessionLength;
  
  // Weekly discount: 2x/week gets 5% discount, 3x/week gets 10% discount
  const discountRate = frequencyPerWeek === 2 ? 0.05 : frequencyPerWeek === 3 ? 0.10 : 0;
  const baseMonthlyCost = hoursPerMonth * selectedSubject.hourlyRate;
  const finalMonthlyCost = baseMonthlyCost * (1 - discountRate);

  return (
    <div className="subjects-page animate-fade-in-up">
      {/* Background Glows */}
      <div className="glow-bg subjects-glow-1" style={{ top: '25%', left: '15%', width: '380px', height: '380px', background: 'rgba(73, 187, 189, 0.12)' }}></div>
      <div className="glow-bg subjects-glow-2" style={{ bottom: '15%', right: '10%', width: '350px', height: '350px', background: 'rgba(255, 145, 77, 0.08)' }}></div>

      {/* Header */}
      <section className="subjects-header-section">
        <div className="container text-center">
          <h1 className="subjects-title">Specialized Academic Offerings</h1>
          <p className="subjects-subtitle">
            Providing tailored study paths, curriculum-aligned lesson sheets, and structured coaching in advanced STEM fields.
          </p>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="subjects-list-section">
        <div className="container subjects-grid">
          {subjectsList.map((subject) => (
            <Link to={`/course/${subject.id}`} key={subject.id} className="card-glass subject-block-card" id={subject.id}>
              <div className="subject-header-row">
                <div className="subject-icon-box">{subject.icon}</div>
                <h3 className="subject-title-text">{subject.title}</h3>
              </div>
              
              <p className="subject-description">{subject.description}</p>
              
              <div className="subject-features-list">
                {subject.features.map((feature, i) => (
                  <div key={i} className="subject-feature-item">
                    <CheckCircle2 size={16} className="feat-check" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="subject-meta-row">
                <div className="meta-info">
                  <span className="meta-lbl">RECOMMENDED SESSION</span>
                  <span className="meta-val">{subject.timeEstimate}</span>
                </div>
                <div className="meta-info text-right">
                  <span className="meta-lbl">COACHING RATE</span>
                  <span className="meta-val">${subject.hourlyRate}/hr</span>
                </div>
              </div>

              <div className="subject-view-details-row">
                <span>View Course Details</span>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Estimator Widget */}
      <section className="estimator-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Tuition Session Estimator</h2>
            <p className="section-subtitle">Select your target subject, weekly sessions, and class lengths to compute a customized monthly plan.</p>
          </div>

          <div className="card-glass estimator-container">
            <div className="estimator-config-side">
              {/* Select Subject */}
              <h3 className="estimator-group-title">1. Select Target Subject</h3>
              <div className="estimator-subjects-grid">
                {subjectsList.map((subject) => {
                  const isActive = selectedSubjectId === subject.id;
                  return (
                    <div 
                      key={subject.id} 
                      className={`estimator-srv-toggle ${isActive ? 'active' : ''}`}
                      onClick={() => setSelectedSubjectId(subject.id)}
                    >
                      <div className="toggle-checkbox">
                        {isActive && <CheckCircle2 size={14} fill="var(--accent-primary)" color="white" />}
                      </div>
                      <div className="toggle-text">
                        <span className="toggle-title">{subject.title}</span>
                        <span className="toggle-sub">${subject.hourlyRate}/hr</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Select Session Length */}
              <h3 className="estimator-group-title" style={{ marginTop: '32px' }}>2. Session Length</h3>
              <div className="timeline-toggle-group">
                {[1.0, 1.5, 2.0].map((length) => (
                  <button 
                    key={length}
                    className={`timeline-btn ${sessionLength === length ? 'active' : ''}`}
                    onClick={() => setSessionLength(length)}
                  >
                    {length} {length === 1 ? 'Hour' : 'Hours'}
                  </button>
                ))}
              </div>

              {/* Select Weekly Frequency */}
              <h3 className="estimator-group-title" style={{ marginTop: '32px' }}>3. Frequency Per Week</h3>
              <div className="timeline-toggle-group">
                {[1, 2, 3].map((freq) => (
                  <button 
                    key={freq}
                    className={`timeline-btn ${frequencyPerWeek === freq ? 'active' : ''}`}
                    onClick={() => setFrequencyPerWeek(freq)}
                  >
                    {freq}x / Week
                    {freq === 2 && " (5% Off)"}
                    {freq === 3 && " (10% Off)"}
                  </button>
                ))}
              </div>
            </div>

            <div className="estimator-result-side">
              <div className="result-inner-card">
                <h4 className="result-title">Monthly Package Summary</h4>
                <div className="summary-list">
                  <div className="summary-row">
                    <span>Selected Subject:</span>
                    <span className="summary-val">{selectedSubject.title}</span>
                  </div>
                  <div className="summary-row">
                    <span>Base Hourly Rate:</span>
                    <span className="summary-val">${selectedSubject.hourlyRate}/hr</span>
                  </div>
                  <div className="summary-row">
                    <span>Classes Per Month:</span>
                    <span className="summary-val">{sessionsPerMonth} Sessions</span>
                  </div>
                  <div className="summary-row">
                    <span>Total Hours:</span>
                    <span className="summary-val">{hoursPerMonth} Hours</span>
                  </div>
                  {discountRate > 0 && (
                    <div className="summary-row discount-row">
                      <span>Package Discount:</span>
                      <span className="summary-val">-{discountRate * 100}%</span>
                    </div>
                  )}
                </div>
                
                <div className="divider" style={{ margin: '20px 0' }}></div>
                
                <div className="result-cost-row">
                  <span className="cost-lbl">Estimated Monthly:</span>
                  <span className="cost-val">${Math.round(finalMonthlyCost).toLocaleString()}</span>
                </div>

                <div className="estimator-warning">
                  <ShieldAlert size={16} />
                  <span>Class slots are subject to availability. Book a trial session to confirm.</span>
                </div>

                <a 
                  href={`/contact?subject=${selectedSubject.id}&freq=${frequencyPerWeek}&len=${sessionLength}`}
                  className="btn btn-primary w-full" 
                  style={{ marginTop: '24px' }}
                >
                  Book Package Now <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subjects;

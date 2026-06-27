import React, { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const educationTimeline = [
    {
      year: "2010 - 2014",
      degree: "Ph.D. in Applied Mathematics",
      institution: "Stanford University",
      desc: "Dissertation on Computational Fluid Dynamics and Numerical Analysis. Teaching Assistant for Undergraduate Honors Calculus."
    },
    {
      year: "2006 - 2010",
      degree: "B.S. in Physics (Summa Cum Laude)",
      institution: "Princeton University",
      desc: "Minored in Computer Science. Recipient of the Freshman Physics Prize. Graduated with highest honors."
    }
  ];

  const experienceTimeline = [
    {
      year: "2020 - Present",
      role: "Elite Private Tutor & Consultant",
      institution: "Vance Private Tutoring",
      desc: "Providing bespoke math and physics tutoring to high school and college students. Developed online interactive dashboards for grade and progress tracking."
    },
    {
      year: "2016 - 2020",
      role: "AP Calculus & AP Physics Teacher",
      institution: "Lowell High School, San Francisco",
      desc: "Led the advanced science track. Maintained a 94% student pass rate of 5/5 on Advanced Placement (AP) AB/BC Calculus examinations."
    },
    {
      year: "2014 - 2016",
      role: "Lecturer & Postdoctoral Researcher",
      institution: "Stanford University",
      desc: "Taught introductory physics and linear algebra courses. Conducted research in physics education and student retention in STEM."
    }
  ];

  const philosophyItems = [
    {
      title: "Clarity over Complexity",
      desc: "I break down difficult topics (like integrals or electromagnetism) into core components. We master the fundamentals before layering on complexities.",
      color: "teal"
    },
    {
      title: "Interactive Mastery",
      desc: "Active recall and real-time whiteboard problem walkthroughs ensure students aren't just watching, but doing. They learn to self-correct and debug logic.",
      color: "coral"
    },
    {
      title: "Empathetic Mentorship",
      desc: "One-on-one mentorship is as much about building confidence as it is about syllabus concepts. I create a safe, failure-positive space to boost student self-belief.",
      color: "navy"
    }
  ];

  return (
    <div className="about-page animate-fade-in-up">
      {/* Background glow elements */}
      <div className="glow-bg about-glow-1" style={{ top: '15%', left: '10%', width: '350px', height: '350px', background: 'rgba(73, 187, 189, 0.12)' }}></div>
      <div className="glow-bg about-glow-2" style={{ bottom: '20%', right: '5%', width: '380px', height: '380px', background: 'rgba(255, 145, 77, 0.08)' }}></div>

      {/* Header */}
      <section className="about-header-section">
        <div className="container text-center">
          <h1 className="about-title">Meet your academic guide.</h1>
          <p className="about-subtitle">
            Leveraging a decade of research, classroom teaching, and one-on-one tutoring to make advanced STEM subjects accessible.
          </p>
        </div>
      </section>

      {/* Profile and Story Section */}
      <section className="about-story-section container">
        <div className="story-grid">
          <div className="story-visual-side">
            <div className="story-portrait-box">
              <div className="story-bg-card"></div>
              <div className="story-portrait-container">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Dr. Evelyn Vance explaining physics" 
                  className="story-img"
                />
              </div>
            </div>
          </div>
          
          <div className="story-text-side">
            <h2 className="story-headline">Bridging the gap between theory and understanding.</h2>
            <p className="story-p">
              Hi, I'm Dr. Evelyn Vance. For as long as I can remember, I have been fascinated by how math and physics describe the world around us. After earning my Ph.D. at Stanford, I realized that my true passion lay not in academic publishing, but in teaching.
            </p>
            <p className="story-p">
              Advanced STEM curricula can be overwhelming. Standard classroom dynamics often rush through foundational concepts, leaving students memorizing formulas without understanding their significance. 
            </p>
            <p className="story-p font-semibold">
              My mission is to change that. I focus on developing a student's core analytical intuition. I work with them to build structured thinking patterns so they can tackle unfamiliar exam questions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Chronological Timeline Section */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Academic & Professional Journey</h2>
            <p className="section-subtitle">A timeline of my education and teaching history.</p>
          </div>

          {/* Tabs for Education vs Experience */}
          <div className="timeline-tabs">
            <button 
              className={`timeline-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap size={18} /> Education
            </button>
            <button 
              className={`timeline-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <Briefcase size={18} /> Experience
            </button>
          </div>

          {/* Timeline Cards */}
          <div className="timeline-list">
            {activeTab === 'education' ? (
              educationTimeline.map((item, idx) => (
                <div key={idx} className="timeline-card card-glass animate-fade-in-up">
                  <div className="timeline-badge-year">{item.year}</div>
                  <div className="timeline-card-content">
                    <h3 className="timeline-item-title">{item.degree}</h3>
                    <h4 className="timeline-item-sub">{item.institution}</h4>
                    <p className="timeline-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              experienceTimeline.map((item, idx) => (
                <div key={idx} className="timeline-card card-glass animate-fade-in-up">
                  <div className="timeline-badge-year">{item.year}</div>
                  <div className="timeline-card-content">
                    <h3 className="timeline-item-title">{item.role}</h3>
                    <h4 className="timeline-item-sub">{item.institution}</h4>
                    <p className="timeline-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Philosophy breakdown */}
      <section className="about-philosophy-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Core Teaching Beliefs</h2>
            <p className="section-subtitle">The principles that govern every tutoring hour I schedule.</p>
          </div>

          <div className="philosophy-detailed-grid">
            {philosophyItems.map((item, idx) => (
              <div key={idx} className="card-glass philosophy-item-card">
                <h3 className="philosophy-item-title">
                  <span className={`number-badge ${item.color}`}>0{idx + 1}</span>
                  {item.title}
                </h3>
                <p className="philosophy-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

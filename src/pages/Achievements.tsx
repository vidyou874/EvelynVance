import React from 'react';
import { Award, ShieldCheck, Bookmark, Compass, BookOpen, Star } from 'lucide-react';
import './Achievements.css';

const Achievements: React.FC = () => {
  const certifications = [
    {
      icon: <ShieldCheck size={28} />,
      title: "AP Calculus Certified Reader",
      issuer: "College Board",
      year: "2017 - Present",
      desc: "Selected annually to score AP Calculus AB/BC exams. Provides insider grading insights that help students avoid common pitfalls."
    },
    {
      icon: <Award size={28} />,
      title: "National Board Certified Teacher",
      issuer: "NBPTS",
      year: "2019",
      desc: "Accomplished teacher designation in Young Adult Science & STEM disciplines, validating high-quality pedagogical standards."
    },
    {
      icon: <Compass size={28} />,
      title: "Active Professional Member",
      issuer: "MAA & AAPT",
      year: "2014 - Present",
      desc: "Member of the Mathematical Association of America and American Association of Physics Teachers, staying current on modern STEM pedagogies."
    }
  ];

  const awards = [
    {
      icon: <Star size={24} />,
      title: "Distinguished Teaching Award",
      issuer: "Stanford University",
      year: "2015",
      desc: "Awarded for exceptional lecturing, course redesign, and undergraduate student mentorship in Mathematics."
    },
    {
      icon: <Bookmark size={24} />,
      title: "Excellence in Teaching Honoree",
      issuer: "Lowell High School District",
      year: "2019",
      desc: "Recognized for elevating the school's math AP exam average scores to the top 3% statewide."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Physics Education Grantee",
      issuer: "AAPT",
      year: "2018",
      desc: "Awarded a research grant to develop and implement interactive computer modeling in high school mechanics coursework."
    }
  ];

  return (
    <div className="achievements-page animate-fade-in-up">
      {/* Background Glows */}
      <div className="glow-bg ach-glow-1" style={{ top: '20%', left: '8%', width: '380px', height: '380px', background: 'rgba(73, 187, 189, 0.12)' }}></div>
      <div className="glow-bg ach-glow-2" style={{ bottom: '25%', right: '12%', width: '350px', height: '350px', background: 'rgba(255, 145, 77, 0.08)' }}></div>

      {/* Header */}
      <section className="ach-header-section">
        <div className="container text-center">
          <h1 className="ach-title">Awards & Certifications</h1>
          <p className="ach-subtitle">
            An overview of verified credentials, professional licenses, and educational recognitions earned throughout my academic career.
          </p>
        </div>
      </section>

      {/* Certifications Block */}
      <section className="ach-body-section container">
        <div className="ach-section-subtitle-row">
          <h2 className="ach-section-title">Verified Certifications</h2>
          <div className="divider"></div>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="card-glass cert-card">
              <div className="cert-header">
                <div className="cert-icon-box">{cert.icon}</div>
                <div className="cert-title-group">
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
              <p className="cert-desc">{cert.desc}</p>
              <span className="cert-year-badge">{cert.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Block */}
      <section className="ach-body-section container" style={{ marginTop: '60px' }}>
        <div className="ach-section-subtitle-row">
          <h2 className="ach-section-title">Honors & Awards</h2>
          <div className="divider"></div>
        </div>

        <div className="awards-grid">
          {awards.map((award, idx) => (
            <div key={idx} className="card-glass award-card">
              <div className="award-header-row">
                <div className="award-icon-box">{award.icon}</div>
                <div>
                  <h3 className="award-card-title">{award.title}</h3>
                  <span className="award-issuer">{award.issuer}</span>
                </div>
              </div>
              <p className="award-desc">{award.desc}</p>
              <div className="award-year">{award.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="ach-cta-section container" style={{ marginTop: '80px' }}>
        <div className="bottom-cta-card">
          <h2 className="cta-title">Learn more about my class subjects</h2>
          <p className="cta-desc">
            See how I integrate certified AP assessment frameworks and mathematical methodologies directly into my lesson structures.
          </p>
          <a href="/subjects" className="btn btn-primary btn-lg">
            View Subject Details
          </a>
        </div>
      </section>
    </div>
  );
};

export default Achievements;

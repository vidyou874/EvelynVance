import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star, Play, Check, Clock, FileText, Smartphone, Award,
  Infinity, ArrowLeft, ChevronDown, ChevronUp, Shield, Share2, Tag
} from 'lucide-react';
import CourseReviews from '../components/CourseReviews';
import { COURSE_IMAGES, DEFAULT_COURSE_IMAGE } from '../config/courseImages';
import './CourseDetail.css';

interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  originalPrice: number;
  discountPrice: number;
  rating: number;
  ratingCount: number;
  lectures: number;
  totalHours: string;
  description: string;
  whatYouWillLearn: string[];
  requirements: string[];
  syllabus: {
    sectionTitle: string;
    lecturesCount: number;
    duration: string;
    lessons: string[];
  }[];
}

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const courseId = id || 'calculus';

  const courses: Record<string, CourseData> = {
    calculus: {
      id: 'calculus',
      title: 'AP Calculus AB/BC Masterclass: Complete Syllabus & Prep',
      subtitle: 'Master limits, derivatives, integrals, and infinite series with Ivy League level pedagogy, worksheets, and exam strategies.',
      category: 'Mathematics',
      originalPrice: 299.99,
      discountPrice: 149.99,
      rating: 4.9,
      ratingCount: 148,
      lectures: 42,
      totalHours: '18.5 hours',
      description: 'Welcome to the ultimate guide to scoring a 5 on your AP Calculus exam! This course is designed to guide high school and college students through the rigors of single-variable calculus. With step-by-step mathematical derivations, interactive worksheets, and custom practice exams, you will develop a deep conceptual foundation that goes far beyond formula memorization.',
      whatYouWillLearn: [
        'Understand limits and continuity intuitively and analytically.',
        'Apply derivatives to solve optimization and related rates problems.',
        'Evaluate complex integrals using substitution, parts, and partial fractions.',
        'Determine convergence or divergence of infinite series.',
        'Master AP exam format, scoring rubrics, and time management.'
      ],
      requirements: [
        'Solid background in Algebra 2 and Trigonometry.',
        'Familiarity with Pre-Calculus concepts is recommended but not mandatory.'
      ],
      syllabus: [
        {
          sectionTitle: 'Limits and Continuity',
          lecturesCount: 6,
          duration: '2.5 hours',
          lessons: ['Introduction to Limits', 'Calculating Limits Analytically', 'Limits to Infinity', 'Continuity & Intermediate Value Theorem']
        },
        {
          sectionTitle: 'Derivatives: Core Rules & Applications',
          lecturesCount: 12,
          duration: '5.5 hours',
          lessons: ['Definition of the Derivative', 'Power, Product & Quotient Rules', 'The Chain Rule', 'Implicit Differentiation', 'Optimization Problems', 'Related Rates']
        },
        {
          sectionTitle: 'Integrals and Accumulation of Change',
          lecturesCount: 14,
          duration: '6.5 hours',
          lessons: ['Riemann Sums & Definite Integrals', 'Fundamental Theorem of Calculus', 'Integration by Substitution', 'Area Between Curves', 'Volume of Solids of Revolution']
        },
        {
          sectionTitle: 'Infinite Sequences & Series (BC Only)',
          lecturesCount: 10,
          duration: '4.0 hours',
          lessons: ['Geometric and Harmonic Series', 'Integral & Comparison Tests', 'Alternating Series & Ratio Test', 'Taylor & Maclaurin Polynomials']
        }
      ]
    },
    physics: {
      id: 'physics',
      title: 'College Physics & Classical Mechanics Blueprint',
      subtitle: 'Master kinematics, Newtonian laws, work-energy theorem, and rotational dynamics. Ideal for STEM & pre-med students.',
      category: 'Physics',
      originalPrice: 279.99,
      discountPrice: 139.99,
      rating: 4.8,
      ratingCount: 92,
      lectures: 35,
      totalHours: '15 hours',
      description: 'Struggling with physics problem sets? This blueprint breaks down mechanics into clear vectors and coordinate frames. With extensive step-by-step problem derivations, free-body diagram tutorials, and practice examinations, you will master college physics and prepare for engineering core curriculums.',
      whatYouWillLearn: [
        'Master 1D and 2D kinematics with vector integration.',
        'Draw and analyze precise free-body diagrams for any forces.',
        'Apply Conservation of Energy and Momentum to multi-object collisions.',
        'Evaluate rotational dynamics, torque, and angular momentum.',
        'Structure professional lab reports and analyze experimental errors.'
      ],
      requirements: [
        'Basic understanding of vectors.',
        'Concurrent enrollment in or completion of Calculus 1 is helpful but not required.'
      ],
      syllabus: [
        {
          sectionTitle: 'Kinematics & Vector Mathematics',
          lecturesCount: 8,
          duration: '3.0 hours',
          lessons: ['1D Motion & Constant Acceleration', 'Vectors & Projectile Motion', 'Relative Velocity & Reference Frames']
        },
        {
          sectionTitle: "Newton's Laws of Motion",
          lecturesCount: 10,
          duration: '4.5 hours',
          lessons: ["Inertia & Newton's Second Law", 'Friction & Circular Motion', 'Inclined Planes & Pulley Systems']
        },
        {
          sectionTitle: 'Work, Energy, and Power',
          lecturesCount: 9,
          duration: '4.0 hours',
          lessons: ['Kinetic Energy & Work-Energy Theorem', 'Conservative Forces & Potential Energy', 'Conservation of Mechanical Energy']
        },
        {
          sectionTitle: 'Rotational Motion & Angular Momentum',
          lecturesCount: 8,
          duration: '3.5 hours',
          lessons: ['Rotational Kinematics & Torque', 'Moment of Inertia', 'Conservation of Angular Momentum']
        }
      ]
    },
    cs: {
      id: 'cs',
      title: 'Data Structures & Algorithms: Coding Interview Prep',
      subtitle: 'Master complexity analysis (Big O), trees, graphs, sorting, and dynamic programming in Python, Java, or C++.',
      category: 'Computer Science',
      originalPrice: 329.99,
      discountPrice: 159.99,
      rating: 4.95,
      ratingCount: 114,
      lectures: 48,
      totalHours: '22 hours',
      description: 'Prepare for university computer science exams and FAANG coding interviews. This course focuses on building solid coding intuition. You will learn to recognize algorithmic patterns (sliding window, two pointers, backtracking) and write clean, optimized code.',
      whatYouWillLearn: [
        'Analyze space and time complexity using Big O notation.',
        'Implement lists, stacks, queues, hash tables, and binary trees.',
        'Formulate recursive solutions and optimize using memoization.',
        'Traverse graphs using Depth-First (DFS) and Breadth-First (BFS) search.',
        'Solve 50+ handpicked LeetCode problems live with step-by-step logic.'
      ],
      requirements: [
        'Basic programming knowledge in Python, Java, or C++ (loops, conditionals, functions).'
      ],
      syllabus: [
        {
          sectionTitle: 'Algorithmic Complexity & Arrays',
          lecturesCount: 8,
          duration: '3.0 hours',
          lessons: ['Understanding Big O Space & Time', 'Two Pointer Strategies', 'Sliding Window Patterns']
        },
        {
          sectionTitle: 'Linked Lists, Stacks, and Queues',
          lecturesCount: 10,
          duration: '4.5 hours',
          lessons: ['Singly & Doubly Linked Lists', 'Implementing Stacks & Queues', 'Monotonic Stack Applications']
        },
        {
          sectionTitle: 'Trees & Graph Theory',
          lecturesCount: 16,
          duration: '7.5 hours',
          lessons: ['Binary Search Tree Operations', 'Recursion & Backtracking', 'Graph Traversals (BFS & DFS)', "Dijkstra's Shortest Path Algorithm"]
        },
        {
          sectionTitle: 'Dynamic Programming Basics',
          lecturesCount: 14,
          duration: '7.0 hours',
          lessons: ['Top-Down vs Bottom-Up Approaches', 'Memoization & Tabulation', '0/1 Knapsack Problem']
        }
      ]
    },
    sat: {
      id: 'sat',
      title: 'SAT & ACT Math Strategy: Maximize Your Score',
      subtitle: 'Learn formula shortcuts, speed hacks, pattern recognition, and test-taking strategies to score 750+ on SAT Math.',
      category: 'Standardized Prep',
      originalPrice: 199.99,
      discountPrice: 99.99,
      rating: 4.75,
      ratingCount: 210,
      lectures: 30,
      totalHours: '12 hours',
      description: 'Standardized tests do not just test your math skills — they test your speed and endurance. This preparation course delivers a complete breakdown of trick questions, formulas, and calculator shortcuts that will help you solve problems in seconds.',
      whatYouWillLearn: [
        'Solve algebraic and geometry questions in under 40 seconds.',
        'Identify common trick question formulations immediately.',
        'Use TI-84 calculator programs and graph-hacking methods.',
        'Manage your testing timeline effectively under pressure.',
        'Access custom practice worksheets mapping to the Digital SAT format.'
      ],
      requirements: ['Basic high school Algebra 1 and Geometry.'],
      syllabus: [
        {
          sectionTitle: 'Heart of Algebra & Systems',
          lecturesCount: 8,
          duration: '3.0 hours',
          lessons: ['Linear Equations & Word Problems', 'Solving Systems of Equations', 'Inequalities & Absolute Value']
        },
        {
          sectionTitle: 'Passport to Advanced Math',
          lecturesCount: 10,
          duration: '4.0 hours',
          lessons: ['Quadratic Functions & Parabolics', 'Exponents & Radical Expressions', 'Polynomial Operations']
        },
        {
          sectionTitle: 'Data Analysis & Geometry',
          lecturesCount: 12,
          duration: '5.0 hours',
          lessons: ['Ratios, Rates, & Percentages', 'Probability & Statistics Charts', 'Circle Geometry & Trigonometry']
        }
      ]
    },
    ib: {
      id: 'ib',
      title: 'IB Mathematics HL & SL: Internal Assessment Guidance',
      subtitle: 'Complete guidance for IB Mathematics Analysis & Approaches (AA) and Applications & Interpretation (AI), plus IA Blueprint writing.',
      category: 'IB Diploma',
      originalPrice: 289.99,
      discountPrice: 144.99,
      rating: 4.85,
      ratingCount: 78,
      lectures: 38,
      totalHours: '16 hours',
      description: 'Aiming for a 7 in IB Math? This package provides structured reviews of HL/SL past papers and comprehensive tutoring for your Internal Assessment (IA). Learn how to structure mathematical explorations, express mathematical concepts clearly, and satisfy IB assessment criteria.',
      whatYouWillLearn: [
        'Formulate high-scoring Internal Assessment topics and questions.',
        'Solve past paper problems under timed exam conditions.',
        'Master the IB criteria for mathematical exploration.',
        'Leverage your graphing calculator for advanced calculus and probability.',
        'Express complex algebra and proof patterns clearly on Paper 1 and 2.'
      ],
      requirements: ['Enrollment in standard IB Diploma Mathematics (HL or SL).'],
      syllabus: [
        {
          sectionTitle: 'Core Algebraic Proofs & Functions',
          lecturesCount: 10,
          duration: '4.0 hours',
          lessons: ['Mathematical Induction Proofs', 'Composite & Inverse Functions', 'Logarithmic Equations']
        },
        {
          sectionTitle: "Calculus, Trigonometry & Complex Numbers",
          lecturesCount: 16,
          duration: '7.0 hours',
          lessons: ["Trigonometric Identities & Equations", "Complex Numbers & De Moivre's Theorem", 'Integration & Limits (HL)']
        },
        {
          sectionTitle: 'The IA: Brainstorming & Writing Blueprint',
          lecturesCount: 12,
          duration: '5.0 hours',
          lessons: ['Selecting a Captivating Exploration Topic', 'Fulfilling Criterion B (Mathematical Presentation)', 'Writing the Personal Engagement section']
        }
      ]
    }
  };

  const course = courses[courseId] || courses.calculus;
  const isEnrolled = courseId === 'calculus';
  const heroImage = COURSE_IMAGES[courseId] ?? DEFAULT_COURSE_IMAGE;

  const [openSection, setOpenSection] = useState<number | null>(0);
  const [couponInput, setCouponInput] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const discountPct = Math.round(
    ((course.originalPrice - course.discountPrice) / course.originalPrice) * 100
  );

  return (
    <div className="course-detail-page">

      {/* ── Hero Banner with Subject Image ── */}
      <div
        className="course-banner-hero"
        style={{ backgroundImage: `url('${heroImage.heroUrl}')` }}
      >
        <div className="course-banner-overlay" />
        <div className="container course-banner-content">
          <div className="banner-left">
            <Link to="/subjects" className="course-breadcrumb-back">
              <ArrowLeft size={16} /> Back to Subjects
            </Link>
            <div className="course-breadcrumbs">
              <span>Courses</span> &gt; <span>STEM</span> &gt; <span>{course.category}</span>
            </div>
            <h1 className="course-header-title">{course.title}</h1>
            <p className="course-header-subtitle">{course.subtitle}</p>

            <div className="course-rating-row">
              <span className="rating-num">{course.rating}</span>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(course.rating) ? '#ff914d' : 'transparent'}
                    color="#ff914d"
                  />
                ))}
              </div>
              <span className="rating-total-txt">
                ({course.ratingCount} ratings) • {course.lectures} lectures
              </span>
            </div>

            <div className="course-instructor-info">
              <span>Created by <strong className="teal-text">Dr. Evelyn Vance</strong></span>
              <span className="updated-date">Last updated 6/2026</span>
              <span className="lang-label">🌐 English</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="container course-main-layout">

        {/* ── Left Column ── */}
        <div className="course-left-column">

          {/* What you'll learn */}
          <div className="what-learn-card">
            <h2 className="section-title-sm">What you'll learn</h2>
            <div className="what-learn-grid">
              {course.whatYouWillLearn.map((item, i) => (
                <div key={i} className="what-learn-item">
                  <Check size={16} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Accordion */}
          <div className="course-syllabus-section">
            <h2 className="section-title-sm" style={{ marginBottom: '8px' }}>Course content</h2>
            <div className="syllabus-meta-stats">
              <span>{course.syllabus.length} sections • {course.lectures} lectures • {course.totalHours} total length</span>
            </div>

            <div className="syllabus-accordion">
              {course.syllabus.map((section, idx) => {
                const isOpen = openSection === idx;
                return (
                  <div key={idx} className="syllabus-section-card">
                    <div className="syllabus-section-header" onClick={() => toggleSection(idx)}>
                      <div className="section-title-left">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        <h3>{section.sectionTitle}</h3>
                      </div>
                      <span className="section-meta-right">
                        {section.lessons.length} lectures • {section.duration}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="syllabus-lessons-list animate-fade-in">
                        {section.lessons.map((lesson, index) => (
                          <div key={index} className="syllabus-lesson-item">
                            <div className="lesson-left">
                              <Play size={14} className="play-icon" />
                              <span>{lesson}</span>
                            </div>
                            <span className="lesson-time">Preview</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Requirements */}
          <div className="requirements-card">
            <h2 className="section-title-sm">Requirements</h2>
            <ul className="requirements-list">
              {course.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="description-card">
            <h2 className="section-title-sm">Description</h2>
            <p className="description-text">{course.description}</p>
          </div>

          {/* ── Reviews ── */}
          <CourseReviews courseId={courseId} isEnrolled={isEnrolled} />
        </div>

        {/* ── Sidebar Purchase Box ── */}
        <div className="course-right-column">
          <div className="purchase-sticky-box">
            {/* Preview Thumbnail */}
            <div className="course-preview-thumb">
              <img
                src={heroImage.thumbUrl}
                alt={heroImage.alt}
                className="thumb-img"
              />
              <div className="play-overlay">
                <div className="play-button-circle">
                  <Play size={22} fill="currentColor" />
                </div>
                <span>Preview this course</span>
              </div>
            </div>

            <div className="purchase-card-body">
              {isEnrolled ? (
                /* ── Enrolled State ── */
                <div className="enrolled-status-block">
                  <div className="enrolled-badge">
                    <Check size={16} /> Enrolled
                  </div>
                  <p className="validity-text">
                    Access valid till: <strong>Dec 31, 2026</strong>
                  </p>
                  <button
                    className="btn btn-primary start-learning-btn"
                    onClick={() => alert('Launching course player... Welcome back!')}
                  >
                    Go to Course Player
                  </button>
                  <p className="guarantee-text">Includes lifetime course material updates</p>
                </div>
              ) : (
                /* ── Purchase State ── */
                <div className="purchase-payment-block">
                  <div className="price-tag-row">
                    <span className="discount-price">${course.discountPrice}</span>
                    <span className="original-price">${course.originalPrice}</span>
                    <span className="discount-percent">{discountPct}% Off</span>
                  </div>

                  <div className="purchase-actions">
                    <button
                      className="btn btn-primary buy-now-btn"
                      onClick={() => alert(`Redirecting to checkout for ${course.title}...`)}
                    >
                      Buy Now
                    </button>
                    <button
                      className="btn btn-secondary add-cart-btn"
                      onClick={() => alert('Added to shopping cart.')}
                    >
                      Add to Cart
                    </button>
                  </div>

                  {/* Coupon input */}
                  <div className="coupon-row">
                    <div className="coupon-input-wrap">
                      <Tag size={14} className="coupon-tag-icon" />
                      <input
                        type="text"
                        className="coupon-input"
                        placeholder="Enter coupon code"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-secondary coupon-apply-btn"
                      onClick={() => { if (couponInput.trim()) setCouponApplied(true); }}
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <p className="coupon-success">✓ Coupon applied successfully!</p>
                  )}

                  <div className="guarantee-banner">
                    <Shield size={16} />
                    <span>30-Day Money-Back Guarantee</span>
                  </div>
                </div>
              )}

              {/* Course Features */}
              <div className="purchase-features-list">
                <h4 className="features-title">This course includes:</h4>
                <div className="feature-item">
                  <Clock size={16} />
                  <span>{course.totalHours} on-demand video</span>
                </div>
                <div className="feature-item">
                  <FileText size={16} />
                  <span>24 downloadable study blueprints</span>
                </div>
                <div className="feature-item">
                  <Infinity size={16} />
                  <span>Full lifetime access</span>
                </div>
                <div className="feature-item">
                  <Smartphone size={16} />
                  <span>Access on mobile and TV</span>
                </div>
                <div className="feature-item">
                  <Award size={16} />
                  <span>Certificate of completion</span>
                </div>
              </div>

              {/* Share */}
              <div className="share-course-row">
                <button className="share-btn">
                  <Share2 size={14} /> Share course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

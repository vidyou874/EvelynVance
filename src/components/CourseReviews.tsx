import React, { useState, useMemo } from 'react';
import { Star, ThumbsUp, CheckCircle, Filter, ChevronDown } from 'lucide-react';
import './CourseReviews.css';

interface Review {
  id: number;
  name: string;
  initials: string;
  avatarColor: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  helpful: number;
  verified: boolean;
  completed: boolean;
}

interface CourseReviewsProps {
  courseId: string;
  isEnrolled: boolean;
}

// ── Static mock reviews per course ───────────────────────────────────────────
const REVIEWS_DB: Record<string, Review[]> = {
  calculus: [
    {
      id: 1, name: 'Sarah J.', initials: 'SJ', avatarColor: '#49bbbd',
      rating: 5, date: 'May 2026',
      title: 'Best AP Calculus prep I have ever had',
      body: 'Dr. Vance\'s step-by-step approach to integration by parts completely demystified the topic for me. After 3 sessions my grade went from a C to a solid A. The AP exam felt almost easy compared to her practice sets.',
      helpful: 42, verified: true, completed: true,
    },
    {
      id: 2, name: 'Michael T.', initials: 'MT', avatarColor: '#ff914d',
      rating: 5, date: 'Apr 2026',
      title: 'Scored a 5 on AP exam — thank you Evelyn!',
      body: 'I had struggled with limits and L\'Hôpital\'s rule for months before starting this course. The structured approach to epsilon-delta proofs was a game changer. Highly recommend to any AP Calc BC student.',
      helpful: 38, verified: true, completed: true,
    },
    {
      id: 3, name: 'Priya K.', initials: 'PK', avatarColor: '#7c3aed',
      rating: 5, date: 'Mar 2026',
      title: 'Incredibly thorough and patient',
      body: 'Every concept is explained at least two different ways until it clicks. The error-analysis sessions after each practice exam were especially valuable — pinpointed exactly where I was losing marks.',
      helpful: 29, verified: true, completed: true,
    },
    {
      id: 4, name: 'James W.', initials: 'JW', avatarColor: '#0f766e',
      rating: 4, date: 'Feb 2026',
      title: 'Great content, very challenging pace',
      body: 'The content quality is outstanding and Dr. Vance clearly knows this subject inside out. The pace can be intense if you are coming in weak on algebra fundamentals — make sure to review prerequisites first.',
      helpful: 14, verified: false, completed: true,
    },
    {
      id: 5, name: 'Emma L.', initials: 'EL', avatarColor: '#db2777',
      rating: 5, date: 'Jan 2026',
      title: 'Cornell Engineering — made possible by this course',
      body: 'My daughter went from struggling to confident in calculus over just two months of weekly sessions. She is now at Cornell Engineering and credits Dr. Vance as a major reason she got in.',
      helpful: 61, verified: true, completed: false,
    },
  ],
  physics: [
    {
      id: 1, name: 'Alex R.', initials: 'AR', avatarColor: '#49bbbd',
      rating: 5, date: 'May 2026',
      title: 'Kinematics clicked for the first time',
      body: 'Dr. Vance makes free-body diagrams feel intuitive. The vector decomposition method she teaches is something I wish I had learned in high school. Physics finally makes sense.',
      helpful: 31, verified: true, completed: true,
    },
    {
      id: 2, name: 'Lisa M.', initials: 'LM', avatarColor: '#ff914d',
      rating: 5, date: 'Apr 2026',
      title: 'Pre-med lifesaver',
      body: 'I needed to pass college physics for pre-med. The work-energy theorem and momentum sections are explained brilliantly. My final grade went from 68% to 91% after 6 sessions.',
      helpful: 27, verified: true, completed: true,
    },
    {
      id: 3, name: 'Ryan C.', initials: 'RC', avatarColor: '#7c3aed',
      rating: 4, date: 'Mar 2026',
      title: 'Solid course, wish rotational dynamics had more problems',
      body: 'The first three modules are excellent. Rotational dynamics felt slightly rushed compared to the kinematics and Newton\'s Laws sections. More practice problems there would be perfect.',
      helpful: 9, verified: true, completed: true,
    },
  ],
  cs: [
    {
      id: 1, name: 'David N.', initials: 'DN', avatarColor: '#49bbbd',
      rating: 5, date: 'Jun 2026',
      title: 'Got my FAANG internship offer!',
      body: 'After working through the Trees & Graphs module and the DP section, I landed offers from two FAANG-tier companies. The pattern recognition approach is the key — once you see the sliding window pattern, you see it everywhere.',
      helpful: 94, verified: true, completed: true,
    },
    {
      id: 2, name: 'Nina S.', initials: 'NS', avatarColor: '#ff914d',
      rating: 5, date: 'May 2026',
      title: 'Best DSA course for beginners',
      body: 'I came in with basic Python knowledge. The Big O module made complexity analysis finally clear. The live-coding format is much better than just watching pre-recorded solutions.',
      helpful: 47, verified: true, completed: false,
    },
    {
      id: 3, name: 'Omar H.', initials: 'OH', avatarColor: '#0f766e',
      rating: 5, date: 'Apr 2026',
      title: 'Passed my university algorithms course with an A',
      body: 'The dynamic programming section alone is worth the entire course. The tabulation vs memoization breakdown is crystal clear. I also appreciated the Dijkstra\'s section — it finally made sense.',
      helpful: 33, verified: true, completed: true,
    },
  ],
  sat: [
    {
      id: 1, name: 'Sophia R.', initials: 'SR', avatarColor: '#49bbbd',
      rating: 5, date: 'May 2026',
      title: '130-point improvement — exceeded my goal',
      body: 'My son went from 620 to 750 in SAT Math. The trick question identification techniques are invaluable. He learned to spot the trap answers immediately which saved massive time on the real exam.',
      helpful: 58, verified: true, completed: true,
    },
    {
      id: 2, name: 'Chris B.', initials: 'CB', avatarColor: '#ff914d',
      rating: 4, date: 'Apr 2026',
      title: 'Great strategy content, very practical',
      body: 'The calculator shortcuts and graph-hacking methods are things you just cannot find anywhere else. My only feedback is that the geometry section could include more circle theorem examples.',
      helpful: 22, verified: true, completed: true,
    },
  ],
  ib: [
    {
      id: 1, name: 'Ananya P.', initials: 'AP', avatarColor: '#49bbbd',
      rating: 5, date: 'Apr 2026',
      title: 'Got a 7 in IB Math HL — this course was essential',
      body: 'The Internal Assessment guidance alone is worth more than the course price. Dr. Vance helped me refocus my IA topic from a vague idea into a mathematically rigorous exploration that scored full marks.',
      helpful: 44, verified: true, completed: true,
    },
    {
      id: 2, name: 'Tom F.', initials: 'TF', avatarColor: '#7c3aed',
      rating: 5, date: 'Mar 2026',
      title: 'Complex numbers finally make sense',
      body: 'The De Moivre\'s theorem module is exceptional. Clear, visual, and connected directly to past paper questions. The past-paper drill bank is extensive and well-organized by topic.',
      helpful: 19, verified: true, completed: false,
    },
  ],
};

const FALLBACK_REVIEWS = REVIEWS_DB.calculus;

type SortKey = 'recent' | 'highest' | 'lowest' | 'helpful';

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'recent', label: 'Most Recent' },
  { key: 'highest', label: 'Highest Rated' },
  { key: 'lowest', label: 'Lowest Rated' },
  { key: 'helpful', label: 'Most Helpful' },
];

// ── Write Review Modal ────────────────────────────────────────────────────────
interface WriteReviewModalProps {
  onClose: () => void;
  onSubmit: (rating: number, title: string, body: string) => void;
}

const WriteReviewModal: React.FC<WriteReviewModalProps> = ({ onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;
    onSubmit(rating, title, body);
    onClose();
  };

  return (
    <div className="review-modal-backdrop" onClick={onClose}>
      <div className="review-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="review-modal-header">
          <h3>Write a Review</h3>
          <button className="review-modal-close" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Star Picker */}
          <div className="review-modal-field">
            <label className="review-modal-label">Your Rating *</label>
            <div className="review-star-picker">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  className="review-star-btn"
                  onMouseEnter={() => setHoverRating(s)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(s)}
                >
                  <Star
                    size={32}
                    fill={(hoverRating || rating) >= s ? '#ff914d' : 'transparent'}
                    color={(hoverRating || rating) >= s ? '#ff914d' : '#cbd5e1'}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="review-modal-field form-group">
            <label className="review-modal-label">Review Title</label>
            <input
              type="text"
              placeholder="Summarise your experience..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={80}
            />
          </div>

          {/* Body */}
          <div className="review-modal-field form-group">
            <label className="review-modal-label">Your Review *</label>
            <textarea
              placeholder="Share what you found most valuable, what could be improved, and who you'd recommend this to..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={5}
              required
            />
          </div>

          <div className="review-modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={rating === 0 || body.trim().length < 10}
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ── Rating Bar Row ────────────────────────────────────────────────────────────
const RatingBar: React.FC<{ stars: number; count: number; total: number; active: boolean; onClick: () => void }> = ({
  stars, count, total, active, onClick,
}) => {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <button className={`rating-bar-row ${active ? 'active' : ''}`} onClick={onClick}>
      <span className="rbar-stars">{stars} ★</span>
      <div className="rbar-track">
        <div className="rbar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="rbar-count">({count})</span>
    </button>
  );
};

// ── Star Row ──────────────────────────────────────────────────────────────────
const StarRow: React.FC<{ rating: number; size?: number }> = ({ rating, size = 14 }) => (
  <div className="review-star-row">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={size}
        fill={s <= rating ? '#ff914d' : 'transparent'}
        color={s <= rating ? '#ff914d' : '#cbd5e1'}
      />
    ))}
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────
const CourseReviews: React.FC<CourseReviewsProps> = ({ courseId, isEnrolled }) => {
  const baseReviews = REVIEWS_DB[courseId] ?? FALLBACK_REVIEWS;

  const [reviews, setReviews] = useState<Review[]>(baseReviews);
  const [sortKey, setSortKey] = useState<SortKey>('helpful');
  const [filterStar, setFilterStar] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState<Set<number>>(new Set());

  // ── Computed stats ──────────────────────────────────────────────────────────
  const avgRating = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  const starCounts = [5, 4, 3, 2, 1].map((s) => ({
    stars: s,
    count: reviews.filter((r) => r.rating === s).length,
  }));

  // ── Sorted + filtered list ──────────────────────────────────────────────────
  const visibleReviews = useMemo(() => {
    let list = [...reviews];
    if (filterStar !== null) list = list.filter((r) => r.rating === filterStar);
    switch (sortKey) {
      case 'highest': list.sort((a, b) => b.rating - a.rating); break;
      case 'lowest':  list.sort((a, b) => a.rating - b.rating); break;
      case 'helpful': list.sort((a, b) => b.helpful - a.helpful); break;
      case 'recent':
      default: break; // already in recency order in mock data
    }
    return showAll ? list : list.slice(0, 3);
  }, [reviews, sortKey, filterStar, showAll]);

  const totalFiltered = useMemo(() => {
    if (filterStar === null) return reviews.length;
    return reviews.filter((r) => r.rating === filterStar).length;
  }, [reviews, filterStar]);

  const handleHelpful = (id: number) => {
    if (helpfulClicked.has(id)) return;
    setReviews((prev) => prev.map((r) => r.id === id ? { ...r, helpful: r.helpful + 1 } : r));
    setHelpfulClicked((prev) => new Set(prev).add(id));
  };

  const handleNewReview = (rating: number, title: string, body: string) => {
    const newReview: Review = {
      id: Date.now(),
      name: 'You',
      initials: 'ME',
      avatarColor: '#49bbbd',
      rating,
      date: 'Just now',
      title: title || 'My Review',
      body,
      helpful: 0,
      verified: true,
      completed: true,
    };
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <div className="course-reviews-section">
      <h2 className="section-title-sm reviews-heading">Student Reviews</h2>

      {/* ── Summary ── */}
      <div className="reviews-summary-block">
        <div className="reviews-avg-col">
          <span className="reviews-big-num">{avgRating.toFixed(1)}</span>
          <StarRow rating={Math.round(avgRating)} size={20} />
          <span className="reviews-total-label">Course Rating</span>
        </div>
        <div className="reviews-bars-col">
          {starCounts.map(({ stars, count }) => (
            <RatingBar
              key={stars}
              stars={stars}
              count={count}
              total={reviews.length}
              active={filterStar === stars}
              onClick={() => setFilterStar(filterStar === stars ? null : stars)}
            />
          ))}
        </div>
      </div>

      {/* ── Controls row ── */}
      <div className="reviews-controls-row">
        {/* Filter pills */}
        <div className="reviews-filter-pills">
          <button
            className={`filter-pill ${filterStar === null ? 'active' : ''}`}
            onClick={() => setFilterStar(null)}
          >
            All
          </button>
          {[5, 4, 3, 2, 1].map((s) => (
            <button
              key={s}
              className={`filter-pill ${filterStar === s ? 'active' : ''}`}
              onClick={() => setFilterStar(filterStar === s ? null : s)}
            >
              {s}★
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <div className="reviews-sort-dropdown">
          <button className="sort-toggle-btn" onClick={() => setSortOpen(!sortOpen)}>
            <Filter size={14} />
            {SORT_OPTIONS.find((o) => o.key === sortKey)?.label}
            <ChevronDown size={14} className={sortOpen ? 'rotated' : ''} />
          </button>
          {sortOpen && (
            <div className="sort-menu card-glass">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.key}
                  className={`sort-menu-item ${sortKey === opt.key ? 'active' : ''}`}
                  onClick={() => { setSortKey(opt.key); setSortOpen(false); }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Write a Review CTA ── */}
      {isEnrolled ? (
        <button className="btn btn-primary write-review-btn" onClick={() => setShowModal(true)}>
          ✏️ Write a Review
        </button>
      ) : (
        <p className="enroll-to-review-hint">
          <CheckCircle size={14} /> Enroll in this course to leave a review.
        </p>
      )}

      {/* ── Reviews list ── */}
      <div className="reviews-list">
        {visibleReviews.length === 0 ? (
          <p className="no-reviews-msg">No reviews match this filter.</p>
        ) : (
          visibleReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card-header">
                <div
                  className="reviewer-avatar"
                  style={{ background: review.avatarColor }}
                >
                  {review.initials}
                </div>
                <div className="reviewer-meta">
                  <div className="reviewer-name-row">
                    <span className="reviewer-name">{review.name}</span>
                    {review.verified && (
                      <span className="verified-badge">
                        <CheckCircle size={11} /> Verified Student
                      </span>
                    )}
                    {review.completed && (
                      <span className="completed-badge">Course Completed</span>
                    )}
                  </div>
                  <div className="reviewer-rating-row">
                    <StarRow rating={review.rating} />
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
              </div>

              {review.title && <p className="review-title">"{review.title}"</p>}
              <p className="review-body">{review.body}</p>

              <div className="review-helpful-row">
                <span className="helpful-label">Helpful?</span>
                <button
                  className={`helpful-btn ${helpfulClicked.has(review.id) ? 'clicked' : ''}`}
                  onClick={() => handleHelpful(review.id)}
                >
                  <ThumbsUp size={13} /> {review.helpful}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ── Show more / less ── */}
      {totalFiltered > 3 && (
        <button
          className="btn btn-secondary show-more-reviews-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : `Show All ${totalFiltered} Reviews`}
        </button>
      )}

      {/* ── Write Review Modal ── */}
      {showModal && (
        <WriteReviewModal
          onClose={() => setShowModal(false)}
          onSubmit={handleNewReview}
        />
      )}
    </div>
  );
};

export default CourseReviews;

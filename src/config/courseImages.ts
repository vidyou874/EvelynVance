/**
 * Central configuration for course hero background images.
 * Using permanent, non-random Unsplash URLs with fixed photo IDs.
 * These will NOT change on page refresh.
 */
export interface CourseImageConfig {
  heroUrl: string;
  thumbUrl: string;
  alt: string;
}

export const COURSE_IMAGES: Record<string, CourseImageConfig> = {
  calculus: {
    heroUrl:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1600&h=600',
    thumbUrl:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400&h=225',
    alt: 'Mathematical equations and calculus notation on a blackboard',
  },
  physics: {
    heroUrl:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1600&h=600',
    thumbUrl:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=400&h=225',
    alt: 'Space and physics — planets and orbital mechanics',
  },
  cs: {
    heroUrl:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1600&h=600',
    thumbUrl:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400&h=225',
    alt: 'Programming code on a computer screen — data structures and algorithms',
  },
  sat: {
    heroUrl:
      'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1600&h=600',
    thumbUrl:
      'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=400&h=225',
    alt: 'Open notebook and pencil for standardized test preparation',
  },
  ib: {
    heroUrl:
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1600&h=600',
    thumbUrl:
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400&h=225',
    alt: 'Geometric ruler and compass for IB mathematics',
  },
};

/** Fallback for any unknown course ID */
export const DEFAULT_COURSE_IMAGE: CourseImageConfig = COURSE_IMAGES.calculus;

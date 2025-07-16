export const ANIMATION_DELAYS = {
  SPLASH_DELAY: 0.3,
  HEADER_DELAY: 0.5,
  HERO_DELAY: 2,
  SECTION_DELAY: 0.1,
  STAGGER_DELAY: 0.05,
} as const;

export const ANIMATION_DURATIONS = {
  SPLASH: 2.5,
  HEADER: 0.5,
  HERO: 0.8,
  SECTION: 0.8,
  HOVER: 0.3,
  TICKER: 20,
} as const;

export const BREAKPOINTS = {
  MOBILE: 768,
} as const;

export const SCROLL_MULTIPLIERS = {
  HERO_TEXT: 0.15,
  PROFILE_IMAGE: 0.15,
  PROFILE_ROTATION: 0.2,
} as const;

export const INTERSECTION_THRESHOLD = 0.3;
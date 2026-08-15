export const EXPLORER_CONFIG = {
  // Height multiplier per card for scroll track (e.g. 4 cards = 240vh track)
  vhPerCard: 60,
  minTrackVh: 200,
  
  // Transition speed for smooth snap / interpolation
  smoothingFactor: 0.12,
  
  // Default card dimensions on desktop
  cardWidth: 320,
  cardHeight: 420,
} as const;

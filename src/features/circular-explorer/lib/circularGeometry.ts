export type CardGeometry = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  zIndex: number;
  isActive: boolean;
  isAdjacent: boolean;
  angle: number;
};

type CalculateCardGeometryParams = {
  index: number;
  totalCards: number;
  activeIndex: number;
  stageWidth: number;
  stageHeight: number;
};

export function calculateCardGeometry({
  index,
  totalCards,
  activeIndex,
  stageWidth,
  stageHeight,
}: CalculateCardGeometryParams): CardGeometry {
  if (totalCards <= 0) {
    return {
      x: stageWidth / 2,
      y: stageHeight / 2,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      isActive: true,
      isAdjacent: false,
      angle: 0,
    };
  }

  // Radii for ellipse stage
  const rx = Math.min(stageWidth * 0.38, 480); // Horizontal radius
  const ry = Math.min(stageHeight * 0.22, 160); // Vertical radius

  // Angular step per card (spread evenly around ring or partial arc)
  const angleStep = (2 * Math.PI) / totalCards;

  // Angular offset relative to active card
  const relativeIndex = index - activeIndex;
  const angle = relativeIndex * angleStep;

  // Position on ellipse
  const x = stageWidth / 2 + rx * Math.sin(angle);
  // cos(angle) = 1 at front center (active position), -1 at back
  const cosAngle = Math.cos(angle);
  const y = stageHeight / 2 - ry * (1 - cosAngle);

  // Active status (closest to focus)
  const distFromActive = Math.abs(relativeIndex);
  const isActive = distFromActive < 0.45;
  const isAdjacent = !isActive && distFromActive < 1.45;

  // Visual Hierarchy (Scale, Opacity, Z-Index)
  // Scale: Active = 1.08, Adjacent = 0.85, Distant = 0.70
  let scale = 0.7 + 0.38 * Math.max(0, cosAngle);
  if (isActive) {
    scale = 1.08;
  }

  // Opacity: Active = 1.0, Adjacent = 0.75, Distant = 0.4
  let opacity = 0.4 + 0.6 * Math.max(0, cosAngle);
  if (isActive) {
    opacity = 1.0;
  } else if (isAdjacent) {
    opacity = 0.75;
  }

  // Z-Index: Front cards have higher z-index (up to 50)
  const zIndex = Math.round(30 + cosAngle * 20);

  return {
    x,
    y,
    scale,
    opacity,
    zIndex,
    isActive,
    isAdjacent,
    angle,
  };
}

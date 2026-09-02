// Border styles
export const borderBlack = "border-4 border-black";
export const borderBase = borderBlack;

// Shadow styles - bold neobrutalist shadows
export const shadowBold = "shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]";
export const shadowLifted = "shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]";
export const shadowPressed = "shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]";

// Card styles
export const cardHoverStyles = "transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]";
export const cardBaseStyles = `bg-white ${borderBlack} ${shadowBold} cursor-pointer`;

// Link styles
export const linkStyles = "mt-4 inline-block text-black hover:text-chart-3 hover:underline cursor-pointer font-bold";
export const linkDisabledStyles = "mt-4 inline-block text-gray-400 cursor-default font-bold";

// Empty state styles
export const emptyStateCardStyles = `${borderBlack} bg-gray-50 ${shadowBold}`;
export const emptyStateContentStyles = "p-6 text-center text-lg text-gray-500";

// Color constants - Electric palette
export const projectCardColors = ['bg-chart-2', 'bg-chart-3', 'bg-chart-4', 'bg-chart-5'] as const;
export const featuredProjectColors = ['bg-chart-5', 'bg-chart-4', 'bg-chart-3'] as const;

// Accent colors for variety
export const accentColors = [
  'bg-chart-1', // Electric Lime
  'bg-chart-2', // Hot Cyan
  'bg-chart-3', // Hot Pink
  'bg-chart-4', // Acid Green
  'bg-chart-5', // Electric Purple
] as const;

// Rotation classes for "ordered chaos"
export const chaosRotations = [
  'rotate-[-2deg]',
  'rotate-[1deg]',
  'rotate-[-1deg]',
  'rotate-[2deg]',
  'rotate-[-3deg]',
  'rotate-[3deg]',
] as const;

// Social platform colors
export const SOCIAL_COLORS = {
  LINKEDIN: {
    bg: 'bg-[#0077B5]',
    hover: 'hover:bg-[#005885]',
    border: 'border-black',
    hoverBorder: 'hover:border-[#005885]',
  },
  GITHUB: {
    bg: 'bg-[#24292e]',
    hover: 'hover:bg-[#181717]',
    border: 'border-green-500',
    hoverBorder: 'hover:border-[#181717]',
  },
} as const;

// Utility functions
export const createSlug = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};

// Border styles
export const borderBlack = "border-2 border-black";
export const borderBase = borderBlack;

// Card styles
export const cardHoverStyles = "transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(50,50,50,1)] active:translate-x-0 active:translate-y-0";
export const cardBaseStyles = `bg-white ${borderBlack} cursor-pointer`;

// Link styles
export const linkStyles = "mt-4 inline-block text-blue-600 hover:underline cursor-pointer";
export const linkDisabledStyles = "mt-4 inline-block text-gray-400 cursor-default";

// Empty state styles
export const emptyStateCardStyles = `${borderBlack} bg-gray-50`;
export const emptyStateContentStyles = "p-6 text-center text-lg text-gray-500";

// Color constants
export const projectCardColors = ['bg-chart-2', 'bg-chart-3', 'bg-chart-4', 'bg-chart-5'] as const;
export const featuredProjectColors = ['bg-chart-5', 'bg-chart-4', 'bg-chart-3'] as const;

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


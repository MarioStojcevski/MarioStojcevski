export const cardHoverStyles = "transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(50,50,50,1)] active:translate-x-0 active:translate-y-0";

export const cardBaseStyles = "bg-white border-2 border-black cursor-pointer";

export const linkStyles = "mt-4 inline-block text-blue-600 hover:underline cursor-pointer";

export const linkDisabledStyles = "mt-4 inline-block text-gray-400 cursor-default";

export const emptyStateCardStyles = "border-2 border-black bg-gray-50";

export const emptyStateContentStyles = "p-6 text-center text-lg text-gray-500";

export const projectCardColors = ['bg-chart-2', 'bg-chart-3', 'bg-chart-4', 'bg-chart-5'] as const;

export const createSlug = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};


export const getLocationUrl = (location: string): string => {
  return `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
};

export const isOnlineLocation = (location: string): boolean => {
  return location.toLowerCase() === "online";
};


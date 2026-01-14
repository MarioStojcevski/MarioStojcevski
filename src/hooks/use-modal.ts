import { useState, useCallback } from "react";

export const useModal = <T = null>() => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const open = useCallback((item?: T) => {
    if (item !== undefined) {
      setSelectedItem(item);
    }
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setSelectedItem(null);
  }, []);

  return {
    isOpen,
    selectedItem,
    open,
    close,
  };
};

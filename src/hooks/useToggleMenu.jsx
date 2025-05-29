import { useState } from 'react';

export function useToggleMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuButton = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return { isMenuOpen, toggleMenuButton };
}

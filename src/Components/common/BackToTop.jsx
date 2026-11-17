import React, { useState, useEffect } from 'react';

/**
 * Sticky "Back to top" button.
 * - Appears after the user scrolls down 300px.
 * - Fixed to the bottom‑right corner.
 * - Uses the project's colour palette (primary green #183D2C, light text #EDE8DA,
 *   accent hover #C5A16A).
 * - Smooth scrolls to the top when clicked.
 */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    // initial check in case page loads already scrolled
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-25 right-6 z-40 rounded-full bg-[#183D2C] text-[#EDE8DA] hover:bg-[#C5A16A] hover:text-[#183D2C] p-3 shadow-lg transition-colors duration-200"
    >
       Top ↑
    </button>
  );
};
export default BackToTop;

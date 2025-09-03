import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (/#section), let the browser scroll to that section.
    if (hash) return;
    // Jump to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); // use 'smooth' if you prefer
  }, [pathname, hash]);

  return null;
}

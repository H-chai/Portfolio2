import { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToContext = createContext(null);

export function ScrollProvider({ children }) {
  const projectSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const location = useLocation();

  const scrollToProject = () => {
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        if (location.state.scrollTo === 'projects') {
          scrollToProject();
        } else if (location.state.scrollTo === 'contact') {
          scrollToContact();
        }
      }, 300);
    }
  }, [location]);

  return (
    <ScrollToContext.Provider
      value={{
        projectSectionRef,
        contactSectionRef,
        scrollToProject,
        scrollToContact,
      }}
    >
      {children}
    </ScrollToContext.Provider>
  );
}

export function useScroll() {
  const context = useContext(ScrollToContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }

  return context;
}

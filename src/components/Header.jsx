import { Link } from 'react-router-dom';
import { useToggleMenu } from '../hooks/useToggleMenu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useMediaQuery } from '@mui/material';

export function Header() {
  const { isMenuOpen, toggleMenuButton } = useToggleMenu();
  const isMobile = useMediaQuery('(max-width: 1023px)');
  const showCloseIcon = isMobile && isMenuOpen;
  const showMenuIcon = isMobile && !isMenuOpen;

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-6 font-clash text-dark-green z-10 lg:px-16 lg:py-10">
      <Link to="/" className="relative z-30 font-medium text-lg">
        HØ
      </Link>

      {isMobile && (
        <nav
          className={`
            fixed top-0 right-0 left-0 h-screen flex justify-center bg-yellow
            transition-transform duration-500 ease-in-out z-20
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          `}
        >
          <ul className="flex flex-col justify-center items-center gap-10 font-medium text-2xl">
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      )}

      {showCloseIcon && (
        <button
          onClick={toggleMenuButton}
          className="relative z-30 flex items-center"
        >
          <CloseOutlinedIcon />
        </button>
      )}

      {showMenuIcon && (
        <button
          onClick={toggleMenuButton}
          className="relative z-30 flex items-center"
        >
          <MenuOutlinedIcon />
        </button>
      )}

      {!isMobile && (
        <nav>
          <ul className="flex items-center gap-10 font-medium text-lg uppercase">
            <li className="overflow-hidden cursor-pointer group">
              <span className="block text-slide">projects</span>
            </li>
            <li className="overflow-hidden cursor-pointer group">
              <span className="block text-slide">contact</span>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

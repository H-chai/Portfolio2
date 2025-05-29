import { useMediaQuery } from '@mui/material';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

export function Footer() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  return (
    <footer className="bg-light-green font-clash text-dark-green px-4 py-4">
      <div className="grid grid-cols-2 gap-4 mb-16">
        <div className="uppercase ">
          <h3 className="font-medium pb-4 border-b-1 border-transparent-green mb-4">
            Navigation
          </h3>
          <nav>
            <ul className="text-sm flex flex-col gap-2">
              <li className="overflow-hidden cursor-pointer group w-fit">
                <span className="block text-slide">projects</span>
              </li>
              <li className="overflow-hidden cursor-pointer group w-fit">
                <span className="block text-slide">contact</span>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="uppercase font-medium pb-4 border-b-1 border-transparent-green mb-4">
            Social
          </h3>
          <nav>
            <ul className="text-sm flex flex-col gap-2">
              <li className="flex items-center overflow-hidden cursor-pointer group w-fit">
                <span className="block text-slide">LinkedIn</span>
                <ArrowOutwardOutlinedIcon className="!w-4 ml-1.5" />
              </li>
              <li className="flex items-center overflow-hidden cursor-pointer group w-fit">
                <span className="block text-slide">Github</span>
                <ArrowOutwardOutlinedIcon className="!w-4 ml-1.5" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="pt-4 border-t-1 border-transparent-green">
        <p className="text-xs text-center">©2025 Hikari Øverby</p>
      </div>
    </footer>
  );
}

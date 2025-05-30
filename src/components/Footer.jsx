import { useMediaQuery } from '@mui/material';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export function Footer() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  return (
    <footer className="bg-light-green font-clash text-dark-green px-4 pt-4 lg:px-16">
      <div className="text-dark-green bg-light-green font-clash px-4 pt-4 pb-12 sm:pb-16 lg:px-16 lg:pb-20">
        <a
          href=""
          className="flex py-2 px-6 items-center justify-center gap-2 bg-yellow rounded-full cursor-pointer group w-fit mx-auto sm:gap-4 sm:py-4 lg:gap-6 lg:px-8"
        >
          <span className="overflow-hidden">
            <h1 className="font-bold text-3xl uppercase text-slide whitespace-nowrap sm:text-5xl lg:text-7xl">
              Get in touch
            </h1>
          </span>

          <span className="w-10 h-10 bg-dark-green flex items-center justify-center rounded-full sm:w-14 sm:h-14 lg:w-20 lg:h-20">
            <EmailOutlinedIcon className="text-yellow !w-7 !h-7 sm:!w-8 sm:!h-8 lg:!w-10 lg:!h-10" />
          </span>
        </a>
      </div>
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

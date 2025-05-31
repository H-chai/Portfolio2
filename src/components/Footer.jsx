import { useMediaQuery } from '@mui/material';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export function Footer() {
  const isMobile = useMediaQuery('(max-width: 1023px)');
  return (
    <footer className="bg-light-green font-clash text-dark-green px-4 pt-4 lg:px-16">
      <div className="text-dark-green bg-light-green font-clash pt-4 pb-12 sm:pb-16 lg:pb-20">
        <a
          href=""
          className="flex items-center justify-between bg-yellow rounded-full cursor-pointer group mx-auto w-fit px-4 py-2 gap-2 sm:px-6 sm:gap-3 lg:px-10 lg:gap-6"
        >
          <span className="overflow-hidden">
            <h1 className="font-medium text-[8vw] uppercase text-slide whitespace-nowrap lg:text-[7vw]">
              Get in touch
            </h1>
          </span>

          <span className="w-[10vw] h-[10vw] bg-dark-green flex items-center justify-center rounded-full sm:w-[9vw] sm:h-[9vw] lg:w-[8vw] lg:h-[8vw]">
            <EmailOutlinedIcon className="text-yellow !w-[6vw] !h-[6vw] md:!w-[5vw] md:!h-[5vw]" />
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

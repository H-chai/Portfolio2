import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

export function Main() {
  return (
    <div className="uppercase font-clash text-dark-green bg-light-green px-4 h-screen relative lg:px-16">
      <div className="absolute top-1/5 left-4 lg:left-16">
        <h1 className="font-medium text-5xl w-fit sm:text-7xl lg:text-8xl xl:text-9xl xl:inline-block">
          Hikari
        </h1>
        <h1 className="font-medium text-5xl w-fit ml-1.5 sm:text-7xl lg:text-8xl xl:text-9xl xl:inline-block xl:ml-6">
          Øverby
        </h1>
      </div>
      <div className="w-fit ml-auto absolute bottom-1/4 right-4 lg:right-12 xl:bottom-1/5">
        <h2 className="font-medium text-5xl w-fit sm:text-7xl lg:text-8xl xl:text-9xl">
          Frontend
        </h2>
        <h2 className="font-medium text-5xl w-fit ml-1.5 sm:text-7xl lg:text-8xl xl:text-9xl xl:ml-6">
          Developer
        </h2>
      </div>
      <div className="flex items-center justify-between absolute bottom-6 left-4 right-4 lg:left-16 lg:right-16">
        <h3 className="font-medium w-fit flex items-center gap-1.5 lg:text-2xl lg:gap-2">
          Open to work
          <SentimentSatisfiedAltOutlinedIcon className="!w-6 !h-6 lg:!w-7 lg:!h-7" />
        </h3>
        <img
          src="scrollDown.png"
          alt="scroll down image"
          className="w-28 h-28 animate-rotation"
        />
      </div>
    </div>
  );
}

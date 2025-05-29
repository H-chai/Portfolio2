import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';

export function SelectedProjects() {
  return (
    <div className="bg-light-green px-4 font-clash pt-24 lg:px-16">
      <h2 className="text-dark-green text-lg uppercase font-medium mb-8">
        Selected Projects
      </h2>
      <div className="flex flex-col gap-6 pb-12 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        <div className="px-6 pt-6 pb-24 bg-dark-green rounded-2xl relative">
          <img src="holidaze.png" alt="holidaze thumbnail" />
          <div className="mt-2 text-light-green">
            <p className="text-sm">Design/Development</p>
            <h3 className="text-3xl font-bold my-2">Holidaze</h3>
            <p>
              Holidaze is a venue booking platform built with React, where users
              can explore, book, and manage holiday stays.
            </p>
          </div>
          <button className="bg-yellow flex items-center pl-4 pr-1.5 py-1.5 gap-1.5 rounded-full cursor-pointer group w-fit ml-auto absolute bottom-6 right-6">
            <span className="overflow-hidden">
              <span className="text-dark-green font-medium block text-slide">
                View
              </span>
            </span>
            <span className="w-8 h-8 bg-dark-green flex items-center justify-center rounded-full">
              <ArrowOutwardOutlinedIcon className="text-yellow !w-5 !h-5" />
            </span>
          </button>
        </div>
        <div className="px-6 pt-6 pb-24 bg-dark-green rounded-2xl relative">
          <img src="CrediBid.png" alt="CrediBid thumbnail" />
          <div className="mt-2 text-light-green">
            <p className="text-sm">Design/Development</p>
            <h3 className="text-3xl font-bold my-2">CrediBid</h3>
            <p>
              CredBid is an auction site where users bid with credits. New users
              get 1000 credits. Only registered users can place bids.
            </p>
          </div>
          <button className="bg-yellow flex items-center pl-4 pr-1.5 py-1.5 gap-1.5 rounded-full cursor-pointer group w-fit ml-auto absolute bottom-6 right-6">
            <span className="overflow-hidden">
              <span className="text-dark-green font-medium block text-slide">
                View
              </span>
            </span>
            <span className="w-8 h-8 bg-dark-green flex items-center justify-center rounded-full">
              <ArrowOutwardOutlinedIcon className="text-yellow !w-5 !h-5" />
            </span>
          </button>
        </div>
        <div className="px-6 pt-6 pb-24 bg-dark-green rounded-2xl relative">
          <img src="eCom.png" alt="eCom thumbnail" />
          <div className="mt-2 text-light-green">
            <p className="text-sm">Design/Development</p>
            <h3 className="text-3xl font-bold my-2">eCom</h3>
            <p>
              A React e-commerce store where users browse items, view details,
              add to cart, checkout, and contact via a validated form.
            </p>
          </div>
          <button className="bg-yellow flex items-center pl-4 pr-1.5 py-1.5 gap-1.5 rounded-full cursor-pointer group w-fit ml-auto absolute bottom-6 right-6">
            <span className="overflow-hidden">
              <span className="text-dark-green font-medium block text-slide">
                View
              </span>
            </span>
            <span className="w-8 h-8 bg-dark-green flex items-center justify-center rounded-full">
              <ArrowOutwardOutlinedIcon className="text-yellow !w-5 !h-5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

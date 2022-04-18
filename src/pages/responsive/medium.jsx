import {
  HomeIcon,
  PlusCircleIcon,
  DocumentTextIcon,
  CalendarIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center py-0 lg:py-6 fixed w-full left-0 right-0 z-50">
      <nav className="shadow-md rounded-none lg:rounded-full border transition-all w-full lg:w-2/3 bg-white p-2">
        <div className="grid grid-cols-4">
          <div className="border-r-2">
            <button
              type="button"
              className="flex flex-col justify-center items-center w-full h-full rounded-l-full"
            >
              <span className="inline-block">
                <PlusCircleIcon className="w-5 h-5" />
              </span>
              <span className="inline-block text-sm text-gray-700">
                Buat komunitas
              </span>
            </button>
          </div>
          <div className="border-r-2">
            <button
              type="button"
              className="flex flex-col justify-center items-center w-full h-full rounded-l-full"
            >
              <span className="inline-block">
                <DocumentTextIcon className="w-5 h-5" />
              </span>
              <span className="inline-block text-sm text-gray-700">Aturan</span>
            </button>
          </div>
          <div className="border-r-2">
            <button
              type="button"
              className="flex flex-col justify-center items-center w-full h-full rounded-l-full"
            >
              <span className="inline-block">
                <CalendarIcon className="w-5 h-5" />
              </span>
              <span className="inline-block text-sm text-gray-700">Event</span>
            </button>
          </div>
          <div className="">
            <button
              type="button"
              className="flex flex-col justify-center items-center w-full h-full rounded-r-full"
            >
              <span className="inline-block">
                <BriefcaseIcon className="w-5 h-5" />
              </span>
              <span className="inline-block text-sm text-gray-700">
                Lowongan Pekerjaan
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Cover = () => {
  return (
    <div className="h-full relative">
      <img
        src="/bg-cover.jpg"
        alt="bg-cover"
        className="h-full object-cover w-full"
      />
      <div className="absolute top-0 left-0 right-0 h-full text-white bg-gradient-to-t from-gray-800 to-transparent">
        <div className="w-full lg:w-2/3  mx-auto h-full pt-28">
          <div className="h-full flex flex-col space-y-2 justify-center items-center lg:items-start w-full lg:w-1/2 ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Communitees.</h1>
              <h2 className="text-4xl font-bold">
                Build for people, Grow with people
              </h2>
            </div>
            <p className="my-3 text-center lg:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              eaque distinctio fugiat libero assumenda dolorem quidem reiciendis
              illum nulla. Fugit eligendi sequi numquam obcaecati dolores
              necessitatibus omnis ipsam error earum!
            </p>
            <div className="flex flex-col px-3 lg:px-0 lg:flex-row justify-start items-center w-full space-y-2 lg:space-y-0 space-x-0 lg:space-x-2  h-1/3 lg:h-auto">
              <a
                href="#"
                className="rounded-xl w-full lg:w-1/2 uppercase bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-md p-3 h-20 inline-flex justify-start items-center"
              >
                Join Communitees Now
              </a>
              <a
                href="#"
                className="rounded-xl w-full lg:w-1/2 uppercase  bg-white text-green-800 shadow-md p-3 h-20 inline-flex justify-start items-center"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MediumPage = () => {
  return (
    <main className="h-screen w-full bg-gray-50">
      <Navbar />
      <Cover />
    </main>
  );
};

export default MediumPage;

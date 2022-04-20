import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav className="h-max fixed left-0 right-0 w-full shadow-md bg-white z-50">
      <div className="container mx-auto py-3 px-3 lg:px-0">
        <div className="flex justify-between items-center">
          <div className="font-bold text-green-600 text-lg flex-1 lg:flex-auto">
            Comunitees
          </div>
          <div className="visible lg:invisible transition-all">
            <button type="button" className="border rounded-lg p-2">
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-end items-center gap-4 text-sm invisible lg:visible w-0 lg:w-auto">
            <a href="#" className="inline-block hover:text-green-700 ">
              Beranda
            </a>
            <a href="#" className="inline-block hover:text-green-700 ">
              Lowongan Pekerjaan
            </a>
            <a href="#" className="inline-block hover:text-green-700 ">
              Daftar
            </a>
            <a
              href="#"
              className="inline-block border py-2 px-4 rounded-full border-green-400 text-green-700 font-bold"
            >
              Masuk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const SubContentTopLeft = () => {
  return (
    <div className="fixed rounded-lg left-0 h-max  w-[20%] ml-[3.2rem] border text-center invisible lg:visible">
      <div className="flex flex-col rounded-lg justify-between items-stretch">
        <div className="bg-blue-200 py-2 rounded-tr-lg rounded-tl-lg">
          Content 1
        </div>
        <div className="h-24 flex justify-center items-center">Content 2</div>
      </div>
    </div>
  );
};

const SubContentTopRight = () => {
  return (
    <div className="fixed rounded-lg right-0 h-max w-[20%] mr-[3.2rem] border text-center invisible lg:visible">
      <div className="flex flex-col rounded-lg justify-between items-stretch">
        <div className="bg-blue-200 py-2 rounded-tr-lg rounded-tl-lg">
          Content 1
        </div>
        <div className="h-24 flex justify-center items-center">Content 2</div>
      </div>
    </div>
  );
};

const ListPosts = () => {
  return (
    <div className="w-full lg:w-[50%] mx-auto space-y-3">
      <div className="border rounded-2xl ">
        <div className="p-3 font-bold">Post Title</div>
        <div className="min-h-[15rem] bg-blue-300 text-white rounded-br-2xl rounded-bl-2xl p-3">
          Content Here
        </div>
      </div>
      <div className="border rounded-2xl">
        <div className="p-3 font-bold">Post Title</div>
        <div className="min-h-[15rem] bg-blue-300 text-white rounded-br-2xl rounded-bl-2xl p-3">
          Content Here
        </div>
      </div>
      <div className="border rounded-2xl">
        <div className="p-3 font-bold">Post Title</div>
        <div className="min-h-[15rem] bg-blue-300 text-white rounded-br-2xl rounded-bl-2xl p-3">
          Content Here
        </div>
      </div>
      <div className="border rounded-2xl">
        <div className="p-3 font-bold">Post Title</div>
        <div className="min-h-[15rem] bg-blue-300 text-white rounded-br-2xl rounded-bl-2xl p-3">
          Content Here
        </div>
      </div>
    </div>
  );
};

const SubContentBottomLeft = () => {
  return (
    <div className="fixed bg-red-100 bottom-0 left-0 h-10 w-[20%] ml-[3.2rem] border text-center mb-16 invisible lg:visible">
      bottom left
    </div>
  );
};

const SubContentBottomRight = () => {
  return (
    <div className="fixed bg-red-100 bottom-0 right-0 h-10 w-[20%] mr-[3.2rem] border text-center mb-16 invisible lg:visible">
      bottom right
    </div>
  );
};

const Content = () => {
  return (
    <div className="relative container pt-20 pb-16 px-3 lg:px-0 mx-auto h-full transition-all">
      <SubContentTopLeft />
      <SubContentTopRight />
      <ListPosts />
      <SubContentBottomLeft />
      <SubContentBottomRight />
    </div>
  );
};

const AdvancedPage = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Content />
    </div>
  );
};

export default AdvancedPage;

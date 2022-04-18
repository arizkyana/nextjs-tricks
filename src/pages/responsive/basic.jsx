const BasicPage = () => {
  return (
    <div className="p-3">
      <div className="mb-5">
        <h1 className="text-3xl mb-4">Ganti Warna</h1>
        <div className="lg:bg-red-300 bg-blue-600 text-white lg:text-red-600 p-3 rounded-md text-center mb-3">
          Merah
        </div>
        <div className="lg:bg-green-300 bg-red-600 text-white lg:text-green-600 p-3 rounded-md text-center mb-3">
          Hijau
        </div>
        <div className="lg:bg-blue-300 bg-green-600 text-white lg:text-blue-600 p-3 rounded-md text-center mb-3">
          Biru
        </div>
      </div>

      <div className="mb-5">
        <h1 className="text-3xl mb-4">Ganti Layout</h1>
        <div className="flex lg:flex-col flex-row space-x-1">
          <div className="bg-red-300 text-red-600 flex-1 p-3 rounded-md text-center mb-3">
            Merah
          </div>
          <div className="bg-green-300  text-green-600 flex-1 p-3 rounded-md text-center mb-3">
            Hijau
          </div>
          <div className="bg-blue-300  text-blue-600 flex-1 p-3 rounded-md text-center mb-3">
            Biru
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl mb-4">Ganti Bentuk</h1>
        <div className="flex flex-row justify-center space-x-3 h-28">
          <div className="bg-red-300 text-red-600 w-28 p-3 h-full inline-flex justify-center items-center lg:rounded-md rounded-full text-center mb-3">
            Merah
          </div>
          <div className="bg-green-300  text-green-600 w-28 p-3 h-full inline-flex justify-center items-center lg:rounded-md rounded-full text-center mb-3">
            Hijau
          </div>
          <div className="bg-blue-300  text-blue-600 w-28 p-3 h-full inline-flex justify-center items-center lg:rounded-md rounded-full text-center mb-3">
            Biru
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicPage;

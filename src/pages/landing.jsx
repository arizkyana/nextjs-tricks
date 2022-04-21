const Landing = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-300 pt-6">
        <div
          className="container mx-auto h-[20rem]"
          style={{
            background: `url('bg-cover-2.png') center center no-repeat cover`,
          }}
        >
          <img
            src="bg-cover-2.png"
            alt="bg-cover-2"
            className="h-full w-full object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;

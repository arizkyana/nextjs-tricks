import { useState } from "react";

const CoverProfile = () => {
  const [previewCover, setPreviewCover] = useState();
  const [previewProfile, setPreviewProfile] = useState();

  const handleChangeFileCover = (e) => {
    const files = e.target.files; // FileList -> {0: File, length: 1}
    // const user = {
    //   name: "Deka",
    // };

    // user.name;
    // user['name'];

    if (files) {
      setPreviewCover(URL.createObjectURL(files[0]));
    }
    console.log("files > ", files);
  };
  const handleChangeFileProfile = (e) => {
    const files = e.target.files; // FileList -> {0: File, length: 1}
    // const user = {
    //   name: "Deka",
    // };

    // user.name;
    // user['name'];

    if (files) {
      setPreviewProfile(URL.createObjectURL(files[0]));
    }
    console.log("files > ", files);
  };

  return (
    <div className="max-w-lg h-screen mx-auto border">
      <div className="p-3">
        <div className="w-full">
          <h1 className="text-lg">Gambar 1</h1>
          <label
            htmlFor="upload-cover"
            className="border inline-block p-3 w-full"
          >
            upload 1<div>{previewCover && <img src={previewCover} />}</div>
            <input
              // multiple
              type="file"
              id="upload-cover"
              accept="image/*"
              className="hidden"
              onChange={handleChangeFileCover}
            />
          </label>
        </div>
        <div>
          <h1 className="text-lg">Gambar 2</h1>
          <label htmlFor="upload-profile">
            upload 2<div>{previewProfile && <img src={previewProfile} />}</div>
            <input
              type="file"
              id="upload-profile"
              accept="image/*"
              onChange={handleChangeFileProfile}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CoverProfile;

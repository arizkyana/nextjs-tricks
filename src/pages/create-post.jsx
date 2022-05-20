import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useCreatePostDispatcher } from "../redux/reducers/create-post";

const validationSchema = Yup.object({
  post: Yup.string().required(),
});

const initialValues = {
  post: "",
  files: [],
};

const CreatePost = () => {
  const [previews, setPreviews] = useState();

  const {
    createPost: { loading },
    doSubmit,
  } = useCreatePostDispatcher();
  const onSubmit = async (values) => {
    await doSubmit(values);
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
    setFieldValue,
  } = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  const handleChangeFiles = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const filePreviews = [];
      for (let i = 0; i < files.length; i++) {
        filePreviews.push(files[i]);
      }

      setPreviews(filePreviews);
      setFieldValue("files", filePreviews);

      e.target.value = "";
    }
  };

  const renderPreviews = () => {
    if (previews && previews.length > 0) {
      return previews.map((item) => (
        <div className="inline-flex justify-center items-center text-center h-24 w-24  border bg-gray-200 text-gray-700 text-sm cursor-pointer hover:bg-gray-300 rounded-lg">
          <img
            src={URL.createObjectURL(item)}
            className="object-cover h-full w-full rounded-lg"
          />
        </div>
      ));
    }
    return <></>;
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-lg mx-auto px-1 py-5">
        <form onSubmit={handleSubmit}>
          <div className="border rounded-lg border-gray-100 shadow-sm p-3 flex flex-col justify-start items-start">
            <textarea
              rows={10}
              className="w-full rounded-lg outline-none  scrol"
              placeholder="Tulis cerita kamu disini..."
              name="post"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className="my-3 grid grid-cols-3 lg:grid-cols-4 gap-2">
              <label
                htmlFor="uploads"
                className="inline-flex justify-center items-center text-center h-24 w-24 p-3 border bg-gray-200 text-gray-700 text-sm cursor-pointer hover:bg-gray-300 rounded-lg"
              >
                Pilih Gambar
                <input
                  type="file"
                  name="files"
                  id="uploads"
                  className="hidden"
                  accept="image/*"
                  onChange={handleChangeFiles}
                  multiple
                />
              </label>
              {renderPreviews()}
            </div>
            <div className="flex  w-full justify-end items-end space-x-2 mt-3">
              <button
                type="button"
                className="px-5 py-2 text-sm shadow-sm border rounded-lg hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-sm shadow-sm  rounded-lg bg-blue-500 border-blue-500 hover:bg-blue-600 text-white"
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

import { useFormik } from "formik";
import { useLoginDispatcher } from "../redux/reducers/login";

const LoginContainer = () => {
  const {
    login: { loading, errMessage },
    doLogin,
  } = useLoginDispatcher();

  const handleOnSubmit = async (values) => {
    await doLogin(values);
  };

  const { handleChange, handleBlur, handleSubmit, errors, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleOnSubmit,
  });
  return (
    <div className="min-h-screen flex justify-center items-center container mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-1/4">
        {errMessage.title && errMessage.content && (
          <div className="bg-red-300 text-red-700 p-3">
            <div className="font-bold">{errMessage.title}</div>
            <div>{errMessage.content}</div>
          </div>
        )}
        <div className="flex flex-col space-y-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="border p-3"
            placeholder="username"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="border p-3"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="flex justify-end items-center">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2">
            {loading ? "Silahkan tunggu..." : "Masuk"}
          </button>
        </div>
      </form>
    </div>
  );
};

const LoginPage = () => {
  return <LoginContainer />;
};

export default LoginPage;

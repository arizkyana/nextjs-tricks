import { useFormik } from "formik";
import { useEffect } from "react";
import { useRegistrasiDispatcher } from "../redux/reducers/registrasi";

const Registrasi = () => {
  const {
    registrasi: { provinsi, kota },
    loadDataProvinsi,
    loadDataKota,
  } = useRegistrasiDispatcher();

  useEffect(() => {
    loadDataProvinsi();
  }, []);

  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: {
      provinsi: null,
      kota: null,
    },
    onSubmit(values) {
      console.log("values > ", values);
    },
  });

  useEffect(() => {
    if (values.provinsi) {
      loadDataKota(values.provinsi);
    }
  }, [values]);

  return (
    <div className="min-h-screen justify-center items-center flex">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <select
          name="provinsi"
          className="border p-3 shadow-sm outline-none"
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="">Pilih Provinsi</option>
          {provinsi &&
            provinsi.length > 0 &&
            provinsi.map((p) => <option value={p.id}>{p.name}</option>)}
        </select>

        <div>{JSON.stringify(kota)}</div>
      </form>
    </div>
  );
};

export default Registrasi;

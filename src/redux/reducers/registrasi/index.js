import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  provinsi: [],
  kota: [],
};

const slices = createSlice({
  initialState,
  name: "Registrasi",
  reducers: {
    setProvinsi(state, action) {
      Object.assign(state, {
        ...state,
        provinsi: action.payload,
      });
    },
    setKota(state, action) {
      Object.assign(state, {
        ...state,
        kota: action.payload,
      });
    },
  },
});

const { setProvinsi, setKota } = slices.actions;

export const useRegistrasiDispatcher = () => {
  const { registrasi } = useSelector((state) => state);
  const dispatch = useDispatch();

  const loadDataProvinsi = async () => {
    try {
      const { data } = await axios({
        url: "/api/provinsi",
        method: "get",
      });
      dispatch(setProvinsi(data));
    } catch (error) {
      console.log("error > ", error);
    }
  };

  const loadDataKota = async (idProvinsi) => {
    try {
      const { data } = await axios({
        url: `/api/kota?idProvinsi=${idProvinsi}`,
        method: "get",
      });
      dispatch(setKota(data));
    } catch (error) {
      console.log("error > ", error);
    }
  };

  return {
    registrasi,
    loadDataProvinsi,
    loadDataKota,
  };
};

export default slices.reducer;

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const slices = createSlice({
  name: "login",
  initialState: {
    loading: false,
    errMessage: {
      title: null,
      content: null,
    },
  },
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
    setErrMessage(state, action) {
      Object.assign(state, {
        ...state,
        errMessage: action.payload,
      });
    },
  },
});

const { toggleLoading, setErrMessage } = slices.actions;

export const useLoginDispatcher = () => {
  const { login } = useSelector((state) => state);
  const dispatch = useDispatch();
  const makeLoading = (loading) => dispatch(toggleLoading(loading));

  const doLogin = async (payload) => {
    dispatch(toggleLoading(true));
    try {
      const response = await axios({
        url: "https://myappventure-api.herokuapp.com/api/user-login/login",
        method: "post",
        data: payload,
      });
      const { data } = response;
      if (data.status === "404") {
        console.log(`error > ${data.message}`);
        dispatch(toggleLoading(false));
        dispatch(
          setErrMessage({
            title: "Oops... terjadi kesalahan",
            content: data.message,
          })
        );
        return;
      }

      // kondisi berhasil
      // const accessToken = data.access_token;

      localStorage.setItem("access_token", data.access_token);
      dispatch(toggleLoading(false));
    } catch (error) {
      console.log("error > ", error);
    }
  };

  return {
    login,
    makeLoading,
    doLogin,
  };
};

export default slices.reducer;

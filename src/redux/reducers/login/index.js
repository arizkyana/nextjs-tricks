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

    const formData = new FormData();
    formData.append("username", payload.username);
    formData.append("password", payload.password);

    try {
      const { data: loginData } = await axios({
        url: "https://markas-gamer.herokuapp.com/mager/login",
        method: "post",
        data: formData,
      });

      const { data: userData } = await axios({
        url: `https://markas-gamer.herokuapp.com/mager/user/${loginData.idUser}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${loginData.access_token}`,
        },
      });

      console.log("userData > ", userData);

      // if (data.status === "404") {
      //   console.log(`error > ${data.message}`);
      //   dispatch(toggleLoading(false));
      //   dispatch(
      //     setErrMessage({
      //       title: "Oops... terjadi kesalahan",
      //       content: data.message,
      //     })
      //   );
      //   return;
      // }

      // kondisi berhasil
      // const accessToken = data.access_token;

      // localStorage.setItem("access_token", data.access_token);
      dispatch(toggleLoading(false));
    } catch (error) {
      console.log("error > ", error.response.data.message);
    }
  };

  return {
    login,
    makeLoading,
    doLogin,
  };
};

export default slices.reducer;

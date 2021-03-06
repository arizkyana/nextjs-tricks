import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  loading: false,
};

const slices = createSlice({
  initialState,
  name: "CreatePost",
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
  },
});

const { toggleLoading } = slices.actions;

export const useCreatePostDispatcher = () => {
  const { createPost } = useSelector((state) => state);
  const dispatch = useDispatch();

  const setLoading = (loading) => dispatch(toggleLoading(loading));

  const doSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("post", values.post);
      formData.append("files[]", values.files);
      const { data } = await axios({
        url: "http://create.post.com",
        method: "post",
        data: formData,
        headers: {
          Authorization: `Bearer jwt-token-disini`,
        },
      });
    } catch (error) {
      console.log("error > ", error);
    }
  };

  return {
    createPost,
    setLoading,
    doSubmit,
  };
};

export default slices.reducer;

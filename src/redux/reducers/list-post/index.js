import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  loading: false,
  posts: [],
};

const slices = createSlice({
  initialState,
  name: "ListPost",
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
    setPosts(state, action) {
      Object.assign(state, {
        ...state,
        posts: action.payload,
      });
    },
  },
});

const { toggleLoading, setPosts } = slices.actions;

export const useListPostDispatcher = () => {
  const { listPost } = useSelector((state) => state);
  const dispatch = useDispatch();
  const loadPosts = async () => {
    try {
      dispatch(toggleLoading(true));
      const response = await axios({
        url: "https://binarfe-api-server.herokuapp.com/api/posts?pagination[pageSize]=10&pagination[page]=1&filters[isPublish][$eq]=true&sort[createdAt]=desc",
        method: "get",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjUzMzE3Njk2LCJleHAiOjE2NTU5MDk2OTZ9.jvnGpjKonRixTlfmEai6bLDFsFnuaNiBHIl_jXUyGGw`,
        },
      });
      const { data } = response;
      console.log("response > ", response.data.data);
      dispatch(setPosts(data.data));
      dispatch(toggleLoading(false));
    } catch (error) {
      dispatch(toggleLoading(false));
    }
  };
  return {
    listPost,
    loadPosts,
  };
};

export default slices.reducer;

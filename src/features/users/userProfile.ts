import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface UserState {
  profile: unknown[],
  id: string,
  name: string;
  image: string;
  tags: unknown[];
  nickname: string;
  follow: unknown[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: [],
  id: '',
  name: '',
  image: '',
  tags: [],
  nickname: '',
  follow: [],
  loading: false,
  error: null,
};

const fetchUserProfile = createAsyncThunk(
  "users/fetchUserProfile",
  async (id) => {
    const response = await axios.get(
      `https://swapi.dev/api/people/${id}`
    );

    return response.data;
  }
);

const userSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setFollows(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload.results;
      state.follow.push(state.name);
    });

    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch users";
    });
  },
});

export const { setId, setFollows } = userSlice.actions;
export { fetchUserProfile };

export default userSlice.reducer;

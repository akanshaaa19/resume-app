import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showResume: false, showSideBar: false },
  reducers: {
    showResume(state, action) {
      state.showResume = action.payload;
    },
    showSideBar(state, action){
      state.showSideBar = action.payload;
    }
  },
});

const templateSlice = createSlice({
  name: "template",
  initialState: { template: "resume01" },
  reducers: {
    setTemplate(state, action) {
      state.template = action.payload;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, token: null, email: null },
  reducers: {
    logInHandeler(state, action) {
      // if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("email", action.payload.email);
        state.isLoggedIn = true;
      // }
    },
    logOutHandeler(state) {
      localStorage.clear();
      state.isLoggedIn = false;
    },
  },
});

export const uiAction = uiSlice.actions;
export const templateAction = templateSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    template: templateSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;

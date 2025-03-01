import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// نوع داده‌های مربوط به وضعیت احراز هویت
interface AuthState {
  user: string | null;
  token: string | null;
  isAuthenticated: boolean;
}

// مقدار اولیه وضعیت (در صورتی که کاربر از قبل لاگین کرده باشد، اطلاعات از `localStorage` خوانده می‌شود)
const initialState: AuthState = {
  user: localStorage.getItem("user") || null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
};

// ایجاد Slice برای مدیریت احراز هویت
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ورود کاربر (ذخیره اطلاعات کاربر و توکن در Redux و localStorage)
    login: (state, action: PayloadAction<{ user: string; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem("user", action.payload.user);
      localStorage.setItem("token", action.payload.token);
    },

    // خروج کاربر (پاک کردن اطلاعات از Redux و localStorage)
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

// خروجی اکشن‌ها و ریدوسر
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

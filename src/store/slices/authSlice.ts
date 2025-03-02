import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// نوع داده‌های مربوط به وضعیت احراز هویت
interface AuthState {
  user: string | null;
  token: string | null;
  isAuthenticated: boolean;
}

// تابع کمکی برای خواندن `localStorage`
const getLocalStorageItem = (key: string): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};

// مقدار اولیه وضعیت (خواندن از `localStorage`)
const initialState: AuthState = {
  user: getLocalStorageItem("user"),
  token: getLocalStorageItem("token"),
  isAuthenticated: !!getLocalStorageItem("token"),
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

    // **آپدیت نام کاربر**
    updateUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      localStorage.setItem("user", action.payload);
    },
  },
});

// خروجی اکشن‌ها و ریدوسر
export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/slices/authSlice";
import { RootState } from "../store/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [newName, setNewName] = useState(user || "");
  const [newPassword, setNewPassword] = useState("");

  const handleSave = () => {
    if (newName.trim() === "" || newPassword.trim() === "") {
      toast.error("نام کاربری و رمز عبور نمی‌تواند خالی باشد!");
      return;
    }

    dispatch(updateUser(newName));
    localStorage.setItem("password", newPassword); // ذخیره رمز عبور (در پروژه واقعی نباید رمز را این‌گونه ذخیره کرد)
    toast.success("اطلاعات با موفقیت ذخیره شد! ✅");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-right">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">تنظیمات حساب</h2>

        {/* فیلد تغییر نام کاربری */}
        <label className="block mb-2 text-gray-600">نام کاربری:</label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />

        {/* فیلد تغییر رمز عبور */}
        <label className="block mt-4 mb-2 text-gray-600">رمز عبور جدید:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />

        {/* دکمه ذخیره تغییرات */}
        <button
          onClick={handleSave}
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          ذخیره تغییرات
        </button>
      </div>
    </div>
  );
};

export default Settings;

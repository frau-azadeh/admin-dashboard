import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Charts from "../components/Charts";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center text-right w-full">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          داشبورد مدیریت
        </h2>

        <p className="text-gray-600 mb-6">
          خوش آمدید! اینجا صفحه مدیریت است. شما می‌توانید اطلاعات کاربران،
          گزارشات و تنظیمات سیستم را مشاهده کنید.
        </p>
        <Charts />

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          خروج از حساب
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

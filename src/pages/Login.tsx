import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warning("⚠️ لطفاً همه فیلدها را پر کنید!");
      return;
    }

    // Simulated login request
    const fakeToken = "123456789abcdef";
    dispatch(login({ user: email, token: fakeToken }));
    toast.success(" ورود موفقیت‌آمیز بود!");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          ورود به پنل مدیریت
        </h2>
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onSubmit={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;

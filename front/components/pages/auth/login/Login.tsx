"use client";
import back from "@/assets/images/authBack.svg";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
const Login = () => {
  const nav = useRouter();
  return (
    <section
      style={{
        backgroundImage: `url(${back.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[100vh] flex items-center justify-center"
    >
      <div className="container">
        <div className="flex flex-col items-center gap-[20px]">
          <button
            onClick={() => nav.push("/")}
            className="text-[30px] absolute top-[20%] right-[20%] text-[white]"
          >
            <MdLogout />
          </button>
          <input
            style={{
              border: "2px solid #FF9A31",
            }}
            className="bg-[white] text-[20px] rounded-[10px] px-[20px] w-[380px] h-[50px]"
            type="text"
            placeholder="Email"
          />
          <input
            style={{
              border: "2px solid #FF9A31",
            }}
            className="bg-[white] text-[20px] rounded-[10px] px-[20px] w-[380px] h-[50px]"
            type="text"
            placeholder="Пороль"
          />
          <button className="bg-[#FF9A31] text-[white] rounded-[10px] text-[20px] px-[20px] py-[10px]">
            Войти
          </button>
          <p className="flex items-center gap-[5px] text-[18px] flex-col">
            Вы впервые в нашем сайте?
            <span
              onClick={() => nav.push("/register")}
              className="text-[#FF9A31] cursor-pointer"
            >
              Регистрация
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;

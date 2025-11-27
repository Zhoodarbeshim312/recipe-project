"use client";
import back from "@/assets/images/authBack.svg";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
const Register = () => {
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
            placeholder="Имя"
          />
          <input
            style={{
              border: "2px solid #FF9A31",
            }}
            className="bg-[white] text-[20px] rounded-[10px] px-[20px] w-[380px] h-[50px]"
            type="text"
            placeholder="Фамилия"
          />
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
          <input
            style={{
              border: "2px solid #FF9A31",
            }}
            className="bg-[white] text-[20px] rounded-[10px] px-[20px] w-[380px] h-[50px]"
            type="text"
            placeholder="Подвердите пороль"
          />
          <button className="bg-[#FF9A31] text-[white] rounded-[10px] text-[20px] px-[20px] py-[10px]">
            Зарегистрироваться
          </button>
          <p className="flex items-center gap-[5px] text-[18px]">
            У вас есть аккаунт?
            <span
              onClick={() => nav.push("/login")}
              className="text-[#FF9A31] cursor-pointer"
            >
              Войти
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;

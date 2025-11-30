"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { useEffect, useState } from "react";

const Header = () => {
  const nav = useRouter();
  const [user, setUser] = useState<{ token?: string; avatar?: string }>({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser({});
    nav.push("/");
  };

  return (
    <header className="py-[20px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <Image
            onClick={() => nav.push("/")}
            className="cursor-[pointer]"
            src={logo}
            alt="img"
          />
          <nav className="flex gap-[20px]">
            <Link className="text-[#380202] font-semibold" href={"/categories"}>
              Категории
            </Link>
            <Link className="text-[#380202] font-semibold" href={"/popular"}>
              Популярные
            </Link>
            <Link className="text-[#380202] font-semibold" href={"/add"}>
              Добавить рецепт
            </Link>
          </nav>
          <div className="flex items-center gap-[20px] ">
            {user.token ? (
              <>
                <Image
                  style={{ border: "2px solid #380202" }}
                  className="rounded-[50%]"
                  width={50}
                  height={50}
                  src={user.avatar || "/default-avatar.png"}
                  alt="img"
                />
                <button onClick={logout} className="text-[25px] text-[#380202]">
                  <MdLogout />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => nav.push("/login")}
                  className="text-[white] font-semibold bg-[#714424] py-[5px] px-[20px] rounded-[10px]"
                >
                  Вход{" "}
                </button>
                <button
                  onClick={() => nav.push("/register")}
                  className="text-[white] font-semibold bg-[#714424] py-[5px] px-[20px] rounded-[10px]"
                >
                  Регистрация
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

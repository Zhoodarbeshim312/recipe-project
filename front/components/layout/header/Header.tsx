"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Header = () => {
  const nav = useRouter();
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
            <button className="text-[white] font-semibold bg-[#714424] py-[5px] px-[20px] rounded-[10px]">
              Вход
            </button>
            <button className="text-[white] font-semibold bg-[#714424] py-[5px] px-[20px] rounded-[10px]">
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Image from "next/image";
import logo from "@/assets/images/logotype.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-[40px] bg-[#714424]">
      <div className="container">
        <div className="content flex flex-col md:flex-row md:justify-between gap-[30px] md:gap-0">
          <div className="flex flex-col items-start gap-[20px] text-center md:text-left">
            <Image src={logo} alt="img" className="w-[120px] md:w-auto" />
            <p className="text-[16px] text-[white]">
              В любой непонятной ситуации <br /> стоит хорошенько поесть.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[20px] text-center md:text-left mx-auto md:mx-0">
            <Link
              className="text-[white] text-[21px] font-semibold"
              href={"/categories"}
            >
              Категории
            </Link>
            <Link
              className="text-[white] text-[21px] font-semibold"
              href={"/popular"}
            >
              Популярные
            </Link>
            <Link
              className="text-[white] text-[21px] font-semibold"
              href={"/add"}
            >
              Добавить рецепт
            </Link>
          </div>
          <div className="flex flex-col gap-[10px] items-center md:items-start w-full md:w-auto">
            <h1 className="text-[#FF9A31] text-[28px] md:text-[35px] text-center md:text-left">
              Новостная рассылка
            </h1>
            <p className="text-[#FFFFFFA6] text-[16px] text-center md:text-left">
              подпишитесь на нашу рассылку, чтобы <br /> получать больше
              бесплатных советов
            </p>
            <input
              style={{
                border: "2px solid var(--clr-grey-dark)",
              }}
              className="rounded-[10px] text-[18px] px-[20px] h-[45px] w-full md:w-[377px] bg-[white]"
              type="text"
              placeholder="Напиши Cвой Email"
            />
            <button className="rounded-[10px] text-[18px] px-[20px] h-[45px] w-full md:w-[377px] bg-[#FF9A31] text-[white]">
              Подписаться
            </button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[white] mt-[30px]"></div>
        <p className="text-center mt-[20px] text-[16px] text-[#FFFFFF]">
          © 2024 Любимые Рецепты. Все права защищены
        </p>
      </div>
    </footer>
  );
};

export default Footer;

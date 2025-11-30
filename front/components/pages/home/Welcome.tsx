"use client";
import Image from "next/image";
import imgBack from "@/assets/images/welcomeBack.svg";
import img from "@/assets/images/welcomeImg.svg";
import { useRouter } from "next/navigation";

const Welcome = () => {
  const nav = useRouter();
  return (
    <section className="Welcome py-[40px]">
      <div className="container">
        <Image
          width={868.1106567382812}
          height={840}
          className="absolute right-0 top-0 z-[-1]"
          src={imgBack}
          alt="img"
        />

        <div className="content flex justify-between items-center">
          <div className="text flex flex-col gap-[40px]">
            <h1 className="text-[64px] leading-[70px] text-[#380202]">
              Твое Ежедневное <br /> Блюдо- <br />
              <span className="text-[#FF9A31]">Гастрономическое</span>
              <br />
              Путешествие
            </h1>
            <p className="text-[24px]">
              Самая вкусная еда обычно имеет маленький секрет… <br /> в нее
              всегда добавляют щепотку любви.
            </p>
            <div className="flex flex-col items-start">
              <button
                onClick={() => nav.push("/register")}
                className=" bg-[#714424] text-[white] px-[26px] py-[5px] rounded-[10px] text-[25px]"
              >
                Регистрация
              </button>
              <p className="flex gap-1 text-[20px]">
                у тебя есть аккаунт?
                <a
                  className="text-[#FF9A31]"
                  onClick={() => nav.push("/login")}
                >
                  Войти
                </a>
              </p>
            </div>
          </div>
          <div className="img ">
            <Image src={img} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

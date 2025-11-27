import Image from "next/image";
import img from "@/assets/images/shareImg.svg";

const Share = () => {
  return (
    <section className="py-[40px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <Image src={img} alt="img" />
          <div className="flex flex-col items-end text-right gap-[20px]">
            <h1 className="text-[64px] leading-[79px] ">
              Поделись Своим <br />{" "}
              <span className="text-[#FFA64A]">Рецептом</span>
            </h1>
            <p className="text-[24px]">
              Поделись с своими самыми крутыми рецептами и <br /> получи отзыв
            </p>
            <button className="text-[25px] bg-[#714424] rounded-[10px] py-[5px] px-[26px] text-[white]">
              Создать новый рецепт
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Share;

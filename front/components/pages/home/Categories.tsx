import Image from "next/image";
import img from "@/assets/images/categoriImg.svg";

const Categories = () => {
  return (
    <section className="py-[40px]">
      <div className="container">
        <div className="">
          <h1 className="text-[58px] mb-[40px]">Категории</h1>
          <div className="flex flex-wrap gap-[70px]">
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
            <div className="flex flex-col items-center gap-[10px] text-[26px]">
              <Image src={img} alt="img" />
              <p>Рецепты завтраков</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;

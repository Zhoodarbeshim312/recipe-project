import Image from "next/image";
import img from "@/assets/images/popularImg.svg";
import { IoBookmarks } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

const Popular = () => {
  return (
    <section className="py-[40px]">
      <div className="container">
        <div className="">
          <h1 className="text-[58px] mb-[40px]">Популярные</h1>
          <div className="flex flex-wrap">
            <div className="relative">
              <button className="absolute top-5 right-5 bg-[white] p-[10px] text-[25px] rounded-[10px] text-[#B9665B]">
                <IoBookmarks />
              </button>
              <Image src={img} alt="img" />
              <div className="flex gap-[2px] ">
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;

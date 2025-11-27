import Image from "next/image";
import img from "@/assets/images/popularImg.svg";
import { IoBookmarks } from "react-icons/io5";
import { IoIosStar, IoMdHeart } from "react-icons/io";
import userNotImg from "@/assets/images/userNotImg.svg";

const Popular = () => {
  return (
    <section className="py-[40px]">
      <div className="container">
        <div className="">
          <h1 className="text-[58px] mb-[40px]">Популярные</h1>
          <div className="flex flex-wrap gap-[20px]">
            <div
              style={{
                border: "2px solid #F4F4F4",
              }}
              className="relative rounded-[12px] flex flex-col gap-[10px]"
            >
              <button className="absolute top-5 right-5 bg-[white] p-[10px] text-[25px] rounded-[10px] text-[#B9665B]">
                <IoBookmarks />
              </button>
              <Image src={img} alt="img" />
              <div className="m-[10px] flex gap-[2px] ">
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
              </div>
              <p className="text-[18px] mx-[10px]">кейтлин бейсель</p>
              <div className="m-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <Image src={userNotImg} alt="img" />
                  <span>Эмирлан Амангелдиев</span>
                </div>
                <button className="text-[25px] text-[#B9665B]">
                  <IoMdHeart />
                </button>
              </div>
            </div>
            <div
              style={{
                border: "2px solid #F4F4F4",
              }}
              className="relative rounded-[12px] flex flex-col gap-[10px]"
            >
              <button className="absolute top-5 right-5 bg-[white] p-[10px] text-[25px] rounded-[10px] text-[#B9665B]">
                <IoBookmarks />
              </button>
              <Image src={img} alt="img" />
              <div className="m-[10px] flex gap-[2px] ">
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
              </div>
              <p className="text-[18px] mx-[10px]">кейтлин бейсель</p>
              <div className="m-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <Image src={userNotImg} alt="img" />
                  <span>Эмирлан Амангелдиев</span>
                </div>
                <button className="text-[25px] text-[#B9665B]">
                  <IoMdHeart />
                </button>
              </div>
            </div>
            <div
              style={{
                border: "2px solid #F4F4F4",
              }}
              className="relative rounded-[12px] flex flex-col gap-[10px]"
            >
              <button className="absolute top-5 right-5 bg-[white] p-[10px] text-[25px] rounded-[10px] text-[#B9665B]">
                <IoBookmarks />
              </button>
              <Image src={img} alt="img" />
              <div className="m-[10px] flex gap-[2px] ">
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
              </div>
              <p className="text-[18px] mx-[10px]">кейтлин бейсель</p>
              <div className="m-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <Image src={userNotImg} alt="img" />
                  <span>Эмирлан Амангелдиев</span>
                </div>
                <button className="text-[25px] text-[#B9665B]">
                  <IoMdHeart />
                </button>
              </div>
            </div>
            <div
              style={{
                border: "2px solid #F4F4F4",
              }}
              className="relative rounded-[12px] flex flex-col gap-[10px]"
            >
              <button className="absolute top-5 right-5 bg-[white] p-[10px] text-[25px] rounded-[10px] text-[#B9665B]">
                <IoBookmarks />
              </button>
              <Image src={img} alt="img" />
              <div className="m-[10px] flex gap-[2px] ">
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
              </div>
              <p className="text-[18px] mx-[10px]">кейтлин бейсель</p>
              <div className="m-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <Image src={userNotImg} alt="img" />
                  <span>Эмирлан Амангелдиев</span>
                </div>
                <button className="text-[25px] text-[#B9665B]">
                  <IoMdHeart />
                </button>
              </div>
            </div>
            <div
              style={{
                border: "2px solid #F4F4F4",
              }}
              className="relative rounded-[12px] flex flex-col gap-[10px]"
            >
              <button className="absolute top-5 right-5 bg-[white] p-[10px] text-[25px] rounded-[10px] text-[#B9665B]">
                <IoBookmarks />
              </button>
              <Image src={img} alt="img" />
              <div className="m-[10px] flex gap-[2px] ">
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
              </div>
              <p className="text-[18px] mx-[10px]">кейтлин бейсель</p>
              <div className="m-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <Image src={userNotImg} alt="img" />
                  <span>Эмирлан Амангелдиев</span>
                </div>
                <button className="text-[25px] text-[#B9665B]">
                  <IoMdHeart />
                </button>
              </div>
            </div>
            <div
              style={{
                border: "2px solid #F4F4F4",
              }}
              className="relative rounded-[12px] flex flex-col gap-[10px]"
            >
              <button className="absolute top-5 right-5 bg-[white] p-[10px] text-[25px] rounded-[10px] text-[#B9665B]">
                <IoBookmarks />
              </button>
              <Image src={img} alt="img" />
              <div className="m-[10px] flex gap-[2px] ">
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
                <IoIosStar className="text-[25px]" />
              </div>
              <p className="text-[18px] mx-[10px]">кейтлин бейсель</p>
              <div className="m-[10px] flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <Image src={userNotImg} alt="img" />
                  <span>Эмирлан Амангелдиев</span>
                </div>
                <button className="text-[25px] text-[#B9665B]">
                  <IoMdHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
